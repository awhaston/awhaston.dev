<script>
	let name = 'name';
	let email = 'email';
	let subject = 'sub';
	let message = 'Message';
	let error;

	async function sendEmail() {
		try {
			const response = await fetch('./api/email', {
				method: 'POST',
				body: JSON.stringify({ name, email, subject, message }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const result = await response.json();
			console.log(result);
		} catch (err) {
			error = err;
		}
	}
</script>

<form>
	<h2>Send me an email!</h2>
	<textarea bind:value={name} name="name" id="name" class="name" placeholder="Full Name" required />
	<textarea bind:value={email} name="email" id="email" class="email" placeholder="Email" required />
	<textarea
		bind:value={subject}
		name="subject"
		id="email"
		class="subject"
		placeholder="Subject"
		required
	/>
	<textarea
		bind:value={message}
		name="message"
		id="email"
		class="message"
		placeholder="Enter your message"
		required
	/>
	<button type="submit" on:click|preventDefault={sendEmail}>Submit</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	form textarea {
		width: 25rem;
		height: 3rem;
		margin-bottom: 1rem;
		resize: none;
		font-size: 16px;
		box-sizing: border-box;
		padding: 12px 20px;
	}

	.message {
		height: 10rem;
	}
</style>
