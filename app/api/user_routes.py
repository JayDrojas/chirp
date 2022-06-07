from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Tweet

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/profile/<int:id>')
def profile(id):
    user = User.query.get(id)
    tweetsList = Tweet.query.filter(Tweet.user_id == id).all()
    tweets = []
    for tweet in tweetsList:
        result = tweet.to_dict()
        # print(result['user'])
        del result['user']
        tweets.append(result)
    resultUser = user.to_dict()
    resultUser['tweets'] = tweets
    return resultUser

@user_routes.errorhandler(500)
def internal_server_error(e):
    return {"errors": ["Internal Server Error"]}, 500
