<script>
	export let job = {
		title: 'title',
		date: 'date',
		description: 'description',
		tasks: ['task1', 'task2']
	};
</script>

<section class="g-job">
	<h2>{job.title}</h2>
	<h4>{job.date}</h4>
	<p>{job.description}</p>
	<br />
	{#each job.tasks as item}
		<p>{item}</p>
	{/each}
</section>

<style>
	section {
		animation-name: fadeIn;
		animation-duration: 2s;
	}

	@keyframes slide {
		0% {
			transform: translateX(-300%);
		}
		100% {
			transform: translateX(0);
		}
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
</style>
