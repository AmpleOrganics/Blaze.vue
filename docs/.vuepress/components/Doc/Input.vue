  <template>
    <div>
      <h4>Text Input Example</h4>
      <div class="component-example">
        <ao-input
          :label="textLabel"
          :placeholder="textPlaceholder"
          :showLabel="showLabel"
          :iconHtml="iconHtml"
          :addOn="addOn"
          :disabled="disabled"
          :invalid="invalid"
        />
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="textLabel"
            :type="'text'"
            :label="'Text Label'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="textPlaceholder"
            :type="'text'"
            :label="'Text Placeholder'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="iconHtml"
            :type="'text'"
            :label="'Icon'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="addOn"
            :type="'text'"
            :label="'Add On'"
          />
        </div>
      </div>
      <div class="component-controls__group">
        <ao-checkbox
          v-model="showLabel"
          :checkbox-label="'Show Label'"
          :checkbox-value="true"
        />
      </div>
      <div class="component-controls__group">
        <ao-checkbox
          v-model="disabled"
          :checkbox-label="'Disabled'"
          :checkbox-value="false"
        />
      </div>
      <div class="component-controls__group">
        <ao-checkbox
          v-model="invalid"
          :checkbox-label="'Invalid'"
          :checkbox-value="true"
        />
      </div>
      <h4>Number Input Example</h4>
      <div class="component-example">
        <ao-input
          type="number"
          :label="numberLabel"
          :step="step"
        />
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="numberLabel"
            :type="'text'"
            :label="'Number Label'"
          />
        </div>
      </div>
      <div class="component-controls">
        <div class="component-controls__group">
          <ao-input
            v-model="step"
            :type="'number'"
            :label="'Step Amount'"
          />
        </div>
      </div>
    </div>
  </template>

  <script>

  export default {
    data() {
      return {
        textLabel: 'Text Type Label',
        textPlaceholder: 'Text Placeholder',
        showLabel: true,
        iconHtml: 'Icon',
        addOn: 'Add On',
        disabled: false,
        invalid: false,
        numberLabel: 'Number Type Label',
        step: 1,
      }
    }
  }
  </script>
