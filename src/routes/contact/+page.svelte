<svelte:head>
	<title>Contact</title>
</svelte:head>

<h1>Contact</h1>

<p>Here is how you can contact us.</p>
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
