import { BlogService, Post } from "../blog.service";
import { getPostsStubs } from "../__stubs__/posts-stubs.factory";

const postCollection = getPostsStubs(5);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(postCollection),
  })
) as jest.Mock;

describe("BlogService", () => {
  it("Should fetch data", async () => {
    const data = await BlogService.fetchPosts();
    expect(fetch).toHaveBeenCalledWith(BlogService.api);
    expect(data.length).toEqual(5);
  });
});
