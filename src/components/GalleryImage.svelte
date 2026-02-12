<script lang="ts">
	export let src: string;
	export let alt: string;
	export let caption: string;
	export let onClick: (src: string, alt: string, caption: string) => void;

	function handleClick() {
		onClick(src, alt, caption);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			onClick(src, alt, caption);
		}
	}
</script>

<div class="image" role="button" tabindex="0" on:click={handleClick} on:keydown={handleKeydown}>
	<figure>
		<img {alt} {src} />
		<figcaption>{caption}</figcaption>
	</figure>
</div>

<style>
	div.image {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		outline: none;
	}

	div.image:focus-visible {
		outline: 2px solid #0066cc;
		outline-offset: 4px;
		border-radius: 4px;
	}

	img {
		width: 100%;
		max-width: 600px;
		margin: 0 0 1em 0;
		transition:
			transform 0.2s ease,
			opacity 0.2s ease;
		border-radius: 4px;
	}

	div.image:hover img,
	div.image:focus img {
		transform: scale(1.02);
		opacity: 0.9;
	}

	figure {
		margin: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	figcaption {
		text-align: center;
		font-style: italic;
		color: #666;
		margin-top: 0.5em;
	}
</style>
