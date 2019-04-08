// Bussiness Interface Logic

function List() {
  this.items = []
}
// create the method addListItem under the object List, accepts one argument and assigns it to the local variable listItem
List.prototype.addListItem = function(listItem) {
  //Push the local variable listItem into the array items under the object List. "This" refers to the object that owns the method.
  this.items.push(listItem);
}

//ListItem is a constructor that takes two arguments and assigns them to local variables.
function ListItem(task, priority) {
  //The variable task under the ojbect List is assigned the value of the local variable task.
  this.task = task,
  this.priority = priority
}

// List.prototype.addListItem = function() {
//   this.items.push(item);
// }
var myList = new List();

// User Interface Logic
$(document).ready(function() {
  $("#list").submit(function(event) {
    event.preventDefault();
    var inputOne = $("#inputOne").val();
    var inputTwo = $("#inputTwo").val();
    console.log(inputOne, inputTwo);
    //Creating a new variable with the name item and assigning the value of a new object of ListItem and we are passing two arguments to that object.
    var item = new ListItem(inputOne, inputTwo);
    debugger;
    var listItem = new ListItem();
    myList.addListItem(item);
    console.log(item);
    console.log()
  });
});
