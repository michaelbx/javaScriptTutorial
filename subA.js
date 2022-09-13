let arrayToTest = [1, 2, 3, 4, 7, 12, 23, 44, 19, 22, 44, 50, 1001, 1023, -50, 271, 99, 10001, 1000, 254];
/*
///1
let result=arrayToTest.filter((elem) => elem>10);
console.log(result);
///2
let result2=arrayToTest.filter(arrayToTest=> arrayToTest%2==0);
CORECT let result2=arrayToTest.filter(arrayToTest=> arrayToTest%2===0); operatoru === e mai corect ca ==
console.log(result2);
///3
let result3=arrayToTest.filter(arrayToTest=> arrayToTest>10&&arrayToTest%3==0);
CORECT let result3=arrayToTest.filter(arrayToTest=> arrayToTest>10&&arrayToTest%3==0); operatoru === e mai corect ca ==
console.log(result3);
///4
let result4=arrayToTest.filter(arrayToTest=> arrayToTest<0);
console.log(result4);
///5
let result5=arrayToTest;

function prime(n)
{   let nrd=0;
    let d=2;
    for(d=2;d<=n/2;d++)
    if(n%d==0)
        nrd++;
    if(nrd==0&&n>0)
        return true;
        else
        return false;
}
result5=result5.filter((result5)=> prime(result5)==true);
console.log(result5);}*/
// ///6

// function onlyOne(n, results) {
//     var cnt = results.filter((element)=> element===n).length;
//     return cnt;
// }
// let result6 = arrayToTest.map((elem)=> arrayToTest.filter((elem2)=>elem2===elem).length>1);
// console.log(result6);
///7
let result7 = arrayToTest;

const palindrome=(n)=> {
    let nStr=toString(n);
    let test=nStr.split("");
    let nrs=test.map((elem)=> Number(elem));
    let nrsR=nrs.reverse();
    let result =true;
    console.log(nrs);
    console.log(nrsR);
    for(let i=0;i<nrs.length;i++){
        if(nrs[i]!==nrsR[i]){
            result=false;
        }
    }
    return result;
}

result7 = result7.filter((elem) => palindrome(elem) );
console.log(result7);

//CORECT:
// const isPrime = (n) => {
//     let nrd = 0;
//     let d = 2;
//     for (d = 2; d <= n / 2; d++)
//         if (n % d == 0)
//             nrd++;
//     if (nrd == 0 && n > 0)
//         return true;
//     else
//         return false;
// }



// console.log(isPrime(2), isPrime(4));
