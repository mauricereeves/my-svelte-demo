<script lang="ts">
    let { data } = $props();
</script>

<div class="container mx-auto">
    <h1 class="text-3xl">Blog</h1>
    <main role="main" class="w-full">
        <h1 class="text-2xl">{data.post?.title}</h1>
        <div>
            {@html data.post?.content}
        </div>
        <a href="/blog">Back to blog</a>
    </main>
</div>