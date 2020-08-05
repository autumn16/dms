<template>
  <div>
    <span id="background"></span>
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        :src="bg"
        absolute
        dark
      >
        <v-list dense nav class="py-0">
          <v-list-item two-line >
            <v-list-item-avatar>
              <img src="../../assets/signup_img.jpg" />
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
                <v-list-item-title style="color: white; text-decoration: none;">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="auto">
            <h2 style="color: white; text-shadow: 1px 1px 20px red;">It's {{ timestamp }}</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="auto">
            <v-btn rounded color="primary" style="margin-top: -10px;" @click="addNewDuty = true">
              <v-icon>mdi-plus</v-icon>Add new security record
            </v-btn>
            <v-dialog v-model="addNewDuty" width="600px">
              <v-card>
                <v-card-title>Add new record</v-card-title>
                <v-form>
                  <v-text-field
                    v-model="dutyName"
                    placeholder="Case name"
                    outlined
                    style="margin-left: 20px; margin-right: 20px;"
                  ></v-text-field>
                  <v-textarea
                    v-model="dutyContent"
                    placeholder="Case content"
                    outlined
                    style="margin-left: 20px; margin-right: 20px; margin-top: -15px;"
                  ></v-textarea>
                </v-form>
                <v-spacer></v-spacer>
                <v-card-actions style="margin-left: 10px; margin-top: -30px; margin-bottom: 20px;">
                  <v-btn color="green darken-1" text @click="add">Add Case</v-btn>
                  <v-btn color="red darken-1" text @click="addNewDuty = false">Exit</v-btn>
                </v-card-actions>
              </v-card> 
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="auto">
          <v-card 
            :key="index"
            v-for="index in numberOfDuty"
            width="800"
            height="300"
            style="margin-bottom: 10px;"
          >
            <v-card-title style="color: blue; font-size: 30px;">
              {{ dName[index - 1]}}
            </v-card-title>
            <v-card-text style="color: black; font-size: 18px;">
              {{ dDetail[index - 1]}}
            </v-card-text>
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
      obj: [],
      numberOfDuty: 0,
      dutyName: "",
      dutyContent: "",
      dName: [],
      dDetail: [],
      dutyNumber: 0,
      addNewDuty: false,
      timestamp: "",
      drawer: true,
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          link: "../dashboard",
        },
        {
          title: "Duty",
          icon: "mdi-hours-24",
          link: "duty",
        },
        {
          title: "Security",
          icon: "mdi-security",
          link: "../dashboard/security",
        },
        {
          title: "Student's Health",
          icon: "mdi-cards-heart",
          link: "../dashboard/health",
        },
        {
          title: "Student's Feedback",
          icon: "mdi-chat",
          link: "../dashboard/feedback",
        },
        {
          title: "Sanitation (COVID-19)",
          icon: "mdi-hand-water",
          link: "../dashboard/sanitation",
        },
        {
          title: "Visitor Record",
          icon: "mdi-clover",
          link: "../dashboard/record",
        },
        { title: "Logout", icon: "mdi-logout-variant", link: "../signin" },
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
    setInterval(this.getNow, 1000);
    this.getNow();
    this.getRecord();
  },

  methods: {
    getNow() {
      
      const today = new Date();

      const date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

      const time = (today.getHours()<10?'0'+today.getHours():today.getHours())+ ":" + 
                (today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())
         + ":" + (today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds());

      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
    getRecord() {
      console.log(" *** CLCMA LANDED HERE ***")
      axios.get('http://admin-database.herokuapp.com/security/getAll')
      .then(Response => {
        this.obj = Response.data
        this.numberOfDuty = this.obj.length
        for(let i = 0; i < this.numberOfDuty; i++){
          this.dName.unshift(this.obj[i].name)
          this.dDetail.unshift(this.obj[i].detail)
        }
      })
    },
    add() {
      let config = {
        headers: {
          'Content-Type':'application/json'
        }
      }
      let data = {
        name: this.dutyName,
        detail: this.dutyContent,
      }
      axios.post('http://admin-database.herokuapp.com/security/addNewSecurity/user/id', data, config)
      .then(Response => Response.data[this.numberOfDuty + 1])
      .then(({ name, detail }) => {
        this.dutyName = name
        this.dutyContent = detail
      })
      this.dName.unshift(this.dutyName)
      this.dDetail.unshift(this.dutyContent) 
    }
  },
};
</script>

<style scoped>
#background {
  /*ackground-image: url("../assets/signup_img.jpg");*/
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
