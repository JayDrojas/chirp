from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class Update_tweet_form(FlaskForm):
  content = StringField('content', validators=[DataRequired()])
  user_id = IntegerField('user_id', validators=[DataRequired()])
