// just for demo purposes for now as we
// we build out the demo application and work
// with the tools
import { posts } from '$lib/data';

// sveltekit will call this function when the page is loaded
// and pass the return value to the page as props
export function load() {
    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title,
        }))
    };
}