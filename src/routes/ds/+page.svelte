<script>
	import Tier from '../../components/Tier.svelte'
	import Nav from "../../components/Nav.svelte";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Nav/>

<h1>Design System</h1>

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

</style>
