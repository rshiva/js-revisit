const addItem = document.getElementById("add-item");
const itemEl = document.getElementById("item")
const ul = document.querySelector('ul')
const input = document.querySelector('input');

addItem.addEventListener("click", addToList);


function addToList(){
  let itemValue = itemEl.value
  itemEl.value = '';
  console.log("itemEl",itemValue);
  if(itemValue){
    let li = document.createElement('li');
    li.textContent = itemValue;
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    ul.appendChild(li);
    li.appendChild(deleteBtn);
    deleteBtn.onclick = function (e) {
      ul.removeChild(li)
    }
    input.focus();
  }
  

}