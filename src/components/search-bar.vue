<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

enum EmittedEvents {
  SEARCH_PERFORMED = 'search-performed',
}

@Component
class SearchBar extends Vue {
  public search: string = '';

  public emitSearchPerformedEvent(): void {
    this.$emit(EmittedEvents.SEARCH_PERFORMED, this.search);
  }
}

export default SearchBar;
</script>

<template>
  <div class="search-bar">
    <input
      v-model="search"
      placeholder="Search for a pokemon by name"
    >
    <button @click="emitSearchPerformedEvent">
      🔍
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  height: 3rem;
  display: flex;
  padding: 0 5px;

  & > input {
    width: 79%;
    padding: 1rem;
  }

  & > button {
    width: 20%;
  }
}
</style>
