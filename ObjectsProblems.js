
let singers = ["Jay Z", "Snoop Dog", "Wiz Khalifa", "Dr Dre", "Eminem", "J Cole", "Kendrick Lamar", "Kanye", "Queen", "Ozzy Osbourne", "Bon Jovi", "ACDC", "Scorpions", "Aerosmith"];
const Song = {
    name: "Run this town",
    artist: "Jay Z",
    duration: {
        minutes: 3,
        seconds: 23,
    },
    releaseDate: "1995-12-17"
}
const getRandomNum=(min, max)=> {
    return parseInt(Math.random() * (max - min) + min);
  }
const getDate=()=>{
    let day=0;
    let month=0;
    let year=0;
    year=getRandomNum(1900,2022);
     month=getRandomNum(1,12);
    if(month===2 && year%4!==0){
        day=getRandomNum(1,28);
    }
    else if(month===2 && year%4===0){
        day=getRandomNum(1,29);
    }
    else{
        day=getRandomNum(1,31);
    }
    return `${year}-${month}-${day}`;
}

let Songs = [];
for (let i = 0; i <= 99; i++) {
    Songs.push({
        name: `Song#${i}`,
        artist: singers[getRandomNum(0, 13)],
        duration: {
            minutes: getRandomNum(1, 10),
            seconds: getRandomNum(1, 59),
        },
        releaseDate: `${getDate()}`
    })
}
console.log(Songs);
let sortedSongs=Songs.sort((a,b)=>{
    
   return (a.duration.minutes*60+a.duration.seconds)-(b.duration.minutes*60+b.duration.seconds);

})
console.log(sortedSongs);
