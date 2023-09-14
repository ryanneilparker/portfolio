import { json } from '@sveltejs/kit';

export function GET() {
	const blog = 'This is a generated blog.';

	return json(blog);
}
