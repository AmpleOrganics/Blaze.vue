<template>
  <div>
    <ao-header-toolbar
      :title="'Header Toolbar'"
      :icon-url="'https://vignette.wikia.nocookie.net/2007scape/images/7/7f/Chompy_bird.png/revision/latest?cb=20160714233624'"
      fixed>
      <div
        v-click-outside="hideDropdown"
        :class="{ active: activeTab}"
        @click="toggleDropdown">
        <span :class="'glyphicon glyphicon-menu-hamburger icon'" />
        <ao-dropdown :show-dropdown="showDropdown">
          <a
            v-for="(link, index) in links"
            slot="dropdown-items"
            :key="index"
            :href="link.url"
            class="ao-dropdown__link">
            {{ link.title }}
          </a>
        </ao-dropdown>
      </div>
      <span>Logout</span>
    </ao-header-toolbar>
    <div id="demo-container">
      <ao-breadcrumbs :paths="paths"/>
      <ao-section-header
        :icon-class="'custom-glyph-clients'"
        :title="'Demo Container'"
        :subtitle="'Created at 123456789'">
        <ao-navbar slot="section-header-navbar">
          <li
            v-for="route in routes"
            :key="route.path">
            <router-link :to="route.path" >{{ route.name }}</router-link>
          </li>

          <li>
            <span>stale</span>
          </li>
        </ao-navbar>

        <div slot="section-header-toolbar">
          <ao-button @click.native="toggleModal">Open Modal</ao-button>
          <ao-paginate
            slot="card-header-toolbar"
            :total-pages="userInfo.total_pages"
            @paginate="paginate"/>
        </div>
      </ao-section-header>
      <ao-card :title="'Radio Button Group'">
        <ao-radio-group
          :options="radioGroup"
          v-model="radioGroupVal"/>
        <ao-text-style>{{ radioGroupVal }}</ao-text-style>
      </ao-card>
      <ao-card :title="'Title of Card'">
        <ao-breadcrumbs :paths="paths"/>
        <h3 class=".ao-heading--card-section-heading">Form Examples</h3>
        <div style="text-align: center;">
          <p>
            <ao-tooltip
              position="top"
              text="Tooltip with some really long text">
              <ao-button primary>Hover Me!</ao-button>
            </ao-tooltip>
          </p>
          <p>
            <ao-tooltip
              position="bottom"
              text="Tooltip with some really long text, fixed width for things that are kinda long"
              multiline>
              <ao-button primary>Multiline</ao-button>
            </ao-tooltip>
          </p>
          <p>
            <ao-tooltip
              position="left"
              text="Tooltip with some really long text">
              <ao-button primary>Hover Me!</ao-button>
            </ao-tooltip>
          </p>
          <p>
            <ao-tooltip
              position="right"
              text="Tooltip with some really long text">
              <ao-button primary>Hover Me!</ao-button>
            </ao-tooltip>
          </p>
          <p>
            <ao-tooltip
              text="Default icon, default position"/>
          </p>
        </div>
        <p>
          <ao-text-style
            error
            small>
            text
          </ao-text-style>
        </p>
        <div>
          <p>Buttons</p>
          <ao-button
            :type="'button'"
            primary>
            primary
          </ao-button>
          <ao-button
            :type="'button'"
            destructive>
            destructive
          </ao-button>
          <ao-button
            :type="'button'"
            caution>
            caution
          </ao-button>
          <ao-button
            :type="'button'"
            subtle>
            subtle
          </ao-button>
          <ao-button
            :type="'button'"
            naked>
            naked
          </ao-button>
          <ao-button
            :type="'button'"
            small>
            small
          </ao-button>
          <ao-button
            :type="'button'"
            large>
            large
          </ao-button>
          <ao-button
            :type="'button'"
            jumbo>
            jumbo
          </ao-button>
          <ao-button
            :type="'button'"
            :disabled="true"
            primary>
            primary disabled
          </ao-button>
          <ao-button
            :type="'button'"
            :disabled="true"
            destructive>
            destructive disabled
          </ao-button>
          <ao-button
            :type="'button'"
            :disabled="true"
            caution>
            caution disabled
          </ao-button>
          <ao-button
            :type="'button'"
            :disabled="true"
            subtle>
            subtle disabled
          </ao-button>
          <ao-button
            :type="'button'"
            :disabled="true"
            naked>
            naked disabled
          </ao-button>
          <ao-button
            :type="'button'"
            :disabled="true"
            small>
            small disabled
          </ao-button>
          <ao-button
            :type="'button'"
            :disabled="true"
            large>
            large disabled
          </ao-button>
          <ao-button
            :type="'button'"
            :disabled="true"
            jumbo>
            jumbo disabled
          </ao-button>
        </div>

        <ao-input
          :type="'text'"
          :label="'Name'"
          :show-label="false"
          :placeholder="'Name'"
          v-model="name"
          :invalid="true"/>
        <p>My name: {{ name }}</p>

        <ao-input
          :type="'number'"
          :label="'Age'"
          v-model="age"
          :step="5"
          instruction-text="This is instruction text for this input."/>
        <p>My age: {{ age }}</p>

        <ao-file-upload
          :label="'File'"
          :reference="'file'"
          :name="'file1'"
          @change="updateFile($event)"/>

        <ao-input
          :type="'number'"
          :label="'Age'"
          v-model="age"
          :step="5"/>
        <p>My age: {{ age }}</p>

        <label>Favorite Programming Languages?</label>
        <ao-checkbox
          v-model="programmingLanguages"
          :checkbox-value="'JavaScript'"
          :checkbox-label="'Javascript'"/>
        <ao-checkbox
          v-model="programmingLanguages"
          :checkbox-value="'Ruby'"
          :checkbox-label="'Ruby'"/>
        <ao-checkbox
          v-model="programmingLanguages"
          :checkbox-value="'PHP'"
          :checkbox-label="'PHP (disabled)'"
          disabled/>

        <p>Favorite Programming Languages are: {{ programmingLanguages }}</p>
        <label>Do you like books?</label>
        <ao-checkbox
          v-model="likeBooks"
          :checkbox-value="'Books'"
          :checkbox-label="'Books'"/>

        <ao-info-pair :label="'Info Pair Label'">
          <p>
            <ao-text-style
              error
              small>
              text
            </ao-text-style>
          </p>
          <ao-input
            :type="'text'"
            :label="'Name'"
            :show-label="false"
            :placeholder="'Name'"
            v-model="name"
            :invalid="true"/>
          <p>My name: {{ name }}</p>

          <ao-input
            :type="'number'"
            :label="'Age'"
            v-model="age"
            :step="5"/>
          <p>My age: {{ age }}</p>

          <ao-file-upload
            :label="'File'"
            :name="'file2'"
            :reference="'file'"
            @change="updateFile($event)"/>

          <p>Filename: {{ file }}</p>

          <label>Favorite Programming Languages?</label>
          <ao-checkbox
            v-model="programmingLanguages"
            :checkbox-value="'JavaScript'"
            :checkbox-label="'Javascript'"/>
          <ao-checkbox
            v-model="programmingLanguages"
            :checkbox-value="'Ruby'"
            :checkbox-label="'Ruby'"/>
          <ao-checkbox
            v-model="programmingLanguages"
            :checkbox-value="'PHP'"
            :checkbox-label="'PHP'"
            disabled/>

          <p>Favorite Programming Languages are: {{ programmingLanguages }}</p>
          <label>Do you like books?</label>
          <ao-checkbox
            v-model="likeBooks"
            :checkbox-value="'Books'"
            :checkbox-label="'Books'"/>

          <ao-info-pair :label="'Info Pair Label'">
            <p>
              <ao-text-style
                error
                small>
                text
              </ao-text-style>
            </p>
          </ao-info-pair>
          <ao-input
            :type="'text'"
            :label="'Name'"
            :show-label="false"
            :placeholder="'Name'"
            v-model="name"
            :invalid="true"/>
          <p>My name: {{ name }}</p>

          <ao-input
            :type="'number'"
            :label="'Age'"
            v-model="age"
            :step="5"/>
          <p>My age: {{ age }}</p>

          <ao-file-upload
            :label="'File'"
            :name="'file3'"
            :reference="'file'"
            @change="updateFile($event)"/>

          <p>Filename: {{ file }}</p>

          <label>Favorite Programming Languages?</label>
          <ao-checkbox
            v-model="programmingLanguages"
            :checkbox-value="'JavaScript'"
            :checkbox-label="'Javascript'"/>
          <ao-checkbox
            v-model="programmingLanguages"
            :checkbox-value="'Ruby'"
            :checkbox-label="'Ruby'"/>
          <ao-checkbox
            v-model="programmingLanguages"
            :checkbox-value="'PHP'"
            :checkbox-label="'PHP'"
            disabled/>

          <p>Favorite Programming Languages are: {{ programmingLanguages }}</p>
          <label>Do you like books?</label>
          <ao-checkbox
            v-model="likeBooks"
            :checkbox-value="'Books'"
            :checkbox-label="'Books'"/>

          <ao-info-pair :label="'Info Pair Label'">
            <p>
              123 Address St.
              <br>
              Toronto, ON
            </p>
          </ao-info-pair>

          <p>Liking Books is: {{ likeBooks }}</p>

          <ao-radio
            v-for="radio in radios"
            :key="radio.value"
            :val="radio.value"
            :name="radio.name"
            :label="radio.value"
            v-model="selectedRadio"/>

          <p>When I'm at my desk I prefer to {{ selectedRadio }}</p>

          <ao-select
            v-model="nicePets"
            :options="pets"
            :label="'Nice Pets'"
            :default="nicePets"
            :has-error="true"
          />
          <p>I like this pet: {{ nicePets }} <ao-badge text="Badge"/></p>

          <ao-text-area v-model="description" />
          <p>Description: {{ description }}</p>
          <ao-input
            :label="'Search Example (does not search anything)'"
            :placeholder="'Search'"
            :type="'search'"/>
          <ao-button
            :type="'submit'"
            primary>
            Save
          </ao-button>

          <pre>{{ saveData }}</pre>

          <ao-spinner v-if="loading" />
          <ao-button slot="cardFooter">Buttons In The</ao-button>
          <ao-button
            slot="cardFooter"
            primary>Card Footer!</ao-button>
      </ao-info-pair></ao-card>

      <ao-card :title="'Hi I am a Table!'">
        <ao-paginate
          slot="card-header-toolbar"
          :total-pages="userInfo.total_pages"
          @paginate="paginate"/>
        <ao-table
          :headers="columnHeaders"
          sort-by="id"
          order="asc"
          @sortTable="sortTable">
          <tr
            v-for="user in displayUsers"
            :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.gender }}</td>
          </tr>
          <tr slot="table-footer">
            <td colspan="2"/>
            <td><strong>Total</strong></td>
            <td><strong>1000</strong></td>
          </tr>
        </ao-table>
      </ao-card>
      <ao-card title="Callouts">
        <ao-callout
          slot="cardCallout"
          caution>
          I am a card callout! I am passed into the cardCallout slot and am flush with the card.
        </ao-callout>
        <ao-callout>
          <p>This is default callout</p>
        </ao-callout>
        <ao-callout info>
          <p>This is an info callout</p>
          <p>The last element in any callout is given a margin-bottom of 0.</p>
        </ao-callout>
        <ao-callout success>
          <p>This is a success callout</p>
        </ao-callout>
      </ao-card>
      <ao-callout caution>
        <p>This is a caution callout</p>
      </ao-callout>
      <ao-callout destructive>
        <p>This is a destructive callout</p>
      </ao-callout>
      <ao-card title="Buttons">
        <ao-button>Default</ao-button>
        <ao-button primary>Primary</ao-button>
        <ao-button caution>Caution</ao-button>
        <ao-button destructive>Destructive</ao-button>
        <ao-button subtle>Subtle</ao-button>
        <hr>
        <ao-button nano>Nano</ao-button>
        <ao-button small>Small</ao-button>
        <ao-button>Normal</ao-button>
        <ao-button large>Large</ao-button>
        <hr>
        <ao-button jumbo>Jumbo</ao-button>
        <hr>
        <p>
          <ao-button :naked="true">Naked</ao-button>
          <ao-button link>Link</ao-button>
          <ao-button text-only>Text Only</ao-button>
          <span>, and how about some </span>
          <ao-button
            text-only
            link>link AND text only??</ao-button>
        </p>
      </ao-card>
      <ao-card title="Text">
        <p>Normal Text</p>
        <p><a href="#">Link</a></p>
        <p><ao-text-style error>Error</ao-text-style></p>
        <p><ao-text-style small>Small</ao-text-style></p>
      </ao-card>
      <ao-modal
        v-if="showModal"
        :header-text="'I am the modal title'"
        @modalClose="toggleModal">
        <ao-input
          slot="modal-toolbar"
          :show-label="false"/>
        <ao-paginate
          slot="modal-toolbar"
          :total-pages="3"
          @paginate="paginate"/>
        <div slot="modal-body">
          <p>I am content</p>
        </div>
        <div slot="modal-footer">
          <ao-button
            primary
            @click.native="continueModal">
            Continue
          </ao-button>
        </div>
      </ao-modal>

      <ao-alert
        v-if="showAlert"
        :show-alert.sync="showAlert">
        <span slot="alert-icon"> Icon </span>
        <span>I alerted with a message</span>
      </ao-alert>
    </div>
  </div>
</template>

<script>
import orderBy from 'lodash.orderby'
export default {
  name: 'DemoContainer',
  data () {
    return {
      saveData: {},
      name: null,
      age: 100,
      programmingLanguages: [],
      likeBooks: false,
      nicePets: null,
      file: '',
      pets: [
        { name: 'Dog', value: 'dog' },
        { name: 'Cat', value: 'cat' },
        { name: 'Sloth', value: 'sloth' },
        { name: 'Porcupine', value: 'porcupine' }
      ],
      radios: [
        { value: 'Sit', name: 'deskPref' },
        { value: 'Stand', name: 'deskPref' },
        { value: 'Run Away', name: 'deskPref' }
      ],
      selectedRadio: 'Stand',
      userInfo: {
        page: 0,
        per_page: 5,
        total_pages: 2,
        total_enteries: 10
      },
      users: [
        { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
        { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
        { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
        { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
        { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' },
        { 'id': 6, 'first_name': 'Rick', 'last_name': 'Potter', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
        { 'id': 7, 'first_name': 'Harry', 'last_name': 'Sanchez', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
        { 'id': 8, 'first_name': 'Joy', 'last_name': 'Mann', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
        { 'id': 9, 'first_name': 'Adam', 'last_name': 'Hansen', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
        { 'id': 10, 'first_name': 'Marge', 'last_name': 'Grey', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
      ],
      columnHeaders: [
        { field: 'id', title: 'ID' },
        { field: 'first_name', title: 'First Name' },
        { field: 'last_name', title: 'Last Name' },
        { field: 'gender', title: 'Gender' }
      ],
      paths: [
        {name: 'first', path: '/'},
        {name: 'second', path: '/something'},
        {name: 'current', active: true}
      ],
      description: null,
      loading: false,
      showModal: false,
      showAlert: false,
      routes: this.$router.options.routes,
      page: 1,
      links: [
        { url: 'https://google.com', title: 'Google' },
        { url: 'https://facebook.com', title: 'Facebook' }
      ],
      showDropdown: false,
      activeTab: false,
      radioGroup: [{name: 'Option 1', value: 'Option 1'}, {name: 'Option 2', value: 'option 2'}, {name: 'Option 3', value: 'option 3'}],
      radioGroupVal: null
    }
  },
  computed: {
    displayUsers () {
      const perPage = this.userInfo.per_page
      const page = this.userInfo.page === 0 ? 0 : this.userInfo.page - 1
      const end = (page + 1) * perPage
      const userList = this.users
      return userList.slice((page * perPage), end)
    }
  },
  methods: {
    navChecker (value) {
      if (this.activeNav !== value) {
        this.activeNav = value
        this.$router.push(value)
      }
    },
    saveForm () {
      this.saveData = {
        name: this.name,
        age: this.age,
        languages: this.programmingLanguages,
        books: this.likeBooks,
        pets: this.nicePets,
        descripton: this.description
      }
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
      return this.saveData
    },
    toggleModal () {
      this.showModal = !this.showModal
      return this.showModal
    },
    continueModal () {
      this.showAlert = true
      this.toggleModal()
    },
    sortTable (sortBy, order) {
      this.users = orderBy(this.users, sortBy, order)
    },
    paginate (page, direction) {
      this.userInfo.page = page
      this.page = page
      console.log(this.page)
    },
    updateFile (val) {
      this.file = val.name
    },
    toggleDropdown () {
      this.activeTab = !this.activeTab
      this.showDropdown = !this.showDropdown
    },
    hideDropdown () {
      this.activeTab = false
      this.showDropdown = false
    }
    // submitFile () {
    // Store all form data in data object such as document
    //   let doc = this.document
    //   let data = new FormData()
    //   for (let key in doc) {
    //     if (key === 'file') {
    //       data.append(key, doc[key], doc[key].filename)
    //     }
    //     data.append(key, doc[key])
    //   }
    //   axios.post(`${yourUrl}`, data, {headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }}).then(response => {
    //      do stuff
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.ao-heading--card-section-heading {
  font-size: $font-size-sm;
  text-transform: uppercase;
  color: $color-gray-30;
  font-weight: $font-weight-bold;
  margin-bottom: $spacer-lg;
}
</style>
