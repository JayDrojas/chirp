from datetime import date
from email.mime import image
from app.models import db, Tweet

def seed_tweets():
  one = Tweet(
    user_id=1, content='Anyone watching the fight right now?'
  )
  two = Tweet(
    user_id=2, content='I love eating cheese.', image='https://mychirpbucket.s3.amazonaws.com/755ff9eb3e86401fbdb2c8046ecaff75.jpg'
  )
  three = Tweet(
    user_id=3, content='Real madrid is the worst team in the world! Visca el Barça!!!!!!!'
  )
  four = Tweet(
    user_id=4, content='I am so happy to announce that I have started working at Ride as a driver!', image='https://mychirpbucket.s3.amazonaws.com/3cec73495d0a490a9b45d3ece4a46eff.jpg'
  )
  five = Tweet(
    user_id=5, content='If you are bored after finals and have nothing to watch, I recommend silicon valley on HBO!'
  )
  six = Tweet(
    user_id=6, content='This is my new profile pic!', image='https://mychirpbucket.s3.amazonaws.com/a352fd7c428341d2b8ef2e7d67b1e7ea.jpg'
  )




  db.session.add(one)
  db.session.add(two)
  db.session.add(three)
  db.session.add(four)
  db.session.add(five)
  db.session.add(six)

  db.session.commit()


def undo_tweets():
  db.session.execute('TRUNCATE tweets RESTART IDENTITY CASCADE')
  db.session.commit()
