#output statements
#print()
# comment in python denoted as # : to comment a state just add # to the begining of that statement

#variables:indentifier or name holder or container that hold a value or use to recorgnise a value
ola ='my name'
print(ola)
#In python variable there is nothing like var,const or let
my_num = 21
print(my_num)
sentence = "What is your name?"
print(sentence)

#Data types
#string or text: sting contain qoutation marks eg 
name = "my name" 
print(name)
text = 'this is a string'
print(text)
#number : is called integer in pytho denoted by eg
value1 = 10
print(value1)
value2 = 12
print(value2)

#decimal: denoted as float in python eg
num1 = 10.4 #float
wallet = 1000.00
print(wallet)
#boolean : true or false denoted as  bool
is_true = True
isVerified = False

#list, dict and turple


#Operators and Operands
#Arithmetic operations
# +,-,*,/,%
#logical operatos
# And,Or, is not,&,|
# ==, !=, <=, >=

#control flow | conditional statement: the same way we have it Javascript
#if state, elif , else
"""
x != y # x is not equal to y
x > y # x is greater than y
x < y # x is less than y
x >= y # x is greater than or equal to y
x <= y # x is less than or equal to y
x is y # x is the same as y
x is not y # x is not the same as 
"""

x = 10
y=20
# if keyword , follow by your condition end with colon(:) follow by your statement
if x > 0:
    print('Yes')

if x < 20: 
    print('x is less than 20')

# if else
if x > 40:
    print('x is greater')
else:
    print('x is leeser')


if x < y:
    print('x is less than y')
elif x > y:
    print('x is greater than y')
else:
    print('x and y are equal')

#CATCHING EXCEPTIONS USING TRY AND EXCEPT
inp = input('Enter Fahrenheit Temperature:')
try:
    fahr = float(inp)
    cel = (fahr - 32.0) * 5.0 / 9.0
    print(cel)
except:
    print('Please enter a number')

#function
#we have built in function like print, len,max,min 
#creating new function with def keyword
def add():
    print(20+30)

add()
    
