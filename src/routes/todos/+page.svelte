<script lang="ts">
  let { data } = $props();
</script>

<div>
  <h1 class="text-2xl font-bold">todos, get it done</h1>

  <form method="POST" action="?/create">
    <label
      >add a todo: <input
        type="text"
        name="description"
        autocomplete="off"
        placeholder="what do you want to do?"
        class="pl-1"
      /></label
    >
  </form>

  <ul>
    {#each data.todos as todo (todo.id)}
      <li class="border-gray-500 border-2 rounded-md p-2 my-2">
        <form
          method="POST"
          action="?/delete"
          class="flex justify-between items-center"
        >
          <input type="hidden" name="id" value={todo.id} />
          <span>{todo.description}</span>
          <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">
            mark as complete
          </button>
        </form>
      </li>
    {/each}
  </ul>
</div>
