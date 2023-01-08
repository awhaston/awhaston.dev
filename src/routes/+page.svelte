<script>
	import Family from '../components/Family.svelte';
	import GithubIcon from '../components/GithubIcon.svelte';
	import LinkedIn from '../components/LinkedIn.svelte';
	import Sielox from '../components/Sielox.svelte';
	import IntersectingObserver from '../components/IntersectingObserver.svelte';
	import MailIcon from '../components/MailIcon.svelte';
	import Homepage from '../components/Homepage.svelte';

	const iconSize = '40';
	let y;
</script>

<svelte:window bind:scrollY={y} />
<main>
	<section class="heading">
		<Homepage />
		<span class="icons">
			<LinkedIn {iconSize} />
			<GithubIcon {iconSize} />
			<MailIcon {iconSize} />
		</span>
	</section>


	<div id="work" class="work-div">
		<h2 class="wh">Work History</h2>
		<section class="work">
			<IntersectingObserver let:intersecting once="true" top={0}>
				{#if intersecting}
					<Sielox />
				{/if}
			</IntersectingObserver>
			<div />
			<div />
			<IntersectingObserver let:intersecting once="true" top={0}>
				{#if intersecting}
					<Family />
				{/if}
			</IntersectingObserver>
		</section>
	</div>
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

	.heading {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-left: 1rem;
		padding-right: 1rem;
		height: 100vh;
	}

	.work-div {
		padding: 3rem;
	}

	.work {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
		align-items: center;
	}

	.wh {
		text-align: center;
		margin-bottom: 4rem;
	}

	.icons {

		justify-content: center;
		align-items: center;
		align-content: center;
	}
</style>
