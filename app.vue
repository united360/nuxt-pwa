<template>
  <div>
    <NuxtPwaManifest />
    <NuxtWelcome />
  </div>
</template>

<script setup>
const { $pwa } = useNuxtApp();

onMounted(() => {
  console.log($pwa.isPWAInstalled);
  if ($pwa.offlineReady) console.log("READy");
});
</script>
