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
         <button onclick="loadCard(${categories.id})" class="btn btn-ghost font-normal w-full">${categories.category_name}</button>
         </div>
        `;
        categories_Container.append(categories_Div);
    }

}
//  load and display all card
const loadAllCard=()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res)=>res.json())
    .then((json) => displayAllCard(json.plants))
}
const displayAllCard=(allCard)=>{
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML= "";

    allCard.forEach(plant => {
        console.log(plant)
        const card = document.createElement("div");
        card.innerHTML=`
        <div class="w-[280px] h-full rounded-lg p-4 bg-white space-y-3">
                            <img class="rounded-lg size-60 w-full" src="${plant.image}" alt="">
                            <p class="font-semibold">${plant.name}</p>
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
}



// Card

const loadCard=(id) =>{
    // console.log(id)
    const url=`https://openapi.programming-hero.com/api/category/${id}`
    // console.log(url)
    fetch(url)
    .then((res)=>res.json())
    .then((allData)=>displayCard(allData.plants))

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
                            <p class="font-semibold">${plant.name}</p>
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

}




loadCategories();
loadAllCard();