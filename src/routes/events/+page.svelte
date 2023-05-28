<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<h1>Events</h1>

<p>
	The hall and kitchen range is usually open for Heritage Open Days in mid-September. Costumed
	guides welcome you and show you round the whole of the house.
</p>
<p>
	The Heritage Open Day in 2023 will be on Saturday 17th September. You will be able to book soon on
	the <a href="https://www.heritageopendays.org.uk">Heritage Open Days</a> website.
</p>
<p>
	We are also happy to show round private groups by prior arrangement. There is no charge but we ask
	for a donation to a Trussell Trust food bank. Please <a href="{base}/contact"
		>contact Catherine Rogers</a
	>.
</p>

<div id="images">
	<img alt="Woman tending a fire" src="{base}/small/woman-with-fire.jpg" />
	<img alt="Women spinning" src="{base}/small/two-women.jpg" />
	<img alt="Man wearing a smock and hat" src="{base}/small/man-with-hat.jpg" />
</div>

<style>
	div#images {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	img {
		width: 100%;
		max-width: 500px;
		margin: 0 0 1em 0;
	}
</style>
