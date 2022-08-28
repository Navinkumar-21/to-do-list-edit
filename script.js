
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
const addbtn = document.querySelector('.add')



addbtn.addEventListener('click', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    console.log(todoText);

    // if(todo) {
    //     todoText = todo.text
       
    // }

    if(todoText) {
        const todoEl = document.createElement('li')
        todoEl.classList.add('liList')
        const removebtns = document.createElement('button')
        removebtns.innerText = 'remove'
        removebtns.classList.add('remove')
        const clearbtns = document.createElement('button')
        clearbtns.innerText = 'Completed' 
        clearbtns.classList.add('remove')
        const editbtn = document.createElement('button')
        editbtn.classList.add('editbtn')
        editbtn.innerText = 'edit'


      
       
  
        if(todo && todo.completed) {
            
            todoEl.classList.add('completed')
            
        }

        todoEl.innerText = todoText

          clearbtns.addEventListener('click', (e) => {
            e.preventDefault()
            todoEl.classList.toggle('completed')
    


        }) 

        removebtns.addEventListener('click', (e) => {
            e.preventDefault()
            todoEl.remove()
            removebtns.remove()
            clearbtns.remove()
            editbtn.remove()
        }) 
      

    
           
         
        var editTask=function(){
            console.log("Edit Task...");
            console.log("Change 'edit' to 'save'");
            
            
            var todoEl=this.parentNode;
            
            var editInput=todoEl.querySelector('input[type=text]');
                    //If class of the parent is .editmode
                    if(completed){
            
                    //switch to .editmode
                    //label becomes the inputs value.
                        todoEl.innerText=editInput.value;
                    }else{
                        editInput.value=todoEl.innerText;
                    }
            
            }
            

todosUL.appendChild(todoEl)
        todosUL.appendChild(removebtns)
        todosUL.appendChild(clearbtns)
        todosUL.appendChild(editbtn)

        input.value = ''

      
    }


   
}



