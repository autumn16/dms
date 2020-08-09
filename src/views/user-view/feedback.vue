<template>
  <div class="adminimage">
    <v-content>
      <v-row justify="start" style="background-color: black;">
        <v-col md="auto" style="margin-left: 50px;">
          <v-btn to="./report">
            <v-icon style="margin-bottom: 3px;"> mdi-keyboard-backspace </v-icon>
            RETURN TO DASHBOARD
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" style="margin-top: 100px;">
        <v-col md="auto" sm="auto">
          <h1
            style="color: white; text-shadow: 1px 1px 20px black; text-align: center;"
          >SEND YOUR FEEDBACK</h1>
          <v-text-field outlined label="Title" v-model="name" style="width: 500px;" dark></v-text-field>
          <v-textarea
            outlined
            label="Detail"
            v-model="detail"
            style="margin-top: -20px; width: 500px;"
            dark
          ></v-textarea>
          <v-btn style="margin-top: -20px; width: 100%;" color="primary" @click="sendHealth">UPDATE</v-btn>
        </v-col>
        <v-col md="auto">
          <h1
            style="color: white; text-shadow: 1px 1px 20px black; text-align: center;"
          >ADMIN REPLY</h1>
          <v-data-table
            :headers="headers"
            :items="health"
            item-key="name"
          >
            <template v-slot:expanded-item="{ headers }">
              <td :colspan="headers.length">
                
              </td>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  data() {
    return {
      // adminHealth: 0,
      numberOfFeedback: 0,
      name: '',
      detail: '',
      username: '',
      id: '',
      headers: [
        { text: "Title", value: "title", sortable: false },
        { text: "Detail", value: "detail", sortable: false },
      ],
      health: [
        /*
        {
          title: "TEST",
          detail: "TEST",
        },
        */
      ],
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
  created() {
    this.getDataFromServer();
    this.getNumber();
  },
  methods: {
    getNumber(){
      axios.get('http://admin-database.herokuapp.com/feedback/students/' + this.id )
      .then(Response => {
        this.numberOfFeedback = Response.data.length
        console.log(this.numberOfFeedback)
        for(let i = 0; i < this.numberOfFeedback; i++){
          this.health.push({
            title: Response.data[i].name,
            detail: Response.data[i].detail
          })
        }
      })
    },
    sendHealth(){
      this.health.push({
        title: this.name,
        detail: this.detail
      })
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let data = {
        name: this.name,
        detail: this.detail,
      };
      axios.post('http://admin-database.herokuapp.com/feedback/students/admin', data, config)
      .then((Response) => Response.data[this.numberOfFeedback + 1])
      .then(({ name, detail}) => {
        this.name = name
        this.detail = detail
      })
    },
    getDataFromServer() {
      /*
      this.username = this.$store.state.gloUsername
      this.id = this.$store.state.gloUserId
      */
      this.username = this.$store.state.gloUsername;
      this.id = this.$store.state.gloUserId;
      this.lock = true;
      console.log(this.username);
      console.log(this.id);
    },
  },
};
</script>


<style scoped>
.adminimage {
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>