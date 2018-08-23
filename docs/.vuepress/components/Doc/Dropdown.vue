<template>
  <div>
    <div class="component-example">
      <ao-dropdown :show-dropdown="showDropdown">
        <a
          slot="dropdown-items"
          v-for="(link, index) in links"
          class="ao-dropdown__link"
          :key="index"
          :href="link.url">
          {{link.title}}
        </a>
      </ao-dropdown>
    </div>
    <div class="component-controls">
      <div class="component-controls__group">
        <ao-checkbox
          v-model="showDropdown"
          :checkbox-label="'showDropdown'"
          :checkbox-value="true"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      links: [
        { url: "https://google.com", title: "Google"},
        { url: "https://facebook.com", title: "Facebook"}
      ],

      showDropdown: true
    }
  }
}
</script>

<style lang="scss" scoped>
.component-example {
  height: 100px;
}
</style>