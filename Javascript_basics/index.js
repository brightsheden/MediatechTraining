




//variable types
//let, var, const 
//var: can be use and access every where
//let: can only be access within the code block
//let: value can be change
//const : contain constance value

let name_p = 'Olamide'
var myname = 'bright'
const mysecondname = 'olam'

console.log(name_p)
console.log(myname)
console.log(mysecondname)
console.log(typeof(mysecondname))

// data type
//number 
const id = 89
console.log(typeof(id))

const  text = 'Good morning'
console.log(text)
console.log(typeof(text))

//boolean
const is_staff = true
console.log(is_staff)
console.log(typeof(is_staff))

//Undefine
//if variables is not define or declare

//Null
// when variables has no data

//Objects
const  names = {
    'name1':'olamide',
    'name2': 'shedenbright',
    'name3': "bright",
    'age': 20

}
console.log(names.age)

console.log(typeof(names))

//Arithemetics operstors
//+,-,*,/,

//eg
var add 
var x
var y

x=3
y=10
add = y + x
console.log('difference:', add)


//assignment operators
// =  assignemt 
// === equal to
// !== not equal
// +=  / -+
//  ++ increament
// -- decreament

add  += 20
console.log('same: ',add)

//llogical operators
//&& and 
// || or
const same = x | y;
console.log('logical same: ', same)
// > greater than
// less than <
// >=
// <==

var g_l = x >= y;
console.log(g_l)

// Conditonal statement

var x_value = 90
if(x_value == 90){
    console.log(true)
}else{
    console.log(false)
}


// week3
//string methods,number methods, array method

//strings methods
//String length - to get the total number of a strings
//String charAt() - extracting string characters
//String charCodeAt()
//String at()
//String [ ]
//String slice()
//String substring()
//String substr()

//String length - to get the total number of a strings
let st_text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = st_text.length;

console.log(length, 'length')


//String charAt() - extracting string characters
let text_str = "HELLO WORLD";
let char = text_str.charAt(4);

console.log(char)

//using at()
const name_md = "mediatech";
let letter = name_md.at(2);
console.log(letter)

//using index
console.log(letter[3])


//extracting string parts, using slice
//slice(start, end)
//substring(start, end)
//substr(start, length)

var some_text = 'YEAH I CAN DO IT'
console.log(some_text.slice(-5))

//example 2
let some_fruites = "Apple, Banana, Kiwi";
let part = some_fruites.slice(0);
console.log(part)

//counting from left using with negative
let some_fruites_2 = "Apple, Banana, Kiwi";
let part_2 = some_fruites_2.slice(-12);

//converting lowercase to upper
//A string is converted to upper case with toUpperCase():
//toLowerCase, toUpperCae

const small_letters = "shedenbright"
console.log(small_letters.toUpperCase())

//strings template ``

let first_name = 'ibrahim'
let second_name = 'sherif'

let addres ='htpp://127800'

const login = `${addres}/api/login`
console.log(login)

const full_name = `my name is ${first_name} ${second_name}`
console.log(full_name)


//number Method
//toString()	Returns a number as a string
//toExponential()	Returns a number written in exponential notation
//toFixed()	Returns a number written with a number of decimals
//toPrecision()	Returns a number written with a specified length
//ValueOf()	Returns a number as a number



// Array methods

//array sorts: it sorts an array alphabetically
const fruits = ["Banana", "date", "Apple", "Mango"];
console.log(fruits.sort(), 'from sorts')

//array reverse

console.log(fruits.reverse(), 'from reverse')

//Array Iterations
//Array forEach - loop through an array
//Array map() - also used in looping through an array
//Array flatMap()
//Array filter()
//Array reduce()
//Array reduceRigth()


// array for each
const numbers = [40,50,60,70];

numbers.forEach(function(value, index) {
  console.log(`Element at index ${index}: ${value}`);
});


//  example of arrays
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(function(value,index){
    console.log(value, index)
    console.log(value * 2, 'from map')
});




//array flat map
numbers1.flatMap((number)=>(
    console.log(number, 'flatmap')
))

//Array filter
//it create new array object that pass the condition or test

//example
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers4.filter(function(number) {
    console.log('from filter')
    console.log(number)
  return number % 2 === 0;
  
});

console.log(evenNumbers);


//example 2

//getting value greater than 18
const numbers5 = [45, 4, 9, 16, 25];
const over18 = numbers5.filter((value,)=>{
    
    console.log(value > 18, value) ;
});

{/*function myFunctionNew(value) {
  return value > 18;
}

console.log(myFunctionNew())*/}


//Javascript Map
//A Map holds key-value pairs where the keys can be any datatype.

//Map method
//new Map()	Creates a new Map
//set()	Sets the value for a key in a Map
//get()	Gets the value for a key in a Map
//delete()	Removes a Map element specified by the key
//has()	Returns true if a key exists in a Map
//forEach()	Calls a function for each key/value pair in a Map
//entries()	Returns an iterator with the [key, value] pairs in a Map
//Property	Description
//size

// Errors
//try and except
//if there is an error in a code inside try block, the code except will be executed

try {
    
    var x = 3
    var Y= 4
    console.log(x+mo)
} catch(error){
    console.log(error)

}