<template>
  <div class="container mx-auto">
    <div class="login-btn">
      <Button
        label="Login"
        @click="openModal"
        class="bg-blue-300 hover:bg-blue-400 mt-5"
      />
      <div
        v-show="isOpen"
        class="bg-black fixed inset-0 bg-opacity-25 h-screen flex items-center justify-center"
      >
        <div class="w-1/2 h-96" id="modal-fliped">
          <div class="w-full h-full" id="modal-wrapper" :class="{ flipped }">
            <div class="login-sec bg-white">
              <div class="header-modal border-b flex justify-between px-5 pt-2">
                <h1>login page</h1>
                <span
                  @click="closeModal"
                  class="cursor-pointer px-3 py-2 rounded-full text-white bg-blue-400"
                  >X</span
                >
              </div>
              <div class="body-modal px-5 pt-2">
                <div class="flex justify-center mb-5">
                  <svg
                    viewBox="0 0 24 24"
                    class="h-12 ml-2.5 text-blue-400 w-12"
                    fill="currentColor"
                  >
                    <g>
                      <path
                        d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div class="capitalize flex font-bold justify-center mb-5 text-2xl">
                  <h1>log in to twitter</h1>
                </div>
                <div class="mb-2">
                  <label
                    class="block font-bold mb-2 text-grey-darker text-sm"
                    for="username"
                  >
                    <input
                      class="appearance-none border capitalize focus:outline-none focus:placeholder-blue-400 focus:ring-2 focus:ring-blue-400 focus:text-blue-400 h-12 px-3 py-2 rounded shadow text-xs w-full"
                      id="username"
                      type="text"
                      placeholder="phone,email or username"
                    />
                  </label>
                </div>
                <div class="mb-2">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="password"
                  >
                    <input
                      class="appearance-none border capitalize focus:outline-none focus:placeholder-blue-400 focus:ring-2 focus:ring-blue-400 focus:text-blue-400 h-12 px-3 py-2 rounded shadow text-xs w-full"
                      id="password"
                      type="password"
                      placeholder="password"
                    />
                  </label>
                </div>

                <div class="items-center justify-between">
                  <button
                    class="capitalize bg-blue bg-blue-300 font-bold hover:bg-blue-400 hover:bg-blue-dark mb-5 px-4 py-2 rounded-full text-white w-full"
                    type="button"
                  >
                    log in
                  </button>
                  <div class="flex justify-center space-x-4">
                    <a
                      class="align-baseline border-b border-transparent capitalize font-bold hover:border-blue-400 inline-block text-blue text-blue-400 text-sm"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                    <button
                      id="flip-log"
                      @click="flippedred"
                      class="align-baseline border-b border-transparent capitalize font-bold hover:border-blue-400 inline-block text-blue text-blue-400 text-sm"
                    >
                      sign up for twitter
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="registration-sec bg-blue-700 text-white">
              <div class="header-modal border-b flex justify-between px-5 pt-2">
                <h1>login page</h1>
                <span
                  @click="closeModal"
                  class="cursor-pointer px-3 py-2 rounded-full text-white bg-blue-400"
                  >X</span
                >
              </div>
              <div class="body-modal px-5 pt-2">
                <div class="flex justify-center mb-5">
                  <svg
                    viewBox="0 0 24 24"
                    class="h-12 ml-2.5 text-blue-400 w-12"
                    fill="currentColor"
                  >
                    <g>
                      <path
                        d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div class="capitalize flex font-bold justify-center mb-5 text-2xl">
                  <h1>log in to twitter</h1>
                </div>
                <div class="mb-2">
                  <label
                    class="block font-bold mb-2 text-grey-darker text-sm"
                    for="username"
                  >
                    <input
                      class="appearance-none border capitalize focus:outline-none focus:placeholder-blue-400 focus:ring-2 focus:ring-blue-400 focus:text-blue-400 h-12 px-3 py-2 rounded shadow text-xs w-full"
                      id="username"
                      type="text"
                      placeholder="phone,email or username"
                    />
                  </label>
                </div>
                <div class="mb-2">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="password"
                  >
                    <input
                      class="appearance-none border capitalize focus:outline-none focus:placeholder-blue-400 focus:ring-2 focus:ring-blue-400 focus:text-blue-400 h-12 px-3 py-2 rounded shadow text-xs w-full"
                      id="password"
                      type="password"
                      placeholder="password"
                    />
                  </label>
                </div>
                <div class="items-center justify-between">
                  <button
                    class="capitalize bg-blue bg-blue-300 font-bold hover:bg-blue-400 hover:bg-blue-dark mb-5 px-4 py-2 rounded-full text-white w-full"
                    type="button"
                  >
                    log in
                  </button>
                  <div class="flex justify-center space-x-4">
                    <a
                      class="align-baseline border-b border-transparent capitalize font-bold hover:border-blue-400 inline-block text-blue text-blue-400 text-sm"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                    <button
                      id="flip-reg"
                      @click="flippedblue"
                      class="align-baseline border-b border-transparent capitalize font-bold hover:border-blue-400 inline-block text-blue text-blue-400 text-sm"
                    >
                      sign up for twitter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  name: "Modal",
  data() {
    return {
      isOpen: false,
      flipped: "",
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    flippedred() {
      this.flipped = "flipped";
    },
    flippedblue() {
      if (this.flipped === "flipped") {
        this.flipped = "";
      }
    },
  },
};
</script>

<style></style>
