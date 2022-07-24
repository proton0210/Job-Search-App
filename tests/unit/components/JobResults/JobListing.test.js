import JobListing from "@/components/JobResults/JobListing.vue";
import { flushPromises, shallowMount } from "@vue/test-utils";
import axios from "axios";

jest.mock("axios");

describe("JobListing.vue", () => {
  it("Fetches Jobs", () => {
    axios.get.mockResolvedValue({
      data: [], // we don't care about the data here,one if it returns an arta
    });

    const $route = {
      query: {
        page: "1",
      },
    };

    shallowMount(JobListing, {
      global: {
        mocks: {
          $route,
        },
      },
    });
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing  for  a maximum of 10 jobs", async () => {
    axios.get.mockResolvedValue({
      data: Array(10).fill({}),
    });

    const $route = {
      query: {
        page: "1",
      },
    };
    const wrapper = shallowMount(JobListing, {
      global: {
        mocks: {
          $route,
        },
      },
    });
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });
});
