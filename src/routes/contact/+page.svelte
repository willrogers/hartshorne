<svelte:head>
	<title>Contact</title>
</svelte:head>

<h1>Contact</h1>

<p>
	If you are interested in visiting the hall or you have any questions, please post a message here
	and we will and we will be very pleased to get back to you.
</p>
<form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
	<input type="hidden" name="form-name" value="contact" />
	<p>
		<label for="yourname"> Your Name: </label> <br />
		<input type="text" name="name" id="yourname" />
	</p>
	<p>
		<label for="youremail"> Your Email: </label> <br />
		<input type="email" name="email" id="youremail" />
	</p>
	<p>
		<label for="yourmessage"> Message: </label> <br />
		<textarea name="message" id="yourmessage" />
	</p>
	<p>
		<button type="submit">Send</button>
	</p>
</form>
