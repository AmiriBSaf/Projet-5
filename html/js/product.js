//Récupération de l'id via les paramètres de l'url
const values = window.location.search
const urlParams = new URLSearchParams(values)
const productId = urlParams.get("id")



////lancer l'Api//////
fetch("http://localhost:3000/api/products/" + productId)
    .then(Response => Response.json())
    .then ((getAnswer => getData(getAnswer)))

    console.log()

///insert image

   function getData(data) { 
       const altTxt = data.altTxt
       const colors = data.colors
       const description = data.description
       const imageUrl = data.imageUrl
       const name = data.name
       const price = data.price
       const id = data.id

    let image = document.createElement('img')
    image.src = imageUrl
    image.alt = altTxt
    let showImg =  document.querySelector(".item__img")
    showImg.appendChild(image)

////insert h1

let h1 = document.getElementById("title")
h1.innerHTML = name

/// insert price

let prix = document.getElementById("price")
prix.innnerHTML = price



    

}
    
    

   



