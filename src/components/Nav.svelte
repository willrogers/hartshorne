<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<nav>
	<ul>
		<li>
			<a aria-current={$page.url.pathname === undefined ? 'page' : undefined} href="{base}/">Home</a
			>
		</li>
		<li>
			<a aria-current={$page.url.pathname === 'history' ? 'page' : undefined} href="{base}/history/"
				>History</a
			>
		</li>
		<li>
			<a aria-current={$page.url.pathname === 'gallery' ? 'page' : undefined} href="{base}/gallery/"
				>Gallery</a
			>
		</li>
		<li>
			<a aria-current={$page.url.pathname === 'events' ? 'page' : undefined} href="{base}/events/"
				>Events</a
			>
		</li>
		<li>
			<a aria-current={$page.url.pathname === 'contact' ? 'page' : undefined} href="{base}/contact/"
				>Contact</a
			>
		</li>
	</ul>
</nav>

<style>
	nav {
		width: min(85%, calc(100% - 2em));
		margin: 1em auto;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
		font-weight: 300;
		display: flex;
		justify-content: center;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		transition: all 0.3s linear;
	}
	li:hover {
		background-color: lightgrey;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		background-color: rgb(233, 233, 233);
		transition: all 0.3s linear;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>
