<script lang="ts">
  import { enhance } from "$app/forms";
  import { fly, slide } from "svelte/transition";

  let { data, form } = $props();

  // the built in to focus doesn't work well with the progressive enhancement
  // so we'll use a custom function to focus the input
  // this is a workaround for https://github.com/sveltejs/svelte/issues/7707
  function focusInput(node: HTMLInputElement) {
    node.focus();
  }
</script>

<div>
  <h1 class="text-2xl font-bold">todos, get it done</h1>

  {#if form?.error}
    <p class="text-red-500">{form?.error}</p>
  {/if}

  <form method="POST" action="?/create" use:enhance>
    <label
      >add a todo: <input
        type="text"
        name="description"
        autocomplete="off"
        placeholder="what do you want to do?"
        class="pl-1"
        required
        use:focusInput
      /></label
    >
  </form>

  <ul>
    {#each data.todos as todo (todo.id)}
      <li
        class="border-gray-500 border-2 rounded-md p-2 my-2"
        in:fly={{ y: 20 }}
        out:slide
      >
        <form
          method="POST"
          action="?/delete"
          class="flex justify-between items-center"
          use:enhance
        >
          <input type="hidden" name="id" value={todo.id} />
          <span>{todo.description}</span>
          <button
            type="submit"
            class="bg-blue-500 text-white p-2 rounded-md drop-shadow-md drop-shadow-blue-500/50"
          >
            mark as complete
          </button>
        </form>
      </li>
    {/each}
  </ul>
</div>
