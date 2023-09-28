<script>
	export let projectGif;
	export let projectName;
	export let projectDescription;
	export let backendIcon;
	export let frontendIcon;
	export let cssLibraryIcon;
	export let databaseIcon;
	export let hostingIcon;
</script>

<main class="container">
	<article>
		<img class="gif" src={projectGif} alt="Placeholder logo." />

		<h2>{projectName}</h2>
		<p>{projectDescription}</p>

		<footer class="tech-icons">
			{#if backendIcon}
				<img class="icon" src={backendIcon} alt="Backend framework logo." />
			{/if}
			{#if frontendIcon}
				<img class="icon" src={frontendIcon} alt="Frontend framework logo." />
			{/if}
			{#if cssLibraryIcon}
				<img class="icon" src={cssLibraryIcon} alt="CSS framework logo." />
			{/if}
			{#if databaseIcon}
				<img class="icon" src={databaseIcon} alt="Database technology logo." />
			{/if}
			{#if hostingIcon}
				<img class="icon" src={hostingIcon} alt="Hosting provider logo." />
			{/if}
		</footer>
	</article>
</main>

<style>
	.gif {
		border-radius: 10%;
	}

	h2 {
		padding-top: 2rem;
	}

	.tech-icons {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.icon {
		max-width: 20%;
	}
</style>
