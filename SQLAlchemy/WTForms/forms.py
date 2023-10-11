from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SelectField, BooleanField
from wtforms.validators import InputRequired, Optional, URL, Length, NumberRange



class AddPets(FlaskForm):
    """Adding Pets"""
    
    name = StringField("Pet Name", validators=[InputRequired()],)
    species = SelectField("Species", choices=[("cat", "Cat"), ("dog", "Dog"),
                                              ("porcupine", "Porcupine")],)
    photo_url = StringField(
        "Photo URL",
        validators=[Optional(), URL()], )
    
    age = IntegerField("Age", validators=[Optional(), NumberRange(min=0, max=30)],)
    notes = TextAreaField("Notes", validators=[Optional(), Length(min=10)],)


class EditPets(FlaskForm):
    """Form for editing an existing pet."""

    photo_url = StringField(
        "Photo URL",
        validators=[Optional(), URL()],
    )

    notes = TextAreaField(
        "Comments",
        validators=[Optional(), Length(min=10)],
    )

    available = BooleanField("Available?")