from crypt import methods
from email.mime import image
from flask import Blueprint, jsonify, request
from app.models import Tweet, User, Reply, db, tweet
from app.forms import Create_tweet_form, Update_tweet_form
from flask_login import current_user
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename
)

tweet_routes = Blueprint('tweets', __name__)

@tweet_routes.route('/')
def get_tweets():
  tweets = Tweet.query.join(User).all()
  return {'tweets': [tweet.to_dict() for tweet in tweets]}

@tweet_routes.route('/', methods=['POST'])
def create_tweet():
  form = Create_tweet_form()
  form['csrf_token'].data = request.cookies['csrf_token']

  if "image" not in request.files:
    tweet = Tweet(
    content = form.content.data,
    user_id = current_user.id
  )

    db.session.add(tweet)
    db.session.commit()
    return tweet.to_dict()

  image = request.files["image"]

  if not allowed_file(image.filename):
    return {"errors": "file type not permitted"}, 400

  image.filename = get_unique_filename(image.filename)

  upload = upload_file_to_s3(image)

  if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

  url = upload["url"]

  # if form.validate_on_submit():
  tweet = Tweet(
    content = form.content.data,
    user_id = current_user.id,
    image = url
  )

  db.session.add(tweet)
  db.session.commit()

  return tweet.to_dict()

@tweet_routes.route('/<int:id>')
def get_tweet(id):
  tweet = Tweet.query.get(id)
  return tweet.to_dict()

@tweet_routes.route('/<int:id>', methods=['PUT'])
def update_tweet(id):
  form = Update_tweet_form()
  form['csrf_token'].data = request.cookies['csrf_token']

  update_tweet = Tweet.query.get(id)

  if not update_tweet.user_id == current_user.id:
    return {'error': ['Can only update chirps that are owned by the user.']}

  if "image" not in request.files:
    if update_tweet:
      update_tweet.content = form.content.data
      db.session.commit()
      return update_tweet.to_dict()

  image = request.files["image"]

  if not allowed_file(image.filename):
    return {"errors": "file type not permited"}, 400

  image.filename = get_unique_filename(image.filename)

  upload = upload_file_to_s3(image)

  if "url" not in upload:
    return upload, 400

  url = upload["url"]

  # if update_tweet:
  update_tweet.content = form.content.data
  update_tweet.image = url

  db.session.commit()

  return update_tweet.to_dict()

@tweet_routes.route('/<int:id>', methods=['DELETE'])
def delete_tweet(id):
  tweet = Tweet.query.get(id)

  if tweet and tweet.user_id == current_user.id:
    db.session.delete(tweet)
    db.session.commit()

    return 'Success'
  else: return 'Error deleting Chirp.'

@tweet_routes.route('/<int:id>/replies/')
def get_replies(id):
  replies = Reply.query.filter(Reply.tweet_id == id).all()
  reply_list = [reply.to_dict() for reply in replies]
  return {'replies': reply_list}

@tweet_routes.errorhandler(500)
def internal_server_error(e):
    return {"errors": ["Internal Server Error"]}, 500
