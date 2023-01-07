<script>
	import { fade } from 'svelte/transition';
	const routes = [
		{ label: 'Home', href: '/' },
		{ label: 'About Me', href: '#aboutme' },
		{ label: 'Work', href: '#work' },
	];
</script>

<nav class="navbar" transition:fade="{{duration: 150}}">
	{#each routes as item}
		<a href={item.href}>{item.label}</a>
	{/each}
</nav>

<style>
	.navbar {
		position: fixed;
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 1.15rem;
		top: 0;
		overflow: hidden;
		background-color: #212121;
		z-index: 100;
	}

	.navbar a {
		text-decoration: none;
		transition: all 0.1s ease-in-out;
		color: inherit;
		padding: 1rem;
	}

	.navbar a:hover {
		transform: scale(1.15);
	}
</style>
