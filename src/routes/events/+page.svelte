<script>
	import { base } from '$app/paths';
	import GalleryWithModal from '../../components/GalleryWithModal.svelte';

	const images = [
		{
			src: `${base}/small/woman-with-fire.jpg`,
			alt: 'Woman tending a fire',
			caption: 'Woman tending a fire'
		},
		{
			src: `${base}/small/two-women.jpg`,
			alt: 'Women spinning',
			caption: 'Women spinning'
		},
		{
			src: `${base}/small/man-with-hat.jpg`,
			alt: 'Man wearing a smock and hat',
			caption: 'Man wearing a smock and hat'
		}
	];
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
	The Heritage Open Day in 2025 will be on Saturday 20th September. You will be able to book on the <a
		href="https://www.heritageopendays.org.uk/visiting/event/hartshorne-upper-hall1"
		>Heritage Open Days</a
	> website.
</p>
<p>
	We are also happy to show round private groups by prior arrangement. There is no charge but we ask
	for a donation to a Trussell Trust food bank. Please <a href="{base}/contact"
		>contact Catherine Rogers</a
	>.
</p>

<GalleryWithModal {images} />
