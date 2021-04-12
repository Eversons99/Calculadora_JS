function soma() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    return document.getElementById('resul').innerHTML= n1 + n2; 
}

function sub() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    return document.getElementById('resul').innerHTML= n1 - n2; 
}

function mult() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    return document.getElementById('resul').innerHTML= n1 * n2; 
}

function divi() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    return document.getElementById('resul').innerHTML= n1 / n2; 
}
