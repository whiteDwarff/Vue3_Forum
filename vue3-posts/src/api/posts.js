import { posts } from '.';

function getPosts(params) {
	return posts.get('/', { params });
}
function getPostsById(id) {
	return posts.get(`${id}`);
}
function createePost(data) {
	return posts.post(``, data);
}
function updatePost(id, data) {
	return posts.patch(`${id}`, data);
}
function deletePost(id) {
	return posts.delete(`/${id}`);
}

// find : 배열의 특정값을 찾아 반환, 없는 경우 undefind
// export function getPostById(id) {
// 	return posts.find(item => item.id === id);
// }
export { getPosts, getPostsById, createePost, updatePost, deletePost };
