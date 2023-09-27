from flask import Flask, request, render_template
# from flask_debugtoolbar import DebugToolbarExtension
from stories import story

set FLASK_APP=stories.py

app =Flask(__name__)
app.config['SECRET_KEY'] = "secret"
debug = DebugToolbarExtension(app)


@app.route("/")
def ask_question():
    """Generate and show from to ask words"""
    prompts=story.prompts
    render_template("question.html", prompts=prompts)

@app.route("story")
def show_story():
    """Show story result"""
    text = story.generate(request.args)
    return render_template("story.html", text=text)
