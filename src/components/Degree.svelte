<script>
	export let degree = {
		level: 'level',
		name: 'name',
		year: 'year',
		school: 'school'
	};

    export let visible = false;
</script>

<div class="degree {visible ? 'show' : 'hidden'}">
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
		width: 20vw;
		height: 20vw;
		justify-content: space-evenly;
	}

    .hidden{
        opacity: 0;
        transform: translateX(-100%);
        transition: all 1s;
    }

    .show{
        opacity: 1;
        transform: translateX(0);
        transition: all 1s;
    }

    @keyframes slide{
        0%{
            
        }
        100%{
            transform: translateX(0);
        }
    }

    .degree:nth-child(1){
        animation-delay: 300ms;
    }
    .degree:nth-child(2){
        animation-delay: 600ms;
    }
    .degree:nth-child(3){
        animation-delay: 1200ms;
    }


</style>
