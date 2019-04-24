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

## <a href="scripts">Scripts</a>

On crée un tableau vide :

    let t = []

La fonction Traitement() fonctionne en quatre étapes.

1 - Récupérer le pays entré par l'utilisateur (valeur entrée dans l'élément **txtPays**).

2 - Transformer cette valeur en majuscules (**.toUpperCase()**).

3 - Vérifier si cette valeur est dans le tableau **t**. Si ce n'est pas le cas, son index vaudra -1. On peut alors ajouter cette valeur dans le tableau (**.push()**). On va également ajouter une **option** à la balise **select**, via la fonction **AjoutPays()**.

4 - Afficher le contenu du tableau dans le **textarea** en séparant chaque élément par un saut de ligne ("\n").

    function Traitement() {
        var newPays = document.getElementById("txtPays").value
        newPays = newPays.toUpperCase(

        if (t.indexOf(newPays) == -1) {
            t.push(newPays) // ajouter le nouveau pays au tableau
            AjoutPays(newPays, document.getElementById("selectPays"))
        }
        else {
            alert("Ce pays a déjà été entré")
        }

        document.getElementById("txtAreaPays").value = t.join("\n")
    }

Ajouter une **option** à la balise **select** :

    function AjoutPays(pays, listeVisuelle) {
        var option1 = document.createElement("option")
        option1.value = pays
        option1.innerHTML = pays
        listeVisuelle.appendChild(option1)
    }
