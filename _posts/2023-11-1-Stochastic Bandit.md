---
title: "Stochastic Bandit"
author_profile: false
layout: archive
tags:
    - bandit
# date: 2024-02-21
permalink: /blogs/2023/11/1/Stochastic-Bandit
---

# Stochastic Bandit

Learning objective $S_n = \sum_{t = 1}^n X_t$ which is not optimization problem:

- What’s the value of $n$
- Cumulative reward is a random quantity and what the utility on distributions of $S_n$
- What is the distributions that govern the rewards for each arm

**Bandit Instance $v = (P_a:a\in \mathcal A)$, $P_a \mapsto X$** where $X$ is reward.

## Unstructured Bandits

$$
\mathcal{E} = \{ v = (P_a: a\in \mathcal A):P_a \in \mathcal M_a ,\ \forall a \in \mathcal A \}
$$

A specific learner might only works in specific environment.

## Structured Bandits

e.g:

$$
\mathcal E = \{(\mathcal B(\theta), \mathcal B(1-\theta)) \}
$$

# Regret

Def. The deficit suffered by the learner relative to the optimal policy

Let $v = (P_a: a \in \mathcal A)$:

$$
\mu_a(v) = \int_{\infty}^{\infty} x dP_a(x)
$$

and $\mu^*(v) = \max_{a\in\mathcal A} \mu_a(v)$ be the largest mean of all arms.

$$
R_n(\pi,v) = n \mu^*(v) - \mathbb E\left[ \sum_{t=1}^n X_t\right]
$$

### Lemma:

Let $v$ be a stochastic bandit environment. Then,
(a) $R_n(\pi, ν) ≥ 0$ for all policies $π$;
(b) the policy $\pi$ choosing $A_t \in \argmax_a \mu_a$ for all $t$ satisfies $R_n(π, ν) = 0$; and
(c) if $R_n(π, ν) = 0$ for some policy $π$, then $P (\mu_{A_t} = \mu^∗) = 1$  for all $t ∈ [n]$.

- A sublinear regret
    
    $$
    \forall v\in \mathcal E, \lim_{n\rightarrow \infty} \frac{R_n(\pi,v)}{n} = 0
    $$
    

Or

$$
R_n(\pi, v) \le Cn^p
$$

or

$$
R_n(\pi,v) \le C(v) f(n)
$$

### Bayesian Regret

$$
\mathrm{BR}_n(\pi,Q) = \int_\mathcal ER_n(\pi,v)d Q(v)
$$

# Decomposing the Regret

$$
T_a(t) = \sum_{s = 1}^t \mathbb I\{ A_s = a\}
$$

since $A_t$  depends on the rewards observed which will be random.

### Lemma 4.5 (***Regret decomposition lemma***)

$$
R_n = \sum_{a \in \mathcal A} \Delta_a \mathbb E[T_a(n)],
$$

where $\Delta_a(v) = \mu^*(v) - \mu_a(v)$ and $\mu_a(v)$ dentoes a expected reward of $a$.

$$
\mathbb E[(\mu^* - X_t) \mathbb I\{ A_t = a\} | A_t ] = \mathbb I\{A_t =a \} \mathbb E[\mu^* - X_t | A_t]
$$