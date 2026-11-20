---
title: Micromouse
summary: A custom STM32 board for an autonomous maze-solving mouse 
order: 10
context: IEEE Micromouse · September 2026–present
cover:
  image: ../../../images/micromouse/pcb_3d.png
  alt: 3D render of the green Micromouse board with components and perimeter-mounted infrared sensors.
  caption: Micromouse PCB in KiCad’s 3D viewer
gallery:
  - image: ../../../images/micromouse/pcb_2d.png
    alt: KiCad board layout showing the routed traces, footprints, and copper pours of the Micromouse PCB.
    caption: PCB layout and copper routing
  - image: ../../../images/micromouse/schematic.png
    alt: Micromouse schematic with labeled sections for the STM32, infrared sensors, motor driver, power supply, and Bluetooth module.
    caption: Full Micromouse circuit schematic
---

## Overview

Micromouse is a national competition where a small, autonomous mouse attempts to solve a maze it has never seen before in the shortest time possible. Competitors design their own mice, with free range over microcontroller, motor, and sensor choices, and additionally write custom firmware allowing the mouse to sense, maneuever and solve the maze.

## Micromouse PCB

I designed the 100x100mm PCB for my mouse in KiCad, interlinking an STM32 microcontroller with infrared sensors, motors, voltage regulators, and a UART+SPI Bluetooth module. The mouse additionally includes several testing and QOL features, such as buttons, LEDs, and test points for board bring-up. Fundamental PCB practices, such as close decoupling capacitor networks around the MCU and power rails, short and wide power traces, and dual ground planes ensures that the mouse's hardware is reliable and well shielded against EMI.
