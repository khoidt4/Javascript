/*
var hello = "Khoi";
console.log(hello);

function test(name) {
    return name;
}
console.log(test("Nam"));

function tinhtong(a, b) {
    return a + b;
}
console.log(tinhtong(3, 5));

/*
var infoName = { fullName: "Tuan", lastName: "Khoi" };
console.log(infoName.fullName);
console.log(infoName.lastName);
*/

var cars = ["Lamborini", "BMW", "Toyota"];

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

var mobile = ["SamSung", "Nokia", "Apple"];
mobile.push("Xiamoi");

/*
function addItem() {
    mobile.unshift("Oppo", "Appersut");
}

for (var i = 0; i < mobile.length; i++) {
    console.log(mobile[i]);
}

// declaration es6
/*
addItem = function(item) {
    mobile.push(item);
}
addItem("Xiamo2");
mobile.forEach(function(element) {
    console.log(element);
}, this);
*/
addItem = item => {
    mobile.push(item);
}
addItem("Mobile 2");

mobile.forEach(function(item) {
    console.log(item);
}, this);