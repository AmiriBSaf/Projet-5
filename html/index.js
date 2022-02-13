//////////Apple API////////////////////////////

fetch('http://localhost:3000/api/products')
    .then((response) => response.json())
    .then((getAnswer) => {
        Product(getAnswer)
    })

function Product(data) {
    const getProduct = data 

        data.forEach((everyProduct) => {
            console.table(data)
            
            
    let productHref = document.createElement("a")
    productHref.href = `./product.html?id = ${data._id}`
    

    const inSection = document.querySelector("#items")
    inSection.appendChild(productHref)

///insert in article
    let productArticle = document.createElement("article")
    productHref.appendChild(productArticle)

    //inser image in article///
    let productImg = document.createElement("img")
    productArticle.appendChild(productImg)
    productImg.src = everyProduct.imageUrl
    productImg.alt = everyProduct.altTxt

    /// h3///
    let productName = document.createElement("h3")
    productArticle.appendChild(productName)
    productName.classList.add("productName")
    productName.innerHTML = everyProduct.name

    /////////insert "p"////////

    let ProductDetails = document.createElement("p")
    productArticle.appendChild(ProductDetails)
    ProductDetails.classList.add("productDescription")
    ProductDetails.innerHTML = everyProduct.description;
    
})

}


/*



        
//insersation ("a")///









*/
