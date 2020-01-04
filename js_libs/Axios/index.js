/* axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .then(data => console.log(data))
 */

  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response.data))

/* fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json)) 
*/


/*
//=================
//  Post

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "Title of post",
    body: "Body of post"
  })
  .then(response => console.log(response.data))
  .catch(error => console.log(error));
*/