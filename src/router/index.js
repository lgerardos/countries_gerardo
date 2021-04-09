import Vue from "vue";
import VueRouter from "vue-router";
import Countries from "../views/Countries";
import CountryDetail from "../views/CountryDetail";
import Marvel from "../views/Marvel";
import Catalog from "../views/Catalog";

Vue.use(VueRouter);

const routes = [
  {
    path: "/countries",
    name: "Countries",
    component: Countries,
  },
  {
    path: "/countries/:id/detail",
    name: "CountryDetail",
    component: CountryDetail,
    props: true,
  },
  {
    path: "/marvel",
    name: "Marvel",
    component: Marvel,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
