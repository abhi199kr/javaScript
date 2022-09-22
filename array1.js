var friends=["Amit","Ankit","Modi","KIshan","Arnav"]
console.log(friends)
console.log("My Favourite friends form the list of array "+friends[2]);
console.log("Then length of the array = "+friends.length);
console.log("Sorting array "+friends.sort());
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
console.log(text);