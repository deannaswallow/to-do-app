function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault(); //stop page from reloading

    //get the text (input)
    let title = newToDoText.value;

    //create new li
    let newLi = document.createElement('li');

    //create new input (checkbox for li)
    let checkbox = document.createElement('input');

    //set input's type to checkbox
    checkbox.type = "checkbox";

    //set the title of the li
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
}

window.onload = function(){
  onReady();
};
