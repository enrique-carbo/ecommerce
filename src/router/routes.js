const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "products",
        name: "products",
        component: () => import("pages/ProductsPage.vue"),
      },
      {
        path: "/products/product-details/:id",
        name: "product-details",
        component: () => import("pages/ProductDetails.vue"),
        props: true,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
