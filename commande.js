function commande(){

let data = localStorage.getItem('product_id');
data = JSON.parse(data);
let coordonnees = localStorage.getItem('contact');
coordonnees = JSON.parse(coordonnees);

   console.log(data)
   console.log(coordonnees)


    var titre = document.getElementById('title')
    titre.textContent = 'votre commande'

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
                               
            article.appendChild(image);
            article.appendChild(div);
                    
            div.appendChild(nom);
            div.appendChild(prix);
            div.appendChild(couleur);
            div.appendChild(modifQte);
            modifQte.appendChild(quantite);
            div.appendChild(total);
            //div.appendChild(description);
            //div.appendChild(link)
            //console.log(data) 
        })    
    } else if (data == {} || data == null) {
        var div = document.createElement('div')
        div.textContent = "votre panier est vide"
        ourson.appendChild(div);
    }

    let contact = document.getElementById("contact");

    if( coordonnees && contact ) {
        contact.innerHTML = '';
        Object.values(coordonnees).map( (coord) => {
    
            var article = document.createElement('article')
                                      
            var div = document.createElement('div')
            var nom = document.createElement('h3')
            nom.textContent = coord.nom
            var prenom = document.createElement('h3')
            prenom.textContent = coord.prenom
            var email = document.createElement('p')
            email.textContent =  coord.email
            var adresse = document.createElement('p')
            adresse.textContent = 'Votre adresse de livraison est le ' + coord.adresse
            var cp = document.createElement('p')
            cp.textContent =  coord.cp
            var ville = document.createElement('p')
            ville.textContent =  coord.ville
    
            // mise en place des éléments 
    
            ourson.appendChild(article);
                               

            article.appendChild(div);
                    
            div.appendChild(nom);
            div.appendChild(prenom);
            div.appendChild(email); 
            div.appendChild(adresse);
            div.appendChild(cp);
            div.appendChild(ville);

        })    
    } else if (coordonnees == {} || coordonnees == null) {
        var div = document.createElement('div')
        div.textContent = "votre commande est vide"
        ourson.appendChild(div);
    }
}
commande()
