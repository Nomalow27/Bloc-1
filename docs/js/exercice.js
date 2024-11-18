// exercice 1 

function changerCouleur() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

// exercice 2

function ajouterElement() {
    const input = document.getElementById('elementInput');
    const liste = document.getElementById('maListe');
    const nouvelElement = document.createElement('li');
    nouvelElement.textContent = input.value;
    liste.appendChild(nouvelElement);
    input.value = '';
}


// exercice 3 

function calculerSomme() {
    const nombre1 = parseFloat(document.getElementById('nombre1').value);
    const nombre2 = parseFloat(document.getElementById('nombre2').value);
    const somme = nombre1 + nombre2;
    document.getElementById('resultat').textContent = 'Somme: ' + somme;
}
