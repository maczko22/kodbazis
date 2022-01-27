// if / else statement

var age = prompt('Add meg az életkorod');

/* if(age < 20) {
    alert('Fiatalabb mint 20');
}else if (age > 20 && age < 30) {
    alert('Idősebb mint 20 és fiatalabb mint 30');
} else {
    alert('idős vagy sajnálom');
}
 */
// switch statement


/* switch (age) {
    case '18':
        console.log('felhasználó 18 éves');
        break;
    case '19':
        console.log("felhasználó 19 éves");
        break;
    default:
        console.log("Felhasználó ismeretlen életkora");
        break;
}
 */

switch (true) {
    case age < 20:
        alert('Fiatalabb mint 20');
        break;
    case age > 20 && age < 30:
        alert('Idősebb mint 20 és fiatalabb mint 30');
            break;
    default:
        alert('idős vagy sajnálom');        
}

