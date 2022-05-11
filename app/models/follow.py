from sqlalchemy import ForeignKey
from .db import db
from sqlalchemy.sql import func

class Follow(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  follower_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
  updated_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())

  def to_dict(self):
    return {
      'user_id': self.user_id,
      'follower_id': self.follower_id,
      'created_at': self.created_at,
      'updated_at': self.updated_at
    }
