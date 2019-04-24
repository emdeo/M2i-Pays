
let tableauPays = []

function Traitement() {
    var newPays = document.getElementById("txtPays").value // récupérer le nouveau pays
    newPays = newPays.toUpperCase() // convertir le nom de pays en majuscules

    // Vérifier si le nouveau pays est déjà dans la liste
    if (tableauPays.indexOf(newPays) == -1) { // équivaut à t.includes(newPays) == false
        tableauPays.push(newPays) // ajouter le nouveau pays au tableau
        AjoutPays(newPays, document.getElementById("selectPays"))
    }
    else {
        alert("Ce pays a déjà été entré")
    }

    document.getElementById("txtAreaPays").value = tableauPays.join("\n") // afficher le tableau dans le TextArea (éléments séparés par un saut de ligne "\n")
    // .innerHTML permet de modifier le contenu stocké entre 2 balises. On peut identifier ces balises grâce à l'id
}



function AjoutPays(pays, listeVisuelle) {
    var option1 = document.createElement("option")
    option1.value = pays
    option1.id = pays
    option1.innerHTML = pays
    listeVisuelle.appendChild(option1) // ajouter une balise enfant à l'élément spécifié en paramètre
}



function UpdateValue(selection) {
    document.getElementById("txtNewPays").value = selection.value
}



function ModifierPays() {
    var oldPays = document.getElementById("selectPays").value
    var newPays = document.getElementById("txtNewPays").value.toUpperCase()

    if (tableauPays.indexOf(newPays) == -1) {
        tableauPays[tableauPays.indexOf(oldPays)] = newPays
        document.getElementById("txtAreaPays").value = tableauPays.join("\n")

        document.getElementById(oldPays).value = newPays
        document.getElementById(oldPays).innerHTML = newPays

        // alert("Remplacement exécuté")
    }
    else {
        // alert("Ce pays est déjà dans la liste, remplacement impossible")
    }
}