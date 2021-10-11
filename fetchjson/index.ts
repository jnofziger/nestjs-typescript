import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo ith ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}    
    `);
};

//to use ts-node index.ts and have access to console we need to install
//npm install @types/node