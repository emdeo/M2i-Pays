
let tableauPays = []

// remplace la fonction Traitement()
$("#btnAjouter").click(
    function () {
        var newPays = $("#txtPays").val()
        newPays = newPays.toUpperCase()

        if (tableauPays.indexOf(newPays) == -1) {
            tableauPays.push(newPays)
            AjoutPays(newPays, $("#selectPays"))
            $("#txtAreaPays").val(tableauPays.join("\n"))
        }
    })


function AjoutPays(pays, listeVisuelle) {
    var option1 = document.createElement("option")
    option1.value = pays
    option1.id = pays
    option1.innerHTML = pays
    listeVisuelle.append(option1) // .append() à la place de .appendChild()
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
