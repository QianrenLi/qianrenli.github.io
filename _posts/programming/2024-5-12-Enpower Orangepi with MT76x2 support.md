---
title: "Enpower Orangepi with MT76x2 support"
author_profile: false
layout: archive
tags:
    - linux
    - orangepi
date: 2024-04-30
permalink: /blogs/Empower-Orangepi-MT76x2
excerpt: Enpower Orangepi with MT76x2 support
---

# Enpower Orangepi with MT76x2 support #

In order to build a low-cost, extensible, and powerful wireless transmission system, the single-board computer (SBC) seems to be a good choice.
Among the SBCs, the **Orangepi5plus** is a good choice due to its powerful CPU (RK3588) and rich interfaces (one M.2 PCIe support wifi6 - not self-verified, and 2 USB3.0 ports).

---
In conclusion, the final solution is to use the MT76x2U driver by recompiling the kernel.

## Choice of Wireless Card ##

Since there are two kinds of USB wifi cards available in my hand, one of RTL8812AU and the other of MT7612U, the choice of the wireless card is limited to these two.
Although the drivers of RTL8812AU and MT7612U are both SoftMAC, they are maintained by different societies. Therefore, the installation of the driver is different.

### RTL8812AU (Cannot run as USB3.0 mode) ###

To use the RTL8812AU, the driver can be installed from the community repository (e.g. [aircrack-ng]([https://github](https://github.com/aircrack-ng/rtl8812au))). 

One thing to be noted is that the compilation of the driver requires the kernel headers, which should be installed from the `deb` package locally in orangepi. The directory of the kernel headers is `/opt/linux-headers-*.deb`, where the `*` content might varies in different distribution.

The RTL8812AU driver works well until the USB 3.0 mode is enabled. As a reminder, enabling USB3.0 mode requires a module parameter `rtw_switch_usb_mode=1`. However, the mode switching in orangepi seems to make the driver automatically disconnect from the USB bus. (Tested under official distribution - kernel 5.10 and 6.1)

### MT7612U (MT76x2U) ###

Let's turn to the MT7612U, where the driver is generally an in-kernel driver. In the case of orangepi, it is not automatically loaded. Thus, the driver should be compiled and installed manually.

It seems, a time-consuming but feasible solution is to recompile the kernel with the MT76x2U driver enabled. The compilation of orangepi kernel is quit straightforward following the instructions in the [official wiki](http://www.orangepi.cn/orangepiwiki/index.php/Orange_Pi_5_Plus).

Still, there are some points to be noted:

+ The Debian distribution with kernel 6.1 might be the best choice since it automatically detects the USB device as a wireless card.
+ The MT76x2U driver requires a modified kernel, which can be done by going to the `show a kernel configuration ...` entry followed by `device driver` -> `network device support` -> `wireless LAN` -> `mt76x2u` accordingly.

After compilation, additional firmware patch `mt7622_rom_patch` is also required to be installed. Different distribution might have different path, where `apt-file` might help the search. ([Ref](https://blog.csdn.net/u011326325/article/details/131577973), note that the `usb_switch` is not required since the id of the wireless card is already recognized by the kernel.)

Specifically, the installation of firmware might meet a firmware contradiction problem, where an overwrite flag can be used in `dpkg` to force the installation.

## More to Explore ##

The `ip rule` is not valid in orangepi, where the additional kernel compiles config `Networking support` --> `Networking Options` --> `IP: advanced router` and `IP: policy routing` should be enabled (not sure if compiled as the module is workable or not).




