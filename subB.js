let versuri = `Tigane tu ai amanta
Da!
Ca prea te porti la cravata
Da! Da! Da
Si de-o saptamana-ncoace
Da!
Te imbraci la patru ace.
Refren:
Tigane esti de belea
Doar asta ne mai lipsea
Ca in rest avem de toate
Da! Da! DA
Jura-mi ca amanta n-ai
Ca ai de belea sa dai!
Spune-mi unde ai fost azi noapte.
Nu mai ai nici chef de vorba
Da!
Si spui ca n-ai sare-n ciorba
Da! Da! Da!
Si nici pofta de mancare
Da!
Te-ai indrgostit tigane!
Aoleu fir-as a dracu!
Da!
Daca nu mi-oi gasi altu..
Da! Da! Da
Sa-mi traiesc tigane viata
Da!
Ca tu nu mai tragi cu casa.`;

///console.log(versuri.match("a")+versuri.match("e")+versuri.match("i")+versuri.match("o")+versuri.match("u"));
///2
// const array = versuri.split("\n");
// ///console.log(array);
// ///3
// let cnt1=0,cnt2=0,cnt3=0;
// array.map((element) => {
//     let cuvinteVers = element.split(" ");
//     cuvinteVers.map((element2) => {
//         if (element2.includes('Da')||element2.includes('da'))
//             cnt1++;
//         if (element2 === 'ciorba'||element2==='Ciorba')
//             cnt2++;
//         if (element2.includes('tigane')||element2.includes('Tigane'))
//             cnt3++;
//     // })
// // /})
///console.log("DA! apare de "+cnt1+"\n"+"ciorba apare de "+cnt2+"\n"+"Tigane apare de "+cnt3);
///4
const array = versuri.split("\n");
let ok;
array.map((element)=>{
    let rima=element.slice(-2);
    ok=0;
    array.map((element2)=>
    {
        let rima2=element2.slice(-2);
        
        if(rima===rima2&&rima>rima2)
            ok=1;
    })
    if(ok===0)
    console.log(rima);
})