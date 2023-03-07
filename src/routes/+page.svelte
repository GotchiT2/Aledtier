<script lang="ts">
	import Tier from './../components/Tier.svelte';
	import { TIER_LETTERS } from '../domain/Tier';
	import type { TierLetter } from '../domain/Tier';
	import Nav from "../components/Nav.svelte";
	import {criterias, ratings, topics} from "../lib/stores"
	import type { criteria, topic } from '../lib/stores';

	let criteriass:criteria[] = [];
	let topitots:topic[] = [];

	const placeholderTopic = "Add Topic Name"
	const placeholderCriteria = "Add Criteria Name"

	$: criterias.subscribe(criteria => {
		criteriass = criteria;
	});

	$: topics.subscribe(topic => {
		topitots = topic;
	});

	//$: averages = ratings.subscribe(topic => topic.reduce((acc, curVal) => acc.concat(curVal), []))

	function addCriteria() {
		$criterias = [...$criterias, {id: $criterias.length, label: placeholderCriteria}]
		console.log($criterias)
	}

	function addTopic() {
		$topics = [...$topics,  {id: $topics.length, label: placeholderTopic, average: 0}]
	}

	function rankFromRate(rate: number):TierLetter {
		const rank = TIER_LETTERS.length-1 - rate
		return TIER_LETTERS[rank]
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
				<td class="col-close-row"></td>
				<td class="col-tier"><button>Settings</button></td>
				<td class="col-topic">Title</td>
				{#each criteriass as criteria (criteria.id)}
					<td class="col-criteria"><div contenteditable bind:innerHTML={criteria.label}>{criteria}</div></td>
				{/each}
				<td class="col-add-col"><button on:click={addCriteria}>+</button></td>
				<td class="col-result">/10</td>
			</tr>
		</thead>
		<tbody>
			{#each topitots as topito (topito.id)}
			<tr class="tr">
					<td class="col-close-row"><button class="close">x</button></td>
					<td><Tier letter={rankFromRate(topito.average)}/></td>
					<td class="col-topic"><div contenteditable bind:innerHTML={topito.label}>{topito.label}</div></td>
					{#each criteriass as criteria} 
						<td class="col-criteria"><div contenteditable></div></td>
					{/each}
					<td></td>
					<td>{topito.average}</td>
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
		min-width: 3rem;
		width: 12rem;
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
		width: 3rem; 
	}
	.col-close-row {
		max-width: 2rem;
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

	

	@media (hover: hover) {
		.close {
			visibility: hidden;
			color: white

		}
		.tr:hover .close {
			visibility: visible;
		}
	}
</style>
