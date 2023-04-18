<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Gallery</title>
</svelte:head>

<h1>Gallery</h1>

<p>Some images from Upper Hall.</p>

<div class="image">
	<figure>
		<img alt="The &quot;Curate's Room&quot" src="{base}/small/curates-room.jpg" />
		<figcaption>The "Curate's Room"</figcaption>
	</figure>
</div>

<div class="image">
	<figure>
		<img alt="A bedroom" src="{base}/small/bedroom1.jpg" />
		<figcaption>One of the bedrooms.</figcaption>
	</figure>
</div>

<style>
	div.image {
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
