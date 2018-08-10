<template>
<div>
  <div class="component-example">
    <ao-text-area
      :showLabel="showLabel"
      :label="textAreaText"
      :placeholder="placeholderText"
      :rows="rowLength"
      :maxLength="maxCharacters"
      :disabled="disabled"
      :invalid="invalid">
    </ao-text-area>
  </div>
  <div class="component-controls">
    <div class="component-controls__group">
      <ao-input
        v-model="textAreaText"
        :type="'text'"
        :label="'Text Area Label Text'"
      />
    </div>
    <div class="component-controls__group">
      <ao-input
        v-model="placeholderText"
        :type="'text'"
        :label="'Text Area Placeholder Text'"
      />
    </div>
    <div class="component-controls__group">
      <ao-input
        v-model="rowLength"
        :type="'number'"
        :label="'Text Area Number of Rows'">
      </ao-input>
    </div>
    <div class="component-controls__group">
      <ao-input
        v-model="maxCharacters"
        :type="'number'"
        :label="'Text Area Maximum Character Length'">
      </ao-input>
    </div>
    <div class="component-controls__group">
      <ao-checkbox
        v-model="showLabel"
        :checkbox-label="'showLabel'"
        :checkbox-value="true" />
    </div>
    <div class="component-controls__group">
      <ao-checkbox
        v-model="disabled"
        :checkbox-label="'disabled'"
        :checkbox-value="true" />
    </div>
    <div class="component-controls__group">
      <ao-checkbox
        v-model="invalid"
        :checkbox-label="'invalid'"
        :checkbox-value="true" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      placeholderText: "Ever since I was a kid, I've had a fear of being scared.",
      rowLength: 5,
      maxCharacters: 100000,
      disabled: false,
      invalid: false,
      showLabel: true,
      textAreaText: 'Text Area'
    }
  }
}
</script>
