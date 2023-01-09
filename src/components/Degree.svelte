<script>
	export let degree = {
		level: 'level',
		name: 'name',
		year: 'year',
		school: 'school'
	};

	export let visible = false;
	export let small = false;
</script>

<div class="degree {visible ? 'show' : 'hidden'} {small ? 'degree' : 'degree-small'}">
	<h1>{degree.level}</h1>
	<h2>{degree.name}</h2>
	<h3>{degree.school}</h3>
	<h4>{degree.year}</h4>
</div>

<style>
	.degree {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		margin-bottom: 4rem;
		background-color: #616161;
		border-radius: 5px;
		width: 20rem;
		justify-content: space-evenly;
	}

	.degree-small {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		margin-bottom: 4rem;
		background-color: #616161;
		border-radius: 5px;
		justify-content: space-evenly;
	}

	.hidden {
		opacity: 0;
		transform: translateX(-100%);
		transition: all 1s;
	}

	.show {
		opacity: 1;
		transform: translateX(0);
		transition: all 1s;
	}

	.degree:nth-child(1) {
		transition-delay: 100ms;
	}
	.degree:nth-child(2) {
		transition-delay: 200ms;
	}
	.degree:nth-child(3) {
		transition-delay: 400ms;
	}
</style>
