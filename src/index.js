// import { todos } from "./mock";
// import { emptyList, createListElement, updateList } from "./utils/toDoList";

const todos = [
  {
    date: "29/12/2021",
    description: "target distributed eyeballs",
    todo: false,
    id: 1,
  },
  {
    date: "20/05/2021",
    description: "expedite strategic vortals",
    todo: false,
    id: 2,
  },
  {
    date: "13/05/2021",
    description: "seize global methodologies",
    todo: true,
    id: 3,
  },
  {
    date: "05/05/2021",
    description: "repurpose B2C synergies",
    todo: true,
    id: 4,
  },
  {
    date: "20/06/2021",
    description: "incubate cross-platform applications",
    todo: true,
    id: 5,
  },
  {
    date: "31/07/2021",
    description: "orchestrate synergistic e-commerce",
    todo: false,
    id: 6,
  },
  {
    date: "27/03/2021",
    description: "target back-end niches",
    todo: true,
    id: 7,
  },
  {
    date: "10/06/2021",
    description: "orchestrate best-of-breed relationships",
    todo: true,
    id: 8,
  },
  {
    date: "20/01/2021",
    description: "architect viral models",
    todo: false,
    id: 9,
  },
  {
    date: "09/12/2021",
    description: "implement B2C e-tailers",
    todo: false,
    id: 10,
  },
];

const createListElement = (date, description, status, id) => {
  return `<li class="js-list-element">
          <div class="list__check">
            <input type="checkbox" data-id="${id}" value="${id}" id="scales" name="scales" ${
    status === true ? "checked" : ""
  }>
          </div>
          <span class="list__text js-list-done ${
            status === true ? "list__item--done" : ""
          }">
          ${description}
          </span>
          <div class="list__date-box">
            <span class="list__date ${
              status === true ? "list__item--done" : ""
            }">${date}</span>
          </div> 
        </li>
        `;
};

const emptyList = (container) => {
  //nel mentre che l'elemento selezionato ha firstChild
  while (container.firstChild) {
    //rimuovi tutti i firstChild dell'elemento
    container.removeChild(container.firstChild);
  }
};

const updateList = (element, arrayPush, id, boolean) => {
  //se Id(event.target.value) è uguale all'element.id selezionato,
  if (id === element.id) {
    //cambio element.todo, nel valore boolean chiamato
    //nell'argomento e pusho
    element.todo = boolean;
    arrayPush.push(element);
  }
};

const d = document;
const listWrapperTodo = d.getElementById("js--list-wrapper-todo");
const listWrapperDone = d.getElementById("js--list-wrapper-done");

let toDoList = todos.filter((element) => element.todo === false);
let toDoDone = todos.filter((element) => element.todo === true);

const createElement = (el, container) => {
  const { date, description, todo, id } = el;
  //chiamo la funzione per ritornare la lista nel dom
  const check = createListElement(date, description, todo, id);
  //ritorno le relative liste nel DOM chiamando gli argomenti giusti
  container.innerHTML += check;

  //setTimeout per aggiungere l'eventListener alle checkbox
  setTimeout(() => {
    const checkbox = d.querySelector(`[data-id="${id}"]`);
    //eventListener
    checkbox.addEventListener("change", (event) => {
      const id = Number(event.target.value);
      const isDone = event.target.checked === true;
      //chiamo funzione per svuotare entrambe le liste nel DOM
      emptyList(listWrapperDone);
      emptyList(listWrapperTodo);
      //condizione nel caso che la checkbox è true(event.target.checked)
      if (isDone) {
        //filtro per spostare gli elementi nella lista corretta
        toDoList = toDoList.filter((element) => {
          //funzione updateList
          updateList(element, toDoDone, id, true);
          return id !== element.id;
        });
        //richiamo di nuovo la funzione generateList
        //per ritornare gli elementi nel DOM (CREA LOOP??)
        generateList();
        return;
      }
      //se non è true, passa alla riga sotto
      toDoDone = toDoDone.filter((element) => {
        //funzione updateList
        updateList(element, toDoList, id, false);
        return id !== element.id;
      });
      //richiamo di nuovo la funzione generateList
      //per ritornare gli elementi nel DOM (CREA LOOP??)
      generateList();
    });
  }, 100);
};

const generateList = () => {
  toDoList.forEach((element) => {
    //funzione createElement
    createElement(element, listWrapperTodo);
  });
  //funzione createElement
  toDoDone.forEach((element) => {
    createElement(element, listWrapperDone);
  });
};

//start
generateList();
