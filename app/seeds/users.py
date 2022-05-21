from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', first_name='demo', last_name='demolast',  password='password')
    jared = User(
        username='JaredK', email='Jared@aa.io',
        first_name='Jared', last_name='Kunhart',password='password')
    roger = User(
        username='RogerC', email='Roger@aa.io',
        first_name='Roger', last_name='Camps', password='password')
    chris = User(
        username='Chris', email='Chris@aa.io',
        first_name='Chris', last_name='Mizell', password='password')
    jason = User(
        username='Jason', email='Jason@aa.io',
        first_name='Jason', last_name='Vien', password='password')
    brad = User(
        username='Brad', email='Brad@aa.io',
        first_name='Brad', last_name='Simpson', password='password')


    db.session.add(demo)
    db.session.add(jared)
    db.session.add(roger)
    db.session.add(chris)
    db.session.add(jason)
    db.session.add(brad)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
