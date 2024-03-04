---
title: "Latex Writing"
author_profile: false
layout: archive
tags:
    - latex
# date: 2024-02-21
permalink: /blogs/2024/3/4/Latex-Writing
---


# Equation
+ Multiline equation with single number -- use `split` environment
    ```tex
    \begin{align}
        \label{eq:bellman}
        \begin{split}
            V_{t}\left(S_{t}\right)= &\max _{a_{t} \in \mathcal{A}_{t}}\bigg(C_{t}\left(S_{t}, a_{t}\right) \\ &+ \gamma \sum_{s^{\prime} \in \mathcal{S}} \mathbb{P}\left(S_{t+1}=s^{\prime} \mid S_{t}, a_{t}\right) V_{t+1}\left(s^{\prime}\right)\bigg)
        \end{split}
    \end{align}
    ```
    <!-- ![alt text](/images/2024-3-4-Latex%20Writing-bellman.png) -->
    <p align="center">
        <img src="/images/2024-3-4-Latex%20Writing-bellman.png" alt="subscript example" style="max-width: 60%; height: auto;" />
    </p>
+ Centering the subscript or superscript -- use `\limits`
    + First declare the operator, take `argmax` as an example
        ```tex
        \DeclareMathOperator*{\argmax}{argmax}
        ```
    + Then apply the limits
        ```tex
        \begin{equation}
            \pi_{t} \in \argmax\limits_{\pi \in \Pi} \mathbb{E}\left[R_{t}(\pi)\right]
        \end{equation}
        ```
        <p align="center">
            <img src="/images/2024-3-4-Latex%20Writing-policy.png" alt="subscript example" style="max-width: 30%; height: auto;" />
        </p>