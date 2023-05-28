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
		<img alt="The house at dusk" src="{base}/small/house-at-dusk.jpg" />
		<figcaption>The house at dusk</figcaption>
	</figure>
</div>

<div class="image">
	<figure>
		<img
			alt="The main living room, originally known as the hall"
			src="{base}/small/living-area.jpg"
		/>
		<figcaption>The main living room, originally known as the hall</figcaption>
	</figure>
</div>

<div class="image">
	<figure>
		<img alt="The dining room, originally the kitchen" src="{base}/small/dining-room.jpg" />
		<figcaption>The dining room, originally the kitchen</figcaption>
	</figure>
</div>

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
		max-width: 600px;
		margin: 0 0 1em 0;
	}
</style>
