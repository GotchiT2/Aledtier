<script lang="ts">
	import Tier from './../components/Tier.svelte';
	import Nav from "../components/Nav.svelte";
	import {criterias, topics} from "../lib/stores"
	import type { criteria, topic } from '../lib/stores';

	let criteriass:criteria[] = [];
	let topitots:topic[] = [];
	const placeholder = "Replace this text"

	$: criterias.subscribe(criteria => {
		criteriass = criteria;
	});

	$: topics.subscribe(topic => {
		topitots = topic;
	});

	function addCriteria() {
		$criterias = [...$criterias, {id: $criterias.length, label: placeholder}]
		console.log($criterias)
	}

	function addTopic() {
		$topics = [...$topics,  {id: $topics.length, label: placeholder}]
	}
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Tier List maker" />
</svelte:head>

<Nav/>

<h1>Ma tier List !</h1>

<section>
	<table>
		<thead>
			<tr>
				<td class="col-tier"><button>Settings</button></td>
				<td class="col-topic">title</td>
				{#each criteriass as criteria (criteria.id)}
					<td class="col-criteria"><div contenteditable bind:innerHTML={criteria.label}>{criteria}</div></td>
				{/each}
				<td class="col-add-col"><button on:click={addCriteria}>+</button></td>
				<td class="col-result">/10</td>
			</tr>
		</thead>

		<tbody>
			{#each topitots as topito (topito.id)}
				<tr>
					<td><Tier letter="A"/></td>
					<td class="col-topic" ><div contenteditable bind:innerHTML={topito.label}>{topito.label}</div></td>
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
		position: relative;
	}

	.col-criteria div {
		border: 1px solid white;
		padding: .5rem;
		width: 75%;
	}
	.col-add-col {
		width: 2rem; 
	}
	.col-result {
	}

	button {
		background: transparent;
		color: white;
		border: 1px solid white;
		padding: .5rem 1rem;
		cursor: pointer;
	}

	button:hover {
		background: white;
		color: var(--bg-color);
	}
</style>
