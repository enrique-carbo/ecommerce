<template>
  <q-page>
    <!---------------------- Carousel -------------------------------------->
    <div>
      <CarouselProducts />
    </div>

    <!---------------------- Products Sale -------------------------------------->

    <div class="row justify-center">
      <h3 class="text-h4 text-center">Ofertas</h3>
    </div>
    <div class="row justify-center">
      <div
        class="col-12 col-md-3 flex justify-center q-pa-md"
        v-for="(product, index) in productsSale"
        :key="index"
      >
        <router-link
          :to="{ name: 'product-details', params: { id: product.productID } }"
        >
          <ProductComponent
            :title="product.title"
            :description="product.description"
            :image="product.image"
          />
        </router-link>
      </div>
    </div>

    <!---------------------- Products -------------------------------------->

    <div class="row justify-center">
      <h3 class="text-h4 text-center">Productos</h3>
    </div>
    <div class="row justify-center">
      <div
        class="col-12 col-md-3 flex justify-center q-pa-md"
        v-for="(product, index) in products"
        :key="index"
      >
        <router-link
          :to="{ name: 'product-details', params: { id: product.productID } }"
        >
          <ProductComponent
            :title="product.title"
            :description="product.description"
            :image="product.image"
          />
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import CarouselProducts from "src/components/CarouselProducts.vue";
import ProductComponent from "src/components/ProductComponent.vue";
import { defineComponent, ref, onMounted } from "vue";

import axios from "axios";

export default defineComponent({
  name: "ProductsPage",
  components: { ProductComponent, CarouselProducts },
  setup() {
    let products = ref([]);
    let productsSale = ref([]);

    onMounted(async () => {
      try {
        const responseProductsSale = await axios.get("data/ProductsSale.json");
        const responseProducts = await axios.get("data/Products.json");

        products.value = responseProducts.data;
        productsSale.value = responseProductsSale.data;
      } catch (error) {
        console.log("Error al cargar los datos:", error);
      }
    });

    return {
      products,
      productsSale,
    };
  },
});
</script>
