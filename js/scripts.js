// Bussiness Interface Logic

//List\ is a constructor that takes ListItems and adds then to it's items array. It also should add an ID, but it might not work yet
function List() {
  this.items = []
  this.currentId = 0
}

// THIS IS SUPER IMPORTANT - object Constructors do no create the object
var myList = new List();

//ListItem is a constructor that takes two arguments and assigns them to local variables.
function ListItem(task, priority) {
  //The variable task under the ojbect List is assigned the value of the local variable task.
  this.task = task,
  this.priority = priority
}

// creates the method addListItem under the object List, accepts one argument and assigns it to the local variable listItem
List.prototype.addListItem = function(listItem) {
  //Push the local variable listItem into the array items under the object List. "This" refers to the object that owns the method.
  this.items.push(listItem);
}

// This method displayItem takes the inputs and prints them to the screen as a list, but it does not link that list to the myList object. Making deleting from the myList not an option.
// ListItem.prototype.displayItem = function() {
//   this.ListItem == 1;
//   return "<li> Task: " + this.task + " Priority: " + this.priority + "</li>";
// }

// This method displayItem takes the myList and prints it to screen in a list.  It may be adding the whole list every click.
List.prototype.displayItem = function() {
  this.myList == 1;
  return "<li>" + myList + "</li>";
}

// User Interface Logic
$(document).ready(function() {
  $("#list").submit(function(event) {
    event.preventDefault();
    var inputOne = $("#inputOne").val();
    var inputTwo = $("#inputTwo").val();
    console.log(inputOne, inputTwo);
    //Creating a new variable with the name item and assigning the value of a new object of ListItem and we are passing two arguments to that object.
    var item = new ListItem(inputOne, inputTwo);
    var listItem = new ListItem();
    myList.addListItem(item);
    //This part links to the displayItem methos to print to the ordered list in HTML
    $("ol.outputList").append(myList.displayItem());
  });
});
