function onReady(){
  const ADD_TO_DO_FORM = document.getElementById('addToDoForm');
  const NEW_TO_DO_TEXT = document.getElementById('newToDoText');
  const TO_DO_LIST = document.getElementById('toDoList');
  const DELETE_BTN = document.getElementById('delete');
  const ITEMS = TO_DO_LIST.getElementsByTagName('li');

  ADD_TO_DO_FORM.addEventListener('submit', event => {
    event.preventDefault(); //stop page from reloading

    //get the text for the new to-do item
    let title = newToDoText.value;

    //create new li
    let newLi = document.createElement('li');

    //create new input
    let checkbox = document.createElement('input');

    //set input's type to checkbox
    checkbox.type = "checkbox";

    //set the title (text of li to what user put in)
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    TO_DO_LIST.appendChild(newLi);

    //empty the input
    NEW_TO_DO_TEXT.value = '';

  });

  DELETE_BTN.addEventListener('click', event =>{
    for(let i=0; i<ITEMS.length; i++){
      let li = ITEMS[i].getElementsByTagName('input');
      let cb = li[0];
      if(cb.checked){
        ITEMS[i].remove();
      }
    }
  })
}

window.onload = function(){
  onReady();
};
