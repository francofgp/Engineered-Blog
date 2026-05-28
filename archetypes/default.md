+++
categories = [""]
date = {{ .Date }}
description = ""
draft = true
image = "/uploads/post/{{ .File.ContentBaseName }}/cover.jpg"
tags = [""]
title = "{{ replace .File.ContentBaseName "-" " " | title }}"
type = "post"
+++

<!--
================================================================================
Quick markdown cheatsheet — delete this block before publishing.

## Headings (use H2+, H1 is reserved for the title)
### Subheading

**bold**  *italic*  ~~strike~~  `inline code`

[Link text](https://example.com)
![Alt text](/uploads/post/{{ .File.ContentBaseName }}/image.jpg)

- bullet
1. numbered

> blockquote

```python
print("code block with syntax highlight")
```

```mermaid
graph LR
    A --> B
```

| col1 | col2 |
|------|------|
| a    | b    |

Full reference: see content/blog/_markdown-reference.md
================================================================================
-->

Write your post here.
