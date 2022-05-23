<h1 align="center">🐦 Chirp 🐦</h1>

<h5 align="center">  By:  <a href="https://github.com/Jared-Kunhart">Damian Rojas</a> - <a href="https://app-chirp-jd.herokuapp.com/login"><i>Live site</i></h5>

### Table of Contents
- [Main purpose](#main)
- [Tweets](#tweets)
- [Replies](#replies)
- [Conclusion](#conclusion)

## Main

#### Key Features
- Tweets
- Replies

#### Technology used

![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/git.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/heroku.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/javascript.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/nodejs.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/postgres.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/react.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/python.svg)

**Frontend**
- React
- Redux
- JavaScript
- HTML
- CSS

**Backend**
- Flask
- Python
- PostgreSQL
- SQLAlchemy
  
## Chirp setup
1. Clone this repository 
2. Install dependencies 
  
  ```bash
  pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
  ```
3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

  ```bash
  pipenv shell
  ```

  ```bash
  flask db upgrade
  ```

  ```bash
  flask seed all
  ```

  ```bash
  flask run
  ```
6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.
  
## Tweets
![image](https://user-images.githubusercontent.com/86801740/169848226-01b47bd7-6108-4d5c-9cc5-6ebfb503907b.png)

## Replies
![image](https://user-images.githubusercontent.com/86801740/169848345-fdf18e3b-51b9-4f56-89dd-2ca48e6b55d4.png)

