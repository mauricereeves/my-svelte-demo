import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database';

export function load({ cookies }) {
    let id = cookies.get('userId');

    if (!id) {
        id = crypto.randomUUID();
        cookies.set('userId', id, { path: '/todos'});
    }

    return {
        todos: db.getTodos(id)
    };
}

// handle the form submission
export const actions = {
    create: async ({ cookies, request }) => {
        const formData = await request.formData();

        try {
            db.createTodo(cookies.get('userId'), formData.get('description'));
        } catch (error: any) {
            return fail(422, { description: formData.get('description'), error: error.message });
        }
    },

    delete: async ({ cookies, request }) => {
        const formData = await request.formData();
        db.deleteTodo(cookies.get('userId'), formData.get('id'));
    }
};