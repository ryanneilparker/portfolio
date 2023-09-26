<script>
	import ProjectGif from '$lib/gifs/test.gif';
	import SvelteIcon from '$lib/icons/svelte.svg';
	import PicoIcon from '$lib/icons/pico-css.svg';
	import GoogleCloudIcon from '$lib/icons/google-cloud.svg';
</script>

<main class="container">
	<article>
		<img class="gif" src={ProjectGif} alt="Placeholder logo." />

		<h2>Project Name</h2>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quibusdam minus eius
			expedita ad alias nisi? Suscipit sequi, quis expedita libero repellendus deserunt, eum
			inventore optio explicabo nostrum debitis corporis.
		</p>

		<section class="tech-bar">
			<img class="icon" src={SvelteIcon} alt="The SvelteKit logo." />
			<img class="icon" src={PicoIcon} alt="The PicoCSS logo." />
			<img class="icon" src={GoogleCloudIcon} alt="The Google Cloud logo." />
		</section>
	</article>
</main>

<style>
	.gif {
		border-radius: 10%;
	}

	h2 {
		padding-top: 2rem;
	}

	.tech-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.icon {
		max-width: 100px;
	}
</style>
