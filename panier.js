let panier = JSON.parse(localStorage.panier)

console.log(panier)

var titre1 = document.getElementById('title')
titre1.textContent = 'Votre panier'
var article = document.createElement('article')

var div = document.createElement('div')
var nom = document.createElement('h3')
 nom.textContent = panier.nom
 nom.id = "nom"
 var color = document.createElement('p')
color.textContent = "Choix de la couleur : " + panier.couleur

var price = document.createElement('p')
price.textContent = 'Prix: ' + panier.prix + ' € / U'
price.id = 'prix'
var qte = document.createElement('p')
qte.textContent = "Nombre d'articles : " + panier.quantite
var total = document.createElement('p')
total.textContent = 'Prix total: ' + panier.prix * panier.quantite + ' €'
total.id = 'total'

ourson.appendChild(article)

article.appendChild(div)
div.appendChild(nom)
div.appendChild(color)

div.appendChild(price)
div.appendChild(qte)
div.appendChild(total)

