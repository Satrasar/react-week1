const users = [{
  name : 'Ozlem',
  age : 18
},{
  name : 'Ozlem',
  age : 24
},{
  name : 'Zeynep',
  age : 6
},{
  name : "Levent",
  age: 40
},
];
/* 
  push
  map
  find
  filter
  some
  every
  includes
*/

//push

/*users.push("Ayse");
console.log(users); */

// map: array icinde tek tek donuyor

/*users.map((x) => {
  console.log(x.name)
});*/

//find
//const result = users.find((item) => item.name === "Ozlem" && item.age > 19 );
// console.log(result);


//filter
//const filtered  = users.filter(({name , age}) => name === "Ozlem" && age <20);
//console.log(filtered);


//some: arrayin icerisinedki elemanlardan biri verdigimiz kosula uyuyor ise true doner

//const some = users.some((item) => item.age === 18);
//console.log(some);

//every: arrayin butun elemanlarinin sarta uymasini bekliyor
//const every = users.every((item) => item.age > 20 );
//console.log(every);
 

//includes: icinde geciyor mu gecmiyor mu bunun konrolunu yapar

const meyveler = ['elma', 'muz','armut'];

const isIncluded = meyveler.includes('muz');
console.log(isIncluded);
