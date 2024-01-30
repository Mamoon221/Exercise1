// JAVASCRIPT FUNDAMENTALS 
// VALUES AND VARIABLES.

// let country = 'Pakistan';
// let continent = 'Asia';
// let population = 241;
// console.log(country,continent,population);

// console.log(country);
// console.log(continent);
// console.log(population +' Millions');

// let isisland = false;
// let language;


// TO IDENTIFY THE DATA TYPES. 


// console.log('The type is '+ typeof isisland);
// console.log('The type is '+ typeof population);
// console.log('The type is '+ typeof country);
// console.log('The type is '+ typeof continent);
// console.log('The type is '+ typeof language);

// LECTUTRE: LET, CONST, VAR.

// language = 'Pashto';

// let player = 'Babar Azam';

// const continent = 'Asia';

// language = 'Urdu'; // IT WILL CHANGE.
// continent = 'Europe'; // It will not change because it can access

// console.log(language,player,continent);

// LECTURE: EQUALITY OPERATORS: == VS ===

// let numNeighbours = prompt('How many neighbours countries does your country have ');
//  numNeighbours = Number(numNeighbours); // WE had convert the string into number.
// if(numNeighbours === 1){
//     console.log('Only One Border!');
// }
// else if(numNeighbours > 1){
//     console.log('More then 1 Border');
// }
// else{
//     console.log('No Borders');
// }

// WE USE === TO CHECK THAT THE TWO VALUES ARE EQUAL AND THERE AND THERE DATATYPE
// WHEN WE CONVERT. IT WILL CHANGE FROM STRING TO NUMBER.

// LECTURE: LOGICAL OPERATORS.

// let country = 'Portugal';
// let language = 'english';
// let population = 200;
// let island = false;

// if(language == 'english' && country == 'Portugal' &&  population < 250 && island === false){
//     console.log('You should live in Portugal:');
// }

// else{
//     console.log('Portugal does not meet your criteria:');
// }












//  Lecture TYPE CONVERSION AND COERICON
// Predict Result

// '9' - '5'; Result will::4 Because the - opertor string into number.
//console.log('9' - 5);
// '19' - '13' + '17'; RESULT WILL:: 617 BECAUSE AT FIRST IT WILL MINUS FROM 13 FROM 19 AND THEN THE RESULT WILL CONCAT WITH 17.
//console.log('19' - '13' +'17');
//'19' -'13' +17; RESULT WILL :: 23.
//console.log('19'- '13' +17);
// '123'<57; RESULT WILL :: FALSE.
//console.log('123'< 57);
//5 + 6 +'4' + 9-4-2; RESULT WILL BE 1143. BECAUSE 5 + 6= 11. 4 IS IN STRING IT COMES AS ITS OWN AND 9-4-2 WILL COME 3.
//console.log(5+6+'4'+9-4-2);
//let language = 'Arabic';
// let language = prompt('Enter your local language'); // WE CAN ALSO TAKE INPUT FROM THE USER
// switch (language) {

//     case 'Chinese and mandarin':
//         console.log('Most Number of native Speakers!');
//         break;
//     case 'Spanish':
//         console.log('2nd place in Number of native Speakers!');
//         break;
//     case 'English':
//         console.log('3rd place in Number of native Speakers!');
//         break;
//     case 'hindi':
//         console.log('4th place in Number of native Speakers!');
//         break;
//     case 'Arabic':
//         console.log('5th place in Number of native Speakers!');
//         break;
//     default:
//         console.log('Great Language Too');

//}

// let population = 2000000;
 //let population = 13;
 let population = 130;



let half = population/2;
population+=1;

console.log(population);

let finland = 6000000;
if(population > finland){
    console.log('Pakistan has more population');
}
else{
    console.log('Finland has more population');
}

let avgPopulation = 33
if(population < avgPopulation){
    console.log('Pakistan has more population');
}
else{
    console.log('Avg Country has more population');
}



let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

if(population > avgPopulation){
    console.log('Portugals population is above average');
}
else{
    console.log('Portugal population is 22 million below average');
}



 










