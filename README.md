# README

Enregistrer un entrée de texte dans un tableau (array). Afficher le contenu de ce tableau dans un TextArea et dans un menu déroulant.

## Table des matières
1. [References](#references)
2. [Conteneur](#conteneur)
3. [Formulaire](#formulaire)
4. [Entrees](#entrees)
5. [Afficher le tableau](#affiche)
6. [Sélectionner un pays](#select)
7. [Traitement()](#traitement)
8. [Ajouter un pays](#ajoutPays)
9. [Mettre à jour la valeur d'un élément](#update)
10. [Modifier un pays de la liste](#modifier)

## <a href="references">References</a>

Tutos rapides W3Schools sur <a href="https://www.w3schools.com/js/js_arrays.asp">les arrays (tableaux)</a> et <a href="https://www.w3schools.com/jquery/">JQuery</a>.

## <a href="conteneur">Conteneur</a>

Pour centrer le contenu de la page, il faut imbriquer nos balises dans un **div** de classe **.container**.

    <div class="container">
        ...
    </div>

## <a href="formulaire">Formulaire</a>

Tous les élements de la page qui envoient des données sont imbriqués dans un élément **form** dont l'attribut **action** définit l'action à accomplir quand l'utilisateur a remplis le formulaire.

En temps normal, les données du formulaire sont transmises à une page web hébergée sur le serveur dès que l'utilisateur clique sur le bouton d'envoie.

*Cet élément **form** peut englober l'intégralité de la page*.

    <form action="/action_page.php" class="form-horizontal" method="post">
        ...
    </form>

On demande à l'utilisateur d'entrer un pays. On veut que nos éléments soient sur la même ligne. Nos balises doivent être imbriquées dans un **div** de classes "**.form-group**" et "**.row**" :

    <div class="form-group row">
        ...
    </div>

## <a href="entrees">Entrer</a>

Afficher un **label**, un **input** et un **button** sur la même ligne. Le bouton lance la fonction **Traitement()** quand il est cliqué.

    <label for="txtPays" class="col-md-2">
        Entrez un pays
    </label>

    <div class="col-md-3">
        <input type="text" class="form-control" id="txtPays" name="txtPays" placeholder="Un pays">
    </div>

    <button id="monBouton" class="btn btn-block btn-outline-primary col-md-2" onclick="Traitement()">
        Ajouter pays
    </button>

## <a href="affiche">Afficher le tableau</a>

On affiche la liste dans un **textarea**. Cet élément est vide au départ, on se contente de définir son **id** et ses dimensions.

    <div class="form-group row">

        <label for="txtPays" class="col-md-2">
            Liste des pays
        </label>
        
        <div class="col-md-3">
            <textarea id="txtAreaPays" rows="6" class="form-control"></textarea>
        </div>

    </div>

## <a href="select">Sélectionner un pays</a>

Afficher une liste déroulante des pays stockés dans le tableau (le paramètre **onchange** est utilisé plus tard pour afficher l'option sélection dans un **input** situé plus bas) :

    <div class="form-group row">

        <label for="txtPays" class="col-md-2">
            Liste des pays
        </label>

        <div class="col-md-3">
            <select id="selectPays" class="form-control" onchange="UpdateValue(this)">
                <option></option>
            </select>
        </div>

    </div>

## <a href="traitement">Traitement()</a>

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

## <a href="ajoutPays">Ajouter un pays</a>

La fonction **AjoutPays()** permet de créer une balise **option** (*document.createElement("option")*) imbriquée dans la balise **select** (*listeVisuelle.appendChild(option1)*) quand l'utilisateur entre un nouveau pays.

Cette fonction prend en paramètres le nom du nouveau pays et l'élément **select** de la page (*listeVisuelle*).

La fonction définit la valeur, l'id et le contenu (**.innerHTML**) de la nouvelle balise option.

    function AjoutPays(pays, listeVisuelle) {
        var option1 = document.createElement("option")
        option1.value = pays
        option1.id = pays
        option1.innerHTML = pays
        listeVisuelle.appendChild(option1)
    }

## <a href="update">Mettre à jour la valeur d'un élément</a>

L'élément **select** permet de sélectionner, dans le tableau, un pays que l'on veut modifier. Le nom de ce pays sera affiché par défaut dans l'élément **input** dans lequel l'utilisateur entrera le nouveau nom de pays.

La fonction **UpdateValue(selection)** permet de modifier le contenu de cet élément selon l'option choisie par l'utilisateur (attribut **onchange="UpdateValue(this)"**).

    function UpdateValue(selection) {
        document.getElementById("txtNewPays").value = selection.value
    }

## <a href="modifier">Modifier un pays de la liste</a>

La fonction **ModifierPays()** permet à l'utilisateur de remplacer un pays de la liste par un nouveau nom de pays. Cette fonction enregistre les noms du pays sélectionné et du pays qui doit le remplacer.

Si le nouveau pays n'est pas dans la liste, on modifie le tableau en remplaçant l'ancienne valeur par la nouvelle. On met ensuite à jour le **textarea** en affichant le tableau complet. Enfin, on modifie l'élément **option** correpondant au pays qu'on a remplacé. 

    function ModifierPays() {
        var oldPays = document.getElementById("selectPays").value
        var newPays = document.getElementById("txtNewPays").value.toUpperCase()

        if (tableauPays.indexOf(newPays) == -1) {
            tableauPays[tableauPays.indexOf(oldPays)] = newPays
            document.getElementById("txtAreaPays").value = tableauPaysjoin("\n")

            document.getElementById(oldPays).value = newPays
            document.getElementById(oldPays).innerHTML = newPays
        }
    }
