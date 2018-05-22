<template>
  <div id="demo-container">
    <ao-section-header
      :icon-class="'custom-glyph-clients'"
      :title="'Demo Container'"
      :subtitle="'Created at 123456789'">
      <ao-navbar slot="section-header-navbar">
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path" >{{ route.name }}</router-link>
        </li>

        <li>
          <span>stale</span>
        </li>
      </ao-navbar>

      <div slot="section-header-toolbar">
        <ao-button @click.native="toggleModal">Open Modal</ao-button>
      </div>
    </ao-section-header>

    <ao-card :title="'Title of Card'">
      <p>
        <ao-text-style error small>text</ao-text-style>
      </p>
      <ao-form @formHandler="saveForm">
        <ao-input
          :type="'text'"
          :label="'Name'"
          :show-label="false"
          :placeholder="'Name'"
          v-model="name"
          :has-error="true"
        />
        <p>My name: {{ name }}</p>

        <ao-input
          :type="'number'"
          :label="'Age'"
          v-model="age"
          :step="5"
        />
        <p>My age: {{ age }}</p>

        <label>Favorite Programming Languages?</label>
        <ao-checkbox
          v-model="programmingLanguages"
          :checkbox-value="'JavaScript'"
          :checkbox-label="'Javascript'"
        />
        <ao-checkbox
          v-model="programmingLanguages"
          :checkbox-value="'Ruby'"
          :checkbox-label="'Ruby'"
        />
        <ao-checkbox
          v-model="programmingLanguages"
          :checkbox-value="'PHP'"
          :checkbox-label="'PHP'"
          disabled
        />

        <p>Favorite Programming Languages are: {{ programmingLanguages }}</p>
        <label>Do you like books?</label>
        <ao-checkbox
          v-model="likeBooks"
          :checkbox-label="'Books'"
        />

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
          v-model="selectedRadio"
        >
          {{ radio.value }}
        </ao-radio>

        <p>When I'm at my desk I prefer to {{ selectedRadio }}</p>

        <ao-select
          v-model="nicePets"
          :options="pets"
          :label="'Nice Pets'"
          :default="nicePets"
          :has-error="true"
        />
        <p>I like this pet: {{ nicePets }}</p>

        <ao-text-area v-model="description" />
        <p>Description: {{ description }}</p>
        <ao-input
          :label="'Search Example (does not search anything)'"
          :placeholder="'Search'"
          :type="'search'"/>
        <ao-button
          primary
          :type="'submit'"
        >
          Save
        </ao-button>
      </ao-form>

      <pre>{{ saveData }}</pre>

      <ao-spinner v-if="loading" />
    </ao-card>

    <ao-card :title="'Hi I am a Table!'">
      <!-- <ao-paginate slot="card-header-toolbar" @paginate="paginate"/> -->
      <ao-table :headers="columnHeaders" @sortTable="sortTable">
        <tr v-for="user in displayUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </ao-table>
    </ao-card>

    <ao-modal
      v-if="showModal"
      :size="'md'"
      @modalClose="toggleModal"
    >
      <div slot="modal-header">
        <h2>I am the modal title</h2>
      </div>
      <div slot="modal-body">
        <p>I am content</p>
      </div>
      <div slot="modal-footer">
        <ao-button primary @click.native="continueModal">
          Continue
        </ao-button>
      </div>
    </ao-modal>

    <ao-alert :show-alert.sync="showAlert" v-if="showAlert">
      <span slot="alert-icon">
        Icon
      </span>

      <span>I alerted with a message</span>
    </ao-alert>
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
      nicePets: 'cat',
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
      description: null,
      loading: false,
      showModal: false,
      showAlert: false,
      routes: this.$router.options.routes
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
    sortTable (sortBy, reverse) {
      let direction = reverse ? 'asc' : 'desc'
      this.users = orderBy(this.users, sortBy, direction)
    },
    paginate (page, direction) {
      this.userInfo.page = page
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
#demo-container {
  padding: $spacer;
}

a {
  color: #42b983;
}
</style>
