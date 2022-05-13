from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class Update_reply_form(FlaskForm):
  id = IntegerField('id', validators=[DataRequired()])
  content = StringField('content', validators=[DataRequired()])
  user_id = IntegerField('user_id', validators=[DataRequired()])
  tweet_id = IntegerField('tweet_id', validators=[DataRequired()])
