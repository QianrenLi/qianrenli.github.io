

# Equation
+ Multiline equation with single number -- use `split` environment
    ```latex
    \begin{align}
        \label{eq:bellman}
        \begin{split}
            V_{t}\left(S_{t}\right)= &\max _{a_{t} \in \mathcal{A}_{t}}\bigg(C_{t}\left(S_{t}, a_{t}\right) \\ &+ \gamma \sum_{s^{\prime} \in \mathcal{S}} \mathbb{P}\left(S_{t+1}=s^{\prime} \mid S_{t}, a_{t}\right) V_{t+1}\left(s^{\prime}\right)\bigg)
        \end{split}
    \end{align}
    ```
    ![alt text](./images/2024-3-4-Latex%20Writing-bellman.png)

+ Centering the subscript or superscript -- use `\limits`
    + First declare the operator, take `argmax` as an example
        ```latex
        \DeclareMathOperator*{\argmax}{argmax}
        ```
    + Then apply the limits
        ```latex
        \begin{equation}
            \pi_{t} \in \argmax\limits_{\pi \in \Pi} \mathbb{E}\left[R_{t}(\pi)\right]
        \end{equation}
        ```
        ![alt text](./images/2024-3-4-Latex%20Writing-policy.png)