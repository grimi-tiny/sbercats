const container = document.querySelector("main");


const createCard = function(cat, parent) {
    const card = document.createElement("div");
    card.className = "card"

    const img = document.createElement("div");
    img.className = "card-pic"
    img.style.backgroundImage = `url(${cat.img_link})`;
            if(cat.img_link){
                    img.style.backgroundImage = `url(${cat.img_link})`;
            } else {
                img.style.backgroundImage = "url(img/cote.png)";
                img.style.backgroundImage = "contain";
                img.style.backgroundImage = "transparent";
            }
    const name = document.createElement("h3");
    name.innerText = cat.name;

    card.append(img, name);
    parent.append(card);
}

createCard({name: "Вася", img_link: "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D0%BB%D0%B5%D0%B2%D0%B83_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg"}, container);



fetch("https://sb-cats.herokuapp.com/api/2/tvhate/show")
    .then(res => res.json())
    .then(result =>{
      
        if(result.message==="ok"){
            console.log(result.data[0]);
            result.data.forEach(function(el){
                    createCard(el, container);
            })
        }
    })
    const popupBlock = document.querySelector(".popup-wrapper");

    popupBlock.querySelector(".popup__close").addEventListener("click", function(){
        popupBlock.classList.remove("active");
    });
    
    document.querySelector("#add").addEventListener("click", function(e){
        e.preventDefault();
        popupBlock.classList.add("active");
    });

    const addForm = document.forms.addForm;

    addForm.addEventListener("submit", function(e){
        e.preventDefault();
        let body = {};
    console.log("Hello!")
    });