---
title: "Perspective Function in CVXPY"
author_profile: false
layout: archive
tags:
    - convex optimization
    - python
# date: 2024-02-21
permalink: /blogs/2025/6/13/Perspective Function in CVXPY
excerpt: Reducing memory cost of perspective function in CVXPY with Cone formulation
---

# Perspective Function in CVXPY

> The key idea is to avoid indexing

The perspective function, defined as $ x \cdot f(x/s) $ for $ s > 0 $, is a convexity-preserving operation that proves useful in wireless communication problems. For example, bandwidth capacity optimization often leverages this property to maintain convexity.

However, optimizing the perspective function in CVXPY can be memory-intensive. While CVXPY provides a built-in [`perspective`](https://www.cvxpy.org/_modules/cvxpy/atoms/perspective.html) atom, it currently only supports scalar inputs. When applied to vectorized problems, CVXPY's indexing mechanism would leads to high memory consumption during compilation and solving.

A more efficient approach reformulates the problem using vector-friendly operations. Consider this concave minimization problem:

$$
\min_{s>0, x \in \mathbb{R}} x \cdot f(x/s)
$$

Its equivalent epigraph form is:

$$
\begin{aligned}
    \min_{t, x, s} &\quad t \\
    \text{s.t.} &\quad x \cdot f(x/s) \le t
\end{aligned}
$$

For functions $ f $ compatible with exponential cone representations (e.g., logarithmic functions in capacity optimization), implement the constraint using CVXPY's `ExpCone` class. This avoids scalarization and reduces memory overhead.

> Why Use Exponential Cones?
> Think about indexing in CVXPY, how it preserves the convexity. The answer is quite simple, matrix operation (multiplication particularly). 
Then considering you use perspective function for an N vector, then N matrixs will be generated, which would significantly increase the memory cost.
