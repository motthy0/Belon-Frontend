<template>
  <div class="q-pa-md">
    <div class="q-mb-md">
      <div id="player-0"></div>
    </div>
    <div class="q-mb-md">
      <div id="player-1"></div>
    </div>
    <div class="q-mb-md">
      <div id="player-2"></div>
    </div>
  </div>
</template>

<script>
import APlayer from 'aplayer';

export default {
  data() {
    return {
      songs: [
        {
          name: 'Thats What I Like',
          artist: 'Bruno Mars',
          url: '/music/Bruno-Mars.mp3',
          cover: '/pic/bruno.jpg',
        },
        {
          name: 'Daylight',
          artist: 'David Kushner',
          url: '/music/Daylight.mp3',
          cover: '/pic/david.jpg',
        },
        {
          name: 'Someone to Stay',
          artist: 'Vancouver Sleep Clinic',
          url: '/music/Someone-to-Stay.mp3',
          cover: '/pic/clinic.jpg',
        },
      ],
    };
  },
  mounted() {
    this.playSong(this.songs[0], 'player-0');
    this.playSong(this.songs[1], 'player-1');
    this.playSong(this.songs[2], 'player-2');
  },
  methods: {
    playSong(song, containerId) {
      new APlayer({
        container: document.getElementById(containerId),
        audio: [song],
      });
    },
  },
};
</script>

