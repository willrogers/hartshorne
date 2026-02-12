<script lang="ts">
	import Modal from './Modal.svelte';
	import GalleryImage from './GalleryImage.svelte';

	export let images: Array<{
		src: string;
		alt: string;
		caption: string;
	}>;

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

{#each images as image}
	<GalleryImage src={image.src} alt={image.alt} caption={image.caption} onClick={openModal} />
{/each}

<Modal
	bind:showModal
	imageSrc={currentImage.src}
	imageAlt={currentImage.alt}
	caption={currentImage.caption}
/>
