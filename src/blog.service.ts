export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string
}

export class BlogService {
    static api = 'https://jsonplaceholder.typicode.com/posts/';
    static async fetchPosts(): Promise<Post[]> {
        const req = await fetch(this.api);
        return await req.json();
    }
}