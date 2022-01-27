// Function

// alprogram, subroutine

function susdMegARantottat(){
    console.log('önts olajat a serpenyőbe');
    console.log("adj hozzá 3 tojást");
    adjHozzaFuszereket();
    console.log("süsd 4 percig");
    console.log("kész");
}

function adjHozzaFuszereket() {
    console.log('Adj hozzá sót');
    console.log('Adj hozzá borsót');
    console.log('Adj hozzá papríkát');
}

//function call, függvény meghívása

susdMegARantottat();
console.log('--------');
susdMegARantottat();
console.log("--------");
susdMegARantottat();

// Function mint matematikai függvény
// input addatból output adatot ki generáló eszköz

function addOne(szam) {
    return szam + 1;
}

console.log(addOne(5));

function addTwo(szam) {
    //table lookup
    return {
        0: 2,
        1: 3,
        2: 4
    }[szam];
}

console.log(addTwo(addTwo(0)));

// first class citizen
// anonim function

var addThree = function(szam) {
    return szam + 3;
}

console.log(addThree(4));