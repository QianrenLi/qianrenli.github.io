---
title: "Scale Plot in Python"
author_profile: false
layout: archive
tags:
    - python
    - plot
date: 2024-04-30
permalink: /blogs/Scale-Plot-in-Python
excerpt: This post introduces how to scale the plot in Python using `matplotlib`.
---

# Scale Plot in Python #

Motivated by the need to better visualize the data, the scale plot is a useful tool to show the data in a more readable way. The main features include:

+ **Scale**: Scale the plot to a specific range, which can be useful when the data is too large or too small.

## Scale ##

The scaling process follows two steps:

+ **Define Custom Scaling Function**: Define a custom scaling function to scale the data, which should be *monotonically increasing function* in general.
+ **Define Custom Formatter**: Define a custom formatter to display the original tick values, which actually a inverse function to custom scaling function.

```python
    # Define custom scaling function
    def custom_scale(y):
        # Scale the values differently based on their range
        if y >= 1:
            return np.log(y) + 1  # Scale up values greater than or equal to 20
        else:
            return y   # Scale down values less than 20

    def y_fmt(y, pos):
        # Apply inverse of custom scaling to retrieve original values
        if y >= 1:
            return str(int(np.exp(y - 1)))
        else:
            return str(y)
    # Define a custom formatter to display the original tick values
    from matplotlib.ticker import FuncFormatter
    ax.yaxis.set_major_formatter(FuncFormatter(y_fmt))
```