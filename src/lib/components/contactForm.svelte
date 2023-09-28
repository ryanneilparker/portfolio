<script src="https://web3forms.com/client/script.js" async defer>
	import { PUBLIC_WEB3FORMS_API_KEY } from '$env/static/public';
	import { PUBLIC_BASE_URL } from '$env/static/public';
</script>

<header class="container">
	<h1>Let's make it happen.</h1>
</header>

<main class="container">
	<form action="https://api.web3forms.com/submit" method="POST">
		<input type="hidden" name="access_key" value={PUBLIC_WEB3FORMS_API_KEY} />
		<input type="hidden" name="redirect" value={PUBLIC_BASE_URL} />

		<div class="grid">
			<label for="firstname">
				First name
				<input type="text" id="firstname" name="firstname" placeholder="First name" required />
			</label>

			<label for="lastname">
				Last name
				<input type="text" id="lastname" name="lastname" placeholder="Last name" required />
			</label>
		</div>

		<label for="email">Email address</label>
		<input type="email" id="email" name="email" placeholder="Email address" required />
		<small>I'll never share your email with anyone else.</small>

		<label for="phone">Phone Number</label>
		<input type="tel" id="phone" name="phone" placeholder="Phone number" />
		<small>I'll never share your number with anyone else.</small>

		<label for="message">Message</label>
		<textarea
			id="message"
			name="message"
			rows="4"
			placeholder="Spill the beans about your web wizardry dreams..."
		/>

		<button type="submit">Submit</button>
	</form>
</main>

<style>
	header {
		margin-top: 2rem;
	}
</style>
