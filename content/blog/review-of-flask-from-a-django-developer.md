---
title: Review of Flask, From a Django Developer
date: 2022-07-09T02:07:47.000+06:00
image: /uploads/post/review-of-flask-from-a-django-developer/flask-logo-version-2.png
description: Are you familiar with Django, but you want to give Flask a try? or maybe you have no idea what a microframework is? Well today I am going to share my experience with Flask
categories:
- Engineering
tags:
- Python
- Django
- Flask
type: post
draft: false

---
Are you familiar with Django, but you want to give Flask a try? or maybe you have no idea what a microframework is?

Well today I am going to share my experience with Flask, comparing different aspects of both frameworks, so you can decide which one suits your needs.

## Why I chose Flask?

After working with Django for a few years, I felt the need to explore another popular Python web framework, which is Flask. I always knew that Flask was a microframework (more on that below), but I never built anything with it. So I took the opportunity at work to experiment with a new framework for a certain web application, and my team and I decided to try Flask. So in this post I want to comment my opinions about Flask, after working with Django.

![building-blocks](/uploads/post/review-of-flask-from-a-django-developer/building-blocks.jpg)
## What is Flask?
Flask is a micro web framework written in Python. It is classified as a **microframework** because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.

![flask-logo](/uploads/post/review-of-flask-from-a-django-developer/flask-logo.png)

By contrast, Django is a web framework with a **batteries-included** philosophy. This means that the common functionality for building web applications should come with the framework instead of as separate libraries, like an ORM, template engine, user authentication and so on.

![django-logo](/uploads/post/review-of-flask-from-a-django-developer/django-logo.png)

## Application Structure

In your a typical django project with one application, you would have a folder structure as follows:

```
django-project
├── config
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.js
└─── app
    ├── __init.py
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── tests.py
    ├── urls.py
    └── views.py

```

Whereas in a Flask application, you could start with just one file.

```
flask-project
└── app.py
```

```python
# app.py
from flask import Flask
app = Flask(__name__)


@app.route('/')
def index():
    return '<h1>Hello World!</h1>'


@app.route('/user/<name>')
def user(name):
    return '<h1>Hello, {}!</h1>'.format(name)

```

I remember when I started learning Django, this could be overwhelming, you have to learn why are those files there and adapt yourself to the default structure. In Flask you start with just a file, and you add more files as your project grows, this makes it easy to get started. When you add a file in your Flask app, you now why is there.



I believe there is a **trade-off** here, with Django you learn its folder structure, and if your project grows, you can add more "apps" to your project, and every Django project looks similar, so if you pick up a random Django project from another person, chance are that you will understand it, at least, how is it organized.


While in contrast to Flask, **it's easy to get started**, but then you have to figure out how to organize your project as it grows, and this can be overwhelming if you don't have much experience with Flask

## Templates

Flask doesn't come with a template engine like Django does, but when you `pip install flask`, this comes with a dependency with **Jinja2**, which is a template engine, but don't worry you don't have to learn a new syntax, since it is similar to Django's, as you can see in the code below, which is a typical template that you'd create in Django


```html
{% extends "base.html" %}

{% block title %}Home{% endblock %}

{% block page_content %}
<div class="page-header">
    <h1>Hello, {{ name }}!</h1>
    <a  href="{{ url_for('index') }}">Home<a>
</div>
{% endblock %}
```
There are differences of course like  `<a  href="{{ url_for('index') }}">Home<a>`, where in Django that would be `<a href="{% url 'home' %}">Portada</a>`, honestly, I didn't find this tedious to learn, since, from my point of view, *I think 90% of my knowledge of the Django template is transferable to Jinja2.*

## Forms

Being a microframework, Flask relies on **WTForms** for its forms, that we need to install it, using:

 `pip install flask-wtf`.

When using Flask-WTF, each web form is represented in the server by a class that inherits from the class FlaskForm. The class defines the list of fields in the form, each represented by an object. Each field object can have one or more validators attached.

An example is presented below.

```python
from flask import Flask, render_template
# WTForms
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

app = Flask(__name__)
# against cross-site request forgery (CSRF) attacks
app.config['SECRET_KEY'] = 'my secret'

class NameForm(FlaskForm):
    name = StringField('Enter your name', validators=[DataRequired()])
    submit = SubmitField('Submit')

@app.route('/', methods=['GET', 'POST'])
def index():
    name = None
    form = NameForm()
    if form.validate_on_submit():
        name = form.name.data
        form.name.data = ''
    return render_template('index.html', form=form, name=name)
```

and the HTML:

```html
{% extends "base.html" %}
{% block title %}Hello there!{% endblock %}

{% block page_content %}
<div class="">
    <h1>
        Hello, {% if name %}{{ name }}
        {% else %}there!{% endif %}!</h1>
</div>
{{ wtf.quick_form(form) }}
{% endblock %}
```
Personally, I find WTForms more straightforward than Django's forms. But they have the disadvantage that you have to know how to organize them within the folder structure of your project. So if it's for a small project, I prefer WTForms.

## Databases

Unlike Django which comes with an ORM, flask does not have one built in, but one of the most popular options is **SQLAlchemy**.

Also SQLAlchemy is a popular choice since, it has an **integration with Flask** in a package called Flask-SQLAlchemy.

Once you installed Flask-SQLAlchemy, you can start using after a few configurations.

```python
import os
from flask_sqlalchemy import SQLAlchemy
basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
# SQLite as Database
app.config['SQLALCHEMY_DATABASE_URI'] =\
'sqlite:///' + os.path.join(basedir, 'db.sqlite') 

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
# db object provides access to all the functionality of Flask-SQLAlchemy
```
Similar to Django you can create Models, using SQLAlchemy, you can see an example below:

```python
class User(db.Model):
    __tablename__ = 'users' # table name
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True, index=True)
    # One to Many relationship
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))
    def __repr__(self):
        return f'User {self.username}'

class Role(db.Model):
    users = db.relationship('User', backref='role')
```

SQLAlchemy comes with a lot of column types, most of them all similar to Django's, so getting use to them won't be taking you too much time.

If you want to persist one of your models in the database, you can use the following:

```python
admin = Role(name='admin')
batman = User(name='batman',role='admin')
db.session.add(batman)
db.session.add(admin)
db.session.commit()

# Querying
User.query.filter_by(role='admin').all()

# Delete
db.session.delete(batman)
db.session.commit()
```
From a Django perspective, I found SQLAlchemy more difficult to work with, and more verbose, especially when making difficult queries.

But I notice that SQLAlchemy gives you more **flexibility** as a developer, giving you the possibility to detach your models from the implementation (using a repository pattern for instance), creating a more loosely coupled application and more testable, something that in Django it is more difficult to achieve.

## Authentication

Authentication can be a topic on its own. If you happened to use the authentication system that comes with Django, you will notice that it requires little to no setup, whereas in Flask, you probably need to install several libraries, such as:

- Flask-Login: Provides user session management for Flask.
- Werkzeug: Allows hashing and verification
- itsdangerous: Various helpers to pass data to untrusted environments and to get it back safe and sound. Data is cryptographically signed to ensure that a token has not been tampered with.

Obviously, this depends on the type of authentication you want to use. But even in its most basic form, I personally believe that implementations for Flask require a lot of configuration up front, and research by the developer to one solution that suits their project needs.

## What I like about Flask

### Control of your project - Don't fight your framework!

Flask is different from other frameworks because it allows developers to take the driver's seat and have full creative control of their applications. You may have heard the phrase **fighting the framework** before. 

![man-discussing](/uploads/post/review-of-flask-from-a-django-developer/fighting.jpeg)

This happens mostly with a solution that is not the official one. You may want to use a different database, ORM  or perhaps a different method of authentication.

Deviating from the path set by the framework developers will give you a lot of headaches, **Flask is not like that.**


### Ecosystem

- You want to use a relational database? Flask supports all of them. 
- Or a NoSQL database? Flask supports that too.
- Want to use your own database engine? 
- Don't need a database at all? 
 
That's fine too. **With Flask you can choose the components of your application**, or even **write your own** if that's what you want. 

The key to this freedom is that Flask was designed from the ground up to be extensible.

Extensions are extra packages that add functionality to a Flask application. For example, an extension might add support for sending email or connecting to a database. Some extensions add entire new frameworks to help build certain types of applications, like a REST API.

Flask extensions are usually named “Flask-Foo” or “Foo-Flask”, and their installation and configuration is almost similar in most cases. 

Flask comes with a **robust core** that includes the basic functionality that all web applications need and expects the rest to be provided by some of the many third-party extensions in the ecosystem, and, of course, by you.

Visit the official [Flask Extension Registry](https://flask.palletsprojects.com/en/2.1.x/extensions/).


### No Magic

I remember that when I started to learn Django some things seemed magical to me, but when I started to use the framework more, this magic was disappearing, and I started to really understand how things work.

On the other hand, with Flask this feeling of "magic" never existed, from minute zero I understood what I was doing while I was creating my application.

![man-discussing](/uploads/post/review-of-flask-from-a-django-developer/magician.jpg)

## What I don't like about Flask

### Set up your application for the first time

There is a trade-off here, Django being a batteries-included framework, comes with a structure that you have to adhere to, this has its advantages when it comes to set up a project with user authentication, security and other things like an ORM, without relying on third-party libraries, but a disadvantage is that developers don't have a full creative control of their applications.

Whereas in Flask, if you want to build something tons of features you will spend a lot of time configuring your application, or you will not if you don't want anything but show a single page. Again, this will depend on the requirements of your application, and  **adding new features/packages to Flask it is not too much o f a hustle.**

![man-discussing](/uploads/post/review-of-flask-from-a-django-developer/trade-off.jpg)


## Conclusion

After using both framework I conclude that in Flask you start from scratch, and you add more functionality/packages when you need them, and putting together the structure of your project your way, whereas with Django, you start a project with a well-defined structure that you must follow, and comes with tons of features that you may or may not end up using them, and you will probably also have to add external libraries for a particular feature.

Regardless of the framework you choose, both have a **great ecosystem** and a **huge community** that supports them.

And in my view, the final decision of which one should you use, depends entirely on the project requirements and the team's preference.
