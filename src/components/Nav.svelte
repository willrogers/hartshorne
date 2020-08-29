<script>
	export let segment;
</script>

<style>
	nav {
		width: calc(100% - 2em);
		margin: 1em;
		box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
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
		background-color:lightgrey;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		background-color:rgb(233, 233, 233);
		transition: all 0.3s linear;
	}


	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a aria-current="{segment === 'history' ? 'page' : undefined}" href="history">History</a></li>
		<li><a aria-current="{segment === 'visiting' ? 'page' : undefined}" href="visiting">Visiting</a></li>
		<li><a aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>
		<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contact</a></li>
	</ul>
</nav>
