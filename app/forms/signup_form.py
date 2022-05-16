from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def email_validator(form, field):
    pass

def firstname_exists(form, field):
    # Checking if first name is already in use
    first_name = field.data
    print(first_name)
    if len(first_name) == 0 or len(first_name) > 40:
        raise ValidationError('First Name must be more than 0 characters and less than 40.')

class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists, Email()])
    password = StringField('password', validators=[DataRequired()])
    first_name = StringField('First Name', validators=[DataRequired(), firstname_exists])
    last_name = StringField('Last Name', validators=[DataRequired()])
