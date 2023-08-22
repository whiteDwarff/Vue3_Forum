import axios from 'axios';

function getPosts() {
	return axios.get('http://localhost:3000/posts');
}
function getPostsById(id) {
	return axios.get(`http://localhost:3000/posts/${id}`);
}
function createePost(data) {
	return axios.post(`http://localhost:3000/posts`, data);
}
function updatePost(id, data) {
	return axios.put(`http://localhost:3000/posts${id}`, data);
}
function deletePost(id) {
	return axios.put(`http://localhost:3000/posts${id}`);
}

// find : 배열의 특정값을 찾아 반환, 없는 경우 undefind
// export function getPostById(id) {
// 	return posts.find(item => item.id === id);
// }
export { getPosts, getPostsById, createePost, updatePost, deletePost };
