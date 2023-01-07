import { json } from '@sveltejs/kit';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
		const { name, email, subject, message } = await request.json();
		let transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAILER,
				pass: process.env.EMAILER_PASS
			}
		});

		const sender = 'awhastonemailer@gmail.com';
		const to = 'awhaston@gmail.com';

		const emailSubject = 'You have an email from ' + email + ' from ' + name;
		const emailMessage = subject + ' | ' + message;

		const mailOptions = {
			from: sender,
			to: to,
			subject: emailSubject,
			text: emailMessage,
			html: `<p>${emailMessage}</p>`
		};

		transporter.sendMail(mailOptions, (error) => {
			if (error) {
				console.log(error);
				return json(error);
			} else {
				console.log('Email sent');
				return Response(JSON.stringify({ message: 200 }));
			}
		});
		return json(200);
	}


