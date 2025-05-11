<script lang="ts">
  let { data, children } = $props();
</script>

<div
  class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow"
>
  <div class="w-fixed w-full flex-shrink flex-grow-0 px-4">
    <div class="sticky top-0 p-4 w-full h-full">Some nav content</div>
  </div>
  <main class="pt-1 px-3 w-full flex-grow">
    {@render children()}
  </main>
  <div class="w-fixed w-full flex-shrink flex-grow-0 px-4 bg-gray-300">
    <div class="flex sm:flex-col px-2">
      <h2 class="text-lg font-bold">Related posts</h2>
      <ul>
        {#each data.summaries as { slug, title }}
          <li
            class="bg-gray-500 text-white border-2 border-gray-600 rounded-md py-1 px-2 my-2"
          >
            <a href={`/blog/${slug}`}>{title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  @media (min-width: 640px) {
    .w-fixed {
      flex: 0 1 230px;
      min-width: 230px;
    }
  }
</style>
