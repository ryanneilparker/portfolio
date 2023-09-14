import { json } from '@sveltejs/kit';

export function GET() {
	const quote = 'This is a generated quote.' + Math.random();

	return json(quote);
}
