let teddy = JSON.parse(localStorage.pelu)

console.log(teddy)

//      Affichage du produit

var titre1 = document.getElementById('title')
titre1.textContent = 'Fiche du produit'
var article = document.createElement('article')
var image = document.createElement('img')
image.src =  teddy.imageUrl
image.id = 'image'
var div = document.createElement('div')
var nom = document.createElement('h3')
 nom.textContent = teddy.name
 nom.id = "nom"
var price = document.createElement('p')
price.textContent = 'Prix: ' + teddy.price/100 + ' €'
price.id = 'prix'
var description = document.createElement('p')
description.textContent = 'Description: ' + teddy.description
var label = document.createElement('label')
label.textContent = "Choix de la couleur : "
var color = document.createElement('select')
color.id = 'choix'

//      choix de la couleur

var choix = teddy.colors;
choix.id = "couleur"
 for (var i = 0; i < choix.length; i++) {
   var option = document.createElement('option');
   option.textContent = choix[i];
   option.id = "couleur"
   color.appendChild(option);
 }   

 //         Quantité
 var qte = document.createElement('label')
 qte.textContent = "quantité : "
var number = document.createElement('input');
number.id = "quantite"
number.type = "number"
number.value = "1"

 //         panier

basket = document.createElement ('input')
basket.type = "button"
basket.id = "stockage"
basket.value = "Ajouter au panier"

basket.addEventListener('click', function() {
    if(typeof localStorage!='undefined' && JSON) {
        var panier = {
            nom:document.getElementById('nom').textContent,
            prix: teddy.price/100,
            couleur:document.getElementById('choix').value,
            quantite:document.getElementById('quantite').value
        }
        localStorage.setItem('panier',JSON.stringify(panier));
    } else alert("localStorage n'est pas supporté");
    console.log(localStorage)
})

console.log(localStorage.panier)

// mise en place des éléments

produit.appendChild(article)
article.appendChild(image)
article.appendChild(div)
div.appendChild(nom)
div.appendChild(price)
div.appendChild(description)
div.appendChild(label);
div.appendChild(color);
div.appendChild(qte);
div.appendChild(number);
div.appendChild(basket)