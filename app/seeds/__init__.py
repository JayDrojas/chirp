from flask.cli import AppGroup
from .users import seed_users, undo_users
from .tweets import seed_tweets, undo_tweets
from .replies import seed_replies, undo_replies
from .follows import seed_follows, undo_follows

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_tweets()
    seed_replies()
    seed_follows()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_tweets()
    undo_replies()
    undo_follows()
