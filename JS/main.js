try{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    xhr.onload = function(){
            let data = JSON.parse(this.responseText)
            jsonUsers(data)
            deleteUser(data)
    }
    xhr.send()
}
catch(e){
    alert("Ma'lumotlar xato kelmoqda")
}
function jsonUsers(json){
    let imageArr = [
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg",
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
        "https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg",
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr74Pjdj__bQPnZK-BFujbwgnP1t5PIqkig&s",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
    ]
    const general = document.querySelector(`#general`)
    json.forEach((item, index) => {

        let box = document.createElement("div")
        box.className = "user__box box"
        let title = item.name;
        let userName = item.username
        let email = item.email;
        let company = item.company.name;
        let phone = item.phone;
        let website = item.website

        box.innerHTML = `
            <div class="row">
            <img src="${imageArr[index]}" alt="" class="users__image">
                <div>
                    <h2>
                        ${userName}
                    </h2>
                    <p>${title}</p>
                </div>
            </div>
            <ul class="users__list">
                <li class="users__item">
                    <span class="user__span">Company</span>
                    <span>${company}</span>
                </li><hr>
                <li class="users__item">
                    <span class="user__span">EMAIL</span>
                    <span>${email}</span>
                </li><hr>
                <li class="users__item">
                    <span class="user__span">phone</span>
                    <span>${phone}</span>
                </li><hr>
                <li class="users__item">
                    <span class="user__span">website</span>
                    <span>${website}</span>
                </li>
            </ul>
            <button id="btn">Remove</button>
        `
        general.append(box)
    })
}
const general = document.querySelector(`#general`)
function deleteUser(data){
    let btn = document.querySelectorAll(".box #btn")
    btn.forEach(function(item){
        item.addEventListener("click", function(){
                let parent = item.parentElement;
                parent.classList.add("delete")
                parent.addEventListener("animationend", ()=>{
                    general.removeChild(parent)
                })
        })
    })
}