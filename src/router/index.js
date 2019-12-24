import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Stories from "../views/Stories.vue";
import Story from "../components/stories/Single-story.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: '/stories',
    name: 'stories',
    component: Stories,
  },
  {
    path: '/stories/:id',
    name: 'stories.show',
    component: Story,
  },
];

const router = new VueRouter({
  routes
});

export default router;
