<template>
  <div
    class="hero min-h-screen saturate-90 brightness-150 bg-[position:bottom]"
  >
    <div class="hero-overlay"></div>
    <div class="hero-content text-neutral-content text-center">
      <div>
        <h1 class="mb-10 md:text-6xl text-4xl font-bold">{{ title }}</h1>
        <!--if We don't pass the prop to the parent component - Nothing is Displayed-->
        <button
          v-if="buttonText"
          class="btn bg-custom border-none text-fog brightness-80 text-xl shadow-none hover:bg-cabin"
        >
          <router-link to="/book">{{ buttonText }}</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Mt Maroon View Farm Stay",
    },
    buttonText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
