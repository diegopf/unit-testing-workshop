import { mount } from "@vue/test-utils";
import Blog from "../Blog.vue";
import { BlogService } from "../../blog.service";
import { getDataTestSelector } from "../../__tests__/utils";
import { getPostsStubs } from "../../__stubs__/posts-stubs.factory";

const postCollection = getPostsStubs(5);

jest.spyOn(BlogService, "fetchPosts").mockResolvedValue(postCollection);
describe("Blog post", () => {
  const wrapper = mount(Blog);
  it("Should render a blog", () => {
    expect(wrapper.is(Blog)).toBe(true);
    const posts = wrapper.findAll(getDataTestSelector("title"));
    expect(posts.length).toEqual(5);
    expect(BlogService.fetchPosts).toHaveBeenCalledTimes(1);
  });
});
