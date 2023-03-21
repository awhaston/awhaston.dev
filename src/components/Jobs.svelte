<script>
	import Arrow from './Icons/Arrow.svelte';
	const jobs = [
		{
			title: 'Development-Operations Technician Intern',
			date: 'Aug 2022 - Present',
			description:
				"Currently, while getting my bachelor's degree, I am a Dev-Ops Technician at Sielox LLC. Sielox is a company that provides Access Control products to schools and companies with AnyWhere, CLASS, and Pinnacle. I work with the Dev-Ops department to clean up source code and to bring modern source control to the 2 decade old project Pinnacle.",
			tasks: [
				'Create YAML files to automate continuous development pipelines',
				'Write windows batch scripts to copy source code to automate source control',
				'Remotely connected to Windows 2003 to work with legacy source code',
				'Create build scripts for Visual Build Pro'
			],
			hidden: true
		},
		{
			title: 'Information Technology Manager',
			date: 'Aug 2019 - Nov 2021',
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
			],
			hidden: true
		}
	];
</script>

{#each jobs as job}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="title" on:click={() => (job.hidden = !job.hidden)}>
		<Arrow classes={job.hidden ? 'inactive' : 'active'} /><span class="date">{job.date}:</span
		>{job.title}
	</div>
	<div class="overflow {job.hidden ? 'hidden' : 'show'}">
		{job.description}
		{#each job.tasks as task}
			<p>{task}</p>
		{/each}
	</div>
{/each}

<style>
	.title:hover {
		cursor: pointer;
	}
	.title {
		margin-bottom: 1rem;
		font-size: x-large;
		display: flex;
		align-items: center;
	}
	.overflow {
		margin-top: 1rem;
		font-size: large;
	}
	.hidden {
		display: none;
	}
	.date {
		margin-right: 1rem;
	}
</style>
