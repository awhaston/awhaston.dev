<script>
	export let certification = {
		title: 'title',
		company: 'company',
		year: 'year',
		icon: 'icon',
		code: 'code'
	};

	export let visible = true;
	export let small;
</script>

<div class="{!visible ? 'hidden' : 'show'} {!small ? 'cert' : 'cert-small'}">
	<img src={certification.icon} alt={certification.title} />
	<span>{certification.title}</span>
	<span>{certification.company}</span>
	<span>{certification.year}</span>
	<span>{certification.code}</span>
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

	.cert {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 75%;
	}

	span {
		margin-bottom: 5px;
		text-align: center;
	}

	img {
		width: 100px;
		height: 100px;
		object-fit: contain;
		background-color: white;
		border-radius: 50%;
		margin-bottom: 5px;
	}

	.cert:nth-child(1) {
		transition-delay: 100ms;
	}
	.cert:nth-child(2) {
		transition-delay: 200ms;
	}
	.cert:nth-child(3) {
		transition-delay: 400ms;
	}
	.cert:nth-child(4) {
		transition-delay: 100ms;
	}
	.cert:nth-child(5) {
		transition-delay: 200ms;
	}
	.cert:nth-child(6) {
		transition-delay: 400ms;
	}
</style>
