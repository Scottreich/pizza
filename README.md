Specifications:

When the user selects pizza size a number value will be attributed to selection.
  Input: small, medium, large Output: small = option value, medium = option value, large = option value

When the user selects pizza toppings, value is attributed to selection.
  Input: cheese, sausage, veggies, sausage and veggies Output: 1, 2, 3, 4

When the add order button is clicked orders will be appended to a unordered list with the price of selection.
  Input: (order1: sm, meat + veggies) Output: Order1 - $14

When add order button is clicked a new object will be pushed to an arrayAlpha of the current selections.
  Input: selections = {order1, small, cheese} Output= [Pizza {order1, small, cheese},]

When the purchase button is clicked the all logged orders (arrayAlpha) will be passed to totalCalculator that will add the value of all existing orders.
  Input: Order1- will come to a total of $11, Order2- will come to a total of $11 Output: Your new total is $22

Known bugs:
When the purchase button is clicked arrayAlpha retains its contents, until document is reloaded
  Input: A second click of purchase Output: current orders add to list + all previous additions to array
Form allow multiple creations of order1, order2, Order2
  Input: order2, order2 Output: (upon purchase) order2 + order2
