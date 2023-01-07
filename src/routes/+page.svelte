<script>
	import AboutMe from '../components/AboutMe.svelte';
	import Family from '../components/Family.svelte';
	import GithubIcon from '../components/GithubIcon.svelte';
	import LinkedIn from '../components/LinkedIn.svelte';
	import Sielox from '../components/Sielox.svelte';
	import ContactMe from '../components/ContactMe.svelte';
	import { fade } from 'svelte/transition';
	import IntersectingObserver from '../components/IntersectingObserver.svelte';
	import MailIcon from '../components/MailIcon.svelte';
	import Icon from '$lib/assets/profile.jpeg';

	const iconSize = '40';
	let y;
</script>

<svelte:window bind:scrollY={y} />
<main>
	<section class="heading">
		<span class="title">Wyatt Haston</span>
		<img src={Icon} alt="Profile" />
		<span class="description">
			Information Technology Undergraduate<br /> Dev-Ops Intern at Sielox LLC
		</span>
		<span class="icons">
			<LinkedIn {iconSize} />
			<GithubIcon {iconSize} />
			<MailIcon {iconSize} />
		</span>
	</section>

	<IntersectingObserver let:intersecting once="true" top={0}>
		{#if intersecting}
			<section id="aboutme" class="aboutme">
				<AboutMe />
			</section>
		{/if}
	</IntersectingObserver>

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
			<IntersectingObserver let:intersecting once="true" top={100}>
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
		text-align: center;
		padding: 3rem;
	}

	.aboutme {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 3rem;
		margin: auto;
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

	main img {
		border-radius: 5px;
		max-width: 30%;
		max-height: 30%;
		margin: 1rem;
	}

	.title {
		font-size: 4rem;
		margin-bottom: 1rem;
		font-weight: bold;
		letter-spacing: 6px;
	}

	.description {
		font-size: 1.75rem;
		line-height: 3rem;
	}

	.icons {
		margin-top: 1rem;
		justify-content: center;
		align-items: center;
		align-content: center;
	}
</style>
