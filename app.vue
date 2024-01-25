<template>
  <div>
    <NuxtPwaManifest />

    <p>
      {{ $pwa.offlineReady }}
    </p>

    <button @click="update">update</button>
    <NuxtWelcome />
  </div>
</template>

<script setup>
const { $pwa } = useNuxtApp();

const update = () => {
  console.log("dqwdq");
  $pwa.updateServiceWorker();
  console.log($pwa.offlineReady);
};
</script>
