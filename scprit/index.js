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
                                    <p class="bg-[#DCFCE7] rounded-lg text-[#15803D] text-[0.9rem] w-1/3">${plant.category}</p>
                                <p class="font-bold">৳${plant.price}</p>
                            </div>
                                <div class="flex justify-center items-center">
                             <button class="btn btn-active btn-secondary text-center bg-[#15803D] rounded-xl text-white border-0 w-full">Add to Cart</button>
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
                                    <p class="bg-[#DCFCE7] rounded-lg text-[#15803D] text-[0.9rem] w-1/3">${plant.category}</p>
                                <p class="font-bold">৳${plant.price}</p>
                            </div>
                                <div class="flex justify-center items-center">
                             <button class="btn btn-active btn-secondary text-center bg-[#15803D] rounded-xl text-white border-0 w-full">Add to Cart</button>
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