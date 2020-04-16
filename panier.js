function nombreTotalArticles() {
    let nombreArticles = localStorage.getItem('nombreArticles');
    if( nombreArticles ) {
        document.querySelector('#panier').textContent = nombreArticles;
    }
}

function creationPanier(){

let data = localStorage.getItem('panier');
data = JSON.parse(data);

   // console.log(data)
    var button = document.createElement('button')
    button.textContent = "vider le panier"

    var titre = document.getElementById('title')
    titre.textContent = 'Votre panier'

    let total = localStorage.getItem('prixTotal')
    total = JSON.parse(total)

    let prixTotal = document.createElement('h4')
    prixTotal.textContent = "Prix total : " + total + " €"


    let productContainer = document.getElementById("ourson");

    if( data && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(data).map( (teddy) => {
    
            var article = document.createElement('article')
                    
            var image = document.createElement('img')
            image.src =  teddy.img
                    
            var div = document.createElement('div')
            var nom = document.createElement('h3')
            nom.textContent = teddy.id
            var prix = document.createElement('p')
            prix.textContent = 'Prix: ' + teddy.prix + ' €'  
            var couleur = document.createElement('p')
            couleur.textContent = 'La couleur est : ' + teddy.couleur
            var modifQte = document.createElement('p')
            modifQte.textContent = "Il y a : "
            var plus = document.createElement('button')
            plus.textContent = " + "
            plus.id = "plus"
            var moins = document.createElement('button')
            moins.textContent = " - "
            moins.id = "moins"
            var quantite = document.createElement('span')
            quantite.textContent =  teddy.quantite + ' produit(s)'
            let qte = teddy.quantite
            var supprime = document.createElement('button')
            supprime.textContent = "supprimer l'article"
            supprime.id = "supprime"
                
            var total = document.createElement('p')
            total.textContent = 'Prix total: ' + teddy.prix * teddy.quantite + ' €'
            total.id = 'total'  
    
            // mise en place des éléments 
    
            ourson.appendChild(article);
            ourson.appendChild(prixTotal);
                               
            article.appendChild(image);
            article.appendChild(div);
                    
            div.appendChild(nom);
            div.appendChild(prix);
            div.appendChild(couleur);
            div.appendChild(modifQte);
            modifQte.appendChild(quantite);
            modifQte.appendChild(plus);
            modifQte.appendChild(moins);
            div.appendChild(total);
            div.appendChild(supprime)
            //div.appendChild(description);
            //div.appendChild(link)
            //console.log(data) 
        })    
    } else if (data == {} || data == null) {
        var div = document.createElement('div')
        div.textContent = "votre panier est vide"
        ourson.appendChild(div);
    }
    deleteButtons()
    modifQuantite()
}
function modifQuantite() {
    let moins = document.querySelectorAll('#ourson #moins');
    let plus = document.querySelectorAll('#ourson #plus');
    let nombreArticles = localStorage.getItem('nombreArticles');
    nombreArticles = parseInt(nombreArticles)
    let prixTotal = localStorage.getItem("prixTotal");
    prixTotal = parseInt(prixTotal)
    let newQuantite = 0;
    let article = '';
    let panier = localStorage.getItem('panier');
    panier = JSON.parse(panier);

    for(let i=0; i < plus.length; i++) {
        moins[i].addEventListener('click', () => {
            console.log(panier);
            newQuantite = moins[i].parentElement.querySelector('span').textContent;
            newQuantite = parseInt(newQuantite)
            console.log(newQuantite);
            article = moins[i].parentElement.parentElement.firstChild.textContent
           console.log(panier[article]);

           if( panier[article].quantite > 1 ) {
            panier[article].quantite -= 1;
            localStorage.setItem('nombreArticles', nombreArticles -= 1);
            localStorage.setItem('prixTotal', prixTotal - panier[article].prix);
            localStorage.setItem('panier', JSON.stringify(panier));
            creationPanier();
            nombreTotalArticles();
            }
            
        });

        plus[i].addEventListener('click', () => {
            console.log(panier);
            newQuantite = plus[i].parentElement.querySelector('span').textContent;
            console.log(typeof newQuantite);
            console.log(newQuantite);
            newQuantite = parseInt(newQuantite)
            article = plus[i].parentElement.parentElement.firstChild.textContent
            console.log(typeof article);
            console.log(article);
            
            panier[article].quantite = parseInt(panier[article].quantite)
            panier[article].quantite += 1;
            localStorage.setItem('nombreArticles', nombreArticles += 1);
            localStorage.setItem('prixTotal', prixTotal + panier[article].prix);
            localStorage.setItem('panier', JSON.stringify(panier));
            creationPanier();
            nombreTotalArticles();
        });
    }
}
function deleteButtons() {
    let deleteButtons = document.querySelectorAll('#ourson #supprime');
    let nomProduit;
    let nombreArticles = localStorage.getItem('nombreArticles');
    let prixTotal = localStorage.getItem("prixTotal");
    let panier = localStorage.getItem('panier');
    panier = JSON.parse(panier);

    console.log(panier)

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            nomProduit = deleteButtons[i].parentElement.firstChild.textContent;
            console.log(nomProduit);
            console.log(panier[nomProduit].quantite);
            localStorage.setItem('nombreArticles', nombreArticles - panier[nomProduit].quantite);
            localStorage.setItem('prixTotal', prixTotal - ( panier[nomProduit].prix * panier[nomProduit].quantite));

            delete panier[nomProduit];
            localStorage.setItem('panier', JSON.stringify(panier));

            creationPanier();
            nombreTotalArticles();
        })
    }
}

function contact() {
    stockage.addEventListener('click', () => {
        if (document.querySelector('input') != "") {
            console.log('clic')
        } else {
            var product_id = localStorage.getItem('panier')
            product_id = JSON.parse(product_id)
            let coordonnees = {
                nom:document.getElementById('nom').value,
                prenom:document.getElementById('prenom').value,
                email:document.getElementById('email').value,
                adresse:document.getElementById('adresse').value,
                cp:document.getElementById('cp').value,
                ville:document.getElementById('ville').value
            }
            let contact = {
                [coordonnees.nom]:coordonnees
            }
            localStorage.setItem('contact', JSON.stringify(contact))
            localStorage.setItem('product_id', JSON.stringify(product_id))
            console.log(contact)
        }
    })
}

contact()
nombreTotalArticles();
creationPanier();

