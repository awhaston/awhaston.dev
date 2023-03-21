<script>
	import Education from './Education.svelte';
	import Jobs from './Jobs.svelte';
	import Projects from './Projects.svelte';
	import Technologies from './Technologies.svelte';
	let selected = 'projects';
	let visible = false;
	let w;

	function handleChange(value) {
		selected = value;
	}
</script>

<div class="container" bind:clientWidth={w}>
	{#if w < 500}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => (visible = !visible)}>Menu</div>
	{/if}
	<nav>
		<button
			class="nav {selected === 'projects' ? 'selected' : ''}"
			on:click={() => handleChange('projects')}>Projects</button
		>
		<button
			class="nav {selected === 'technologies' ? 'selected' : ''}"
			on:click={() => handleChange('technologies')}>Technologies</button
		>
		<button
			class="nav {selected === 'experience' ? 'selected' : ''}"
			on:click={() => handleChange('experience')}>Experience</button
		>
		<button
			class="nav {selected === 'education' ? 'selected' : ''}"
			on:click={() => handleChange('education')}>Education</button
		>
		<!-- <button
			class="nav {selected === 'certifications' ? 'selected' : ''} "
			on:click={() => handleChange('certifications')}
			disabled>Certifications</button
		> -->
	</nav>
	<div class="content-container">
		{#if selected === 'projects'}
			<Projects />
		{:else if selected === 'technologies'}
			<Technologies />
		{:else if selected === 'experience'}
			<Jobs />
		{:else if selected === 'education'}
			<Education />
		{:else if selected === 'certifications'}
			#TODO Add certifications tab
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		width: 100vw;
		min-height: 50vh;
	}
	.content-container {
		width: 75%;
		margin: 1rem;
	}
	nav {
		width: 15%;
		margin: 1rem;
		margin-left: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.selected::before {
		content: '→ ';
	}

	.nav {
		border: none;
		font-size: larger;
		width: 12rem;
		height: 5rem;
		filter: opacity(0.7);
		background-color: #616161;
		color: white;
		transition: all 300ms;
	}
	.nav:hover {
		filter: opacity(1);
	}
</style>
