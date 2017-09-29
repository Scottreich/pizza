// Back end logic
function Pizza(size, topping) {
  this.pizzaSize = size;
  this.pizzaTopping = topping;
  this.price = 0;
}
Pizza.prototype.price = function(sizeValue, toppingValue) {
  this.price = sizeValue + toppingValue;
}


$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();
  var pizzaOne = new Pizza($("#sizes :selected").text(), $("#toppings :selected").text());
  var size = parseInt($("#sizes").val());
  var topping = parseInt($("#toppings").val());
  console.log(pizzaOne);
});
});
