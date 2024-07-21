let bagItems=[];
onLoad()
function onLoad(){
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems=bagItemsStr ? JSON.parse(bagItemsStr):[];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
   
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility='hidden';
    }

}

function displayItemsOnHomePage(){
    let itemsContainerElement=document.querySelector('.items-container');
    let innerHTML='';
    if(!itemsContainerElement){
        return;
    }

item.forEach(item =>{
    innerHTML =`
    <div class="item-container">
    <img class="item-image" src="${item.item_image}" alt="ha">
    <div class="rating">
        ${item.rating.stars} ⭐⭐⭐⭐⭐ | ${item.rating.noOfReview}
    </div>
    <div class="company-name">
        ${item.company_name}
    </div>
    <div class="item-name">
        ${item.item_name}
    </div>
    <div class="price">
        <span class="current-price">Rs${item.current_price}</span>
        <span class="orignial-price">Rs${item.original_price}</span>
        <span class="discount">(${item.discount_percentagr}% OFF)</span>


    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>

    </div>
        
    `+innerHTML;

});
itemsContainerElement.innerHTML=innerHTML;
}


// THAT PART CREAT A items.js
// let item={
//     item_image:'imaje/project-1.png',
//     rating:{
//         stars:4.5,
//         noOfReview:1400,
//     },
//     company_name:'Ankit power and matal' ,
//     item_name:'Lorem ipsum dolor sit amet consectetur adipisicing.',
//     current_price:500,
//     original_price:2000,
//     discount_percentagr:42,

// }

