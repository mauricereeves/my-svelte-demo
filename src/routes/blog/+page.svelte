<script lang="ts">
  let { data } = $props();
</script>

<div class="container mx-auto">
  <h1 class="text-3xl">Blog</h1>
  <main class="w-full">
    <ul>
      {#each data.summaries as { slug, title }}
        <li><a href={`/blog/${slug}`}>{title}</a></li>
      {/each}
    </ul>
  </main>
</div>
