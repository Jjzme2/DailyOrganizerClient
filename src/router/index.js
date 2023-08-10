import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// Forms

// Journals
import JournalLibrary from "../views/Journal/LibraryView.vue";
import JournalTOC from "../views/Journal/TOCView.vue";

// Quotes
import Quotes from "../views/Quotes/QuoteList.vue";

// Bookmarks
import Bookmarks from "../views/Bookmarks/BookmarkList.vue";

const routes = [
  {
    path: "/testing",
    name: "testing",
    component: () => import("../views/TestingView.vue"),
    meta: {
      title: "Testing",
      color: "#FF0000",
      hideInNav: false,
    },
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Daily Organizer",
      color: "#B3D9BE",
      hideInNav: false,
    },
  },

  // Journal(s) routes
  {
    path: "/journals",
    name: "journals",
    component: JournalLibrary,
    meta: {
      title: "Journal Library",
      hideInNav: true,
    },
  },
  {
    path: "/journal/:id/TOC",
    name: "journalTOC",
    component: JournalTOC,
    meta: {
      title: "Table of Contents",
      hideInNav: true,
    },
  },
  {
    path: "/journal/:id/quotes",
    name: "journalQuotes",
    component: Quotes,
    meta: {
      title: "My Quotes",
      hideInNav: true,
    },
  },
  {
    path: "/quotes",
    name: "altQuotes",
    component: Quotes,
    meta: {
      title: "Quotes",
      hideInNav: true,
    },
  },
  {
    path: "/journal/:id/bookmarks",
    name: "journalBookmarks",
    component: Bookmarks,
    meta: {
      title: "Bookmarks",
      hideInNav: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
