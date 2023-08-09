<template>
  <div class="bookmark-item">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <div v-if="isYoutubeVideo" class="video-card">
      <div v-if="showVideo" class="video-wrapper">
        <iframe
          width="560"
          height="315"
          :src="youtubeEmbedURL"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div v-else class="video-card-options">
        <a :href="`https://www.youtube.com/watch?v=${URL}`" target="_blank">{{
          `https://www.youtube.com/watch?v=${URL}`
        }}</a>
      </div>
      <button class="cstm-btn-primary" @click="showVideo = !showVideo">
        {{ showVideo ? "Hide Video" : "Show Video" }}
      </button>
    </div>
    <div v-else>
      <a :href="URL" target="_blank" class="link-card"
        ><button class="cstm-btn-primary">Open in new tab</button></a
      >
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    URL: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isYoutubeVideo: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const showVideo = ref(false);

    const getYouTubeEmbedURL = (videoURL) => {
      // Assuming the videoURL is a standard YouTube URL like https://www.youtube.com/watch?v=VIDEO_ID
      var videoId = "";
      if (!videoURL) return;

      if (videoURL.includes("https://www.youtube.com/watch")) {
        videoId = videoURL.split("=")[1];
      } else if (videoURL.includes("https://youtu.be/")) {
        videoId = videoURL.split("/")[3];
      } else {
        videoId = videoURL;
      }
      return `https://www.youtube.com/embed/${videoId}`;
    };

    const youtubeEmbedURL = computed(() => {
      return getYouTubeEmbedURL(props.URL);
    });

    return { getYouTubeEmbedURL, youtubeEmbedURL, showVideo };
  },
};
</script>

<style>
/* Add your custom styles for the bookmarkItem component here */
.bookmark-item {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  color: #666;
  margin-bottom: 15px;
}

.video-card {
  position: relative;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-card-options {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-card {
  color: #007bff;
  text-decoration: none;
  margin-right: 10px;
}

a.link-card:hover {
  text-decoration: underline;
}
</style>
