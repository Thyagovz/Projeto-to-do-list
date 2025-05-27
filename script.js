const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];


createTaskItem = (task, i) => {
  const list = document.createElement("li");
  const div = document.createElement("div");
  const urgencyLevel = document.createElement("span");
  const taskTitle = document.createElement("p");
  const button = document.createElement("button");
  
  list.classList.add("task__item");
  div.classList.add("task-info__container");
  urgencyLevel.classList.add("task-type");
  taskTitle.innerText = task.title;
  button.classList.add("task__button--remove-task");
  
  if (task.type.toLowerCase() === "urgente") {
    urgencyLevel.classList.add("span-urgent");
  }
  if (task.type.toLowerCase() === "importante") {
    urgencyLevel.classList.add("span-important");
  }
  if (task.type.toLowerCase() === "normal") {
    urgencyLevel.classList.add("span-normal");
  }
  
  list.append(div, button);
  div.append(urgencyLevel, taskTitle);
  return list;
};

renderElements = (arr) => {
  const TaskUl = document.querySelector(".tasks__list");
  TaskUl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const tasks = arr[i];
    const taskItem = createTaskItem(tasks, i);
    TaskUl.appendChild(taskItem);
  }
};

renderElements(tasks);
