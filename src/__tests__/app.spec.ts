import { shallowMount } from "@vue/test-utils";
import App from "../App.vue";

describe("App component", () => {
  it("Should render the app", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.html()).toContain("<blog-stub></blog-stub>");
  });
});
