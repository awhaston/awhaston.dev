<script>
	import GithubIcon from '../components/Icons/GithubIcon.svelte';
	import LinkedIn from '../components/Icons/LinkedIn.svelte';
	import MailIcon from '../components/Icons/MailIcon.svelte';
	import Homepage from '../components/Homepage.svelte';
	import Job from '../components/Job.svelte';
	import Degree from '../components/Degree.svelte';
	import Certification from '../components/Certification.svelte';
	import itf from '../lib/assets/itf.jpg';
	import gntc from '../lib/assets/gntc.jpg';
	import testout from '../lib/assets/testout.png';


	const iconSize = '40';
	let y;
	let w;

	const jobs = [
		{
			title: 'Information Technology Manager',
			date: 'August 2019 - November 2021',
			description:
				'During August 2019 - November 2021, I worked with Family Resource Agency as an Information Technology Specialist. Family Resource Agency is a nonprofit that receives federal government grants to serve the Headstart program to underprivileged children in the Tennessee and North Georgia area.',
			tasks: [
				'Manage computers and iPads with Azure Active Directory and Microsoft Intune',
				'Manage identities with Azure Active Directory and on-prem Active Directory',
				'Manage tickets on the company Help-desk',
				'Provide technical support for Windows 10 and iPadOS to over 300 end-users',
				'Prepping staff with new computers and iPads',
				'Managing the location on inventoried items physically and digitally',
				'Manage Ubiquity cameras and NVRs',
				'Troubleshoot issues with switches, cameras, WiFi Access Points, UPS’s, routers, and NVRs',
				'Conduct majority of in-person user interactions to staff for the IT Department',
				'Meeting with vendors with network cable, access point, and camera installations'
			]
		},
		{
			title: 'Development-Operations Technician Intern',
			date: 'August 2022 - Present',
			description:
				"Currently, while getting my bachelor's degree, I am a Dev-Ops Technician at Sielox LLC. Sielox is a company that provides Access Control products to schools and companies with AnyWhere, CLASS, and Pinnacle. I work with the Dev-Ops department to clean up source code and to bring modern source control to the 2 decade old project Pinnacle.",
			tasks: [
				'Create YAML files to automate continuous development pipelines',
				'Write windows batch scripts to copy source code to automate source control',
				'Remotely connected to Windows 2003 to work with legacy source code',
				'Create build scripts for Visual Build Pro'
			]
		}
	];

	const degrees = [
		{
			level: "Bachelor's Degree:",
			name: 'Information Technology',
			school: 'Kennesaw State University',
			year: 'Currently Pursing'
		},
		{
			level: "Associate's Degree:",
			name: 'CyberSecurity',
			school: 'Georgia Northwestern Technical College',
			year: '2019'
		},
		{
			level: "Associate's Degree:",
			name: 'Networking',
			school: 'Georgia Northwestern Technical College',
			year: '2019'
		}
	];

	const certifications = [
		{
			title: 'IT Fundamentals+',
			company: 'CompTIA',
			year: '2018',
			icon: itf,
			code: 'COMP001021308633'
		},
		{
			title: 'Security Pro',
			company: 'Testout',
			year: '2017',
			icon: testout,
			code: 'C2KAR'
		},
		{
			title: 'CISCO Network Specialist',
			company: 'GNTC',
			year: '2018',
			icon: gntc,
			code: ''
		},
		{
			title: 'PC Repair and Network Technician',
			company: 'GNTC',
			year: '2018',
			icon: gntc,
			code: ''
		},
		{
			title: 'Computer Forensics and Security Specialist',
			company: 'GNTC',
			year: '2018',
			icon: gntc,
			code: ''
		}
	];
</script>

<svelte:window bind:scrollY={y} />
<main bind:clientWidth={w}>
	<section class="homepage">
		<Homepage />
		<span class="icons">
			<LinkedIn {iconSize} />
			<GithubIcon {iconSize} />
			<MailIcon {iconSize} />
		</span>
	</section>

	<h2 class="heading">Work Experience</h2>
	<section class={w > 900 ? 'work' : 'work-small'}>
		<Job visible={y > 320} job={jobs[1]} />

		{#if w > 900}
			<div />
			<div />
		{/if}

		<Job visible={y > 972} job={jobs[0]} />
	</section>

	<h2 class="heading">Education</h2>

	<section class={w > 1150 ? 'degree' : 'degree-small'}>
		{#each degrees as item}
			<Degree visible={y > 1846} degree={item} />
		{/each}
	</section>

	<h2 class="heading">License and Certifications</h2>
	<section class={w > 1150 ? 'cert' : 'cert-small'}>
		{#each certifications as item}
			<Certification certification={item} visible={y > 2259} />
		{/each}
	</section>
</main>

<style>
	main {
		animation: fadeIn 0.75s;
	}

	main section {
		margin-bottom: 3rem;
	}

	@keyframes fadeIn {
		0% {
			transform: translateY(-20px);
			opacity: 0;
			filter: blur(5px);
		}
		100% {
			transform: translateY(0);
			opacity: 1;
			filter: blur(0);
		}
	}

	.homepage {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-left: 1rem;
		padding-right: 1rem;
		height: 100vh;
	}

	.work {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
		align-items: center;
		padding-left: 3rem;
		padding-right: 3rem;
	}

	.work-small {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		margin-left: 1rem;
		margin-right: 1rem;
		padding-left: 3rem;
		padding-right: 3rem;
	}

	.degree {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
	.degree-small {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		margin-left: 1rem;
		margin-right: 1rem;
		padding-left: 3rem;
		padding-right: 3rem;
	}

	.cert {
		display: grid;
		gap: 2rem;
		margin-bottom: 3rem;
		grid-template-columns: repeat(auto-fit, minmax(350px, 4fr));
		justify-content: center;
		justify-items: center;
		align-items: center;
		align-content: center;
	}

	.heading {
		text-align: center;
		margin-bottom: 4rem;
	}

	.icons {
		justify-content: center;
		align-items: center;
		align-content: center;
	}
</style>
