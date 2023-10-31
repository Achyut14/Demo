"""Forms for playlist app."""

from wtforms import SelectField, StringField, SubmitField, TextAreaField, validators
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired



class PlaylistForm(FlaskForm):

    """Form for adding playlists."""
    name = StringField('Name', validators=[DataRequired()])
    description = TextAreaField('Description')
    submit = SubmitField('Create Playlist')


class SongForm(FlaskForm):
    """Form for adding songs."""

    title = StringField('Title', [validators.InputRequired()])
    artist = StringField('Artist', [validators.InputRequired()])
    submit = SubmitField('Add Song')



# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
