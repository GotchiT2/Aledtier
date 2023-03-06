<script lang="ts">
	import Tier from './../components/Tier.svelte';
	import Nav from "../components/Nav.svelte";
	import {criterias, topics} from "../lib/stores"

	let criteriass:string[] = [];
	let topitots:string[] = [];

	$: criterias.subscribe(value => {
		criteriass = value;
	});

	$: topics.subscribe(value => {
		topitots = value;
	});

	function addCriteria() {
		$criterias = [...$criterias, "empty"]
	}

	function addTopic() {
		$topics = [...$topics, "empty"]
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Nav/>
<section>
	<table>
		<thead>
			<tr>
				<td class="col-tier"><button>Settings</button></td>
				<td class="col-topic">title</td>
				{#each criteriass as criteria}
					<td class="col-criteria"><div contenteditable>{criteria}</div></td>
				{/each}
				<td class="col-add-col"><button on:click={addCriteria}>+</button></td>
				<td class="col-result">/10</td>
			</tr>
		</thead>

		<tbody>
			{#each topitots as topito}
				<tr>
					<td><Tier letter="A"/></td>
					<td class="col-topic" ><div contenteditable>{topito}</div></td>
					{#each criteriass as criteria}
						<td class="col-criteria" ><div contenteditable></div></td>
					{/each}
					<td></td>
					<td>5</td>
				</tr>
			{/each}
		</tbody>

		<tfoot>
			<td></td>
			<td class="col-add-row"><button on:click={addTopic}>+</button></td>
		</tfoot>
	</table>
</section>

<style>

	table {
		text-align: center;
	}
	thead td {
		min-width: 12rem;
	}
	.col-tier {
		width: 12rem;
	}
	.col-topic {
	}
	.col-criteria {
	}
	.col-criteria {
	}
	.col-criteria {
	}
	.col-add-col {
		width: 2rem; 
	}
	.col-result {
	}

	


</style>
