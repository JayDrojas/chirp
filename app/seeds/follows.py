from app.models import db, Follow, follow

def seed_follows():
  one = Follow(user_id = 2, follower_id= 1)
  two = Follow(user_id = 1, follower_id= 3)
  three = Follow(user_id = 3, follower_id= 2)

  db.session.add(one)
  db.session.add(two)
  db.session.add(three)

  db.session.commit()

def undo_follows():
  db.session.execute('TRUNCATE follows RESTART IDENTITY CASCADE')
  db.session.commit()
