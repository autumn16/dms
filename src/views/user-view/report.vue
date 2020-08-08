<template>
  <div class="adminimage">
    <v-container style="height: 100vh; max-height: 100%;">
      <v-row>
        <v-col md="auto">
          <v-navigation-drawer
            v-model="drawer"
            absolute
            dark
          >
            <v-list dense nav class="py-0">
              <v-list-item two-line >
                <v-list-item-avatar>
                  <img src="../../assets/signup_img.jpg" />
                </v-list-item-avatar>

                <v-list-item-content>

                  <h5 style="color: white; text-shadow: 1px 1px 20px red;">Hi {{ username }}</h5>
                  <h5 style="color: white; text-shadow: 1px 1px 20px red;">{{ timestamp }}</h5>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item v-for="item in items" :key="item.title" link >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <router-link :to="item.link" style="text-decoration: none;">
                  <v-list-item-content>
                    <v-list-item-title style="color: white; text-decoration: none;">{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </router-link>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
      </v-row>
      <v-content>
        <v-row>
          <v-col md="2"></v-col>
          <v-col md="auto">
            <h2
              style="color: white; text-shadow: 1px 1px 20px red;"
            >NOTIFICATION AND MESSAGES FROM ADMIN</h2>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col md="lg">
            <v-card style="margin-left: 150px; margin-right: -140px;" light>
              <v-card-title>
                Message history
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="users"
                :search="search"
                item-key="name"
              >
                <template v-slot:expanded-item="{ headers, item}">
                  <td :colspan="headers.length">
                    <v-btn
                      color="primary"
                      dark
                      tile
                      style="margin-left: 25px; font-size: 12px;"
                      @click.stop="displayMess = true"
                    >Open messages</v-btn>

                    <v-btn
                      color="primary"
                      dark
                      tile
                      style="margin-left: 50px; font-size: 12px;"
                      @click.stop="deleteRow(item.name)"
                    >Delete messages</v-btn>
                    <v-dialog v-model="displayMess" width="600">
                      <v-card>
                        <v-card-title class="headline">{{item.name}}</v-card-title>
                        <v-card-text
                          outlined
                          style="margin-left: 10px; margin-right: 10px;"
                          :value="`${item.MessageContent}`"
                        >{{item.MessageContent}}</v-card-text>

                        <v-card-actions>
                          <v-btn color="green darken-1" text @click="displayMess = true">Reply</v-btn>
                          <v-spacer></v-spacer>

                          <v-btn color="green darken-1" text @click="displayMess = false">Close</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </td>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-content>
    </v-container>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data() {
    return {
      messageList: [],
      lock: false,
      informText: "",
      informLate: false,
      sendNoti: false,
      displayMess: false,
      expanded: [],
      index: 0,
      username: "",
      id: "",
      timestamp: "",
      items: [
        {
          title: "Home",
          icon: "mdi-view-dashboard",
          link: "report",
        },
        {
          title: "Update Infomation",
          icon: "mdi-information",
          link: `./updateInfo`,
        },
        {
          title: "Update Health",
          icon: "mdi-cards-heart",
          link: "./health",
        },
        {
          title: "Send Feedback",
          icon: "mdi-message-outline",
          link: "./feedback"
        },
        { title: "Logout", icon: "mdi-logout-variant", link: "../sign-in" },
      ],
      permanent: true,
      background: false,

      search: "",
      headers: [
        { text: "Title", value: "name", sortable: false, },
        { text: "Detail", value: "detail", sortable: false, },
      ],
      users: [

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
    this.routeCheck()
    setInterval(this.getNow, 1000);
    this.getNow();
  },
  methods: {
    routeCheck(){
      if(this.lock == false){
        this.$router.replace('../sign-in')
      }
    },
    getDataFromServer() {
      /*
      this.username = this.$store.state.gloUsername
      this.id = this.$store.state.gloUserId
      */
      this.username = this.$store.state.gloUsername
      this.id = this.$store.state.gloUserId
      this.lock = true
      axios.get('http://admin-database.herokuapp.com/notification/students/' + this.id)
      .then(Response => {
        this.messageList = Response.data
        let numberOfMessage = Response.data.length
        for(let i = 0; i < numberOfMessage; i++){
          this.users.push({
            name: this.messageList[i].name,
            detail: this.messageList[i].detail
          })
        }
      })
      console.log(this.username)
      console.log(this.id)
    },
    deleteRow(index) {
      var i;
      for (i = 0; i < this.users.length; i += 1) {
        if (this.users[i].name === index) break;
      }
      this.users.splice(i, 1);
    },

    getNow() {
      const today = new Date();
      const date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      const time =
        (today.getHours() < 10 ? "0" + today.getHours() : today.getHours()) +
        ":" +
        (today.getMinutes() < 10
          ? "0" + today.getMinutes()
          : today.getMinutes()) +
        ":" +
        (today.getSeconds() < 10
          ? "0" + today.getSeconds()
          : today.getSeconds());
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
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
