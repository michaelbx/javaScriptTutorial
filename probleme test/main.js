
let array=[];
array.push(1);
array.push("pula");
console.log("lungimea vectorului  este de = "+array.length);
console.log("vectorului la poz 0 = "+array[0]);
console.log("vectorului la poz 1 = "+array[1]);
array=array.concat([1,2,3,45,5,7,8,10,12,12.3455,"final"]);
console.log("lungimea vectorului  este de = "+array.length);

// for(let i=0;i<array.length;i++){
//     console.log("Array at pozition: "+i+" has the value "+array[i]);
// }

// array.map((elem) => console.log("Array has the value"+elem ));
// array.map((elem,i) => console.log("Array at pozition: "+i+" has the value "+elem));
let array2=[1,2,3,4,45,67,90];
array2.map((elem,i) => console.log("Array at pozition: "+i+" has the value "+elem));

//punem intrun array toate valorile din array2 mai mari ca 10

let result=array2.filter((elem)=> elem>10);
result.map((elem,i) => console.log("Array at pozition: "+i+" has the value "+elem));
