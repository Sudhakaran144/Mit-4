const inputName = document.getElementById("name")
const inputEmail = document.getElementById("email")
const btn = document.getElementById("btn")
const listContainer = document.querySelector(".list_container")
const category = document.getElementById('category')
const Delete_list = document.querySelector(".btn1")
const All = document.querySelector(".all")
const home = document.querySelector(".home")
const collage = document.querySelector(".collage")
const company = document.querySelector(".company")



 

btn.addEventListener("click",()=>{
    let name_1 = inputName.value
    let email_1 = inputEmail.value
    let category_1 = category.value
    if(name_1 === '' && email_1 === ''){
        alert("Enter the details")
        
    }
    else{
        let li = document.createElement("li")
         
        let div = document.createElement("div")
    
        let h4 = document.createElement("h4")
        h4.innerHTML = name_1

        let p = document.createElement("p")
        p.innerHTML = email_1

        let span = document.createElement("span")
        span.innerHTML = category_1

        let button = document.createElement("button")
        button.textContent = 'delete'
        button.className = "btn1"

        div.appendChild(h4)
        div.appendChild(p)
        li.appendChild(div)
        li.appendChild(span)
        li.appendChild(button)

        listContainer.appendChild(li)

        inputName.value = ''
        inputEmail.value = ''
        category.value = 'All'
        saveContact()
        

    }
})

listContainer.addEventListener("click" , (event)=>{
    if(event.target.className === "btn1"){
        event.target.parentElement.remove();
        saveContact()
    }
})

 


function saveContact(){
    localStorage.setItem("listContainer" , listContainer.innerHTML)
}

function loadConatct(){
    listContainer.innerHTML = localStorage.getItem("listContainer")
}

loadConatct()