+++
categories = ["Programming"]
date = 2022-06-17T01:03:47Z
description = "What I thing of Go, as a Python developer"
image = "/uploads/golang-post.jpg"
tags = ["Python", "Go"]
title = "My First Time Learning Go as a Python Developer"
type = "post"

+++
Have you ever wanted to learn Go, but you are still not sure if that is your thing? Well, today I am going to share my experience learning this programming language, and I will give my opinions on some aspects of the language, and the things I like and dislike about it.

## Why Go?

The idea of learning Go was in my head since I graduated from college, but I never gave it a chance, because I wanted to learn Python because of the Machine Learning stuff. So time passed, and I am starting to see Go on every social media such as YouTube, Twitter, and Reddit, so I guess I jumped on the **hype train**, and **the company I work for is evaluating Go as an option**. But I want to build a simple application with the language, not just if statements and loops, so that brings us to the next point.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png)

## What I built with Go

Go can be used to build so many things, but to learn the language I built a simple To-Do web app, using the built-in template language that Go offers.

Building this app allowed me to explore many aspects of the language, while at the same time building something useful.

While I was building the app, I was constantly comparing the differences between Go and Python, and one of the first things that brought me joy was 👇

## The Syntax

As a person who also works with Java and C#, I can say that the **minimalism** of the syntax reminds me of Python, everything looks so clean and with less boilerplate than in other languages like Java.

```go
    package main
    import "fmt"
    func main() {
        fmt.Println("Hey There! 👋")
    }
```

## Strongly and statically typed

Python is dynamically typed (language checks the types and looks for type errors during runtime), whereas Go is strongly and statically typed (language checks the types and looks for type errors during compile time).

In Go there are primitive types like **int, byte, and string**. There are also structs (you can think of these as classes, but technically they're not the same).

Like any strongly typed language, the type system allows the compiler helps catch entire classes of bugs.

In Go you can declare a variable in many ways.

```go
    package main
    import ("fmt")
    
    func main() {
      var car string = "🚗" //type is string
      var truck = "🚚" //type is inferred
      x := 2 //type is inferred
    
      fmt.Println(car)
      fmt.Println(truck)
      fmt.Println(x)
    }
```

As you can see, looks clean, especially if you use the short form, which is almost identical to Python.

## Minimalistic

Go is minimalistic. Before I started building my application, I read the documentation, and I was astonished when I realized how minimal Go is. You can literally read the documentation in a week and have a good understanding of the language (you won't be a master of the language, obviously), and you will be able to talk with your colleagues with confidence.

All of this makes it **easy to learn** and adopt the language very quickly.

That has been one of the main design goals of Go.

* Minimal keywords.
* Simple module structures.
* Minimalistic visibility control (only public and package-private).
* Easy to define types (structs).

Python is easy to learn as well, but I think **Go is a little harder**, especially when it comes to concepts like pointers, which are not easy at first glance, as you will see shortly.

![](/uploads/computer-black.jpg)

## What I don't like about Go

### Pointers

The idea of pointers was completely new to me, and something that I had to wrap my head around

The concept itself is not difficult, but to use it well, takes time, and to be honest the syntax looks strange and ugly to me.

```go
    // Example without Pointers
    func changeToWorld(x string) {
      x = "world"
    }
    func main() {
      x := "hello"
      changeToWorld(x)
      fmt.Println(x) // x is still "hello"
    }
    
    // Example with Pointers
    func changeToWorld(xPtr *string) {
      *xPtr = "world"
    }
    func main() {
      x := "hello"
      changeToWorld(&x)
      fmt.Println(x) // x is "world"
    }
```

### Not many Libraries/Frameworks

Coming from Python where there is a library for practically anything is a big deal.

Also, to me (mostly from [Reddit](https://www.reddit.com/r/golang "Golang Subreddit")), the Go community supports the use of the standard library before anything else, this has its advantages, first, you don't rely on a third-party library, and you know what you wrote, and you don't have to wait for a new update of a particular library. On the other hand, if you are familiar with a framework like Django, I am sorry to tell you that there is no equivalent until today when I am writing this post.

To build my application, I used the standard library, and I was surprised by how easy it is to start an HTTP server.

For example.

```go
    package main
    
    import (
        "fmt"
        "log"
        "net/http"
    )
    
    func homePage(w http.ResponseWriter, r *http.Request){
        fmt.Fprintf(w, "My HomePage!")
        fmt.Println("Hit -> homePage")
    }
    
    func handleRequests() {
        http.HandleFunc("/", homePage)
        log.Fatal(http.ListenAndServe(":8000", nil))
    }
    
    func main() {
        handleRequests()
    }
```

Maybe this change in the near future, since the Go community is growing every day.

### Job Market

Where I live, in Argentina, **there isn't a high demand for Go developers**, while languages such as Java, C#, Python, and JavaScript are the most demanded programming languages by a large gap in the market. This depends on where you live if you work remotely or not, and this may vary for you by a number of different factors.

Clearly, this is not something bad about the language itself, but it is a reason to have in mind when you plan to study something to help your career, and I think that this applies to everything new skill that you learn in life, not just in software.

![](/uploads/thinking-guy.jpeg)

## Things that I need to explore more

### Not Truly Object-Oriented Programming

I would say that for some purists, Go is not truly an object-oriented programming language, because it lacks things such as inheritance, doesn't have classes, method overloading, and more.

The way I program in Go is different from the way I program in Python, it is not a complete change of paradigm, but I think that one should not program in Go, in the same way, that one programs in Java or Python.

### Generics

Generics have been a topic of great discussion in the community in recent years until generics appeared in GO 1.18, and I haven't used them, so I don't want to give my opinion.

### Goroutines

One of the most powerful features of Go is how easily you can write concurrent programs using the language’s native constructs, called Goroutines, but I haven't yet encountered a situation when I need them.

## Conclusion

I think Go is an excellent programming language, and I will continue playing around with it, I would like to highlight the **standard library** and I understand now why so many people like it, the **clean syntax**, and the **ease of getting started** in the language.

If you are thinking about learning a new strongly and statically typed programming language, I would recommend Go as one of my main options.