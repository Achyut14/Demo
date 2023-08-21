
from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import stories



app =Flask(__name__)
app.config['SECRET_KEY'] = "secret"



# @app.route("/")
# def ask_story():
#     """Generate and show from to ask words"""
#     prompts=story.prompts
#     render_template("question.html", prompts=prompts)
@app.route("/")
def ask_story():
    """Show list-of-stories form."""

    return render_template("select-story.html",
                           stories=stories.values())

# @app.route("/story")
# def show_story():
#     """Show story result"""
#     text = story.generate(request.args)
#     return render_template("story.html", text=text)
@app.route("/story")
def show_story():
    """Show story result."""

    story_id = request.args["story_id"]
    story = stories[story_id]

    text = story.generate(request.args)

    return render_template("story.html",
                           title=story.title,
                           text=text)


@app.route("/questions")
def ask_questions():
    """Generate and show form to ask words."""

    story_id = request.args["story_id"]
    story = stories[story_id]

    prompts = story.prompts

    return render_template("questions.html",
                           story_id=story_id,
                           title=story.title,
                           prompts=prompts)
