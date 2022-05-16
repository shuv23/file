const todo_submit_0= document.getElementById("todo_submit_0");
todo_submit_0.addEventListener("click", createTodo);

function createTodo() {
  const todo = document.createElement("div");
  const input_val = document.getElementById("todo_input_0").value;
  const txt = document.createTextNode(input_val);

  todo.appendChild(txt);
  todo.classList.add("todo_1");

  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo.appendChild(span);
  no_status.appendChild(todo);   //????
  //status_2.appendChild(todo); 

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
 
  document.getElementById("todo_input_0").value = "";
  todo_form_0.classList.remove("active");
}

const todo_submit_1= document.getElementById("todo_submit_1");
todo_submit_1.addEventListener("click", createTodo_1);

function createTodo_1() {
  const todo = document.createElement("div");
  const input_val_1 = document.getElementById("todo_input_1").value;
  const txt_1 = document.createTextNode(input_val_1);

  todo.appendChild(txt_1);
  todo.classList.add("todo_1");

  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo.appendChild(span);
  status_1.appendChild(todo); 

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
 
  document.getElementById("todo_input_0").value = "";
  todo_form_0.classList.remove("active");
}

const todo_submit_2= document.getElementById("todo_submit_2");
todo_submit_2.addEventListener("click", createTodo_2);

function createTodo_2() {
  const todo = document.createElement("div");
  const input_val_2 = document.getElementById("todo_input_2").value;
  const txt_2 = document.createTextNode(input_val_2);

  todo.appendChild(txt_2);
  todo.classList.add("todo_2");

  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo.appendChild(span);
  status_2.appendChild(todo); 

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
 
  document.getElementById("todo_input_0").value = "";
  todo_form_0.classList.remove("active");
}


const todo_submit_3= document.getElementById("todo_submit_3");
todo_submit_3.addEventListener("click", createTodo_3);

function createTodo_3() {
  const todo = document.createElement("div");
  const input_val_3 = document.getElementById("todo_input_3").value;
  const txt_3 = document.createTextNode(input_val_3);

  todo.appendChild(txt_3);
  todo.classList.add("todo_3");

  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo.appendChild(span);
  status_3.appendChild(todo); 

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
 
  document.getElementById("todo_input_0").value = "";
  todo_form_0.classList.remove("active");
}

function changeTitle() {
  const titles = document.querySelectorAll('.title')

  titles.forEach(title => {
      title.addEventListener('click', e => e.target.textContent = '')
  })
}
changeTitle()

const close_buttons = document.querySelectorAll(".close");
const buttons = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
  });
});


close_buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.style.display = "none";
    });
  });


