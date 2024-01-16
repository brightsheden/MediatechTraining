var names = ["Halima","Chuks", "Tayo"]
console.log(names.sort())


console.log(names.forEach(element => {
    return element
}))

names.forEach(function(element,index){
    console.log(index, element)
})


const cars = [{"Toyota" : 2017 ,
"price": "10,000"},
    {"BMW" : 2012, 
    "price" :"8,000"},
    {"Benz": 2018, 
    "price": "5,000"},
];

console.log(cars[1])

cars.forEach(function(element,index){
    console.log(index, element)
})

//var brands = ['a','b', 'c']
//console.log(brands.indexOf(2))


var pets = ['cat', 'dog', 'fish', 'parrot', 'frog'];
var found = pets.find(function(element, index, array){
    if(element[0] == 'c') return true;
    else return false;
});

console.log(found)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];
console.log("I love " + fruit + " so much");
