<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex h-full px-8 mx-auto border-b border-solid flex-nowrap border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center h-full text-xl"
          >{{ company }}</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-iem"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="main-nav-profile-image" />
          <action-button
            v-else
            text="Sign In"
            type="primary"
            data-test="main-nav-login-button"
            @click="loginUser"
          />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
// think of ’’’this as a configuration for the component.
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
export default {
  name: "MainNav", // Gives formal name to the component.
  components: {
    ActionButton, // Adds the component to the component list.
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      company: "Bobo Careers",
      menuItems: [
        { text: "Teams", url: "/" },
        { text: "Locations", url: "/" },
        { text: "Life at Bobo Corp", url: "/" },
        { text: "How we hire?", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    // Don't use arrow functions here.
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
