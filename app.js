function onReady(){
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if(!newToDoText){return};
    toDos.push({
      title: newToDoText.value;
      complete: false;
    });
    //clear input for next ToDo
    newToDoText.value = '';
    //need to render the UI again after adding a ToDo
    renderTheUI(toDos);
  }

  function renderTheUI(toDos){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    //prevent page from reloading
    event.preventDefault();
    //call function that makes new ToDo
    createNewToDo();
  });

  renderTheUI(toDos);
}

//when everything is loaded, call onReady
window.onload = function(){
  onReady();
};
