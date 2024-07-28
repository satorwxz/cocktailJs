
let submit=document.querySelector("#submit");
let searchField=document.querySelector("#searchField");
const row=document.querySelector("#row");
const container=document.querySelector("#container");
const reset=document.querySelector("#reset");



fetch(`https://www.thecocktaildb.com/api/json/v1/1/randomselection.php`)
    .then(res => res.json())
    .then(data => {
        data.drinks.forEach(meal => {
            const div=document.createElement("div");
            div.classList.add('col-4');
            div.innerHTML=`
        <div class="card" id="${drink.id}">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${Drink.strDrink}">
            <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strInstructions.slice(0,100)}...</p>
                <a href="meal.html?id=${drink.idDrink}" class="btn btn-primary">Read more.</a>
            </div>
        </div>
        `
            row.appendChild(div);
        })
    })


submit.addEventListener("click", () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchField.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.drinks.forEach ( drink => {
                container.innerHTML=`
            <div class="only-card" id="${drink.id}">
            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <div class="card-bodyonly">
                    <h1 class="card-title">${drink.strDrink}</h1>
                       <h4>Ingredients:</h4>
                    <div class="ul">
                <ul>
                    <li > ${drink.strIngredient1}</li>
                    <li > ${drink.strIngredient2}</li>
                    <li > ${drink.strIngredient3}</li>
                    <li > ${drink.strIngredient4}</li>
                    <li > ${drink.strIngredient5}</li>
                    <li > ${drink.strIngredient6}</li>
                    </ul>
                    <ul>
                    <li > ${drink.strMeasure1}</li>
                    <li > ${drink.strMeasure2}</li>
                    <li > ${drink.strMeasure3}</li>
                    <li > ${drink.strMeasure4}</li>
                    <li > ${drink.strMeasure5}</li>
                    <li > ${drink.strMeasure6}</li>

                    </ul>
                </div>
                <h4>Instructions:</h4>
                    <ul>
                    <li>${drink.strInstructions}</li>
                    <li>${drink.strInstructionsES}</li>
                    <li>${drink.strInstructionsDE}</li>
                    <li>${drink.strInstructionsFR}</li>
                    <li>${drink.strInstructionsIT}</li>
</ul>
                </div>
            </div>
            `
                row.appendChild(div);
            })
        })
})

reset.addEventListener("click", () => {
    location.reload();
})





