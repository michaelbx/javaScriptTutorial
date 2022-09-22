let piesa1={
    nume:"Imagine",
    autor:"John Lennon",
};

let piese=[];
for(let i=0;i<25;i++){
    piese.push({
        nume:"Imagine"+i,
        autor:"Autor"+i,
    });
};
piese.push(1);




console.log(piese);
piese.map((elem)=>{
    console.log(elem.nume);
})