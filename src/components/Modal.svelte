<script lang="ts">
	export let showModal:boolean; // boolean

	let dialog:HTMLDialogElement; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation>
		<slot name="header" />
		<button class="close-modal" autofocus on:click={() => dialog.close()}>close modal</button>
		<hr />
		<slot />
		<hr />
		<!-- svelte-ignore a11y-autofocus -->
	</div>
</dialog>

<style>
  .close-modal {
    padding: 0.5rem;
    border: 1px solid var(--bg-color);
    background-color: white;
    color: var(--bg-color);
    transition: .2s ease;
    cursor: pointer;
  }

  .close-modal:hover {
    border: 1px solid var(--bg-color);
    background-color: var(--bg-color);
    color: white;
  }

	dialog {
		max-width: 50em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
