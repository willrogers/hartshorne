<script>
	export let showModal = false;
	export let imageSrc = '';
	export let imageAlt = '';
	export let caption = '';

	function closeModal() {
		showModal = false;
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	function handleBackdropClick(event) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if showModal}
	<div class="modal-backdrop" on:click={handleBackdropClick} role="dialog" aria-modal="true">
		<div class="modal-content">
			<button class="close-button" on:click={closeModal} aria-label="Close modal">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>
			<img src={imageSrc} alt={imageAlt} />
			{#if caption}
				<p class="caption">{caption}</p>
			{/if}
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		backdrop-filter: blur(4px);
	}

	.modal-content {
		position: relative;
		max-width: 90vw;
		max-height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: white;
		border-radius: 8px;
		padding: 20px;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		background: rgba(0, 0, 0, 0.5);
		border: none;
		color: white;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background-color 0.2s;
		z-index: 1001;
	}

	.close-button:hover {
		background: rgba(0, 0, 0, 0.7);
	}

	.modal-content img {
		max-width: 100%;
		max-height: 80vh;
		object-fit: contain;
		border-radius: 4px;
	}

	.caption {
		margin-top: 12px;
		text-align: center;
		font-style: italic;
		color: #666;
	}

	/* Animation */
	.modal-backdrop {
		animation: fadeIn 0.2s ease-out;
	}

	.modal-content {
		animation: slideIn 0.3s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: scale(0.9) translateY(-20px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}
</style>
