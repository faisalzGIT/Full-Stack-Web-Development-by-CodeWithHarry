function saveTodosToLocalStorage() {
	const todoList = document.querySelectorAll("#orderedList li");
	const todos = [];
  
	todoList.forEach((item) => {
	  const title = item.querySelector(".forTodoTitle").textContent;
	  const desc = item.querySelector(".forTodoDesc").textContent;
	  todos.push({ title, desc });
	});

	localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  document.getElementById("formSubmit").addEventListener("click", (e) => {
	e.preventDefault();
  
	let todoTitleKaInput = document.getElementById("inputTodoTitle").value;
	let todoDescKaInput = document.getElementById("inputTodoDesc").value;
  
	if (!todoTitleKaInput || !todoDescKaInput) {
	  alert("Please fill in both the title and description!");
	  return;  // Prevents adding empty todos
	}
  
	let olList = document.getElementById("orderedList");
	let newLi = document.createElement("li");
	newLi.className = "listItems";  // No need for += here, just use =
	olList.appendChild(newLi);
  
	let todoTitle = document.createElement("div");
	todoTitle.className = "forTodoTitle";
	todoTitle.textContent = todoTitleKaInput;
	newLi.appendChild(todoTitle);
  
	let todoDesc = document.createElement("div");
	todoDesc.className = "forTodoDesc";
	todoDesc.textContent = todoDescKaInput;
	newLi.appendChild(todoDesc);
  
	let delBtn = document.createElement("button");
	delBtn.innerHTML = "Delete";
	delBtn.addEventListener("click", () => {
	  newLi.remove();
	  saveTodosToLocalStorage();  // Save after deletion as well
	});
	newLi.appendChild(delBtn);
  
	saveTodosToLocalStorage();  // Save after adding the new todo
  
	document.getElementById("form1").reset();  // Clear the form after submission
  });
  
  function loadTodosFromLocalStorage() {
	const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
	
	savedTodos.forEach((todo) => {
	  let olList = document.getElementById("orderedList");
	  let newLi = document.createElement("li");
	  newLi.className = "listItems";
	  olList.appendChild(newLi);
  
	  let todoTitle = document.createElement("div");
	  todoTitle.className = "forTodoTitle";
	  todoTitle.textContent = todo.title;
	  newLi.appendChild(todoTitle);
  
	  let todoDesc = document.createElement("div");
	  todoDesc.className = "forTodoDesc";
	  todoDesc.textContent = todo.desc;
	  newLi.appendChild(todoDesc);
  
	  let delBtn = document.createElement("button");
	  delBtn.innerHTML = "Delete";
	  delBtn.addEventListener("click", () => {
		newLi.remove();
		saveTodosToLocalStorage();  // Save after deletion
	  });
	  newLi.appendChild(delBtn);
	});
  
	// Check if the list is empty and show "No Todos Added" message
	checkIfListIsEmpty();
  }
  
  function checkIfListIsEmpty() {
	let olList = document.getElementById("orderedList");
  
	if (olList.querySelectorAll("li").length === 0) {
	  if (!document.querySelector(".nullKaSoln")) {
		let nullKaSoln = document.createElement("div");
		nullKaSoln.innerHTML = "NO Todos Added";
		nullKaSoln.className = "nullKaSoln";
		olList.parentElement.insertBefore(nullKaSoln, olList);  // Insert the message before the list
	  }
	} else {
	  let existingMessage = document.querySelector(".nullKaSoln");
	  if (existingMessage) {
		existingMessage.remove();  // Remove message if todos are present
	  }
	}
  }
  
  window.onload = loadTodosFromLocalStorage;
  