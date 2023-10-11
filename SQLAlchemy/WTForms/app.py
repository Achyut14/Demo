from collections import UserString
from sqlalchemy.sql import text
from flask import Flask, redirect, render_template, request, flash, url_for, jsonify
from models import db, connect_db, Pet
from flask_debugtoolbar import DebugToolbarExtension
from forms import AddPets, EditPets


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet'
app.app_context().push()
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "adadjjo"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)


@app.route('/')
def list_pets():
    pets = Pet.query.all()
    return render_template('pet_list.html', pets= pets)

@app.route('/add', methods=["GET", "POST"])
def add_pet():
    form = AddPets()
    if form.validate_on_submit():
        data = {k: v for k, v in form.data.items() if k != "csrf_token"}
        new_pet = Pet(name = form.name.data,
        species= form.species.data,
        photo_url = form.photo_url.data,
        age = form.age.data,
        notes = form.notes.data )

        db.session.add(new_pet)
        db.session.commit()
        flash(f"{new_pet.name} added.")
        return redirect(url_for('list_pets'))    
    else: 
        return render_template("add_pet.html", form=form)
    
@app.route("/<int:pet_id>", methods=["GET", "POST"])
def edit_pet(pet_id):
    pet = Pet.query.get_or_404(pet_id)
    form =EditPets(obj=pet)

    if form.validate_on_submit():
        pet.notes= form.notes.data
        pet.available = form.available.data
        pet.photo_url = form.photo_url.data
        db.session.commit()
        flash(f"{pet.name} updates")

        return redirect(url_for('list_pets'))
    
    else:
        return render_template("edit_form.html", form=form, pet=pet)
    
@app.route("/api/pets/<int:pet_id>", methods=["GET"])
def api_get_pet(pet_id):

    pet = Pet.query.get_or_404(pet_id)
    info = {"name": pet.name, "age": pet.age}

    return jsonify(info)





