<script>
  let { children } = $props();
  import "../app.css";
</script>

<div class="flex flex-col min-h-screen bg-gray-300">
  <header class="bg-black text-white">
    <nav class="pl-4">
      <a href="/" class="hover:underline">Home</a>
      <a href="/about" class="hover:underline">About</a>
      <a href="/blog" class="hover:underline">Blog</a>
      <a href="/todos" class="hover:underline">Todo List</a>
    </nav>
  </header>

  <main class="mb-auto">
    {@render children()}
  </main>

  <footer class="bg-black text-white">
    <p>Copyright 2025</p>
  </footer>
</div>
