<template>
  <div class="journal-library">
    <h1>Welcome back!</h1>
    <div v-if="userJournals.length === 0">
      <p>You have no journals yet. Create one now!</p>
    </div>
    <div v-else>
      <div class="journal-library-inner">
        <div v-for="journal in userJournals" :key="journal.id">
          <journal :id="journal.id" @click="openJournal(journal.id)"></journal>
        </div>
      </div>

      <readerModal
        :data="this.selectedJournal"
        :contentType="'journal'"
        :visible="modalVisible"
        :modalTitle="this.selectedJournal.journal_name"
        :isEditable="true"
        :displayKeys="[
          { key: 'username', name: 'Owner', isEditable: false },
          { key: 'short_description', name: 'Description', isEditable: false },
          { key: 'created_on', name: 'Created on', isEditable: false },
        ]"
        @open="openData"
        @update:visible="modalVisible = false"
      >
      </readerModal>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

import journal from "@/components/mainElements/app/componentsJournal/journalCover.vue";
import readerModal from "@/components/mainElements/app/modals/readerModal.vue";

export default {
  name: "dashboardApp",
  components: {
    journal,
    readerModal,
  },
  setup() {
    const store = useStore();
    const userJournals = ref([]);
    const id = "709c24b9-2f20-11ee-8cea-c01850600ffa"; // User ID for 'Jjzme2' This will need to be changed to meet the id of the logged in User

    var modalVisible = ref(false);
    var selectedJournal = ref({});

    const getData = async () => {
      await store.dispatch(`journals/fetchUserJournals`, id);
      userJournals.value = store.getters["journals/getUserList"];
    };

    // Fetch user journals on component mount
    onMounted(getData);

    return { userJournals, modalVisible, selectedJournal };
  },
  methods: {
    openData() {
      // Open a new component with the given information.
      this.$router.push({
        name: "journalTOC",
        params: { id: this.selectedJournal.id },
      });
      this.modalVisible = false;
    },
    openJournal(id) {
      this.selectedJournal = this.userJournals.find(
        (journal) => journal.id === id
      );
      this.modalVisible = true;
    },
  },
};
</script>

<style scoped>
.journal-library {
  align-items: center;
  background-color: #f0f0f0; /* Changed to a light gray background */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 20px; /* Added some padding for better spacing */
}

.journal-library-inner {
  display: flex; /* Use flexbox to horizontally align journal items */
  justify-content: center; /* Center the items horizontally within the container */
  flex-wrap: wrap; /* Wrap the items to the next line if they exceed the container's width */
  gap: 20px; /* Added some gap between journal items */
}

/* Added some spacing between journal items */
.journal-library-inner > div:not(:last-child) {
  margin-bottom: 10px;
}

/* Improved appearance of the Welcome message */
.journal-library h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

/* Styled the "Create one now!" message */
.journal-library p {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

/* Styled the journal cover component */
.journal-cover {
  background-color: #e6e6e6;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

/* Hover effect for the journal cover */
.journal-cover:hover {
  background-color: #f2f2f2;
}
</style>
