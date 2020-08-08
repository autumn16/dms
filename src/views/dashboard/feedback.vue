<template>
  <div class="adminimage">
    <v-content>
      <v-row justify="center" style="background-color: black;">
        <v-col md="4" >
          <v-btn to="../dashboard" style="margin-left: 50px;">
            <v-icon style="margin-bottom: 3px;"> mdi-keyboard-backspace </v-icon>
            RETURN TO DASHBOARD 
          </v-btn>      
        </v-col>
        <v-col md="4" style="display: flex; justify-content: center; align-items: center;">
          <v-btn @click="rep = !rep">
            SEND REPLY
          </v-btn>
        </v-col>
        <v-col md="4">

        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col md="auto" sm="auto" v-if="rep">
          <h1
            style="color: white; text-shadow: 1px 1px 20px black; text-align: center;"
          >SEND REPLY</h1>
          <v-text-field outlined label="Citizen ID" v-model="citizenId" style="width: 500px;" dark></v-text-field>
          <v-text-field outlined label="Title" v-model="name" style="width: 500px; margin-top: -20px;" dark></v-text-field>
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
          >LIST OF STUDENT FEEDBACK</h1>
          <v-data-table
            :headers="headers"
            :items="health"
            item-key="name"
            style="width: 1000px;"
          >
            <template v-slot:expanded-item="{ headers }">
              <td :colspan="headers.length">
        
              </td>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        
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
      rep: false,
      numberOfFeedback: 0,
      citizenId: '',
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

  },

  created() {
    this.getDataFromServer();
    this.getNumber();
  },

  methods: {
    getNumber(){
      axios.get('http://admin-database.herokuapp.com/feedback/students/admin')
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
      axios.post('http://admin-database.herokuapp.com/feedback/students/' + this.citizenId, data, config)
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
