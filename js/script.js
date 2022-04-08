heading = document.getElementById('heading');
incrementBtn = document.getElementById('increment')
saveBtn = document.getElementById('save')
para = document.getElementById('para')
count = 0


function increment(){
    count += 1
    heading.textContent = count
}


function save(){
    entry = count + " - "
    para.textContent += entry
    heading.textContent = 0
    count = 0
}
