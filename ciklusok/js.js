


var szamok = [2, 4, 13, 4, 6, 42,12];

var parsakSzama = 0;

parsakSzama += szamok[0] % 2 === 0 ? 1 : 0;
parsakSzama += szamok[1] % 2 === 0 ? 1 : 0;
parsakSzama += szamok[2] % 2 === 0 ? 1 : 0;
parsakSzama += szamok[3] % 2 === 0 ? 1 : 0;
parsakSzama += szamok[4] % 2 === 0 ? 1 : 0;
parsakSzama += szamok[5] % 2 === 0 ? 1 : 0;

//console.log(parsakSzama);

/*
ciklusok (loop)
*/

//while
var index = 0;
var paratlanokSzama = 0;
while(index < szamok.length) {
    paratlanokSzama += szamok[index] % 2 === 1 ? 1 : 0;
    index++;
}
//console.log(paratlanokSzama);


// for loop
var paratlanokSzama2 = 0;
for(var i = 0; i < szamok.length; i++){
    //console.log(i);
    //console.log(szamok[i]);
    //console.log('----------');
    paratlanokSzama2 += szamok[i] % 2 === 1 ? 1 : 0;
}

//console.log(paratlanokSzama2);

//for - of

var paratlanokSzama3 = 0;

for(var szam of szamok){
    paratlanokSzama3 += szam % 2 === 1 ? 1 : 0;
}

console.log(paratlanokSzama3);



