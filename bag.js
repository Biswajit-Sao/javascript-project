
let bagItemObjects;

onLoad();

function onLoad(){
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary(){
    let bagSummaryElement=document.querySelector('.bag-summary');
    let totalItem=bagItemObjects.length;
    let totalMRP=0;
    let totalDiscount=0;
    let cFees=99;
    bagItemObjects.forEach(bagItem=>{
        totalMRP+=bagItem.original_price;
        totalDiscount +=bagItem.original_price-bagItem.current_price;
    })

    let finalPayment=totalMRP-totalDiscount+cFees;

    bagSummaryElement.innerHTML=`
            <div class="bag-details-container">
                <div class="price-header">PRICE DETALS (${totalItem}Items)</div>
            </div>
            <div class="price-item">
                <span class="price-item-tag">Total MRP</span>
                <span class="price-item-value">Rs ${totalMRP}</span>
            </div>
            <div class="price-item">
                <span class="price-item-tag">Discount on MRP</span>
                <span class="price-item-value">RS ${totalDiscount}</span>
            </div>
            <div class="price-item">
                <span class="price-item-tag">Convenience fee</span>
                <span class="price-item-value">RS 99</span>
            </div>
            <hr>
            <div class="price-footer">
                <span class="price-item-tag">TOTAL AMOUNT</span>
                <span class="price-item-value">RS ${finalPayment}</span>
            </div>


        </div>

        <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
        </button>
    
    
    `
}

function loadBagItemObjects(){
    bagItemObjects=bagItems.map(itemId=>{
        for(let i=0;i<item.length;i++){
            if(itemId == item[i].id){
                return item[i];
            }
        }
    })
    // console.table(bagItemObjects);
}

function displayBagItems(){
    let containerElement=document.querySelector('.bag-items-container');
    let innerHTML='';
   bagItemObjects.forEach(bagItem=>{
    innerHTML+=generateItemHTML(bagItem);
   });
   containerElement.innerHTML=innerHTML;


}

function removeFromBag(itemId){
    bagItems=bagItems.filter(bagItemId => bagItemId !=itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();
}


function generateItemHTML(item){
    return `<div class="bag-items-container">
                <div class="item-left-part">
                    <img class="bag-item-img" src="${item.item_image}" alt="">
                </div>
                
                <div class="item-right-part">
                    <div class="company">
                    ${item.company_name}
                    </div>
                    <div class="item-name">
                    ${item.item_name}
                    </div>
                    <div class="price-container">
                        <span class="current-price">Rs${item.current_price}</span>
                        <span class="orignial-price">Rs${item.original_price}</span>
                        <span class="discount">(${item.discount_percentagr}% OFF)</span>

                    </div>

                    <div class="return-period">
                        <span class="return-period-days">14 days</span> return available
                    </div>

                    <div class="delivery-details">
                        Delivery by
                        <span class="delivery-detail-days">10 jan 2024</span>
                    </div>


                </div>
                <div class="remove-from-cart" onclick="removeFromBag(${item.id})">x</div>
        </div>
    
    
    `;

}