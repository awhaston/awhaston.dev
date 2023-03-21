<script>
	import codingcoffee from '../lib/assets/coffee.jpg';
	import gntc from '../lib/assets/gntc.jpg';
	const projects = [
		{
			name: 'Coding && Coffee',
			link: 'https://coffeeandcoding-cfc.pages.dev/',
			source: 'https://github.com/awhaston/react-blog',
			img: codingcoffee,
			description:
				'Coding && Coffee is a Reactjs blog with a Firebase Firestore database. Auth is provided by Firebase and allows the creation of posts using markdown and save them to the database.',
			tech: 'React.JS, Firebase, Typescript, and react-router'
		}
	];
</script>

{#each projects as project}
	<div class="project-container">
		<div>
			<p class="header">{project.name}</p>
			<p>{project.description}</p>
			<p>Tech used:</p>
			<p>{project.tech}</p>
			<a href={project.source}>Source Code</a>
			<a href={project.link}>Live Site</a>
		</div>
	</div>
{/each}

<style>
	.project-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 1rem;
	}

	a {
		color: white;
	}
	p {
		margin-top: 0;
	}
	.header {
		font-size: larger;
		font-weight: bold;
	}
</style>
