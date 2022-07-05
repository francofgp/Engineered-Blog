+++
categories = ["Programming"]
date = 2022-06-29T03:00:00Z
description = "Learn how to create a dragon curve in python"
image = "/uploads/dragon-curve.jpg"
tags = ["Python"]
title = "Dragon Curve in Python"
type = "post"

+++
Today you are going to learn how to create this amazing figures in Python. More precisely, you will learn what the Dragon Curve is, how to generate one, and how to create one in Python.

![](https://upload.wikimedia.org/wikipedia/commons/6/6f/Full_tiling_dragon.svg)

## What is the Dragon Curve ?

Foremost, the Dragon Curve is a fractal, in mathematics, **fractal** is a term used to describe geometric shapes containing detailed structure at arbitrarily small scales. Many fractals appear similar at various scales, as illustrated in successive magnifications of the Mandelbrot set (See the image below 👇).

![](https://upload.wikimedia.org/wikipedia/commons/a/a4/Mandelbrot_sequence_new.gif)

The dragon curve is probably most commonly thought of as the shape that is generated from repeatedly folding a strip of paper in half, although there are other curves that are called dragon curves that are generated differently.

The dragon curve is probably most commonly thought of as the shape that is generated from repeatedly folding a strip of paper in half, although there are other curves that are called dragon curves that are generated differently.

![](https://upload.wikimedia.org/wikipedia/commons/7/72/Dragon_Curve_adding_corners_trails_rectangular_numbered_R.gif)

This article was inspired after the following Numberphile video:

{{< youtube wCyC-K_PnRY >}}

# How to construct the curve?

### Grab a sheet of paper! 📃

The dragon curve can be constructed by folding a strip of paper, which is how it was originally discovered. Take a strip of paper and fold it in half to the right. Fold it in half again to the right. If the strip was opened out now, unbending each fold to become a 90-degree turn, the turn sequence would be RRL, i.e. the second iteration of the dragon curve. Fold the strip in half again to the right, and the turn sequence of the unfolded strip is now RRLRRLL – the third iteration of the dragon curve. Continuing folding the strip in half to the right to create further iterations of the curve.

![Dragon curve paper strip.png](https://upload.wikimedia.org/wikipedia/commons/f/f1/Dragon_curve_paper_strip.png)
![Dragon](https://upload.wikimedia.org/wikipedia/commons/9/97/Dragon_curve_iterations_%282%29.svg)

### The algorithm

The folding patterns of this sequence of paper strips, as sequences of right (R) and left (L) folds, are:

* 1st iteration: R
* 2nd iteration: **R** R **L**
* 3rd iteration: **R** R **L** R **R** L **L**
* 4th iteration: **R** R **L** R **R** L **L** R **R** R **L** L **R** L **L**.

_Each iteration can be found by copying the previous iteration, then an R, then a second copy of the previous iteration in reverse order with the L and R letters swapped._

## Implement it in Python 🐍

### Let's break down the algorithm step by step.

This is the algorithm:

_Each iteration can be found by copying the previous iteration, then an R, then a second copy of the previous iteration in reverse order with the L and R letters swapped._

Steps:

1. _Each iteration can be found by copying the previous iteration:_

```python
sequence = sequence
```
2. _then an R_
```python
sequence = sequence+R
```
3. _then a second copy of the previous iteration in reverse order with the L and R letters swapped._
```python
sequence = sequence+R+swapLetters(sequence[::-1])
```
If we put it all together in a python function, we get the following:

```python
R = "R"
L = "L"

def iterate(sequence: str) -> str:
    sequence = sequence+R+swapLetters(sequence[::-1])
    return sequence
    
def swapLetters(sequence: str) -> str:
    newSequence = ""
    for letter in sequence:
        if letter == R:
            newSequence = newSequence + L
        else:
            newSequence = newSequence + R
    return newSequence
```

We can create another function to generate a particular iteration, like so:

```python
def dragon(n_iterations: int) -> str:
    """Takes in a number n, an return the dragon curve sequence i.e.:
    When n=2, returns "RRL"

    Args:
        n_iterations (int): number of iterations of the dragon curve

    Returns:
        str: The dragon curve Sequence
    """
    initial_sequence = R
    for i in range(0, n_iterations):
        initial_sequence = iterate(initial_sequence)
    return initial_sequence
```

We can put everything in a python file named [dragon.py](https://github.com/francofgp/dragon-curve/blob/main/dragon.py "Github").

### Let's implement the graphics

To implement the graphics, we are going to use a python module called [turtle](https://docs.python.org/3/library/turtle.html "Turtle docs"), which provides turtle graphics primitives

1. Import the libraries

```python
from dragon import dragon, R
from turtle import Turtle, Screen
```

1. Turtle setup: Here we define the drawing speed of the turtle, the color of the dragon curve, and we hide the turtle.

```python
# Turtle Setup
turtle = Turtle("turtle")
turtle.hideturtle()
turtle.speed("fastest")
turtle.color("#ff69aa")
```

1. Screen setup: We add a title, a background color, followed by the screen size (resize the canvas the turtles are drawing on),  and the setup, that sets the size and position of the main window.

```python
# Screen Setup
screen = Screen()
screen.title("Dragon Curve")
screen.bgcolor("black")
screen.screensize(1920*3, 1080*3)
screen.setup(width=1.0, height=1.0, startx=None, starty=None)
```

1. Draw the dragon curve: Here we iterate through the sequence that we get from dragon(17), the 17th sequence, and we go right or left depending on if the letter is R or L.

```python
# Draw
LENGTH = 10
turtle.forward(LENGTH)
for element in dragon(17):
    if element == R:
        turtle.right(90)
        turtle.forward(LENGTH)
    else:
        turtle.left(90)
        turtle.forward(LENGTH)
```

1. To exit the program when finished:

```python
turtle.color("white")
turtle.write("click to exit", font=("Calibri", 16, "bold"))
screen.exitonclick()
```

### Final Result

If we put everything in two files we get:

**_dragon.py_**

```python
R = "R"
L = "L"

def iterate(sequence: str) -> str:
    sequence = sequence+R+swapLetters(sequence[::-1])
    return sequence


def swapLetters(sequence: str) -> str:
    newSequence = ""
    for letter in sequence:
        if letter == R:
            newSequence = newSequence + L
        else:
            newSequence = newSequence + R
    return newSequence


def dragon(n_iterations: int) -> str:
    initial_sequence = R
    for i in range(0, n_iterations):
        initial_sequence = iterate(initial_sequence)
    return initial_sequence
```

**_app.py_**

```python
from dragon import dragon, R
from turtle import Turtle, Screen

# Turtle setup
turtle = Turtle("turtle")
turtle.hideturtle()
turtle.speed("fastest")
turtle.color("#ff69aa")

# Screen setup
screen = Screen()
screen.title("Dragon Curve")
screen.bgcolor("black")
screen.screensize(1920*3, 1080*3)
screen.setup(width=1.0, height=1.0, startx=None, starty=None)


# Draw
LENGTH = 10
turtle.forward(LENGTH)
for element in dragon(17):
    if element == R:
        turtle.right(90)
        turtle.forward(LENGTH)
    else:
        turtle.left(90)
        turtle.forward(LENGTH)

# When finished, click to exit
turtle.color("white")
turtle.write("click to exit", font=("Calibri", 16, "bold"))
screen.exitonclick()
```

And that will look like:

![](/uploads/dragon_curve_asset.png)

![](https://i.imgur.com/zzy3vGS.gif)

### Make it more round

If you like, you can change the style, instead of using straight lines you can use circles, just by changing the following code:

```python
# Draw
LENGTH = 10
for element in dragon(17):
    if element == R:
        turtle.circle(-4, 90, 36)
    else:
        turtle.circle(4, 90, 36)
```

![](https://upload.wikimedia.org/wikipedia/commons/a/a0/Dragon_Curve_unfolding_zoom_numbered.gif)

And the end result will look like the image below

![](/uploads/dragon_curve_asset_round.png)

You can check the [**source code in my GitHub**](https://github.com/francofgp/dragon-curve "Source Code")

### Conclusion

Something that at first glance seemed frightening turned out to be simple, by breaking up step by step we have learned how to create this amazing fractal in Python easily.

This doesn't have to end up here, go ahead and experiment, change the color, the speed, or alter the direction of the dragon curve, and share what you've discovered to me or to the community.