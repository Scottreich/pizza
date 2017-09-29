// Back end logic
function Pizza(order, size, topping) {
  this.order = order;
  this.size = size;
  this.topping = topping;
  this.price = 0;
}
Pizza.prototype.newPrice = function(sizeValue, toppingValue) {
  this.price = sizeValue + toppingValue;
}
var arrayAlpha = [];
var totalCalculator = function(pizzas) {
  var total = 0;
  pizzas.forEach(function(pizza1) {
    total += pizza1.price;
  });
  return total;
}
// Front end logic
$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();
  var pizzaOne = new Pizza($("#orders").val(), $("#sizes :selected").text(), $("#toppings :selected").text());
  var size = parseInt($("#sizes").val());
  var topping = parseInt($("#toppings").val());
  pizzaOne.newPrice(size, topping);
  arrayAlpha.push(pizzaOne);
  $("#output1").append("<li>" + pizzaOne.order + "- will come to a total of: $" + pizzaOne.price + "</li>");
});
$("#purchase").click(function() {
$("#output1").empty();
$("#output2").text("Your new total is: $" + totalCalculator(arrayAlpha));
});
});
