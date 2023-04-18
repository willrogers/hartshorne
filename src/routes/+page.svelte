<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Upper Hall Hartshorne</title>
</svelte:head>

<h1>Upper Hall, Hartshorne</h1>

<figure>
	<img alt="Upper Hall, Hartshorne" src="{base}/small/snow.jpg" />
	<figcaption>The house in winter 2020</figcaption>
</figure>

<p>
	Hartshorne Upper Hall is a Grade II* timber-framed house built in the 1620s for John Benskin, a
	wealthy yeoman who was tenant of the Hartshorne upper manor. Originally a large high-status house,
	by the early 20th century it was divided into three cottages owned by George Wilkinson, an
	“odd-stuff maker” in the local pipeyards, who purchased it from Lord Carnarvon’s Bretby estate for
	£270. The rent for one cottage was 12s 3d (61p) in 1968.
</p>
<p>
	The house consists of a “hall and kitchen range” with a two-storey porch and a “parlour wing” at
	right angles, forming a T shape. Conserved and repaired in the 1970s, it now forms two homes.
	Exceptionally well-preserved inside and out, with cellars, ovens, original layout, and nearly all
	the internal close-studded daub and wattle walls remaining intact, this rare survival has much to
	tell us about life in the early 17th century.
</p>

<style>
	h1,
	figure,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 500px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
