let firstSection_btnAdd = document.getElementById('addBtn')
let homeSection = document.getElementById('firstSection')
let addList = document.getElementById('addList')
let shoppingList_section = document.getElementById('shoppingList-section')
let addList_btn = document.getElementById('addList_btn')
let close_shoppingList = document.getElementById('close_shoppingList')
let close_AddList = document.getElementById('close_addList')
let addBtnShoppingList = document.getElementById('addBtn_shoppingList')
var cantItem = 0
let verificar = false


firstSection_btnAdd.addEventListener('click', function(){
    console.log('paso')
    homeSection.style.display = "none"
    shoppingList_section.style.display = "none"
    addList.style.display = "block"
})

addBtnShoppingList.addEventListener('click', function(){
    console.log('paso')
    homeSection.style.display = "none"
    shoppingList_section.style.display = "none"
    addList.style.display = "block"
})

addList_btn.addEventListener('click', function(e){

    addItems()
    if(verificar){
    reset()
    shoppingList_section.style.display = "block"
    addList.style.display = "none"
    homeSection.style.display = "none"
    } else{
        console.log('CamposRequeridos')
    }
})

function addItems(){
    let itemacordion = document.getElementById('shoppingList')
    let icon = document.getElementById('categorias').value
    let title = document.getElementById('titleList').value
    let descripcion = document.getElementById('description').value
    
    if(title!=''){
    console.log('icon', icon, title, descripcion)

    let modelo =
    `<div class="accordion-item">
        <div class="accordion-header" id="heading${cantItem}">
        <div class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${cantItem}" aria-expanded="false">
            <img src="${icon}" alt="" id="List_icon" class="iconosMobile"> 
            <h1 id="List_title" class="header_List_title p-1">${title}</h1>
        </div>
        </div>
        <div id="collapse${cantItem}" class="accordion-collapse collapse" aria-labelledby="heading${cantItem}" data-bs-parent="#shoppingList">
        <div class="accordion-body">
            <p id="List_description">${descripcion}</p>
        </div>
        </div>
    </div>`
    cantItem++
    console.log('cantidad', cantItem)
    itemacordion.innerHTML += modelo
    return verificar=true
    } else {
        verificar = false
        console.log('vaciooooo', verificar)
        return verificar
    }

}

function verificacion (){
    if(title != ''){
        return true
    }
}



function reset(){
    document.getElementById('titleList').value = ''
    document.getElementById('description').value = ''
}

close_AddList.addEventListener('click', function(e){
    shoppingList_section.style.display = "none"

    if(cantItem==0){
        console.log('cantitem', cantItem)
        addList.style.display = "none"
        homeSection.style.display = "block"
    } else {
        homeSection.style.display = "none"
        addList.style.display = "none"
        shoppingList_section.style.display = "block"
    }
})





   