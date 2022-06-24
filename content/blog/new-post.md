---
title: Desde forestry
date: 2021-10-29T10:07:47.000+06:00
image: images/featured-post/post-1.jpg
description: this is meta description
categories:
- Android And Gaming
tags:
- Photos
- Game
- React
- Python
- New
type: featured

---
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

<hr>

##### Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

<hr>

##### Link

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link](https://www.mozilla.org)

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions](http://slashdot.org)

Or leave it empty and use the [link text itself](http://www.reddit.com).

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or [http://www.example.com](http://www.example.com) and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

<hr>

##### Paragraph

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.

<hr>

##### List

1. List item
2. List item
3. List item
4. List item
5. List item

##### Unordered List

* List item
* List item
* List item
* List item
* List item

<hr>

##### Code and Syntax Highlighting

Inline `code` has `back-ticks around` it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
from datetime import datetime
import os

arrivo = open("arrivo.txt", "a")
atencion = open("atencion.txt", "a")
cobro = open("cobro.txt", "a")
cantidad = open("cantidad.txt", "a")

now = datetime.now()
now.strftime("%H:%M:%S")
estado = 1

while estado >= 1:

    print("1 = ingreso a fila")
    print("2 = ingreso al local")
    print("3 = salida del local")
    print("4 = 2 o menos bolétas")
    print("5 = 3 o más bolétas")
    print("6 = cancelar")

    lectura_de_teclado = input("Choose a number")

    print(lectura_de_teclado)
    if lectura_de_teclado == "1" or lectura_de_teclado == 1:
        now = datetime.now()
        arrivo.write(now.strftime("%H:%M:%S") + os.linesep)
    if lectura_de_teclado == "2" or lectura_de_teclado == 2:
        now = datetime.now()
        atencion.write(now.strftime("%H:%M:%S") + os.linesep)
    if lectura_de_teclado == "3" or lectura_de_teclado == 3:
        now = datetime.now()
        cobro.write(now.strftime("%H:%M:%S") + os.linesep)
    if lectura_de_teclado == "6" or lectura_de_teclado == 6:
        estado = -5
        print(estado)
    if lectura_de_teclado == "4" or lectura_de_teclado == 4:
        now = datetime.now()
        cantidad.write(" 2 o menos boletas\n")
    if lectura_de_teclado == "5" or lectura_de_teclado == 5:
        now = datetime.now()
        cantidad.write(" 3 o más boletas\n")

arrivo.close()
atencion.close()
cobro.close()
cantidad.close()
```

    No language indicated, so no syntax highlighting.
    But let's throw in a <b>tag</b>.

<hr>

##### Blockquote

> This is a blockquote example.

<hr>

##### Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

<dl>
<dt>Definition list</dt>
<dd>Is something people use sometimes.</dd>

<dt>Markdown in HTML</dt>
<dd>Does _not_ work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

<hr>

##### Tables

Colons can be used to align columns.

| Tables | Are | Cool |
| --- | :---: | ---: |
| col 3 is | right-aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less | Pretty |
| --- | --- | --- |
| Still | renders | nicely |
| 1 | 2 | 3 |

<hr>

##### Image

![image](../../images/post/post-1.jpg)

<hr>

##### Youtube video

{{< youtube C0DPdy98e4c >}}

tiene popita de que naad aaa