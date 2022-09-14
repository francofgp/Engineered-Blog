+++
categories = ["Programming"]
date = 2022-09-13T03:00:00Z
description = "Why you should use Data Classes in python"
image = "/uploads/post/dragon-curve-in-python/dragon-curve.jpg"
tags = ["Python"]
title = "Why you should use Data Classes in python 🐍"
type = "post"

+++

Don't you know what a Data Class is? You know how to use it? And what is the difference with a regular class? Here in this post I will try to answer there questions and many more.

![]()

## What is a Data Class?

Dataclasses are like normal classes, but designed to store data, rather than contain a lot of logic.
When you create a class that mostly consists of attributes, you make a data class.
An example of a typical dataclass can be seen below 👇

```python
from dataclasses import dataclass

@dataclass
class ChemicalElement:
    '''Class that represents a chemical element'''
    name: str
    symbol: str
    atomic_number: int 
    atomic_mass: float
```
To use a Data Class, we need to use the `dataclasses` module that was introduces in Python 3.7, this module  make it easier to create data classes.
It takes care of a lot of boilerplate for you.
These classes hold certain properties and functions to deal specifically with the data and its representation.


The Data Classes are implemented by using decorators with classes. Attributes are declared using Type Hints in Python which is essentially, specifying data type for variables in python.
![]()

## What is the difference with a regular class?

The Data class presented above can be written using a normal python class, as follows:

```python
class ChemicalElementNormalClass:
    '''A normal python class that represents a chemical element'''
    def __init__(self, name, symbol, atomic_number, atomic_mass):
        self.name = name
        self.symbol = symbol
        self.atomic_number = atomic_number
        self.atomic_mass = atomic_mass
```
Unlike normal classes, data classes come with functions already implemented.

### Type annotations

Class attributes in data classes have type annotations which help us know the type of data handled by these class attributes, increasing code readability

### Printing Objects

If we print an object using a regular class, we will see something like this 👇

```python
oxygen = ChemicalElementNormalClass("Oxygen", "O", 8, 15.999)
print(oxygen)
# <__main__.ChemicalElementNormalClass object at 0x000002DC26289C30>
```
And if we print our data class:

```python
oxygen = ChemicalElement("Oxygen", "O", 8, 15.999)
print(oxygen)
# ChemicalElement(name='Oxygen', symbol='O', atomic_number=8, atomic_mass=15.999)
```
As we see, data classes comes with a nice `__repr__` implementation.

### Comparing Objects

When we try to compare two regular classes, containing the same attributes, we will most likely get something like this

```python
oxygen = ChemicalElementNormalClass("Oxygen", "O", 8, 15.999)
oxygen_copy = ChemicalElementNormalClass("Oxygen", "O", 8, 15.999)

print(oxygen == oxygen_copy)
# False
```
We get a `False` value as a result, but using data classes, we will get True, without having to implement any comparison method.

```python
oxygen = ChemicalElement("Oxygen", "O", 8, 15.999)
oxygen_copy = ChemicalElement("Oxygen", "O", 8, 15.999)

print(oxygen == oxygen_copy)
# True
```

## What can you do with them?

### Immutability

```python
from dataclasses import dataclass

@dataclass(frozen = True)
class ChemicalElement:
    '''Class that represents a chemical element'''
    name: str
    symbol: str
    atomic_number: int 
    atomic_mass: float

oxygen = ChemicalElement("Oxygen", "O", 8, 15.999)
oxygen.name = "Batman 🦇"
# FrozenInstanceError: cannot assign to field 'name'
```

### Conversion to dictionary or tuple

```python
from dataclasses import dataclass, asdict, astuple

@dataclass
class ChemicalElement:
    '''Class that represents a chemical element'''
    name: str
    symbol: str
    atomic_number: int 
    atomic_mass: float

    def number_of_neutrons(self):
        return self.atomic_mass - self.atomic_number

oxygen = ChemicalElement("Oxygen", "O", 8, 15.999)
print(asdict(oxygen)) # Dictionary
"""
{'name': 'batman', 
'symbol': 'O', 
'atomic_number': 8, 
'atomic_mass': 15.999}
"""
print(astuple(oxygen)) # Tuple
# ('batman', 'O', 8, 15.999)
```

### Create attributes after initialization

```python
from dataclasses import dataclass, field

@dataclass
class ChemicalElement:
    '''Class that represents a chemical element'''
    name: str
    symbol: str
    atomic_number: int 
    atomic_mass: float
    number_of_neutrons: float = field(init=False, repr=True)

    def __post_init__(self):
         self.number_of_neutrons = self.atomic_mass - self.atomic_number

oxygen = ChemicalElement("Oxygen", "O", 8, 15.999)
print(oxygen.number_of_neutrons)
# 7.9990000000000006
```
### Sorting

```python
from dataclasses import dataclass, field

@dataclass(order = True)
class ChemicalElement:
    '''Class that represents a chemical element'''
    sort_index: int = field(init=False)
    name: str
    symbol: str
    atomic_number: int 
    atomic_mass: float
    
    def __post_init__(self):
        self.sort_index = self.atomic_number

oxygen = ChemicalElement("Oxygen", "O", 8, 15.999)
gold = ChemicalElement("Gold", "Au", 79, 200.59)
print(gold > oxygen)
# True
```

### Custom methods

If you know how to add methods to your regular classes, you won't have any trouble trying to add methods to data classes.
However, I would like to avoid this, as the idea of a data class is to store data, rather than contains logic.
```python
from dataclasses import dataclass

@dataclass
class ChemicalElement:
    '''Class that represents a chemical element'''
    name: str
    symbol: str
    atomic_number: int 
    atomic_mass: float
    
    def number_of_neutrons(self):
       return self.atomic_mass - self.atomic_number
    

oxygen = ChemicalElement("Oxygen", "O", 8, 15.999)
print(oxygen.number_of_neutrons())
```

### Inheritance

```python
from dataclasses import dataclass

@dataclass
class Person:
    name: str

@dataclass
class SuperHero(Person):
    hero_name: str
    super_power: str

batman = SuperHero("Bruce Wayne", "Batman", "Money")
print(batman)
# SuperHero(name='Bruce Wayne', hero_name='Batman', super_power='Money')
```


## When should you use them and when should you not?

If you are making classes that directly represent data, well, a Data Class sounds like what you're looking for, but before you try to create a data class, maybe you should think about wheter a dictionary, a set, a tuple is more useful for representing what you are trying to represent.

Now if you are trying to represent something more abstract, complex, and methods withing a class, maybe a data class wouldn't make sense.

The decision depends on what you are trying to represent.

## Conclusion

Now you know, I hope, what data classes are, and how to use them, you also know when is a good idea to implement a data class.
You can leverage what you learned here on your own projects, and avoid writing boilerplate code and starting to write a much more elegant and cleaner code.

This is just the peak of the iceberg, you can learn more about data classes in the [Official Python Documentation](https://docs.python.org/3/library/dataclasses.html).

