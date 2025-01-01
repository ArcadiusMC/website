---
title: "Sell Shops"
type: wiki
weight: 66
toc: true
katex: true
---

This section of the Admin Wiki describes how sell shops work and how to manage 
them.

## Commands
- {{<cmduse text="/shop" >}}
  Opens the common SellShop.
- {{<cmduse text="/sellshop reload" >}}
  Reloads the SellShop plugin.
- {{<cmduse text="/open-sellshop-menu <page name> <player>" >}}
  Opens a sell shop menu for a player.

## Compactness
Compactness, or compact selling, is how the SellShop system describes selling 
both whole items, and the ingredients that make up those items (For example, 
selling both Diamonds and Diamond Blocks)

## Price drop off
Prices in the sell shop will decrease when you sell items. The price will 
recover over time.
  
The price decrease is based off how much you've earned from a single item.
An item's price is calculated using a function which is defined as follows:
  
$$f(x) =\text{ceil}\left(A\cdot\arctan\left(Bx-C\right)+D\right)$$
  
Or with everything that can be inlined being inlined:
$$f(x) =\text{ceil}\left(\frac{-s}{2\arctan\left(\frac{Bm}{2}\right)}\cdot\arctan\left(Bx-\frac{Bm}{2}\right)+\frac{s}{2}\right)$$

\\(m = 250000\\) (Max you can earn from an item, may vary based on item)  
\\(s =\\) Base price  
\\(B = 0.00015\\) (Slope variable, can be altered in config)  
\\(C = \frac{Bm}{2}\\)  
\\(D = \frac{s}{2}\\)  
\\(A = \frac{-s}{2\arctan\left(C\right)}\\)  
  
The input, \\(x\\), is the current amount of Denarii already earned from the 
item.
  
To see this function visualized, Checkout [The Desmos Graph](https://www.desmos.com/calculator/77bahmzgew)