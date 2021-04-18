const fs = require('fs');
const axios = require('axios');

axios
  .get('http://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    const data = JSON.stringify(response.data);

    fs.writeFile('result/posts.json', data, (err) => {
      if (err) throw err;
      console.log('post.json has been created successfully');
    });
  })
  .catch((err) => console.log(err));
