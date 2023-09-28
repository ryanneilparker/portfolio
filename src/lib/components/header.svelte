<script>
	import ProfileImage from '$lib/images/profile-image.png';
</script>

<header class="container">
	<article>
		<header>
			<img src={ProfileImage} alt="My beautiful face." />
		</header>

		<section>
			<h1>Ryan Neil Parker</h1>
			<h6>Solutions Architect | Software Engineer | Web Designer</h6>
		</section>

		<section class="grid">
			<a href="https://github.com/ryanneilparker" role="button" class="outline">GitHub</a>
			<a href="https://github.com/ryanneilparker" role="button" class="outline">Twitter</a>
			<a href="https://github.com/ryanneilparker" role="button" class="outline">Youtube</a>
			<a href="https://medium.com/@ryanneilparker" role="button" class="outline">Medium</a>
		</section>

		<footer>
			<button><a class="call-to-action" href="/contact">Let's talk</a></button>
		</footer>
	</article>
</header>

<style>
	img {
		border-radius: 50%;
		height: auto;
	}

	.call-to-action {
		color: aliceblue;
	}
</style>
