const posts = [
	{
		id: 1,
		title: '제목2',
		contents: '내용2',
		createdAt: '2023-08-12',
	},
	{
		id: 2,
		title: '제목3',
		contents: '내용3',
		createdAt: '2023-05-11',
	},
	{
		id: 3,
		title: '제목4',
		contents: '내용4',
		createdAt: '2023-08-19',
	},
	{
		id: 4,
		title: '제목5',
		contents: '내용5',
		createdAt: '2023-08-19',
	},
	{
		id: 0,
		title: '제목1',
		contents: '내용1',
		createdAt: '2023-08-19',
	},
];
export function getPosts() {
	return posts;
}
