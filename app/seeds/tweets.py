from app.models import db, Tweet

def seed_tweets():
  one = Tweet(
    user_id=1, content='Anyone watching the fight right now?'
  )
  two = Tweet(
    user_id=2, content='I hate eating cheese'
  )
  three = Tweet(
    user_id=3, content='The Real Madrid vs Manchester City was one of the best games i\'ve seen'
  )


  db.session.add(one)
  db.session.add(two)
  db.session.add(three)

  db.session.commit()


def undo_tweets():
  db.session.execute('TRUNCATE tweets RESTART IDENTITY CASCADE')
  db.session.commit()
