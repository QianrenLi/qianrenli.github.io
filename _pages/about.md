---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "<https://cdn.jsdelivr.net/gh/>" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "<https://raw.githubusercontent.com/>" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently an M.S. candidate in Electronic and Electrical Engineering at Southern University of Science and Technology (SUSTech), working under the supervision of Professor [Rui Wang](http://lasso.eee.sustech.edu.cn/). 

My research focuses on the intersection of wireless communication, optimization and machine learning, particularly the development and implementation of machine-learning-enabled communication systems. My current projects involve optimization in WiFi systems and edge computing environments.

# Skills #

+ **Programming**: Python, RUST, MATLAB，Labview, C, TypeScript
+ **Math Tools**: Markov Decision Process, Convex Optimization
+ **Software**: Linux, Pytorch, Docker, Git, Overleaf, VSCode, Solidworks, AutoCAD, HFSS, ADS, and STM32CubeIDE

# Educations #

+ M.S., Southern University of Science and Technology, Electronics and Electrical Engineering. <i style="float: right"> 2022.09 - now </i>

+ B.S., Southern University of Science and Technology, Communication Engineering. <i style="float: right"> 2018.09 - 2022.07 </i>

# Publications #
  + **Qianren Li**, Bojie Lv, Yuncong Hong, and Rui Wang, [ReinWiFi: Application-Layer QoS Optimization of WiFi Networks with Reinforcement Learning](https://arxiv.org/abs/2405.03526). arXiv preprint arXiv:2405.03526. (Accepted by **IEEE 101st Vehicular Technology Conference**).
  + **Qianren Li**, Yuncong Hong, Bojie Lv, and Rui Wang, [A Dynamic Improvement Framework for Vehicular Task Offloading](https://arxiv.org/abs/2501.11333). arXiv preprint arXiv:2501.11333. (Accepted by **IEEE Wireless Communications and Networking Conference**)
  + Bojie Lv, **Qianren Li** and Rui Wang, [Sensing-Assisted Adaptive Channel Contention for Mobile Delay-Sensitive Communications](https://arxiv.org/abs/2405.06186), 2024, arXiv:2405.06186. (Accepted by **IEEE Global Communications Conference**)

# Project Experience #

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/ReinWiFi/system.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

## [Reinwifi](https://github.com/QianrenLi/ReinWiFi)  <i style="float: right; font-size: 14px; font-weight: normal">2023.06 - now</i> ##

+ **Description**: Extracting information from the media access control (MAC) layer in real time is either infeasible or hampers transmission efficiency. To address this issue, a reinforcement-learning-based framework for application-layer quality-of-service (QoS) optimization of WiFi networks was proposed.
+ **Role**: Project Leader, Developer
+ **Tools**: Python, Pytorch, C, RUST

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/intertiEAR-implementation/framework.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

## [InertiEAR-Implementation](https://github.com/QianrenLi/InertiEAR_implement)  <i style="float: right; font-size: 14px; font-weight: normal">*2022.12 - 2023.1*</i> ##

+ **Description**: Speakers in cell phones might induce vibration in embedded inertial measurement units (IMU); therefore, utilizing IMU data to infer victims' sensitive vocal information is possible.(*Course Project*)
+ **Role**: Project Leader, Developer
+ **Tools**: Python, Pytorch

</div>
</div>

+ ## [Overleaf-Workshop](https://github.com/iamhyc/Overleaf-Workshop) [![GitHub Repo stars](https://img.shields.io/github/stars/iamhyc/Overleaf-Workshop)](https://github.com/iamhyc/Overleaf-Workshop) <i style="float: right; font-size: 14px; font-weight: normal">2023.7 - now</i> ##

    + **Description**: Open Overleaf/ShareLaTex projects in vscode, with full collaboration support.
    + **Role**: Developer, Maintainer
    + **Tools**: Typescript, Node.js