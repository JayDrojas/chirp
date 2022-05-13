from flask import Blueprint, jsonify, request
from app.forms.update_reply_form import Update_reply_form
from app.models import Reply, db
from app.forms import Create_reply_form
from flask_login import current_user

reply_routes = Blueprint('replies', __name__)

@reply_routes.route('/', methods=['POST'])
def create_reply():
  form = Create_reply_form()
  form['csrf_token'].data = request.cookies['csrf_token']

  new_reply = Reply(
    user_id = form.user_id.data,
    tweet_id = form.tweet_id.data,
    content = form.content.data,
  )

  db.session.add(new_reply)
  db.session.commit()

  return new_reply.to_dict()

@reply_routes.route('/<int:id>', methods=['PUT'])
def update_reply(id):
  form = Update_reply_form()
  form['csrf_token'].data = request.cookies['csrf_token']

  update_reply = Reply.query.get(id)

  if update_reply:
    update_reply.content = form.content.data

  db.session.commit()

  return update_reply.to_dict()

@reply_routes.route('/<int:id>', methods=['DELETE'])
def delete_reply(id):
  reply = Reply.query.get(id)
  if reply and current_user.id == reply.user_id:
    db.session.delete(reply)
    db.session.commit()
  return 'Success'
