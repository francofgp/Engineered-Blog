+++
categories = ["Programming"]
date = 2022-06-29T03:00:00Z
description = "Why you should use dataclasses in python"
image = "/uploads/post/dragon-curve-in-python/dragon-curve.jpg"
tags = ["Python"]
title = "Why you should use dataclasses in python"
type = "post"

+++

Today you are going to learn how to create this amazing figures in Python. More precisely, you will learn what the Dragon Curve is, how to generate one, and how to create one in Python.

![]()

## What are Dataclasses?

Dataclasses are like normal classes, but designed to store data, rather than contain a lot of logic.
When you create a class that mostly consists of attributes, you make a data class.

```python
from dataclasses import dataclass

@dataclass
class ChemicalElement:
    '''Class that represents a chemical element'''
    name: str
    symbol: str
    weight: float
    atomic_number: int 

Hydrogen = ChemicalElement("Hidrogen", "H", 1.008, 1)
Hydrogen
```

What the dataclasses module does is to make it easier to create data classes. It takes care of a lot of boilerplate for you.
Dataclass module is introduced in Python 3.7 as a utility tool to make structured classes specially for storing data. 
These classes hold certain properties and functions to deal specifically with the data and its representation.
![](https://upload.wikimedia.org/wikipedia/commons/a/a4/Mandelbrot_sequence_new.gif)

## What is the difference with a regular class?

The DataClasses are implemented by using decorators with classes. Attributes are declared using Type Hints in Python which is essentially, specifying data type for variables in python.

![Dragon curve paper strip.png](https://upload.wikimedia.org/wikipedia/commons/f/f1/Dragon_curve_paper_strip.png)

### What can you do with them?


## When should I use them?

## When should I NOT use them?

## Conclusion

Something that at first glance seemed frightening turned out to be simple, by breaking up step by step we have learned how to create this amazing fractal in Python easily.

This doesn't have to end up here, go ahead and experiment, change the color, the speed, or alter the direction of the dragon curve, and share what you've discovered to me or to the community.