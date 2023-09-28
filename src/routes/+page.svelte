<script>
	import Header from '$lib/components/header.svelte';
	import ProjectCard from '$lib/components/projectCard.svelte';
</script>

<Header />

<main>
	<ProjectCard
		projectName="Test Project"
		projectDescription="Test Description"
		projectGif="src/lib/gifs/test.gif"
		backendIcon="src/lib/icons/svelte.svg"
		frontendIcon=""
		cssLibraryIcon="src/lib/icons/picoCSS.svg"
		databaseIcon=""
		hostingIcon="src/lib/icons/googleCloud.svg"
	/>
</main>

<!-- <Footer /> -->
