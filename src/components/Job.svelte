<script>
	export let job = {
		title: 'title',
		date: 'date',
		description: 'description',
		tasks: ['task1', 'task2']
	};

    export let visible = false;
</script>

<section class={visible ? 'show' : 'hidden'}>
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
        padding: 1.5rem;
		margin-bottom: 4rem;
		background-color: #616161;
		border-radius: 5px;
	}

    .hidden{
		opacity: 0;
        transition: all 1.5s;
	}

	.show{
		opacity: 1;
        transition: all 1.5s;
	}

</style>
