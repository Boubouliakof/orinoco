//    Connexion à l'API
var get = function (url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr);
          };
        };
      };

      xhr.open('GET','http://localhost:3000/api/teddies/', true);
     
      xhr.send();
    });
  };

var catchError = function(e){
  console.error('Erreur AJAX', e);
};

//    Récupération des données
get();
var ours = function () {
  return get('http://localhost:3000/api/teddies/').then(function (response) {
    var teddies = JSON.parse(response);
    return teddies;
  });
};
let ourson = document.getElementById('ourson');

  // Affiche la liste des articles

ours().then(function(teddies){
  console.log(teddies);

  teddies.forEach( teddy=>{
  
    var article = document.createElement('article');
    var image = document.createElement('img');
    image.src =  teddy.imageUrl;
    var div = document.createElement('div');
    var nom = document.createElement('h3');
    nom.textContent = teddy.name;
    var prix = document.createElement('h4');
    prix.textContent = 'Prix :';
    var price = document.createElement('p');
    price.textContent = teddy.price/100 + ' €';
    var desc = document.createElement('h4');
    desc.textContent = 'Description :';
    var description = document.createElement('p');
    description.textContent = teddy.description;
    var id = teddy._id;

    let link = document.createElement('a');
    link.id = "lien";
    link.href = 'produit.html?id=' + teddy._id;
    link.textContent = "fiche du produit";

    // mise en place des éléments 

    ourson.appendChild(article);
    article.appendChild(nom);
    article.appendChild(image);
    article.appendChild(div);
    div.appendChild(prix);
    div.appendChild(price);
    div.appendChild(desc);
    div.appendChild(description);
    div.appendChild(link)
    
    console.log(teddy);
  });
});