<script>
	import gntc from '../lib/assets/gntc.jpg';
	const degrees = [
		{
			level: "Bachelor's Degree:",
			name: 'Information Technology',
			school: 'Kennesaw State University',
			year: '2021 - Present',
			icon: gntc
		},
		{
			level: "Associate's Degree:",
			name: 'CyberSecurity',
			school: 'Georgia Northwestern Technical College',
			year: '2019',
			icon: gntc
		},
		{
			level: "Associate's Degree:",
			name: 'Networking',
			school: 'Georgia Northwestern Technical College',
			year: '2019',
			icon: gntc
		}
	];
</script>

<div class="container">
	{#each degrees as degree}
		<div class="degree-container">
			<img src={degree.icon} alt={degree.school} />
			<div>{degree.level}</div>
			<div>{degree.name}</div>
			<div>{degree.school}</div>
			<div>{degree.year}</div>
		</div>
	{/each}
</div>

<style>
	img {
		width: 10vw;
		height: 10vw;
		margin-bottom: 1rem;
		border-radius: 5px;
	}

	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.degree-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		word-break: keep-all;
		width: 25vw;
	}
</style>
