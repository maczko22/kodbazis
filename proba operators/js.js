
var quantity = prompt('Add meg a darabszámot');
var type = prompt('Add meg a típust');

console.log(quantity);
console.log(type);

var types = {
    student: 300,
    adult: 350,
    retired: 200
}



var price = types[type];

if(price === undefined){
    alert('Érvénytelen típus')
}else {
    var discount = quantity > 10 ? 0.9 : 1;
    var total = quantity * price * discount;
    alert(total);
}

/*
    input: Hány jegyet kér?
    Milyen tipusú jegyet kér? student | adult

    a diák jegy ára: 300 ft a felnőtt jegy ára 350 Ft
    tíznél több jegyvásárlás esetén 10% kedvezmény
    nyugdíjas jegy ára 280 Ft

*/ 