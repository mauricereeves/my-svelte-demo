import { posts } from "$lib/data";
import { error } from "@sveltejs/kit";

// sveltekit will call this function when the page is loaded
// and pass the return value to the page as props
// params in this case if the value of the slug in the url
// for example if the url is /blog/welcome then params.slug is `welcome`
export function load({ params }) {
    const post = posts.find((post) => post.slug === params.slug);
    
    // if the post is not found, return a 404 error
    if (!post) error(404);

    // return the post to the page as props
    return { post };
}