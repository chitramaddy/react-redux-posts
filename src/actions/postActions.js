import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
    console.log('fetching');
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: FETCH_POSTS,
        payload: data,
      })
    );
};

export const createPost = (postData) => (dispatch) => {
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        'content-type': 'application/json'
    }
})
.then(res => res.json())
.then(data=>dispatch({
  type: NEW_POST,
  payload: postData
}));
};

