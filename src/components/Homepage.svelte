<script>
	import Icon from '$lib/assets/profile.jpeg';
</script>

<h1>Wyatt Haston</h1>
<div class="homepage">
	<img src={Icon} alt="Profile" />
	<p>
		Information Technology Undergrad at Kennesaw State University <br />
		Dev-Ops Technician Intern at Sielox LLC<br />
		Hobbyist Web Developer<br />
		Musician<br />
		Home Chef
	</p>
</div>

<style>
	.homepage {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	img {
		border-radius: 5px;
		max-width: 25%;
		max-height: 25%;
	}

	p {
		margin-bottom: 1rem;
		font-size: 1.5rem;
		list-style: none;
		line-height: 2.5rem;
		text-align: center;
	}

	h1 {
		font-size: 3rem;
	}
</style>
