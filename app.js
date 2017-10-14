function onReady(){
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const deleteBtn = document.getElementById('delete');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if(!newToDoText){return};
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    //clear input for next ToDo
    newToDoText.value = '';
    //need to render the UI again after adding a ToDo
    renderTheUI(toDos);
  }

  function renderTheUI(toDos){
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

  function deleteItems(toDoList){
    const items = toDoList.getElementsByTagName('li');
    for(let i=0; i<items.length; i++){
      let li = items[i].getElementsByTagName('input');
      let cb = li[0];
      if(cb.checked){
        items[i].remove();
      }
    }
  }

  addToDoForm.addEventListener('submit', event => {
    //prevent page from reloading
    event.preventDefault();
    //call function that makes new ToDo
    createNewToDo();
  });

  deleteBtn.addEventListener('click', event => {
    //call function to delete items
    deleteItems(toDoList);
  });


  renderTheUI(toDos);
}

//when everything is loaded, call onReady
window.onload = function(){
  onReady();
};
