<script>
	import ProfileImage from '$lib/images/profile-image.png';
</script>

<header class="container">
	<article>
		<header>
			<div class="image-container">
				<img src={ProfileImage} alt="My beautiful face." />
			</div>
		</header>

		<section>
			<hgroup>
				<h1>Ryan Neil Parker</h1>
				<h2>Solutions Architect | Software Engineer | Web Designer</h2>
			</hgroup>
		</section>

		<section class="grid">
			<a href="https://github.com/ryanneilparker" role="button" class="outline">GitHub</a>
			<a href="https://twitter.com/ryanneilparker" role="button" class="outline">Twitter</a>
			<a
				href="https://www.youtube.com/channel/UCNOlg6ibufz8loy0Dwiywug"
				role="button"
				class="outline">Youtube</a
			>
			<a href="https://medium.com/@ryanneilparker" role="button" class="outline">Medium</a>
		</section>

		<footer>
			<button><a class="call-to-action" href="/contact">Let's talk</a></button>
		</footer>
	</article>
</header>

<style>
	.image-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img {
		border-radius: 50%;
		max-height: 40vh;
	}

	.call-to-action {
		color: aliceblue;
	}
</style>
