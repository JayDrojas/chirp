from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length

class Create_reply_form(FlaskForm):
  content = StringField('content', validators=[DataRequired(message="Must have Content."), Length(max=255, message="The character limit for content is 255.")])
  user_id = IntegerField('user_id', validators=[DataRequired()])
  tweet_id = IntegerField('tweet_id', validators=[DataRequired()])
