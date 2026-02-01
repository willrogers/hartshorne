<script lang="ts">
	import { asset } from '$app/paths';
	import Modal from '../../components/Modal.svelte';

	let showModal = false;
	let currentImage = {
		src: '',
		alt: '',
		caption: ''
	};

	function openModal(smallSrc: string, alt: string, caption: string) {
		// Convert small image path to full-size image path
		const fullSrc = smallSrc.replace('/small/', '/large/');
		currentImage = {
			src: fullSrc,
			alt,
			caption
		};
		showModal = true;
	}
</script>

<svelte:head>
	<title>Gallery</title>
</svelte:head>

<h1>Gallery</h1>

<p>Some images from Upper Hall.</p>

<div
	class="image"
	role="button"
	tabindex="0"
	on:click={() =>
		openModal(asset('/small/house-at-dusk.jpg'), 'The house at dusk', 'The house at dusk')}
	on:keydown={(e) =>
		e.key === 'Enter' &&
		openModal(asset('/small/house-at-dusk.jpg'), 'The house at dusk', 'The house at dusk')}
>
	<figure>
		<img alt="The house at dusk" src={asset('/small/house-at-dusk.jpg')} />
		<figcaption>The house at dusk</figcaption>
	</figure>
</div>

<div
	class="image"
	role="button"
	tabindex="0"
	on:click={() =>
		openModal(
			asset('/small/living-area.jpg'),
			'The main living room, originally known as the hall',
			'The main living room, originally known as the hall'
		)}
	on:keydown={(e) =>
		e.key === 'Enter' &&
		openModal(
			asset('/small/living-area.jpg'),
			'The main living room, originally known as the hall',
			'The main living room, originally known as the hall'
		)}
>
	<figure>
		<img
			alt="The main living room, originally known as the hall"
			src={asset('/small/living-area.jpg')}
		/>
		<figcaption>The main living room, originally known as the hall</figcaption>
	</figure>
</div>

<div
	class="image"
	on:click={() =>
		openModal(
			asset('/small/dining-room.jpg'),
			'The dining room, originally the kitchen',
			'The dining room, originally the kitchen'
		)}
	on:keydown={(e) =>
		e.key === 'Enter' &&
		openModal(
			asset('/small/dining-room.jpg'),
			'The dining room, originally the kitchen',
			'The dining room, originally the kitchen'
		)}
	role="button"
	tabindex="0"
>
	<figure>
		<img alt="The dining room, originally the kitchen" src={asset('/small/dining-room.jpg')} />
		<figcaption>The dining room, originally the kitchen</figcaption>
	</figure>
</div>

<div
	class="image"
	on:click={() =>
		openModal(asset('/small/curates-room.jpg'), 'The "Curate\'s Room"', 'The "Curate\'s Room"')}
	on:keydown={(e) =>
		e.key === 'Enter' &&
		openModal(asset('/small/curates-room.jpg'), 'The "Curate\'s Room"', 'The "Curate\'s Room"')}
	role="button"
	tabindex="0"
>
	<figure>
		<img alt="The &quot;Curate's Room&quot" src={asset('/small/curates-room.jpg')} />
		<figcaption>The "Curate's Room"</figcaption>
	</figure>
</div>

<div
	class="image"
	on:click={() => openModal(asset('/small/bedroom1.jpg'), 'A bedroom', 'One of the bedchambers')}
	on:keydown={(e) =>
		e.key === 'Enter' &&
		openModal(asset('/small/bedroom1.jpg'), 'A bedroom', 'One of the bedchambers')}
	role="button"
	tabindex="0"
>
	<figure>
		<img alt="A bedroom" src={asset('/small/bedroom1.jpg')} />
		<figcaption>One of the bedchambers</figcaption>
	</figure>
</div>

<Modal
	bind:showModal
	imageSrc={currentImage.src}
	imageAlt={currentImage.alt}
	caption={currentImage.caption}
/>

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
		cursor: pointer;
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
		border-radius: 4px;
		outline: none;
	}

	img:hover,
	img:focus {
		transform: scale(1.02);
		opacity: 0.9;
	}

	img:focus {
		box-shadow: 0 0 0 2px #0066cc;
	}
</style>
