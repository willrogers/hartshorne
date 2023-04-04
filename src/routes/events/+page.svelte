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
	We are also happy to show round private groups by prior arrangement. There is no charge but we ask
	for a donation to a Trussell Trust food bank. Please <a href="{base}/contact"
		>contact Catherine Rogers</a
	>.
</p>

<div id="images">
	<img alt="Woman tending a fire" src="{base}/woman-with-fire.jpg" />
	<img alt="Women spinning" src="{base}/two-women.jpg" />
	<img alt="Man wearing a smock and hat" src="{base}/man-with-hat.jpg" />
</div>

<style>
	div#images {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}
</style>
