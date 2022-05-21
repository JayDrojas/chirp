from app.models import db, Reply

def seed_replies():
  one = Reply(
    user_id=2, tweet_id=1, content='The fight is honestly pretty boring.'
  )
  two = Reply(
    user_id=3, tweet_id=2, content='Cheese is the best.'
  )
  three = Reply(
    user_id=1, tweet_id=3, content='Madrid is still the best team in the world.'
  )
  four = Reply(
    user_id=1, tweet_id=3, content='And they will be crowned champions this year!'
  )
  five = Reply(
    user_id=1, tweet_id=5, content='That is a great show!'
  )


  db.session.add(one)
  db.session.add(two)
  db.session.add(three)
  db.session.add(four)
  db.session.add(five)

  db.session.commit()

def undo_replies():
    db.session.execute('TRUNCATE replies RESTART IDENTITY CASCADE')
    db.session.commit()
