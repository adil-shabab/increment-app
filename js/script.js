heading = document.getElementById('heading');
incrementBtn = document.getElementById('increment')
saveBtn = document.getElementById('save')
para = document.getElementById('para')
count = 0
clearBtn = document.getElementById('clear')


function increment(){
    count += 1
    heading.textContent = count
}


function save(){
    if()
    entry = count + " - "
    para.textContent += entry
    heading.textContent = 0
    count = 0
}

clearBtn.addEventListener("click", function(){
    para.textContent = "Previous Entries: "
})