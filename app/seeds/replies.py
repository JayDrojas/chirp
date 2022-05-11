from app.models import db, Reply

def seed_replies():
  one = Reply(
    user_id=2, tweet_id=1, content='The fight is honestly pretty boring.'
  )
  two = Reply(
    user_id=3, tweet_id=2, content='Cheese is the best.'
  )
  three = Reply(
    user_id=1, tweet_id=3, content='Barcelona is still the best.'
  )

  db.session.add(one)
  db.session.add(two)
  db.session.add(three)

  db.session.commit()

def undo_replies():
    db.session.execute('TRUNCATE replies RESTART IDENTITY CASCADE')
    db.session.commit()
