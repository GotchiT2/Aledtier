<script>
	import Tier from '../components/Tier.svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Tier letter={'SSS'} />
	<Tier letter={'S'} />
	<Tier letter={'A'} />
	<Tier letter={'B'} />
	<Tier letter={'C'} />
	<Tier letter={'D'} />
	<Tier letter={'E'} />
	<Tier letter={'F'} />
	<Tier letter={'G'} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
