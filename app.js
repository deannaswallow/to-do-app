function onReady(){
  const ADD_TO_DO_FORM = document.getElementById('addToDoForm');
  const NEW_TO_DO_TEXT = document.getElementById('newToDoText');
  const TO_DO_LIST = document.getElementById('toDoList');

  ADD_TO_DO_FORM.addEventListener('submit', event => {
    event.preventDefault(); //stop page from reloading

    //get the text (input)
    let title = newToDoText.value;

    //create new li
    let newLi = document.createElement('li');

    //create new input
    let checkbox = document.createElement('input');

    //set input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    TO_DO_LIST.appendChild(newLi);

    //empty the input
    NEW_TO_DO_TEXT.value = '';
  });
}

window.onload = function(){
  alert("The window has loaded!");
  onReady();
};
