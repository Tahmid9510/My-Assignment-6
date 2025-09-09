let all_price=[];
let all_card=[];

// Category load and display

const loadCategories=()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) =>displayCategory(json.categories))
};

const displayCategory = (allCategory) =>{
    const categories_Container = document.getElementById("left-container");
    categories_Container.innerHTML="";

    for(let categories of allCategory){
        const categories_Div =document.createElement("div")
        categories_Div.innerHTML=`
        <div class=" ">
         <button id="category-btn-${categories.id}" onclick="loadCard(${categories.id})" class="btn btn-ghost font-normal w-full category-btn">${categories.category_name}</button>
         </div>
        `;
        categories_Container.append(categories_Div);
    }

}

//  load and display all card
const loadAllCard=()=>{
    manageSpinner(true)
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res)=>res.json())
    .then((json) => displayAllCard(json.plants))
}
const displayAllCard=(allCard)=>{
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML= "";

    allCard.forEach(plant => {
        // console.log(plant)
        const card = document.createElement("div");
        card.innerHTML=`
        <div class="w-[280px] h-full rounded-lg p-4 bg-white space-y-3">
                            <img class="rounded-lg size-60 w-full" src="${plant.image}" alt="">
                            <p onclick="loadTreeDetails(${plant.id})" class="font-semibold">${plant.name}</p>
                            <p class=" font-light text-gray-900 text-xs h-20">${plant.description}</p>
                            <div class="flex justify-between">
                                    <div class="badge badge-success bg-[#DCFCE7] border-0">${plant.category}</div>
                                <p class="font-bold">৳<span id="t_price">${plant.price}</span></p>
                            </div>
                                <div class="flex justify-center items-center">
                             <button onclick="loadAddCard(${plant.id}); alert('${plant.name} added to cart!')" class="btn btn-active btn-secondary text-center bg-[#15803D] rounded-xl text-white border-0 w-full">Add to Cart</button>
                                </div>
                        </div>
        `;
        cardContainer.append(card);
        
    });
    manageSpinner(false)
    
}

// Active status remove
const removeActive=() =>{
    const btn = document.querySelectorAll(".category-btn")
    // console.log(btn)
    btn.forEach(btn=> btn.classList.remove("active"))
}

// Load Add card
const loadAddCard=(id) =>{
    // console.log(id)
    const url=`https://openapi.programming-hero.com/api/plant/${id}`
    // console.log(url)
    fetch(url)
    .then((res)=>res.json())
    .then((tree_data)=>displayAddCard(tree_data.plants))
}

const displayAddCard=(t_data)=>{
    // console.log(t_data)
    let price=parseInt(t_data.price);
    all_price.push(price)
    all_card.push(t_data)
    // console.log(total_price)
    // console.log(all_card)
    const cart_Container = document.getElementById("cart-container");
    cart_Container.innerHTML= "";
    for(let i=0;i<all_card.length;i++){
        // console.log(all_card[i])

        const cart = document.createElement("div");
        cart.innerHTML=`
         <div class="flex justify-between my-2 bg-[#F0FDF4] p-1 rounded-lg">
                            <div>
                                <p class="font-semibold">${all_card[i].name}</p>
                                <p class="font-normal text-gray-500">৳${all_card[i].price} x 1</p>
                            </div>
                            <button onclick="deleteCart(${all_card[i].id})" class="btn btn-ghost"><i class="fa-solid fa-xmark text-red-500"></i></button>
                            </div>
        `;
        cart_Container.append(cart);

    }
    let total_Price=0;
    for(let i=0;i<all_card.length;i++){
        total_Price+=all_card[i].price;
        // console.log(total_Price)
    }
    const t_price_container=document.getElementById("totalPrice-container");
    t_price_container.innerHTML=`  <p>Total:</p>
                            <p>৳<span>${total_Price}</span></p>`
    // console.log(all_price)

}
 // Delete func
const deleteCart=(id)=>{
        //fruits = fruits.filter(fruit => fruit.id !== 3);
        // console.log("Hellow I'm Delete button",id)
        all_card=all_card.filter(all_card=>all_card.id !=id)
        // console.log(id)
        const cart_Container = document.getElementById("cart-container");
    cart_Container.innerHTML= "";
    for(let i=0;i<all_card.length;i++){
        // console.log(all_card[i])

        const cart = document.createElement("div");
        cart.innerHTML=`
         <div class="flex justify-between my-2 bg-[#F0FDF4] p-1 rounded-lg">
                            <div>
                                <p class="font-semibold">${all_card[i].name}</p>
                                <p class="font-normal text-gray-500">৳${all_card[i].price} x 1</p>
                            </div>
                            <button onclick="deleteCart(${all_card[i].id})" class="btn btn-ghost"><i class="fa-solid fa-xmark text-red-500"></i></button>
                            </div>
        `;
        cart_Container.append(cart);

    }
    let total_Price=0;
    for(let i=0;i<all_card.length;i++){
        total_Price+=all_card[i].price;
        // console.log(total_Price)
    }
    const t_price_container=document.getElementById("totalPrice-container");
    t_price_container.innerHTML=`  <p>Total:</p>
                            <p>৳<span>${total_Price}</span></p>`
    // console.log(all_price)


    }

// Card

const loadCard=(id) =>{
    // console.log(id)
    manageSpinner(true)
    const url=`https://openapi.programming-hero.com/api/category/${id}`
    // console.log(url)
    fetch(url)
    .then((res)=>res.json())
    .then((allData)=>{
        removeActive();

        const click_category_btn = document.getElementById(`category-btn-${id}`)
        // console.log(click_category_btn)
        click_category_btn.classList.add("active");

        displayCard(allData.plants)
        
    })

}
const displayCard=(allData)=>{
    // console.log(allData)
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML= "";

    allData.forEach(plant => {
        // console.log(plant)
        const card = document.createElement("div");
        card.innerHTML=`
        <div class="w-[280px] h-full rounded-lg p-4 bg-white space-y-3">
                            <img class="rounded-lg size-60 w-full" src="${plant.image}" alt="">
                            <p onclick="loadTreeDetails(${plant.id})" class="font-semibold">${plant.name}</p>
                            <p class=" font-light text-gray-900 text-xs h-20 ">${plant.description}</p>
                            <div class="flex justify-between">
                                     <div class="badge badge-success bg-[#DCFCE7] border-0">${plant.category}</div>
                                <p class="font-bold">৳${plant.price}</p>
                            </div>
                                <div class="flex justify-center items-center">
                             <button onclick="loadAddCard(${plant.id}); alert('${plant.name} added to cart!')" class="btn btn-active btn-secondary text-center bg-[#15803D] rounded-xl text-white border-0 w-full">Add to Cart</button>
                                </div>
                        </div>
        `;
        cardContainer.append(card);
        
    });
    manageSpinner(false)

}

// Load and Display Tree details

const loadTreeDetails=(id)=>{
    const url =`https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
    .then((res)=>res.json())
    .then((details)=>displayTreeDetails(details.
plants
))

}
const displayTreeDetails=(treeDetails)=>{
    // console.log(treeDetails);
    const treeDetails_box=document.getElementById("treeDetails-container");
    treeDetails_box.innerHTML=`
    <div class="space-y-2">
    <p class="font-semibold">${treeDetails.name}</p>
    <img class="rounded-lg size-60 w-full" src="${treeDetails.image}" alt="">
    <p class="font-normal"><span class="font-semibold">Category:</span>${treeDetails.category}</p>
    <p class="font-normal"><span class="font-semibold">Price:</span> ${treeDetails.price}</p>
    <p class="font-normal"><span class="font-semibold">Description:</span> ${treeDetails.description}</p>
    </div>    
    `;
    document.getElementById("tree_modal").showModal();


};

// Manage spinner
const manageSpinner = (status) => {
    if(status==true){
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("card-container").classList.add("hidden");
    }
    else{
         document.getElementById("card-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");

    }
}




loadCategories();
loadAllCard();


