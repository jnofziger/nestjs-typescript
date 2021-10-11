import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
    console.log(response.data);
});

//to use ts-node index.ts and have access to console we need to install
//npm install @types/node