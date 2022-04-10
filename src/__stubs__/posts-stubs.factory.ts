import { Post } from "../blog.service";

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getPostsStubs(amount = 2): Post[] {
  return Array.from({ length: amount }, () => createPostStub(amount));
}

export function createPostStub(amount: number): Post {
  return {
    userId: randomIntFromInterval(1, amount * 100),
    id: randomIntFromInterval(1, amount * 100),
    title: `Post ${amount}`,
    body: `Body ${amount}`,
  };
}
