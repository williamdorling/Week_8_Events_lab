

const button = document.getElementById("enter");

button.addEventListener('click', event => {
    const input = document.getElementById("new-todo").value;
    const listElement = document.createElement("li");
    listElement.innerText = input;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.setAttribute("id", "delete-button")
    listElement.appendChild(deleteButton);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "checkBox");
    listElement.appendChild(checkBox);
    
    let list = document.getElementById("list");
    list.appendChild(listElement);

    

    checkBox.addEventListener('change', event => {
        if (event.target.checked){
            event.target.parentNode.style.color = "grey";
            let completedList = document.getElementById("completed-list");
            let listElement = event.target.parentNode;
            completedList.appendChild(listElement);
        } else {
            event.target.parentNode.style.color = "black";
            let list = document.getElementById("list");
            let listElement = event.target.parentNode;
            list.appendChild(listElement);
        }
    })

    deleteButton.addEventListener('click', event => {
        const elementToRemove = event.target.parentNode;
        let list = elementToRemove.parentNode;
        list.removeChild(elementToRemove);
    })
})

const dateButton = document.getElementById("date");

dateButton.addEventListener('click', event => {
    event.target.parentNode.innerText = Date();
})
