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
                        <p>${categories.category_name}</p>
        `;
        categories_Container.append(categories_Div);
    }
}




loadCategories();