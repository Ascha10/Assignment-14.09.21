// let arrayOfNames = ["bob","gil","sid","dan","kali"];

// arrayOfNames.forEach((name,index) => {
//     console.log(`${name} is at index ${index}`);
// })

/*************************************************/

// let arrayOfNumbers = [10,20,30,40,50];

// arrayOfNumbers.forEach((number,index) => {
//     console.log(`number ${number} is at index ${index}`);
// })


/*************************************************/

// let arrayOfNumbers = [10,7,30,5,50];

// arrayOfNumbers.forEach((number) => {
    
//     if(number%2 == 0){
//         console.log(`${number} yes` );
//     }
//     else{
//         console.log(`${number} no` );
//     }
// })

/*************************************************/

// const Persons = [ 
//     {name: "bob" , age: 26},
//     {name: "sid" , age: 46},
//     {name: "gil" , age: 30},
//     {name: "kali" , age: 60}
// ]

// for (const Person of Persons) {

//     console.log(Person);
    
// }

/*************************************************/

// const Person = {
//     name: "bob" ,
//     age: 26,
//     eyeColor: "brown",
//     wight: 80
// }


// for (const key in Person) {

//     console.log(key);
//     console.log(Person[key]);

// }

/*************************************************/


/*********************Question 1a****************************/

const arrayOfNewspapers = [
    {title: "spring" ,author: "bob" ,dateCreation: new Date().getFullYear()},
    {title: "winter" ,author: "kali" ,dateCreation: 2018 },
    {title: "fall" ,author: "sid" ,dateCreation: 2015 },
    {title: "summer" ,author: "jack" ,dateCreation: 2010 }
]

arrayOfNewspapers.forEach((arrayOfNewspaper) => {
    console.log(arrayOfNewspaper);
})

/*********************Question 1b****************************/

for (const arrayOfNewspaper of arrayOfNewspapers) {

    console.log(arrayOfNewspaper);
}

/*********************Question 2****************************/

const Persons = [ 
    {name: "bob" , age: 26},
    {name: "sid" , age: 46},
    {name: "gil" , age: 30},
    {name: "kali" , age: 60}
]

for (let i = 0; i < Persons.length; i++) {

    for (const key in Persons[i]) {

        console.log(key);
        console.log(Persons[i][key]);
    
    }
        
}

/*********************Question 3a****************************/

const books = [
    {name: "sos", author: "bob" , price: 200},
    {name: "lion" , author: "kali" , price: 350 },
    {name: "tomorrow" , author: "dor" , price: 70 },
    {name: "theW" , author: "mike" , price: 400 },
]

for (const book of books) {
    
    console.log(book);
}

/*********************Question 3b****************************/

for (let i = 0; i < books.length; i++) {

    for (const key in books) {

        console.log(books[i].author);
        break
    }
    
}

/*********************Question 4a****************************/

const arrayOfNumbers = [10,20,30,40,50,70,11];

let sum = 0;
arrayOfNumbers.forEach((number) => {
    sum += number;
})
console.log(sum);

/*********************Question 4b****************************/

let result = 0;
for (const number of arrayOfNumbers) {
    result += number;
}
console.log(sum);

