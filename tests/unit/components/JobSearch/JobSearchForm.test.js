import { mount } from "@vue/test-utils";

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("JobSearchForm.vue", () => {
  describe("When the user submits the form", () => {
    it("Directs user to job results page with user's Search Parameters", async () => {
      const push = jest.fn();
      const $router = { push };

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("Vue developer");

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Dallas");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledTimes(1);
      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue developer",
          location: "Dallas",
        },
      });
    });
  });
});
