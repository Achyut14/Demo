
from flask import Flask, request, render_template, flash, jsonify
from random import randint, choice
from flask_debugtoolbar import DebugToolbarExtension


app = Flask(__name__)

app.config['SECRET_KEY'] = "chickenzarecool"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS']=False
debug = DebugToolbarExtension(app)

MOVIES={'PK', 'OMG2', 'OMG', 'Flash'}

@app.route('/')
def home_page():  
    """Shows home Page"""  
    return render_template('home.html')

@app.route('/old-home-page')
def redirect_to_home():
    """Redirects to new home page"""
    return redirects('home.html')

@app.route('/movies')
def show_all_movies():
    """Show list of all movies in fake DB"""
    return render_template('movies.html', movies=MOVIES)

@app.route('/movies/json')
def get_movies_json():
    json_obj = jsonify(list(MOVIES))
    return json_obj

@app.route('/movies/new', methods=["POST"])
def add_movies():
    title = request.form['title']
    #Add to pretend DB 
    if title in MOVIES:
        flash('Movie already Exists', 'error')
    else:
        MOVIES.add(title)
        flash("Created Your Movie", 'success')
    import pdb
    pdb.set_trace()
    return redirect('/movies')

@app.route('/form')
def show_form():
    """Shows greeter V1 form"""
    return render_template("form.html")

@app.route('/form-2')
def show_form_2():
    return render_template("form_2.html")

COMPLIMENTS = ["Cool", "Clever", "Excllent", "Awesom", "Pythonice"]

@app.route('/greet')
def get_greeting():
    username = request.args["username"]
    nice_thing = choice(COMPLIMENTS)
    return render_template("/greet.html", username=username, compliment=nice_thing)

@app.route('/greet-2')
def get_greeting_2():
    username = request.args["username"]
    wants = request.args.get("wants_compliments")
    nice_things = sample(COMPLIMENTS, 3)
    return render_template("greet_2.html", username=username, wants_compliments=wants,
    compliments=nice_things)

@app.route('/lucky')
def lucky_number():
    num = randint(1,10)
    return render_template('lucky.html', lucky_num=num, msg="You are so Lucky")

@app.route('/spell/<word>')
def spell_word(word):
    caps_word =word.upper()
    return render_template('spell_word.html', word=caps_word)

@app.route('/hello')
def say_hello():
    """Shows hello page"""
    return render_template("hello.html")
    


@app.route("/goodbye")
def say_bye():
    return "GoodBye"

@app.route('/search')
def search():
    term=request.args["term"]
    sort=request.args["sort"]
    return f"<h1>Search Results For: {term}</h1> <p>Sorting By: {sort}</p>"

# @app.route("/post", methods=["POST"])
# def post_demo():
#     return "You made a post request"


#######Post Request
@app.route('/add-comment')
def add_comment_form():
    return """
    <h1>Add Comments</h1>
        <form method="POST">
        <input type='text' placeholder='comment' name='comment'/>
        <input type='text' placeholder='username' name='username'/>
        <button>Submit</button>
        </form>
   """
@app.route('/add-comment', methods=["POST"])
def save_comment():
    comment= request.form["comment"]
    username=request.form["username"]
    print(request.form)
    return f"""
    <h1> Saved your comment</h1>
    <ul>
        <li>Username:{username}</li>
        <li>Comment:{comment}</li>
    </ul>
    """

#####Variables In URL
@app.route("/r/<subreddit>")
def show_subreddit(subreddit):
    return f"<h1>Browsing The {subreddit} Subreddit</h1>"
@app.route("/r/<subreddit>/comments/<int:post_id>")
def show_comments(subreddit, post_id):
    return f"<h1>Viewing comments for post with id:{post_id} from the {subreddit} Subreddit</h1"

#Another example
POSTS = {
    1: "I like water", 
    2: "I love soccer",
    3: "Rain Rain go away",
    4: "What's up yo"
}
@app.route('/posts/<int:id>')
def find_post(id):
    post = POSTS.get(id, "Post not found")
    return f"<p>{post}</p>"


