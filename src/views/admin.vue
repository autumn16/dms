<template>
  <div>
  <span id="background"></span>
    <v-app>
      <v-row>
        <v-col md="auto">
          <v-navigation-drawer
            v-model="drawer"
            :permanent="permanent"
            :src="bg"
            absolute
            dark
          >
            <v-list dense nav class="py-0">
              <v-list-item two-line>
                <v-list-item-avatar>
                  <img src="../assets/signup_img.jpg" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Admin</v-list-item-title>
                  <v-list-item-subtitle>Last signing up: 26/07/2020</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <!--<v-list-item link>-->

              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <router-link :to="item.link" style="text-decoration: none;">
                  <v-list-item-content>
                    <v-list-item-title 
                      style="color: white"
                    >
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </router-link>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
      </v-row>
      <v-content>
        <v-row align="center" justify="center">
          <v-col md="auto">
            <v-card style="margin-left: 120px; margin-right: -120px;" light>
              <v-card-title>
                List of Student
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
                :single-expand="singleExpand"
                :expanded.sync="expanded"
                item-key="name"
                show-expand
              >
                <template v-slot:expanded-item="{ headers, item}">
                  <td :colspan="headers.length">
                      <v-btn
                        color="primary" 
                        dark
                        tile
                        style="margin-left: 50px; font-size: 12px;"
                        @click.stop="sendNoti = true"
                      >
                        Send Notification
                      </v-btn>
                      <v-dialog v-model="sendNoti" width="600">
                        <v-card>
                          <v-card-title 
                            class="headline"
                          >
                            Your Notification
                          </v-card-title>
                          <v-text-field
                            outlined
                            style="margin-left: 10px; margin-right: 10px; margin-bottom: -20px;"
                            label="Citizen Id"
                          >
                          </v-text-field>
                          <v-text-field
                            outlined
                            style="margin-left: 10px; margin-right: 10px; margin-bottom: -20px;"
                            label="Title"
                          >    
                          </v-text-field>
                          <v-textarea
                            outlined
                            style="margin-left: 10px; margin-right: 10px;"
                            label="Detail"
                            :value="`${informText}`"
                          >

                          </v-textarea>
                          <v-checkbox
                            style="margin-left: 10px; margin-top: -20px;"
                            :label="`Inform ${item.name} to his/her late payment`"
                            @click="informText = `*** YOU'RE LATE FOR PAYMENT ***`"
                          >
                          
                          </v-checkbox>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" text @click="sendNoti = false">
                              Send
                            </v-btn>
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
    </v-app>
  </div>
</template>

<script>

const axios = require('axios')

export default {
  data() {
    return {
      informText: "",
      informLate: false,
      sendNoti: false,
      expanded: [],
      singleExpand: false,
      drawer: true,
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          link: "dashboard",
        },
        {
          title: "Duty",
          icon: "mdi-hours-24",
          link: "dashboard/duty",
        },
        {
          title: "Security",
          icon: "mdi-security",
          link: "dashboard/security",
        },
        {
          title: "Student's Health",
          icon: "mdi-cards-heart",
          link: "dashboard/health",
        },
        {
          title: "Student's Feedback",
          icon: "mdi-chat",
          link: "dashboard/feedback",
        },
        {
          title: "Sanitation (COVID-19)",
          icon: "mdi-hand-water",
          link: "dashboard/sanitation",
        },
        {
          title: "Visitor Record",
          icon: "mdi-clover",
          link: "dashboard/record",
        },
        { title: "Logout", icon: "mdi-logout-variant", link: "../sign-in" },
      ],
      permanent: true,
      background: false,

      search: "",
      headers: [
        {
          text: "Dorm UID",
          align: "start",
          sortable: true,
          value: "dormUID",
        },
        { text: "Name", value: "name" },
        { text: "Citizen ID", value: "citizenId" },
        { text: "Room", value: "room" },
        { text: "Email", value: "email" },
        // { text: "Phone Number", value: "phone" },
        { text: "Student ID", value: "studentId" },
        { text: "University", value: "university" },
      ],
      userLength: 0,
      userList: [],

      test: [123],
      users: [
        /*
        {
          dormUID: "",
          name: "",
          citizenId: "",
          room: "",
          email: "",
          phone: "",
          studentId: "",
          university: "",
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
    this.getStudentInfo()
  },
  methods: {
    getStudentInfo(){
      axios.get('http://admin-database.herokuapp.com/student/getAll')
      .then(Response => {
        this.userList = Response.data 
        this.userLength = this.userList.length
        console.log(this.userLength)
        console.log(this)
        for(let i = 0; i < this.userLength; i++){
          this.users.push({
            name: this.userList[i].name,
            citizenId: this.userList[i].citizenId,
            email: this.userList[i].email,
            room: 'WAITING',
            studentId: this.userList[i].studentId,
            university: this.userList[i].university
          })
        }
      }) 
    }  
  },
};
</script>

<style scoped>
#background {
  background: #0F2027; 
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027); 
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
