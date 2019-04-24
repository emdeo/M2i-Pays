# README

Enregistrer un entrée de texte dans un tableau. Afficher le contenu de ce tableau dans un TextArea est dans un menu déroulant.

## Table des matières
1. [Ressources](#ressources)
2. [Body](#body)
3. [Scripts](#scripts)

## <a href="ressources">Ressources</a>

Tutos rapides en JavaScript sur le site <a href="https://www.w3schools.com/xml/default.asp" target="_blank">W3Schools</a>.

## <a href="body">Body</a>

Pour centrer le contenu de la page, il faut imbriquer nos balises dans un **div** de classe **.container**.

    <div class="container">
        ...
    </div>

On demande à l'utilisateur d'entrer un pays. On veut que nos éléments soient sur la même ligne. Nos balises doivent être imbriquées dans un **form** de méthode **post**, puis dans un **div** de classe **.form-group .row** :

    <form action="/action_page.php" class="form-horizontal" method="post">
        <div class="form-group row">
            ...
        </div>
    </form>

Afficher un **label**, un **input** et un **button** sur la même ligne. Le bouton lance la fonction **Traitement()** quand il est cliqué.

    <label for="txtPays" class="col-sm-2">Entrez un pays</label>
    
    <div class="col-sm-3">
        <input type="text" class="form-control" id="txtPays" name="txtPays" placeholder="Un pays">
    </div>
    
    <button id="monBouton" class="btn btn-block btn-outline-primary col-sm-2" onclick="Traitement()">
        Ajouter pays
    </button>

On affiche la liste dans un TextArea. Cet élément est vide au départ, on se contente de définir son **id** et ses dimensions.

    <textarea id="txtAreaPays" rows="10" class="col-sm-7">
    </textarea>

Afficher une liste déroulante des pays stockés dans le tableau (le paramètre **onchange** est utilisé plus tard pour afficher l'option sélection dans un **input** situé plus bas) :

    <select id="selectPays" class="form-group row col-sm-7" onchange="UpdateValue(this)">
    </select>

## <a href="scripts">Scripts</a>

On crée un tableau vide :

    let tableauPays = []

La fonction Traitement() fonctionne en quatre étapes.

1 - Récupérer le pays entré par l'utilisateur (valeur entrée dans l'élément **txtPays**).

2 - Transformer cette valeur en majuscules (**.toUpperCase()**).

3 - Vérifier si cette valeur est dans **tableauPays[]**. Si ce n'est pas le cas, son index vaudra -1. On peut alors ajouter cette valeur dans le tableau (**.push()**). On va également ajouter une **option** à la balise **select**, via la fonction **AjoutPays()**.

4 - Afficher le contenu du tableau dans le **textarea** en séparant chaque élément par un saut de ligne ("\n").

    function Traitement() {
        var newPays = document.getElementById("txtPays").value
        newPays = newPays.toUpperCase(

        if (tableauPays.indexOf(newPays) == -1) {
            tableauPays.push(newPays) // ajouter le nouveau pays au tableau
            AjoutPays(newPays, document.getElementById("selectPays"))
        }
        else {
            alert("Ce pays a déjà été entré")
        }

        document.getElementById("txtAreaPays").value = tableauPays.join("\n")
    }

La fonction **AjoutPays()** permet de créer une balise **option** (*document.createElement("option")*) imbriquée dans la balise **select** (*listeVisuelle.appendChild(option1)*) quand l'utilisateur entre un nouveau pays.

Cette fonction prend en paramètres le nom du nouveau pays et l'élément **select** de la page (*listeVisuelle*).

    function AjoutPays(pays, listeVisuelle) {
        var option1 = document.createElement("option")
        option1.value = pays
        option1.innerHTML = pays
        listeVisuelle.appendChild(option1)
    }

L'élément **select** permet de sélectionner, dans le tableau, un pays que l'on veut modifier. Le nom de ce pays sera affiché par défaut dans l'élément **input** dans lequel l'utilisateur entrera le nouveau nom de pays.

La fonction **UpdateValue(selection)** permet de modifier le contenu de cet élément selon l'option choisie par l'utilisateur (attribut **onchange="UpdateValue(this)"**).

    function UpdateValue(selection) {
        document.getElementById("txtNewPays").value = selection.value
    }

La fonction **ModifierPays()** permet à l'utilisateur de remplacer un pays de la liste par un nouveau nom de pays. Cette fonction enregistre les noms du pays sélectionné et du pays qui doit le remplacer.

Si le nouveau pays n'est pas dans la liste, on modifie le tableau en remplaçant l'ancienne valeur par la nouvelle. Enfin, on met à jour le **textarea** en affichant le tableau complet.

    function ModifierPays() {
        var oldPays = document.getElementById("selectPays").value
        var newPays = document.getElementById("txtNewPays").value.toUpperCase()

        if (tableauPays.indexOf(newPays) == -1) {
            tableauPays[tableauPays.indexOf(oldPays)] = newPays
            document.getElementById("txtAreaPays").value = tableauPaysjoin("\n")
        }
    }