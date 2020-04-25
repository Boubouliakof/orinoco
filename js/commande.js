<<<<<<< HEAD
function commande(){

let data = sessionStorage.getItem('order');
data = JSON.parse(data);
let prix = sessionStorage.getItem('prix');
prix = JSON.parse(prix);


   console.log(data.orderId)

    var titre = document.getElementById('title')
    titre.textContent = 'Récapitulatif de votre commande'

    let productContainer = document.getElementById("recap");

    if( data != null ) {
        productContainer.innerHTML = '';
        Object.values(data).map( () => {
            productContainer.innerHTML = 
            `<p>Merci pour votre commande.</p>

            <p>Celle-ci a été enregistrée sous le numéro :  ${data.orderId},
            pour un montant total de ${prix} €.</p>
            
            <p>Toute l'équipe Oriteddies vous remercie de votre visite.</p>`    
        })    
    } else {
        var div = document.createElement('div')
        div.textContent = "Vous n'avez pas encore validé votre commande"
        ourson.appendChild(div);
    }
}

commande();
=======
function commande(){

let data = sessionStorage.getItem('order');
data = JSON.parse(data);
let prix = sessionStorage.getItem('prix');
prix = JSON.parse(prix);


   console.log(data.orderId)

    var titre = document.getElementById('title')
    titre.textContent = 'Récapitulatif de votre commande'

    let productContainer = document.getElementById("recap");

    if( data != null ) {
        productContainer.innerHTML = '';
        Object.values(data).map( () => {
            productContainer.innerHTML = 
            `<p>Merci pour votre commande.</p>

            <p>Celle-ci a été enregistrée sous le numéro :  ${data.orderId},
            pour un montant total de ${prix} €.</p>
            
            <p>Toute l'équipe Oriteddies vous remercie de votre visite.</p>`    
        })    
    } else {
        var div = document.createElement('div')
        div.textContent = "Vous n'avez pas encore validé votre commande"
        ourson.appendChild(div);
    }
}

commande();
>>>>>>> 859c13d519e47c6fc6760956f52540ba291bd2c8
