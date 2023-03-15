<script lang="ts">
	import type { TierLetter } from '../domain/Tier';
	import type { criteria, topic } from '../lib/stores';
	import { tierLabels } from '../lib/stores';
	import { criterias, topics, averagesTopics } from "../lib/stores"
	
	import { TIER_LETTERS } from '../domain/Tier';
	
	import Tier from './../components/Tier.svelte';
	import Nav from "../components/Nav.svelte";
	import Modal from '../components/Modal.svelte';
	import SettingsModal from '../components/SettingsModal.svelte';

	const placeholderTopic = "Add Topic Name"
	const placeholderCriteria = "Add Criteria Name"

	let showModal = false;

	//$: averages = ratings.subscribe(topic => topic.reduce((acc, curVal) => acc.concat(curVal), []))

	function addCriteria() {
		$criterias = [...$criterias, {id: $criterias.length, label: placeholderCriteria}]
	}

	function addTopic() {
		$topics = [...$topics,  {id: $topics.length, label: placeholderTopic, average: Math.floor(Math.random()*9)}]
	}


	function removeTopic(id: number) {
		const previousTopicsArray = [...$topics];
		previousTopicsArray.splice(id, 1)
		const newTopicsArray = previousTopicsArray.map((t, index) => ({...t, id: index }))
		
		topics.set(newTopicsArray)
}

	function removeCriteria(id: number) {
		const previousCriteriasArray = [...$topics];
		previousCriteriasArray.splice(id, 1)
		const newCriteriasArray = previousCriteriasArray.map((t, index) => ({...t, id: index }))
		
		criterias.set(newCriteriasArray)
	}
	

	function tierClassFromAverage(average: number):TierLetter {
		const rank = TIER_LETTERS.length-1 - average
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
				<td></td>
				<td></td>
				<td></td>
				{#each $criterias as criteria (criteria.id)}
					<td class="col-close-col"><button on:click={() => removeCriteria(criteria.id)} class="close-col">x</button></td>
				{/each}
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td class="col-close-row"></td>
				<td class="col-tier"><button on:click={() => showModal = !showModal}>Settings</button></td>
				<td class="col-topic">Title</td>
				{#each $criterias as criteria (criteria.id)}
					<td class="col-criteria"><div contenteditable bind:innerHTML={criteria.label}>{criteria}</div></td>
				{/each}
				<td class="col-add-col"><button on:click={addCriteria}>+</button></td>
				<td class="col-result">/10</td>
			</tr>
		</thead>

		<tbody>

			{#each $topics as topito (topito.id)}
			<tr class="tr">
					<td class="col-close-row"><button on:click={() => removeTopic(topito.id)} class="close">x</button></td>
					<td><Tier letter={$tierLabels[$tierLabels.length-1-topito.average]} tierClass={tierClassFromAverage(topito.average)}/></td>
					<td class="col-topic"><div contenteditable bind:innerHTML={topito.label}>{topito.label}</div></td>
					{#each $criterias as criteria} 
						<td class="col-criteria"><div contenteditable></div></td>
					{/each}
					<td></td>
					<td>{$averagesTopics}</td>
				</tr>
			{/each}
		</tbody>

		<tfoot>
			<td></td>
			<td class="col-add-row"><button on:click={addTopic}>+</button></td>
		</tfoot>
	</table>
</section>

<Modal bind:showModal>
	<h2 slot="header">
		Paramètres
	</h2>

	<SettingsModal/>
</Modal>

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
		padding: .5rem;
		width: 75%;
	}
	.col-add-col {
		width: 3rem; 
	}
	.col-close-row, .col-close-col{
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
		transition: .2s ease;

	}

	button:hover {
		background: white;
		color: var(--bg-color);
	}

	

	@media (hover: hover) {
		.close, .close-col {
			visibility: hidden;
			color: red;
			border: 1px solid red;
			border-radius: 5px;
			transition: .2s ease;
		}

		.close:hover, .close-col:hover {
			color: white;
			background-color: red;

		}

		.tr:hover .close {
			visibility: visible;
		}

		.td:hover .close-col {
			visibility: visible;
		}
	}
</style>
