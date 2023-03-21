<script>
	import Container from '../components/Container.svelte';
	import Homepage from '../components/Homepage.svelte';
	import GithubIcon from '../components/Icons/GithubIcon.svelte';
	import LinkedIn from '../components/Icons/LinkedIn.svelte';
	import MailIcon from '../components/Icons/MailIcon.svelte';

	const iconSize = '40';
	let y;
	let w;
</script>

<svelte:window bind:scrollY={y} />
<main bind:clientWidth={w}>
	<section class="homepage">
		<Homepage />
		<span class="icons">
			<LinkedIn {iconSize} />
			<GithubIcon {iconSize} />
			<MailIcon {iconSize} />
		</span>
	</section>

	<Container />
</main>

<style>
	main {
		animation: fadeIn 0.75s;
	}

	main section {
		margin-bottom: 3rem;
	}

	@keyframes fadeIn {
		0% {
			transform: translateY(-20px);
			opacity: 0;
			filter: blur(5px);
		}
		100% {
			transform: translateY(0);
			opacity: 1;
			filter: blur(0);
		}
	}

	.homepage {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-left: 1rem;
		padding-right: 1rem;
		height: 100vh;
	}

	.icons {
		justify-content: center;
		align-items: center;
		align-content: center;
	}
</style>
