<template>
    <q-page class="q-pa-md">
      <div class="q-mx-auto">
        <div class="text-h6 text-weight-bold text-grey-8">Delete Song</div>
        <q-separator class="q-h-1 mt-4" color="red-5" />
  
        <div class="q-bg-white q-rounded q-px-md q-py-lg">
          <div class="q-flex q-flex-wrap">
            <div class="q-w-3/4 q-mr-auto q-mt-2 text-lg q-p-1 text-grey-8">
              1. {{ songTitle }}
            </div>
  
            <div class="q-w-1/4 q-ml-auto q-p-1">
              <q-btn
                class="
                  q-float-right
                  q-bg-transparent
                  q-hover:bg-red-5
                  text-grey-8
                  q-font-semibold
                  q-hover:text-white
                  q-py-md
                  q-px-md
                  q-border
                  q-border-red-5
                  q-hover:border-transparent
                  q-rounded
                "
                label="Delete"
                color="red"
                @click="deleteSong"
              />
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  import { ref } from "vue";
  
  const router = useRouter();
  
  const songTitle = ref("This is a song");
  
  const deleteSong = async () => {
    try {

      router.push("/");
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };
  </script>
  