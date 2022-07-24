import JobListing from "@/components/JobResults/JobListing.vue";
import { flushPromises, shallowMount } from "@vue/test-utils";
import axios from "axios";

jest.mock("axios");

describe("JobListing.vue", () => {
  it("Fetches Jobs", () => {
    axios.get.mockResolvedValue({
      data: [], // we don't care about the data here,one if it returns an arta
    });
    shallowMount(JobListing);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing  for each received job", async () => {
    axios.get.mockResolvedValue({
      data: Array(15).fill({}),
    });
    const wrapper = shallowMount(JobListing);
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(15);
  });
});
