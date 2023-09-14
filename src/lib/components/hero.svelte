<script>
	import ProfilePhoto from '$lib/assets/profile-image.jpg';
	import GithubIcon from '$lib/assets/github-icon.svg';
	import TwitterIcon from '$lib/assets/twitter-icon.svg';
	import YoutubeIcon from '$lib/assets/youtube-icon.svg';
	import TiktokIcon from '$lib/assets/tiktok-icon.svg';
	import MediumIcon from '$lib/assets/medium-icon.svg';
	import DiscordIcon from '$lib/assets/discord-icon.svg';
</script>

<section class="container">
	<div class="profile-image">
		<img src={ProfilePhoto} alt="My beautiful face." />
	</div>

	<h1 class="name">Ryan Neil Parker</h1>

	<span class="social-links">
		<div class="social-button">
			<img class="icon" src={GithubIcon} alt="A Github icon." />
		</div>
		<div class="social-button">
			<img class="icon" src={TwitterIcon} alt="A Twitter icon." />
		</div>
		<div class="social-button">
			<img class="icon" src={YoutubeIcon} alt="A Youtube icon." />
		</div>
		<div class="social-button">
			<img class="icon" src={TiktokIcon} alt="A TikTok icon." />
		</div>
		<!-- <img class="icon" src={MediumIcon} alt="A Medium icon." /> -->
		<!-- <img class="icon" src={DiscordIcon} alt="A Discord icon." /> -->
	</span>

	<button class="call-to-action">
		<a href="/contact"><h2>Let's talk.</h2></a>
	</button>

	<span class="view-selector">
		<button class="selector-button">
			<a href="/projects">Projects</a>
		</button>
		<button class="selector-button">
			<a href="/experience">Experience</a>
		</button>
		<button class="selector-button">
			<a href="/content">Content</a>
		</button>
	</span>
</section>

<style>
	.container {
		/* flex settings */
		display: flex;
		flex-direction: column;
		align-items: center;

		/* neuromorphic settings */
		border-radius: 50px;
		background: #ffffff;
		box-shadow: 35px 35px 70px #d9d9d9, -35px -35px 70px #ffffff;

		/* layout settings */
		padding: 2rem;
		margin: 2rem;
		width: 90%;
	}

	.profile-image {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.name {
		margin-bottom: 2rem;
	}

	.social-links {
		/* flex settings */
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		/* layout settings */
		width: 100%;
		padding-bottom: 2rem;
	}

	.social-button {
		/* flex settings */
		display: flex;
		justify-content: center;
		align-items: center;

		/* neuromorphic settings */
		border-radius: 50px;
		background: #ffffff;
		box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;

		/* layout settings */
		min-width: 55px;
		min-height: 55px;
	}

	.social-button:hover {
		background: linear-gradient(145deg, #e6e6e6, #ffffff);
	}

	.icon {
		width: 35px;
		height: 35px;
	}

	button {
		/* flex settings */
		display: flex;
		align-items: center;
		justify-content: center;

		/* layout settings */
		border: 1px solid grey;
	}

	.call-to-action {
		/* neuromorphic settings */
		border-radius: 50px;
		background: #ffffff;
		box-shadow: 25px 25px 50px #d9d9d9, -25px -25px 50px #ffffff;

		/* layour settings */
		width: 90%;
		height: 3rem;
		margin-bottom: 2rem;
	}

	.call-to-action:hover {
		background: linear-gradient(145deg, #e6e6e6, #ffffff);
	}

	.view-selector {
		/* flex settings */
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		/* layout settings */
		width: 100%;
	}

	.selector-button {
		/* neuromorphic settings */
		background: #ffffff;
		box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;

		/* layout settings */
		height: 2.5rem;
		width: 31%;
		border-radius: 10px;
	}

	.selector-button:hover {
		background: linear-gradient(145deg, #e6e6e6, #ffffff);
	}

	a {
		text-decoration: none;
	}
</style>
