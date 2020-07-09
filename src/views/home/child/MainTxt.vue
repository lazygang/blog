<template>
  <div>
    <ban-ner />
    
    <news />
  </div>
</template>

<script>
import BanNer from "./small/BanNer";
import News from "./News";
export default {
  components: {
    BanNer,
    News
  }
};
</script>

<style scoped>
</style>