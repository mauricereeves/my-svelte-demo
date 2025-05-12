interface Todo {
    id: string;
    description: string;
    createdAt: Date;
    done: boolean;
}

const db = new Map<string, Todo[]>();

// ensure the db is initialized for a user
function ensureDb(userId: string): Todo[] {
    if (!db.get(userId)) {
        db.set(userId, []);
    }

    return db.get(userId) ?? [];
}

// get the todos for a user
export function getTodos(userId: string): Todo[] {
    if (!db.get(userId)) {
        db.set(userId, [{
            id: crypto.randomUUID(),
            description: 'Learn SvelteKit',
            createdAt: new Date(),
            done: false
        }]);
    }

    return db.get(userId) ?? [];
}

// create a todo for a user
export function createTodo(userId: string, description: string): void {
    // basic validation
    if (!description) {
        throw new Error('Description is required');
    }
    // ensure the db is initialized for a user
    const todos = db.get(userId) ?? ensureDb(userId);

    // check for uniqueness
    if (todos.find((todo) => todo.description === description)) {
        throw new Error('Todo already exists');
    }

    todos.push({
        id: crypto.randomUUID(),
        description,
        createdAt: new Date(),
        done: false
    });
}

// delete a todo for a user
export function deleteTodo(userId: string, todoId: string): void {
    const todos = db.get(userId) ?? ensureDb(userId);
    const index = todos.findIndex((todo) => todo.id === todoId);

    if (index !== -1) {
        todos.splice(index, 1);
    }
}

// Export the Todo interface so it can be used in other files
export type { Todo }; 