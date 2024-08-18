var baseURL = 'https://jsonplaceholder.typicode.com/posts';
var postId = 1;

var url = baseURL + '/' + postId + '?userId=1';

function fetchData() {
  fetch(url)
    .then(function(response) {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

fetchData();
