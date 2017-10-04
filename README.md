
  #### Pizza Epicodus Project 4, {10/4/2017}_

  #### By Scott Reichert

  ## Description

  "Pizza" takes a user's selection of pizza size and toppings, grabs the value associate with each option and adds them together. The new price of the pizza is then pushed an array that is part of function order. When the purchase button is clicked A new order prototype then runs through each item in the array and adds them together. The output is then displayed as a new total.

  ## Setup/Installation Requirements

  * Using your favorite git terminal clone the github repository using the following command
  * git clone https://github.com/Scottreich/pizza
  * Navigate to the newly cloned directory using your terminal and open using your preffered text editor
  * View in your favorite browser (Google Chrome Recommended) with the CNTRL (or CMD) + O

  ##Specifications:

  *When the user selects pizza size a number value will be attributed to selection.
    Input: small, medium, large Output: small = option value, medium = option value, large = option value

  * When the user selects pizza toppings, value is attributed to selection.
    Input: cheese, sausage, veggies, sausage and veggies Output: 1, 2, 3, 4

  * When the add order button is clicked orders will be appended to a unordered list with the price of selection.
    Input: (order1: sm, meat + veggies) Output: Order1 - $14

  * When add order button is clicked a new object will be pushed to an arrayAlpha of the current selections.
    Input: selections = {order1, small, cheese} Output= [Pizza {order1, small, cheese},]

  * When the purchase button is clicked the all logged orders (arrayAlpha) will be passed to totalCalculator that will add the value of all existing orders.
    Input: Order1- will come to a total of $11, Order2- will come to a total of $11 Output: Your new total is $22

  ## Known bugs:

  * When the purchase button is clicked arrayAlpha retains its contents, until document is reloaded
    Input: A second click of purchase Output: current orders add to list + all previous additions to array

  * Form will allow multiple creations of order1, order2, Order2
    Input: order2, order2 Output: (upon purchase) order2 + order2



  Copyright (c) 2016 Scott Reichert
