from crypt import methods
from flask import Blueprint, jsonify, request
from app.models import Tweet, User, Reply, db
from app.forms import Create_tweet_form, Update_tweet_form

tweet_routes = Blueprint('tweets', __name__)

@tweet_routes.route('/')
def get_tweets():
  tweets = Tweet.query.join(User).all()
  return {'tweets': [tweet.to_dict() for tweet in tweets]}

@tweet_routes.route('/', methods=['POST'])
def create_tweet():
  form = Create_tweet_form()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    tweet = Tweet(
      content = form.content.data,
      user_id = form.user_id.data
    )
    print(tweet)
    db.session.add(tweet)
    db.session.commit()
    print(tweet)
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
  if update_tweet:
    update_tweet.content = form.content.data
    db.session.commit()
    return update_tweet.to_dict()

@tweet_routes.route('/<int:id>', methods=['DELETE'])
def delete_tweet(id):
  tweet = Tweet.query.get(id)
  db.session.delete(tweet)
  db.session.commit()
  return 'Success'

@tweet_routes.route('/<int:id>/replies/')
def get_replies(id):
  replies = Reply.query.filter(Reply.tweet_id == id).all()
  reply_list = [reply.to_dict() for reply in replies]
  return {'replies': reply_list}
