<script>
	import '../styles/global.css';
	import Nav from '../components/Nav.svelte';
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	main {
		position: relative;
		background-color: white;
		padding: 2em;
		margin: 15px auto;
		box-sizing: border-box;
	}
</style>
