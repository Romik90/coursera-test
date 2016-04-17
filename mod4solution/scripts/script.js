(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var sayHello = "Hello";
  var sayGoodBye = "Good Bye";
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter == "j") {
    console.log(sayGoodBye + " " + names[i]);
  } else {
    console.log(sayHello + " " + names[i]);
  }
}
}
  )();
