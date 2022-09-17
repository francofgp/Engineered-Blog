+++
categories = ["Programming"]
date = 2022-09-14T03:00:00Z
description = "Don't you know what a Data Class is? You know how to use it? And what is the difference with a regular class? Here in this post I will try to answer these questions and many more."
image = "/uploads/post/why-you-should-use-dataclasses-in-python/cover.jpg"
tags = ["Python"]
title = "Why You Should Use Data Classes in Python"
type = "post"
+++

Don't you know what a Data Class is? You know how to use it? And what is the difference with a regular class? Here in this post I will try to answer these questions and many more.

## What is a Data Class?

Dataclasses are like normal classes, but **designed to store data**, rather than contain a lot of logic.
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
To use a Data Class, we need to use the `dataclasses` module that was introduced in Python 3.7, this module  makes it easier to create data classes.
It takes care of a lot of boilerplate for you.
These classes hold certain properties and functions to deal specifically with the data and its representation.

The Data Classes are implemented by using decorators with classes. Attributes are declared using Type Hints in Python which is essentially, specifying **data type** for variables in python.

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
Unlike normal classes, data classes come with **functions already implemented**.

### Type annotations

Class attributes in data classes have type annotations which help us know the type of data handled by these class attributes, increasing code readability.


```python
from dataclasses import dataclass

@dataclass
class Person:
    '''Class that represents a chemical element'''
    name: str
    age: int
    height: float
    is_single: bool
```

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

## What other functions do data classes have?

Data classes have different characteristics as we can see below:

### Default Parameters

Sometimes it is useful to initialise a class with default parameters, you can do this easily in data classes.
You can see an example 👇
```python
from dataclasses import dataclass

@dataclass
class Weapon:
    magizine_size: int
    damage: float
    bullets_in_mag: int = 0
    is_loaded : bool = False
    is_safety_on : bool = True

rifle = Weapon(magizine_size = 5, damage = 100)
print(rifle.is_safety_on)
# True
```

### Immutability

You can make the value of its fields immutable, that is, the value of its fields may never change. Sometimes this is a useful feature. To make a data class immutable, set `frozen=True` when you create it.
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

Data classes are just another way of representing data, you may find it useful to convert them to another form, such as a dictionary or tuple.
To do this you just need to use the `asdict` the convert a data class to a dictionary or `astuple` to convert it to a tuple. 

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

Sometimes you may want to calculate a field based on another field, this is precisely what the `__post_init__` method allows us to do. First you should import the `field` function from `dataclasses`.

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

Sometimes you want to compare two classes based on a single attribute, for example, the age of a person, the price of an object, or the atomic number of a chemical element in the example below.

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
As you can see, to apply a sort function, we have to define the sort_index field and then modify it in the `__post_init__` function with the sort value we want to use.

It is also necessary to activate the `order = true` parameter in the `@dataclass` decorator. 

### Custom methods

If you know how to add methods to your regular classes, you won't have any trouble trying to add methods to data classes.
However, I like to avoid this, as the idea of a data class is to store data, rather than to contain logic.

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
# 7.999
```

### Inheritance 👴🧑👶

As with normal classes, you can also use inheritance with data classes, so that data classes inherit attributes or methods from the parent.
Here is an example of a super hero class that inherits from the person class.

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

If you are making **classes that directly represent data**, well, a Data Class sounds like what you're looking for, but before you try to create a data class, maybe you should think about wheter a dictionary, a set, a tuple is more useful for representing what you are trying to represent.

Now if you are trying to represent something more abstract, complex, and methods withing a class, maybe a data class wouldn't make sense.

The decision depends on what you are trying to represent.

![](/uploads/post/why-you-should-use-dataclasses-in-python/computer.jpg)

## Conclusion

Now you know, I hope, what data classes are, and how to use them, you also know when to use a data class.
You can leverage what you learned here on your own projects, and avoid writing boilerplate code and starting to write a much more elegant and cleaner code.

This is just the peak of the iceberg, you can learn more about data classes in the [Official Python Documentation](https://docs.python.org/3/library/dataclasses.html).

