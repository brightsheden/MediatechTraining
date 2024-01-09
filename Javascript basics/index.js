




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
