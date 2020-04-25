<<<<<<< HEAD
let data;

function creationPanier(){

  let data = localStorage.getItem('panier');
  data = JSON.parse(data);

    console.log(data)

    let vidagePanier = document.getElementById('vidage');
    vidagePanier.addEventListener('click', function(){
        localStorage.clear();
        window.location.reload()
    })
    
    var titre = document.getElementById('title')
    titre.textContent = 'Votre panier'

    var total = localStorage.getItem('prixTotal')
    var prixTotal = document.getElementById('total')
    if (total != null) {
        prixTotal.textContent = 'Le montant de votre commande : ' + total +  ' €'
        prixTotal.id = 'prixTotal'  
      } else {
        prixTotal.textContent = 'Le montant de votre commande : 0 €'
      }

    let productContainer = document.getElementById("basket");

    if( data == null ) {
      var div = document.createElement('div')
      div.textContent = "votre panier est vide"
      basket.appendChild(div);
    } else {
        productContainer.innerHTML = '';
        Object.values(data).map( (teddy) => {
    
            var article = document.createElement('article')
                    
            var image = document.createElement('img')
            image.src =  teddy.img
              
            var div = document.createElement('div')
            var nom = document.createElement('p')
            nom.textContent = teddy.nom
            var prix = document.createElement('p')
            prix.textContent = 'Prix: ' + teddy.prix + ' €'  
            var supprime = document.createElement('button')
            supprime.textContent = "supprimer l'article"
            supprime.id = "supprime"
               
           // mise en place des éléments 
    
            basket.appendChild(article);
                              
            article.appendChild(image);
            article.appendChild(div);
                    
            div.appendChild(nom);
            div.appendChild(prix);
            div.appendChild(supprime)

        })  
          
    } 

    
    deleteButtons()
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('#basket #supprime');
    let nomProduit;
    let prixTotal = localStorage.getItem("prixTotal");
    let article = localStorage.getItem('panier');
    article = JSON.parse(article);

    console.log(article)

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
          nomProduit = deleteButtons[i].parentElement.firstChild.textContent;
            console.log(nomProduit);
            localStorage.setItem('prixTotal', prixTotal - (article[nomProduit].prix));

            delete article[nomProduit];
            localStorage.setItem('panier', JSON.stringify(article));
            window.location.reload()
            creationPanier();
        })
    }
}

/*Récupération des Id des produits de la commande*/

function productId() {
let products = localStorage.getItem('panier');
if(products != null) {
    Object.values(products).map( (teddy) => {
    products = teddy.id
    console.log("products : " + products);
    console.log("type OF products :" + typeof (products));
  });
}
};

productId();

let products = [];
console.log("products apres ID: " + products);

//requete finale de commande contenant les informations de contact et les IDs produit
function achat() {

    let contact = {
        lastName:document.getElementById('lastName').value,
        firstName:document.getElementById('firstName').value,
        address:document.getElementById('address').value,
        city:document.getElementById('city').value,
        email:document.getElementById('email').value
    }
    productId();
    let objt = {
      contact,
      products
    };
    console.log("objt : " + objt);
    let achat = JSON.stringify(objt);
    console.log(achat);
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE) {
        let confirmation = JSON.parse(this.responseText);
        console.log(confirmation);
        sessionStorage.setItem('order', JSON.stringify(confirmation))
        let prix = localStorage.getItem('prixTotal');
        prix = JSON.parse(prix)
        sessionStorage.setItem('prix', JSON.stringify(prix))
        window.location.href = "commande.html";
        localStorage.clear();
      };
    }
request.open("post", "http://localhost:3000/api/teddies/order");
request.setRequestHeader("Content-Type", "application/json");
request.send(achat);
};


// Validation et envoie du formulaire.

let valid = document.getElementById('formulaire');
let prenom = document.getElementById('firstName');
let nom = document.getElementById('lastName');
let adresse = document.getElementById('address');
let ville = document.getElementById('city');
let email = document.getElementById('email');

function validerForm(event) {
  console.log('ok');
  achat();

  var form_OK = true;
  if(prenom.value == "" || nom.value == "" || adresse.value == "" || ville.value == "" ) {
    var form_OK = false; 
  }
  var regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/ ;
  if (regex.exec(email.value) == null) {
    form_OK = false;
  }
  if(!form_OK){
  event.preventDefault();
  }
}

valid.addEventListener('submit', validerForm)

=======
let data;

function creationPanier(){

  let data = localStorage.getItem('panier');
  data = JSON.parse(data);

    console.log(data)

    let vidagePanier = document.getElementById('vidage');
    vidagePanier.addEventListener('click', function(){
        localStorage.clear();
        window.location.reload()
    })
    
    var titre = document.getElementById('title')
    titre.textContent = 'Votre panier'

    var total = localStorage.getItem('prixTotal')
    var prixTotal = document.getElementById('total')
    if (total != null) {
        prixTotal.textContent = 'Le montant de votre commande : ' + total +  ' €'
        prixTotal.id = 'prixTotal'  
      } else {
        prixTotal.textContent = 'Le montant de votre commande : 0 €'
      }

    let productContainer = document.getElementById("basket");

    if( data == null) {
      var div = document.createElement('div')
      div.textContent = "votre panier est vide"
      basket.appendChild(div);
    } else {
        productContainer.innerHTML = '';
        Object.values(data).map( (teddy) => {
    
            var article = document.createElement('article')
                    
            var image = document.createElement('img')
            image.src =  teddy.img
              
            var div = document.createElement('div')
            var nom = document.createElement('p')
            nom.textContent = teddy.id
            var prix = document.createElement('p')
            prix.textContent = 'Prix: ' + teddy.prix + ' €'  
            var couleur = document.createElement('p')
            couleur.textContent = 'Couleur : ' + teddy.couleur
            let qte = teddy.quantite
            var supprime = document.createElement('button')
            supprime.textContent = "supprimer l'article"
            supprime.id = "supprime"
               
           // mise en place des éléments 
    
            basket.appendChild(article);
                              
            article.appendChild(image);
            article.appendChild(div);
                    
            div.appendChild(nom);
            div.appendChild(prix);
            div.appendChild(couleur);
            div.appendChild(supprime)

        })  
          
    } 

    
    deleteButtons()
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('#basket #supprime');
    let productName;
    let productNumbers = localStorage.getItem('nombreArticles');
    let prixTotal = localStorage.getItem("prixTotal");
    let cartItems = localStorage.getItem('panier');
    cartItems = JSON.parse(cartItems);

    console.log(cartItems)

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.firstChild.textContent;
            console.log(productName);
            localStorage.setItem('nombreArticles', productNumbers - cartItems[productName].quantite);
            localStorage.setItem('prixTotal', prixTotal - ( cartItems[productName].prix * cartItems[productName].quantite));

            delete cartItems[productName];
            localStorage.setItem('panier', JSON.stringify(cartItems));

            creationPanier();
        })
    }
}

/*Récupération des Id des produits de la commande*/

function productId() {
let products = localStorage.getItem('panier');
if(products != null) {
    Object.values(products).map( (teddy) => {
    products = teddy.id
    console.log("products : " + products);
    console.log("type OF products :" + typeof (products));
  });
}
};

productId();

let products = [];
console.log("products apres ID: " + products);

//requete finale de commande contenant les informations de contact et les IDs produit
function achat() {

    let contact = {
        lastName:document.getElementById('lastName').value,
        firstName:document.getElementById('firstName').value,
        address:document.getElementById('address').value,
        city:document.getElementById('city').value,
        email:document.getElementById('email').value
    }
    productId();
    let objt = {
      contact,
      products
    };
    console.log("objt : " + objt);
    let achat = JSON.stringify(objt);
    console.log(achat);
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE) {
        let confirmation = JSON.parse(this.responseText);
        console.log(confirmation);
        sessionStorage.setItem('order', JSON.stringify(confirmation))
        let prix = localStorage.getItem('prixTotal');
        prix = JSON.parse(prix)
        sessionStorage.setItem('prix', JSON.stringify(prix))
        window.location.href = "commande.html";
        localStorage.clear();
      };
    }
request.open("post", "http://localhost:3000/api/teddies/order");
request.setRequestHeader("Content-Type", "application/json");
request.send(achat);
};


// Validation et envoie du formulaire.

let valid = document.getElementById('formulaire');
let prenom = document.getElementById('firstName');
let nom = document.getElementById('lastName');
let adresse = document.getElementById('address');
let ville = document.getElementById('city');
let email = document.getElementById('email');

function validerForm(event) {
  console.log('ok');
  achat();

  var form_OK = true;
  if(prenom.value == "" || nom.value == "" || adresse.value == "" || ville.value == "" ) {
    var form_OK = false; 
  }
  var regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/ ;
  if (regex.exec(email.value) == null) {
    form_OK = false;
  }
  if(!form_OK){
  event.preventDefault();
  }
}

valid.addEventListener('submit', validerForm)

>>>>>>> 859c13d519e47c6fc6760956f52540ba291bd2c8
creationPanier()