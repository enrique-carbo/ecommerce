<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Ecommerce App </q-toolbar-title>
        <q-space />

        <!-- <div class="row" v-if="$q.screen.gt.xs">
          <div>Crear cuenta</div>
          <div class="q-ml-md">Ingresar</div>
        </div> -->

        <div class="row gt-xs">
          <div>Crear cuenta</div>
          <div class="q-ml-md">Ingresar</div>
        </div>

        <q-btn
          flat
          dense
          round
          icon="shopping_cart"
          aria-label="Carrito"
          @click="toggleRightDrawer"
          size="lg"
          padding="md"
          class="q-ml-md"
        >
          <q-tooltip>Carrito</q-tooltip>
        </q-btn>
      </q-toolbar>
      <q-toolbar class="flex-center">
        <!---------- WARNING
        When using QTabs with QRouteTab, it is not recommended to also use a v-model (though you still can)
        https://quasar.dev/vue-components/tabs#connecting-to-vue-router
        -->
        <q-tabs v-model="tab" shrink>
          <q-route-tab name="tab0" label="Home" to="/" exact />
          <q-route-tab name="tab2" label="Productos" to="/products" />
          <q-route-tab name="tab3" label="Contacto" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      bordered
      side="right"
      :width="220"
      overlay
    >
      <q-list>
        <q-item-label header> Carrito Compras</q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const rightDrawerOpen = ref(false);
    const tab = ref("");

    return {
      essentialLinks: linksList,
      rightDrawerOpen,
      tab,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>
