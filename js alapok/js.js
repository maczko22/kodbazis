//lookup kulcs alapú kikérés
/*
console.log(
    {
        firstName: 'józsef',
        lastName:'Kovács',
        age: 30
    }.lastName
);
console.log(
    {
        firstName: 'józsef',
        lastName:'Kovács',
        age: 30,
        phoneNumbers:['06308900714', '06309537428'],
        address: {
            street:'Király u.',
            city: 'budapest'
        }
    }.phoneNumbers[0]
);
*/
console.log(
    [
        {
            brand:'apple',
            name: 'iPhone X',
            price: 250000,
            provider: {
                country:"HU",
                name: 'Vodafone'
            }
        },
        {
            brand:'Huawei',
            name: '10 ',
            price: 150000,
            provider: {
                country:"DE",
                name: 'T-mobile'
            }
        },
        {
            brand:'ZTE',
            name: 'Blade ',
            price: 110000,
            provider: {
                country:"DE",
                name: 'Vodafone'
            }
        }
    ][0].name
)

//1 első telegon nevét
//2 telefon árát

console.log(
    [
        {
            brand:'apple',
            name: 'iPhone X',
            price: 250000,
            provider: {
                country:"HU",
                name: 'Vodafone'
            }
        },
        {
            brand:'Huawei',
            name: '10 ',
            price: 150000,
            provider: {
                country:"DE",
                name: 'T-mobile'
            }
        },
        {
            brand:'ZTE',
            name: 'Blade ',
            price: 110000,
            provider: {
                country:"DE",
                name: 'Vodafone'
            }
        }
    ][1].price
)

//3 telefon országát

console.log(
    [
        {
            brand:'apple',
            name: 'iPhone X',
            price: 250000,
            provider: {
                country:"HU",
                name: 'Vodafone'
            }
        },
        {
            brand:'Huawei',
            name: '10 ',
            price: 150000,
            provider: {
                country:"DE",
                name: 'T-mobile'
            }
        },
        {
            brand:'ZTE',
            name: 'Blade ',
            price: 110000,
            provider: {
                country:"DE",
                name: 'Vodafone'
            }
        }
    ][2].provider.country
)

