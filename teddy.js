let teddy = JSON.parse(sessionStorage.pelu)
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
var button = document.createElement('button')
button.id = "button"
button.textContent = "vider tout"
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
        let paniers = {
            id:document.getElementById('nom').textContent + "  " + document.getElementById('choix').value,
            img:teddy.imageUrl,
            nom:document.getElementById('nom').textContent,
            prix: teddy.price/100,
            couleur:document.getElementById('choix').value,
            quantite:document.getElementById('quantite').value
        }
            
        console.log(paniers)

        qte = document.getElementById('quantite').value
        console.log(typeof qte)

        let quantite = parseInt(qte)
        console.log(typeof quantite)

        let prix = teddy.price/100
        console.log(typeof prix)
        console.log(prix)
 
        nombreArticles()
        prixTotal()
        nombreTotalArticles()
        
        //      calcul du nombre d'articles

        function nombreArticles(produit) {
            let nombreProduit = localStorage.getItem('nombreArticles');

            nombreProduit = parseInt(nombreProduit);
            quantity = parseInt(quantite)

            if(nombreProduit) {
                localStorage.setItem('nombreArticles', nombreProduit + quantite)
            } else {
                localStorage.setItem('nombreArticles', quantite )
            }
            setItems(produit) 
        }

        //      envoie au panier

        function setItems(produit){
            let panier = localStorage.getItem('panier')
            panier = JSON.parse(panier)
            let article = paniers.id
            if (panier != null) {
               
                
                if(panier[article] == undefined) {
                    panier = {
                        ...panier,
                        [article]:paniers
                    }
                } else {
                panier[article].quantite = parseInt(panier[article].quantite)
                paniers.quantite = parseInt(paniers.quantite)
                panier[article].quantite += paniers.quantite  
                }              
            } else {
                panier = {
                    [article]:paniers
                    }
            }
            localStorage.setItem('panier', JSON.stringify(panier))

        }
        //alert("article ajouté au panier");

        //      calcul du prix Total

        function prixTotal(){
            let prixTotal = localStorage.getItem('prixTotal');
            prixTotal = parseInt(prixTotal)
            quantity = parseInt(quantite)
            prix = parseInt(prix)

            if(prixTotal) {
                localStorage.setItem('prixTotal', prixTotal + prix * quantite)
            } else {
                localStorage.setItem('prixTotal', prix * quantite )
            }
        }

        function nombreTotalArticles() {
            let nombreArticles = localStorage.getItem('nombreArticles');
            if( nombreArticles ) {
                document.querySelector('#panier').textContent = nombreArticles;
            }
        }
        

    } else {
        alert("localStorage n'est pas supporté")
    }

})

function nombreTotalArticles() {
    let nombreArticles = localStorage.getItem('nombreArticles');
    if( nombreArticles ) {
        document.querySelector('#panier').textContent = nombreArticles;
    }
  }
  nombreTotalArticles()
  

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