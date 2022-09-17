---
title: 'Book Review: Architecture Patterns with Python'
date: 2022-06-01T01:07:00.000-03:00
image: "/uploads/featured-post-architecture-patterns-with-python.jpg"
description: 'Review: Architecture Patterns with Python'
categories:
- Engineering
tags:
- Python
- Django
type: post

---
Have you wanted to dive deep into architecture design patterns with Python, and you don't know where to start? Well, maybe this book will give you some guidance to achieve such a goal

In this post I will be given my review of this book, what I learned, and if I recommend it.

### Disclaimer:

Title: Architecture Patterns with Python

Authors: Harry J.W. Percival, Bob Gregory

Publisher: O'Reilly

Publication Date: 3/5/2020

The publisher did not provide me with a copy. I promise to be honest about how I feel about this book, both the good and the less so.

![](/uploads/architecture-patterns-with-python-485h.png)

## About the book

The book focuses on answering questions like the following:

* How to structure an application?
* How to test this structure, with ease.
* How to manage complexity?
* How to avoid the "Big Ball of Mud"?
* And more.

The authors discuss these topics by introducing different topics such as Domain Driven Design, Event-Driven Design, Unit tests, End-to-End tests, and many others.

The book is divided into two parts. The first part is about **Domain-Driven Design** when you start building your application by modeling the domain while discussing basic design patterns. You will be writing **tests as you build the application**, and gaining insides, about the whys we are building the application in such a manner (and why not always do that).

In the second part of the book, you will learn about  **Event-Driven Design**, the advantages and disadvantages of this design, along with its key concepts like event handling and message bus.

## The Good

### Old concepts, but new in Python

None of the techniques and patterns discussed in this book are new, but they are mostly new to the Python world but are quite known in other languages like  Java or C#. Techniques like Repository Pattern, Unit Of Work, Dependency Injection, CQRS, Coupling and Abstractions, Microservices, Command Handlers, Test Driven Development just to name a few.

I found those concepts quite useful, especially if you don't have much exposure to how to implement them in python.

### Modeling your application

Although this is not a book about Domain-Driven Design, Test Driven Development, or Event-Driven Design (said by the authors themselves), it is a good introduction to these subjects, about the different ways to architecture your application. The authors teach these concepts by building an application with a mixture of different design patterns and discussing their pros and cons along the way, so you will have a good grasp of these concepts.

![](/uploads/pexels-1.jpg)

### Flask and Django

The application developed in this book is made with **Flask API**. And if you are like me, a person with only exposure to Django, don't worry, you will have no problems with the examples or understanding the concepts, and even more, **the authors constantly compared the differences between Django and Flask**, and give you hits about how to implement certain things in Django.

![](/uploads/django-logo-negative.png)

### Testing

As you develop the application you will acquire different testing techniques, the pros and cons of each, and when to apply them.

You will also gain exposure to Test Driven Development, which is very useful if this is the first time that you learn this practice. You will learn by using "**Pytest**", one of the most used testing libraries in Python

## The Bad

The book gives you a lot of insights, and some **examples that you can't copy and paste**, I understand perfectly why I can't do this, the examples are domain-specific, so if you are working with your own application you will have to figure it out by yourself.

I really can't say much about the bad things about the book.

## And The Ugly

The **exercises** for the readers are **tough**, and what I mean by that is, for instance, an exercise would be "Now try to implement a repository pattern without an ORM", which is the kind of toughness I am talking about.

**Sometimes you don't have all the solutions**, but I think I am being very picky here since there are no definitive answers because most of the solutions depend on your domain and there are always a lot of different ways to solve a problem, **but they do provide tests**, to, well, test your solutions.

![](/uploads/exercise-notebook.jpg)

## Conclusion

If you are looking for a book that teaches you how to architecture your application in Python, this is definitely the book you need. It helped me **refresh Domain-Driven Design** and **introduced me to Event-Driven Design.**

The knowledge that I gained from it is priceless, you will have a very good knowledge of how to implement or discuss the topics discussed in this article with your co-workers with confidence.

I highlight the **testing part**, which was my personal favorite.

Do I recommend this book? Yes.

Will I read it again? Probably yes, in the future.