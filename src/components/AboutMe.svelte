<script>
	import Icon from '$lib/assets/profile.jpeg';
</script>

<div class="clearfix">
	<img src={Icon} alt="Profile" />
    <h2>About Wyatt Haston</h2>
	<p>
		I am an Undergraduate Student at Kennesaw State University. Currently I work for Sielox LLC as a
		Dev-Ops Technician Intern.
	</p>
</div>

<style>
	div {
		background-color: #616161;
		padding: 2rem;
		border-radius: 5px;
	}
	.clearfix::after {
		content: ' ';
		display: block;
		height: 0;
		clear: both;
	}

	p {
	}

	img {
		border-radius: 5px;
		max-width: 25%;
		max-height: 25%;
		float: right;
	}
</style>
