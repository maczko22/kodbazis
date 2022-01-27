var window = {
    console: {
        log: function() {
            //logs msg
        }
    }
};

// golbális objektum
window.console.log('szia');
/*
    -adott element JS reprezentációja: document.all[7]
    - milyen esemény kapcsán akarsz reagálni: onclick
    - milyen kódót akarsz futattni


*/

document.all[7].onclick = function() {
    document.all[7].style.backgroundColor = "red";
    console.log("ok");
}