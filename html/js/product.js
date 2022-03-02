
//////////////////////
 //Récupération de l'id via les paramètres de l'url
 let kanap = window.location.href
 var kanapUrl = new URL(kanap)
 var KanapId = kanapUrl.searchParams.get("id")
 console.log(KanapId)
 
 let article =[]
 
 ////lancer L'API
 const getproduct = async () => {
     await fetch("http://localhost:3000/api/products/" + KanapId)
     .then((response) => response.json())
     .then((getAnswer) => {
         article = getAnswer
         console.table(article)
     })
 } 
 
 const showProduct = async () => {
     await getproduct()
     
     const altTxt = article.altTxt
     const colors = article.colors
     const description = article.description
     const imageUrl = article.imageUrl
     const name = article.name
     const price = article.price
 
  let image = document.createElement('img')
  let showImg =  document.querySelector(".item__img")
  showImg.appendChild(image)
  image.src =article.imageUrl
  image.alt =article.altTxt
 
  ////insert h1
 
 let h1 = document.getElementById("title")
 h1.innerHTML = name
 
 /// insert price
 
 let prix = document.getElementById("price")
     prix.textContent = price
 
 //// insert "description"
 
 let text = document.getElementById("description")
     text.innerHTML = description
 
 ////insert color et option
 
 let selectProductColors = document.getElementById("colors")
    colors.forEach((colorLiked) =>{
         const colorOptions = document.createElement("option")
         colorOptions.value = colorLiked
         colorOptions.textContent =colorLiked 
         selectProductColors.appendChild(colorOptions)
         console.log(colorOptions)
     })
    
 }
 
  ///panier
  const button = document.getElementById("addToCart")
 button.addEventListener("click",()=>{
    let productSelected = JSON.parse(localStorage.getItem("productData"))
    console.log(button)
////insert new data in our object
    const myData =Object.assign({}, article,{
        color : colorChoise = document.getElementById("colors").value,
        quantity : quantityChoice = document.getElementById("quantity").value,
        
    })
    console.log (myData)
    if(productSelected == null){
       productSelected = []
       productSelected.push(article)
       console.log(productSelected)
       localStorage.setItem("productData", JSON.stringify(productSelected))

    }
     
 })

    
     // make objet et get data from this object to locol storage
    function addPanier(){
         function addtoPanier(){
        
     
    
}
  
/// with setItem we save the value in storage
   

//if (colorChoise.value =="") {
    //Swal.fire("veuillez choisissez une couleur")
  //  }else if (quantityChoice.value == 0 || quantityChoice.value == "" ||quantityChoice.value < 100){
      //  Swal.fire("veuillez choisissez une quantité")
    
        //alert("veuillez choisissez une couleur et une quantité")
         
         
         //if( quantityChoice > 0 || quantityChoice <=100 ||quantityChoice == null ){
             //alert("veuille choississez une quantity")
         //}
/// direction to Panier
//window.location.href = "cart.html" 
  
 
    
//}
 
   
} 
 
 showProduct()