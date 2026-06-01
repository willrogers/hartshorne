<script>
	import { resolve, asset } from '$app/paths';
	import GalleryWithModal from '../../components/GalleryWithModal.svelte';

	const images = [
		{
			src: asset('/small/woman-with-fire.jpg'),
			alt: 'Woman tending a fire',
			caption: 'Woman tending a fire'
		},
		{
			src: asset('/small/two-women.jpg'),
			alt: 'Women spinning',
			caption: 'Women spinning'
		},
		{
			src: asset('/small/man-with-hat.jpg'),
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
	The Heritage Open Day in 2026 will be on Saturday 12th September. You will be able to book on the <a
		href="https://www.heritageopendays.org.uk/submission-event/hartshorne-upper-hall.html"
		>Heritage Open Days</a
	> website.
</p>
<p>
	We are also happy to show round private groups by prior arrangement. Please <a
		href={resolve("/contact")}>contact Catherine Rogers</a
	>.
</p>

<GalleryWithModal {images} />
