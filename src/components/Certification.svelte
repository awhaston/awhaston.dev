<script>
	export let certification = {
		title: 'title',
		school: 'school',
		year: 'year',
		icon: 'icon'
	};

	export let visible;
	export let small;
</script>

<div class='{!visible ? 'hidden' : 'show'} {!small ? 'cert' : 'cert-small'}'>
	<img src={certification.icon} alt={certification.title} />
	{certification.title}
	{certification.school}
	{certification.year}
</div>

<style>
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
</style>
