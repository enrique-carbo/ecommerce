<template>
  <q-page>
    <div class="row justify-center q-mt-xl">
      <div class="col-8 col-sm-4 q-ma-sm">
        <q-img
          :src="product ? product.image : 'Cargando...'"
          spinner-color="white"
        />
      </div>
      <div class="col-8 col-sm-4 q-ma-sm">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h4">
              {{ product ? product.title : "Cargando..." }}
            </div>
            <div class="text-subtitle1">
              {{ product ? product.description : "Cargando..." }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-h5 text-weight-light">$ 5000</div>
            <div class="text-overline q-mt-md">Stock Disponible</div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn
              class="q-mt-sm"
              color="primary"
              label="-"
              padding="md"
              outline
              @click="subtract"
            />
            <q-input
              class="q-mt-sm"
              v-model.number="quantity"
              outlined
              style="max-width: 50px"
            />
            <q-btn
              class="q-mt-sm q-mr-sm"
              color="primary"
              label="+"
              padding="md"
              outline
              @click="add"
            />
            <q-btn
              class="q-mt-sm"
              color="primary"
              icon-right="shopping_cart"
              label="Agregar al Carrito"
              padding="md"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default defineComponent({
  name: "ProductsDetails",
  setup() {
    const route = useRoute();
    const productId = computed(() => route.params);
    const allProducts = ref([]);
    const product = ref();

    const loadProductData = async () => {
      try {
        const response = await axios.get("data/ProductsSale.json");
        const allSaleProducts = response.data;

        const response1 = await axios.get("data/Products.json");
        const allRegularProducts = response1.data;

        allProducts.value = [...allRegularProducts, ...allSaleProducts];

        console.log(allProducts.value);

        product.value = await allProducts.value.find((p) => {
          return p.productID === productId.value.id;
          //console.log(p.productID, "---", productId.value.id);
        });
        console.log(product);
      } catch (error) {
        console.error("Error al cargar los datos del producto:", error);
      }
    };

    onMounted(async () => {
      await loadProductData();
      console.log(product.value);
    });

    console.log(productId.value);

    let quantity = ref(0);

    function add() {
      quantity.value++;
    }

    function subtract() {
      if (quantity.value <= 0) {
        return;
      } else {
        quantity.value--;
      }
    }

    return {
      quantity,
      add,
      subtract,
      product,
    };
  },
});
</script>
