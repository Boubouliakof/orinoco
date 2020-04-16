//    Récupération de l'API

var get = function (url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest()
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText)
          } else {
            reject(xhr)
          }
        }
      }

      xhr.open('GET','http://localhost:3000/api/teddies/', true)
      
      xhr.send()
    })
  }

var catchError = function(e){
  console.error('Erreur AJAX', e)
}
get();

var ours = function (){
  return get('http://localhost:3000/api/teddies/').then(function(response) {
      var teddies = JSON.parse(response)
      console.log("dans ours() :"+teddies)
    return teddies 
    })
}

let teddy;  
console.log('apres get: '+teddy)
let ourson = document.getElementById('ourson');

  // Affiche la liste des articles

ours().then(function(teddies){
  console.log(teddies)

  teddies.forEach( teddy=>{
  
    var titre = document.getElementById('title')
    titre.textContent = 'Découvrez notre liste d\'articles'
    var article = document.createElement('article')
    var image = document.createElement('img')
    image.src =  teddy.imageUrl
    let link = document.createElement('button')
    link.id = "lien"
     link.href = "http://localhost:3000/api/teddies/" + teddy._id//)
     link.textContent = "fiche du produit"
    var div = document.createElement('div')
    var nom = document.createElement('h3')
     nom.textContent = teddy.name
    var price = document.createElement('p')
    price.textContent = 'Prix: ' + teddy.price/100 + ' €'
    var description = document.createElement('p')
    description.textContent = 'Description: ' + teddy.description
    var id = teddy._id

    // mise en place des éléments 

    ourson.appendChild(article);
    article.appendChild(image);
    article.appendChild(div);
    div.appendChild(nom);
    div.appendChild(price);
    div.appendChild(description);
    div.appendChild(link)
    
    console.log(teddy)

    //     mise en stockage

    link.addEventListener('click', function() {
      if(typeof sessionStorage!='undefined' && JSON) {
        var peluche = teddy
        sessionStorage.setItem('pelu',JSON.stringify(peluche));
      } else alert("sessionStorage n'est pas supporté");
    })

    // Redirection vers la page produit

    link.addEventListener('click', function(e){
      window.location.href = "produit.html"
    }) 
  }) 
})
function nombreTotalArticles() {
  let nombreArticles = localStorage.getItem('nombreArticles');
  if( nombreArticles ) {
      document.querySelector('#panier').textContent = nombreArticles;
  }
}
nombreTotalArticles()
