<script lang="ts">
  let { data } = $props();
</script>

<div>
  <h1 class="text-2xl font-bold">todos, get it done</h1>

  <form method="POST">
    <label
      >add a todo: <input
        type="text"
        name="description"
        autocomplete="off"
        placeholder="what do you want to do?"
      /></label
    >
  </form>

  <ul>
    {#each data.todos as todo (todo.id)}
      <li class="border-gray-500 border-2 rounded-md p-2 my-2">
        {todo.description}
      </li>
    {/each}
  </ul>
</div>
