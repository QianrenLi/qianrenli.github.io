---
title: "Tag the blog"
author_profile: false
layout: archive
tags:
    - jekyll
    - github.io
date: 2024-04-30
permalink: /blogs/tag-system
excerpt: Experience in creating tagging system for jekyll blog.
---
# Tagging System #

The creation of tag system motivated by the need to categorize and organize the posts. The main features include:

1. **Tag**: Add tags to each post and display on the web front which directly link to the tag index page.
2. **Tag Index Page**: Create a tag index page to store all tags and providing shows each post meta data according to tags.

## Tag ##

Display tag is simple, which takes loop and display each tag in the post front matter (even in text format):

{% raw %} 

```html
    {% for tag in page.tags %}
        {{tag}}
    {% endfor %} 
```

{% endraw %}

To make the tag jumpable in the post, each tag is specifically defined as a link to the tag index page. (button you can say):

```html
    <a href="/tag_index/#{{ tag | slugify }}" class="btn btn--info">jekyll</a>
```

where `tag_index` stands for the gallery of all tags, and `slugify` is a filter to convert the tag into a URL-friendly format.

### Improve Tag ###

The hyperlink in the tag shows annoying underline, which can be removed by adding `text-decoration: none;` to the css file or directly in the href style.

## Tags Index Page ##

Specific tags extracting follows the instruction in [Tagging Github Pages](https://peterroelants.github.io/posts/adding-tags-to-github-pages/), where the exact tag page mainly contains the following parts:

+ **Tag Extraction**: Extract tags with ordering and count. (Ref: [`all_tags.html`](https://github.com/peterroelants/peterroelants.github.io/blob/main/_includes/all_tags.html))
+ **Tag Index**: Display tags in a list with the number of posts. (Ref: [`tag_index.html`](https://github.com/peterroelants/peterroelants.github.io/blob/main/tag_index.html) and [`tag_page.js`](https://github.com/peterroelants/peterroelants.github.io/blob/main/js/tag_pages.js))

One thing to be noted is that a nice tag index page with organization requiring displaying each category each time. (For example, a tag system where tags are organized according to the first letter of the tag)

However, the jumping in the same page with `#` as a reference do not automatically change the url in the browser, thus the page will not be reloaded since the handler defined in the `tag_pages.js` only listen the the url changing.

A workaround is to add a refresh event listener to the specific button (`tag-btn`) each time the button is clicked.

```javascript
    // Get all the buttons
    var buttons = document.querySelectorAll('.tag-btn');

    // Add a click event listener to each button
    buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        // Prevent the default action
        event.preventDefault();

        // Change the hash part of the URL
        location.hash = event.target.getAttribute('href');
    });
    });
```

The above code snippet is to add a click event listener to each button with class `tag-btn`, and change the hash part of the URL to the `href` attribute of the button, which can be registered after in the tag index page.