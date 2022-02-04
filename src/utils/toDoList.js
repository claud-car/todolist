// export const createListElement = (date, description, status, id) => {
//   return `<li class="js-list-element">
//       <div class="list__check">
//         <input type="checkbox" data-id="${id}" value="${id}" id="scales" name="scales" ${
//     status === true ? "checked" : ""
//   }>
//       </div>
//       <span class="list__text js-list-done ${
//         status === true ? "list__item--done" : ""
//       }">
//       ${description}
//       </span>
//       <div class="list__date-box">
//         <span class="list__date ${
//           status === true ? "list__item--done" : ""
//         }">${date}</span>
//       </div>
//     </li>
//     `;
// };

// export const emptyList = (container) => {
//   //nel mentre che l'elemento selezionato ha firstChild
//   while (container.firstChild) {
//     //rimuovi tutti i firstChild dell'elemento
//     container.removeChild(container.firstChild);
//   }
// };

// export const updateList = (element, arrayPush, id, boolean) => {
//   //se Id(event.target.value) è uguale all'element.id selezionato,
//   if (id === element.id) {
//     //cambio element.todo, nel valore boolean chiamato
//     //nell'argomento e pusho
//     element.todo = boolean;
//     arrayPush.push(element);
//   }
// };
