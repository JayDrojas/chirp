from flask import Blueprint, jsonify, request
from app.models import Reply, db
from app.forms import Create_reply_form

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

# @reply_routes.route('/<int:id>', methods=['PUT'])
# def update_reply(id):
#   pass
