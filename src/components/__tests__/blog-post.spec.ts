import { mount } from "@vue/test-utils";
import { Post } from "../../blog.service";
import { getPostsStubs } from "../../__stubs__/posts-stubs.factory";
import { getDataTestSelector } from "../../__tests__/utils";
import BlogPost from "../Blog-post.vue";

describe("Blog Post", () => {
  const post = getPostsStubs(1)[0];
  const wrapper = mount(BlogPost, {
    propsData: {
      post,
    },
  });
  it("Should render a post", () => {
    expect(wrapper).toBeTruthy();
    const body = wrapper.find(getDataTestSelector("body"));
    expect(body).toBeTruthy();
  });
});
