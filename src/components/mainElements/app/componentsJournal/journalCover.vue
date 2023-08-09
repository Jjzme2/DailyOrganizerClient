<template>
  <div class="journal-cover variant-pattern-5">
    <div class="journal-cover-inner">
      <div class="journal-title">
        <h1>{{ journal.journal_name }}</h1>
      </div>
      <div class="journal-cover-date">
        <p>{{ journal.created_on }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

export default {
  name: "journalCover",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const journal = ref([]);

    const getData = async () => {
      await store.dispatch("journals/fetchData");
      journal.value = store.getters["journals/getJournal"](props.id);
    };

    onMounted(getData);
    return { journal };
  },
};
</script>

<style scoped>
/* Styles for the journal cover */
.journal-cover {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  width: 15rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.journal-cover-inner {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 95%;
  justify-content: space-between;
  position: relative;
  text-align: center;
}

/* Journal title */
.journal-title {
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 0;
  text-align: center;
}

/* Journal subtitle */
.journal-subtitle {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  text-align: center;
}

/* Variants */

/* Variant 1: Classic */
.journal-cover.variant-classic {
  background-color: #f9f9f9;
}

/* Variant 2: Vintage */
.journal-cover.variant-vintage {
  background-color: #f0e5d1;
}

/* Variant 3: Leaves */
.journal-cover.variant-pattern-1 {
  background-color: #fff;
  background-image: url("/public/images/Journal-Design-leaves.jpg");
  background-size: auto 100%;
  color: white;
}

/* Variant 4: Splash */
.journal-cover.variant-pattern-2 {
  background-color: #fff;
  background-image: url("/public/images/Journal-Design-splash.jpg");
  background-size: auto 100%;
  color: white;
}

/* Variant 5: Ethereal House */
.journal-cover.variant-pattern-3 {
  background-color: #fff;
  background-image: url("/public/images/Journal-Design-ethereal-house.jpg");
  background-size: auto 100%;
  color: white;
}

/* Variant 6: Ethereal House 2*/
.journal-cover.variant-pattern-4 {
  background-color: #fff;
  background-image: url("/public/images/Journal-Design-ethereal-house-2.jpg");
  background-size: auto 100%;
  color: white;
}

/* Variant 7: Mountain Overpass */
.journal-cover.variant-pattern-5 {
  background-color: #fff;
  background-image: url("/public/images/Journal-Design-mountain-overpass.jpg");
  background-size: auto 100%;
  color: white;
}

/* Variant extras */
.journal-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: no-repeat;
  opacity: 0.3;
}

/* Hover animation */
.journal-cover:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
