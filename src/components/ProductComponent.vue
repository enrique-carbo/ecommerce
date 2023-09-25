<template>
  <q-card class="my-card">
    <img :src="props.image" />

    <q-card-section>
      <div class="text-h6">{{ props.title }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <p>{{ props.description }}</p>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProductComponent",
  props: {
    title: String,
    description: String,
    image: String,
  },
  setup(props) {
    return { props };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
