<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-yellow-200">
      <div class="grid grid-cols-12">
        <div class="col-span-1 border border-blue-700 cols-start-1">
          1 column
        </div>
        <div class="col-span-5 border-blue-700 cols-start-2">5 cols</div>
        <div class="col-span-5 border-blue-700 cols-start-7">5 cols</div>
        <div class="col-span-1 border-blue-700 cols-start-12">1 column</div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
