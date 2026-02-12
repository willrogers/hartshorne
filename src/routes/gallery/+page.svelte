<script lang="ts">
	import { asset } from '$app/paths';
	import GalleryWithModal from '../../components/GalleryWithModal.svelte';

	const images = [
		{
			src: asset('/small/house-at-dusk.jpg'),
			alt: 'The house at dusk',
			caption: 'The house at dusk'
		},
		{
			src: asset('/small/living-area.jpg'),
			alt: 'The main living room, originally known as the hall',
			caption: 'The main living room, originally known as the hall'
		},
		{
			src: asset('/small/dining-room.jpg'),
			alt: 'The dining room, originally the kitchen',
			caption: 'The dining room, originally the kitchen'
		},
		{
			src: asset('/small/curates-room.jpg'),
			alt: 'The "Curate\'s Room"',
			caption: 'The "Curate\'s Room"'
		},
		{
			src: asset('/small/bedroom1.jpg'),
			alt: 'A bedroom',
			caption: 'One of the bedchambers'
		}
	];
</script>

<svelte:head>
	<title>Gallery</title>
</svelte:head>

<h1>Gallery</h1>

<p>Some images from Upper Hall.</p>

<GalleryWithModal {images} />
