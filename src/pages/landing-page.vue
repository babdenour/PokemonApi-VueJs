<template>
  <div class="landing-page">
    <h1>🔥 Pokemon Dashboard</h1>
    <p>🚧 Work in progress</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
class LandingPage extends Vue {}

export default LandingPage;
</script>

<style lang="scss" scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  max-width: 1000px;
  text-align: center;
}
</style>
