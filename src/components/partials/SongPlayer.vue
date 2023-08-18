<template>
    <div class="bg-green-500 rounded">
      <div id="aplayer"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import APlayer from 'aplayer';
  
  import 'aplayer/dist/APlayer.min.css';
  
  onMounted(() => {
    thePlayer();
  });
  
  const thePlayer = () => {
    new APlayer({
      container: document.getElementById('aplayer'),
      audio: [
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
          name: 'Somene to stay',
          artist: 'Vancouver Sleep Clinic',
          url: '/music/Someone-to-Stay.mp3',
          cover: '/pic/clinic.jpg',
        },
      ],
    });
  };
  </script>
  