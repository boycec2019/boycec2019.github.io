---
title: UCI Solar Car
summary: Battery pack design and protection for UCI’s Gen 2 solar car
order: 20
context: Battery Engineer · May 2026–present
cover:
  image: ../../../images/solar car/precharge_schematic.png
  alt: Altium schematic showing the battery precharge path, high- and low-side contactors, and DC–DC converter switching.
  caption: Battery precharge and DC–DC converter switching schematic
---

## Overview

UCI Solar Car is a solar racing team that competes in the national FSGP and ASC competitions. The battery subteam is responsible for designing the high-voltage battery pack, battery management system, and custom battery protection PCB in order to keep both the battery and the team safe. 

## Precharge System and DC-DC Converter

I was responsible for creating the precharge circuit module on the battery protection PCB in Altium. The circuit consists of three blocks: highside, lowside, and precharge, each of which have their own high-voltage solenoidal contactor. When the precharge contactor is closed, thermally-specialized precharge resistors allow the load voltage to rise steadily to 115V before the main contactors close, protecting the car from a large inrush current. 3.3V MOSFET logic controls the contactors, and flyback diodes protect the circuit from inductive kickback. After the precharge sequence completes, the DC-DC converter steps down the voltage for auxilary use.
