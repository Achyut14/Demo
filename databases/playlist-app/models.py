"""Models for Playlist app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)


class Playlist(db.Model):
    """Playlist."""
    __tablename__='playlist'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    songs = db.relationship('Song', secondary="listsong", backref='playlists')

class Song(db.Model):
    """Song."""
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    artist = db.Column(db.String, nullable=False)


class PlaylistSong(db.Model):
    """Mapping of a playlist to a song."""
    __tablename__ = 'listsong'
    
    id = db.Column(db.Integer, primary_key=True)
    playlist_id = db.Column(db.Integer, db.ForeignKey('playlist.id'))
    song_id = db.Column(db.Integer, db.ForeignKey('songs.id'))

   