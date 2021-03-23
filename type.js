var b;
b = [1, 2, 3, 4, 5];
console.log(b);
var colors;
(function (colors) {
    colors[colors["red"] = 10] = "red";
    colors[colors["Green"] = 20] = "Green";
    colors[colors["Blue"] = 30] = "Blue";
})(colors || (colors = {}));
var background = colors.red;
console.log(background);
var names;
names = "Vishva Luke";
console.log(names.endsWith('Luke'));
