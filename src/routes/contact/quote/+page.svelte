<script>
	let generatedQuote;

	async function generateQuote() {
		const response = await fetch('/contact/quote/generate');
		generatedQuote = await response.json();
	}
</script>

<h1>Quote</h1>

<button on:click={generateQuote}>Generate Quote!</button>

<h2>{generatedQuote}</h2>
