


const generateQuote = function() {
    const quotes = [
        {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: "false"
          },
          {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: "false"
          },
          {
            userId: 1,
            id: 3,
            title: "fugiat veniam minus",
            completed: "false"
          },
          {
            userId: 1,
            id: 4,
            title: "et porro tempora",
            completed: "false"
          },

          {
            userId: 1,
            id: 5,
            title: "et porro tempora",
            completed: "false"
          },

          {
            userId: 1,
            id: 6,
            title: "et porro tempora",
            completed: "false"
          },

          {
            userId: 1,
            id: 7,
            title: "illo expedita consequatur quia in",
            completed: "false"
          },
          {
            userId: 1,
            id: 8,
            title: "quo adipisci enim quam ut ab",
            completed: "true"
          },
          {
            userId: 1,
            id: 9,
            title: "molestiae perspiciatis ipsa",
            completed: "false"
          },
          {
            userId: 1,
            id: 10,
            title: "illo est ratione doloremque quia maiores aut",
            completed: "true"
          },
          {
            userId: 1,
            id: 11,
            title: "vero rerum temporibus dolor",
            completed: "true"
          },
          {
            userId: 1,
            id: 12,
            title: "ipsa repellendus fugit nisi",
            completed: "true"
          },
          {
            userId: 1,
            id: 13,
            title: "et doloremque nulla",
            completed: "false"
          },
          {
            userId: 1,
            id: 14,
            title: "repellendus sunt dolores architecto voluptatum",
            completed: "true"
          },
          {
            userId: 1,
            id: 15,
            title: "ab voluptatum amet voluptas",
            completed: "true"
          },
          {
            userId: 1,
            id: 16,
            title: "accusamus eos facilis sint et aut voluptatem",
            completed: "true"
          },
          {
            userId: 1,
            id: 17,
            title: "quo laboriosam deleniti aut qui",
           completed: "true"
          },
          {
           userId: 1,
           id: 18,
           title: "dolorum est consequatur ea mollitia in culpa",
            completed: "false"
          },
          {
            userId: 1,
            id: 19,
            title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
            completed: "true"
          },
          {
            userId: 1,
            id: 20,
            title: "ullam nobis libero sapiente ad optio sint",
            completed: "true"
          },
          {
            userId: 2,
            id: 21,
            title: "suscipit repellat esse quibusdam voluptatem incidunt",
            completed: "false"
          },
          {
            userId: 2,
            id: 22,
            title: "distinctio vitae autem nihil ut molestias quo",
            completed: "true"
          },
          {
            userId: 2,
            id: 23,
            title: "et itaque necessitatibus maxime molestiae qui quas velit",
            completed: "false"
          },
          {
            userId: 2,
            id: 24,
            title: "adipisci non ad dicta qui amet quaerat doloribus ea",
            completed: "false"
          },
          {
            userId: 2,
            id: 25,
            title: "voluptas quo tenetur perspiciatis explicabo natus",
            completed: "true"
          },
          {
            userId: 2,
            id: 26,
            title: "aliquam aut quasi",
            completed: "true"
          },
          {
            userId: 2,
            id: 27,
            title: "veritatis pariatur delectus",
            completed: "true"
          },
          {
            userId: 2,
            id: 28,
            title: "nesciunt totam sit blanditiis sit",
            completed: "false"
          },
          {
            userId: 2,
            id: 29,
            title: "laborum aut in quam",
            completed: "false"
          },
          {
            userId: 2,
            id: 30,
            title: "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
            completed: "true"
          },
          {
            userId: 2,
            id: 31,
            title: "repudiandae totam in est sint facere fuga",
            completed: "false"
          },
          {
            userId: 2,
            id: 32,
            title: "earum doloribus ea doloremque quis",
            completed: "false"
          },
          {
            userId: 2,
            id: 33,
            title: "sint sit aut vero",
            completed: "false"
          },
          {
            userId: 2,
            id: 34,
            title: "porro aut necessitatibus eaque distinctio",
            completed: "false"
          },
          {
            userId: 2,
            id: 35,
            title: "repellendus veritatis molestias dicta incidunt",
            completed: "true"
          },
          {
            userId: 2,
            id: 36,
            title: "excepturi deleniti adipisci voluptatem et neque optio illum ad",
            completed: "true"
          },
          {
            userId: 2,
            id: 37,
            title: "sunt cum tempora",
            completed: "false"
          },
          {
            userId: 2,
            id: 38,
            title: "totam quia non",
            completed: "false"
          },
          {
            userId: 2,
            id: 39,
            title: "doloremque quibusdam asperiores libero corrupti illum qui omnis",
            completed: "false"
          },
          {
            userId: 2,
            id: 40,
            title: "totam atque quo nesciunt",
            completed: "true"
          },
          {
            userId: 3,
            id: 41,
            title: "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
            completed: "false"
          },
          {
            userId: 3,
            id: 42,
            title: "rerum perferendis error quia ut eveniet",
            completed: "false"
          },
          {
            userId: 3,
            id: 43,
            title: "tempore ut sint quis recusandae",
            completed: "true"
          },
          {
            userId: 3,
            id: 44,
            title: "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
            completed: "true"
          },
          {
            userId: 3,
            id: 45,
            title: "velit soluta adipisci molestias reiciendis harum",
            completed: "false"
          },
          {
            userId: 3,
            id: 46,
            title: "vel voluptatem repellat nihil placeat corporis",
            completed: "false"
          },
          {
            userId: 3,
            id: 47,
            title: "nam qui rerum fugiat accusamus",
            completed: "false"
          },
          {
            userId: 3,
            id: 48,
            title: "sit reprehenderit omnis quia",
            completed: "false"
          },
          {
            userId: 3,
            id: 49,
            title: "ut necessitatibus aut maiores debitis officia blanditiis velit et",
            completed: "false"
          },
          {
            userId: 3,
            id: 50,
            title: "cupiditate necessitatibus ullam aut quis dolor voluptate",
            completed: "true"
          },
          {
            userId: 3,
            id: 51,
            title: "distinctio exercitationem ab doloribus",
            completed: "false"
          },
          {
            userId: 3,
            id: 52,
            title: "nesciunt dolorum quis recusandae ad pariatur ratione",
            completed: "false"
          },
          {
            userId: 3,
            id: 53,
            title: "qui labore est occaecati recusandae aliquid quam",
            completed: "false"
          },
          {
            userId: 3,
            id: 54,
            title: "quis et est ut voluptate quam dolor",
            completed: "true"
          },
          {
            userId: 3,
            id: 55,
            title: "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
            completed: "true"
          },
          {
            userId: 3,
            id: 56,
            title: "deleniti ea temporibus enim",
            completed: "true"
          },
          {
            userId: 3,
            id: 57,
            title: "pariatur et magnam ea doloribus similique voluptatem rerum quia",
            completed: "false"
          },
          {
            userId: 3,
            id: 58,
            title: "est dicta totam qui explicabo doloribus qui dignissimos",
            completed: "false"
          },
          {
            userId: 3,
            id: 59,
            title: "perspiciatis velit id laborum placeat iusto et aliquam odio",
            completed: "false"
          },
          {
            userId: 3,
            id: 60,
            title: "et sequi qui architecto ut adipisci",
            completed: "true"
          },
          {
            userId: 4,
            id: 61,
            title: "odit optio omnis qui sunt",
            completed: "true"
          },
          {
            userId: 4,
            id: 62,
            title: "et placeat et tempore aspernatur sint numquam",
            completed: "false"
          },
          {
            userId: 4,
            id: 63,
            title: "doloremque aut dolores quidem fuga qui nulla",
            completed: "true"
          },
          {
            userId: 4,
            id: 64,
            title: "voluptas consequatur qui ut quia magnam nemo esse",
            completed: "false"
          },
          {
            userId: 4,
            id: 65,
            title: "fugiat pariatur ratione ut asperiores necessitatibus magni",
            completed: "false"
          },
          {
            userId: 4,
            id: 66,
            title: "rerum eum molestias autem voluptatum sit optio",
            completed: "false"
          },
          {
            userId: 4,
            id: 67,
            title: "quia voluptatibus voluptatem quos similique maiores repellat",
            completed: "false"
          },
          {
            userId: 4,
            id: 68,
            title: "aut id perspiciatis voluptatem iusto",
            completed: "false"
          },
          {
            userId: 4,
            id: 69,
            title: "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
            completed: "false"
          },
          {
            userId: 4,
            id: 70,
            title: "ut sequi accusantium et mollitia delectus sunt",
            completed: "false"
          },
          {
            userId: 4,
            id: 71,
            title: "aut velit saepe ullam",
            completed: "false"
          },
          {
            userId: 4,
            id: 72,
            title: "praesentium facilis facere quis harum voluptatibus voluptatem eum",
            completed: "false"
          },
          {
            userId: 4,
            id: 73,
            title: "sint amet quia totam corporis qui exercitationem commodi",
            completed: true
          },
          {
            userId: 4,
            id: 74,
            title: "expedita tempore nobis eveniet laborum maiores",
            completed: "false"
          },
          {
            userId: 4,
            id: 75,
            title: "occaecati adipisci est possimus totam",
            completed: "false"
          },
          {
            userId: 4,
            id: 76,
            title: "sequi dolorem sed",
            completed: true
          },
          {
            userId: 4,
            id: 77,
            title: "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
            completed: "false"
          },
          {
            userId: 4,
            id: 78,
            title: "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
            completed: "false"
          },
          {
            userId: 4,
            id: 79,
            title: "eum ipsa maxime ut",
            completed: true
          },
          {
            userId: 4,
            id: 80,
            title: "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
            completed: true
          },
          
      
  
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    let arrayIndex1 = Math.floor(Math.random() * quotes.length);
    let arrayIndex2 = Math.floor(Math.random() * quotes.length);
    let arrayIndex3 = Math.floor(Math.random() * quotes.length);
    let arrayIndex4 = Math.floor(Math.random() * quotes.length);
    let arrayIndex5 = Math.floor(Math.random() * quotes.length);
    let arrayIndex6 = Math.floor(Math.random() * quotes.length);
    let arrayIndex7 = Math.floor(Math.random() * quotes.length);
    let arrayIndex8 = Math.floor(Math.random() * quotes.length);
    let arrayIndex9 = Math.floor(Math.random() * quotes.length);

    document.getElementById("userId").innerHTML = quotes[arrayIndex].userId;
    document.getElementById("id").innerHTML = quotes[arrayIndex].id;
    document.getElementById("title").innerHTML = quotes[arrayIndex].title;
    document.getElementById("completed").innerHTML = quotes[arrayIndex].completed;

    document.getElementById("userId1").innerHTML = quotes[arrayIndex1].userId;
    document.getElementById("id1").innerHTML = quotes[arrayIndex1].id;
    document.getElementById("title1").innerHTML = quotes[arrayIndex1].title;
    document.getElementById("completed1").innerHTML = quotes[arrayIndex1].completed;

    document.getElementById("userId2").innerHTML = quotes[arrayIndex2].userId;
    document.getElementById("id2").innerHTML = quotes[arrayIndex2].id;
    document.getElementById("title2").innerHTML = quotes[arrayIndex2].title;
    document.getElementById("completed2").innerHTML = quotes[arrayIndex2].completed;
    
    
    document.getElementById("userId3").innerHTML = quotes[arrayIndex3].userId;
    document.getElementById("id3").innerHTML = quotes[arrayIndex3].id;
    document.getElementById("title3").innerHTML = quotes[arrayIndex3].title;
    document.getElementById("completed3").innerHTML = quotes[arrayIndex3].completed;

     
    document.getElementById("userId4").innerHTML = quotes[arrayIndex4].userId;
    document.getElementById("id4").innerHTML = quotes[arrayIndex4].id;
    document.getElementById("title4").innerHTML = quotes[arrayIndex4].title;
    document.getElementById("completed4").innerHTML = quotes[arrayIndex4].completed;

    document.getElementById("userId5").innerHTML = quotes[arrayIndex5].userId;
    document.getElementById("id5").innerHTML = quotes[arrayIndex5].id;
    document.getElementById("title5").innerHTML = quotes[arrayIndex5].title;
    document.getElementById("completed5").innerHTML = quotes[arrayIndex5].completed;

    
    document.getElementById("userId6").innerHTML = quotes[arrayIndex6].userId;
    document.getElementById("id6").innerHTML = quotes[arrayIndex6].id;
    document.getElementById("title6").innerHTML = quotes[arrayIndex6].title;
    document.getElementById("completed6").innerHTML = quotes[arrayIndex6].completed;

    
    document.getElementById("userId7").innerHTML = quotes[arrayIndex7].userId;
    document.getElementById("id7").innerHTML = quotes[arrayIndex7].id;
    document.getElementById("title7").innerHTML = quotes[arrayIndex7].title;
    document.getElementById("completed7").innerHTML = quotes[arrayIndex7].completed;

    
    document.getElementById("userId8").innerHTML = quotes[arrayIndex8].userId;
    document.getElementById("id8").innerHTML = quotes[arrayIndex8].id;
    document.getElementById("title8").innerHTML = quotes[arrayIndex8].title;
    document.getElementById("completed8").innerHTML = quotes[arrayIndex8].completed;

    
    document.getElementById("userId9").innerHTML = quotes[arrayIndex9].userId;
    document.getElementById("id9").innerHTML = quotes[arrayIndex9].id;
    document.getElementById("title9").innerHTML = quotes[arrayIndex9].title;
    document.getElementById("completed9").innerHTML = quotes[arrayIndex9].completed;
}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}




const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');
let todos = [];
todoForm.addEventListener('submit', function(event) {

  event.preventDefault();
  addTodo(todoInput.value); 
});

function addTodo(item) {
  if (item !== '') {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false
    };

    todos.push(todo);
    addToLocalStorage(todos); 
    todoInput.value = '';
  }
}

function renderTodos(todos) {
  todoItemsList.innerHTML = '';
  todos.forEach(function(item) {
    const checked = item.completed ? 'checked': null;
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);

    if (item.completed === true) {
      li.classList.add('checked');
    }
li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    todoItemsList.append(li);
  });
}
function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));

  renderTodos(todos);
}
function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}
function toggle(id) {
  todos.forEach(function(item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });
addToLocalStorage(todos);
}
function deleteTodo(id) {
  todos = todos.filter(function(item) {
    return item.id != id;
  });

  addToLocalStorage(todos);
}

getFromLocalStorage();
todoItemsList.addEventListener('click', function(event) {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }
  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});