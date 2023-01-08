<script>
	import Icon from '$lib/assets/profile.jpeg';
</script>

<h1>My name is Wyatt Haston</h1>
<div class="homepage">
	<img src={Icon} alt="Profile" />
	<ul>
		<li>I am currently a student at Kennesaw State University pursing Information Technology</li>
		<li>I work an internship at Sielox LLC as a Dev-Ops Technician</li>
		<li>Musician</li>
		<li>Hobbyist Web Developer</li>
		<li>Home Chef</li>
		<li>Coffee Enthusiast</li>
	</ul>
</div>

<style>
	.homepage {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		padding: 1rem;
		margin-bottom: 1.5rem;
	}

	img {
		border-radius: 5px;
		max-width: 35%;
		max-height: 35%;
	}

	ul {
		width: 45%;
	}

	li {
		margin-bottom: 2rem;
		font-size: 1.5rem;
		list-style: none;

	}

	h1 {
		font-size: 3rem;
	}
</style>
