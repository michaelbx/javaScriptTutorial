let arrayToTest= [1,2,3,4,7,12,23,44,19,22,44,50,1001,1023,-50,271,99,10001,1000,254];
/*
///1
let result=arrayToTest.filter(arrayToTest=> arrayToTest>10);
console.log(result);
///2
let result2=arrayToTest.filter(arrayToTest=> arrayToTest%2==0);
console.log(result2);
///3
let result3=arrayToTest.filter(arrayToTest=> arrayToTest>10&&arrayToTest%3==0);
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
result5=result5.filter(result5=> prime(result5)==true);
console.log(result5);}*/
///6
let result6=arrayToTest;
function onlyone(n,results)
{   var cnt=0;
    var i;
    for(i=1;i<=results.lenght;i++)
            {if(n==results[i])
                {
                    cnt++;
                }
            }
           return cnt;
}
result6=result6.filter(result6=> onlyone(result6,arrayToTest)>1);
console.log(result6);
///7
let result7=arrayToTest;
function palindrome(n)
{
    let cn=n;
    var nn=0;
    var uc;
    while(cn>0)
    {
        uc=cn%10;
        nn=10*nn+uc;
        cn=cn/10;
    }
    if(nn==n)
    return true ;
    else
    return false;
}
result7=result7.filter(result7=> palindrome(result7)==true);
console.log(result7);
