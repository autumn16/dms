<template>
  <div class="adminimage">
    <v-container>
      <v-row>
        <v-col md="auto">
          <v-navigation-drawer
            v-model="drawer"
            :color="color"
            :expand-on-hover="expandOnHover"
            :mini-variant="miniVariant"
            :permanent="permanent"
            :src="bg"
            absolute
            dark
          >
        
             <v-list dense nav class="py-0">
              <v-list-item two-line :class="miniVariant && 'px-0'">
                <v-list-item-avatar>
                  <img src="../../assets/signup_img.jpg" />
                </v-list-item-avatar>

                <v-list-item-content>
<!-- 
                 <v-list-item-title>Admin</v-list-item-title>
                 <v-list-item-subtitle>Last signing up: 26/07/2020</v-list-item-subtitle> UserName here-->
    
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <!--<v-list-item link>-->

              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <router-link :to="item.link">
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
        <v-row align="center">
          <v-col md="auto">
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
                          <v-textarea
                            outlined
                            style="margin-left: 10px; margin-right: 10px;"
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
    </v-container>
  </div>
</template>

<script>
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
          username:"test"
        },
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
        { title: "Logout", icon: "mdi-logout-variant", link: "../signin" },
      ],
      permanent: true,
      background: false,

      search: "",
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: true,
          value: "dormUID",
        },
        { text: "Title", value: "name" },
        { text: "Content", value: "citizenID" },
       ],
      users: [
        {
          dormUID: "12-31-2020",
          name: "Quan Thanh Tho",
          citizenID: 6.0,
          room: "1120AH1",
          email: "tri.luuminh@hcmut.edu.vn",
          phone: "0929347800",
          studentID: 24,
          uni: "University of Law",
        },
        {
          dormUID: "1811299",
          name: "Bui Hoang Thang",
          citizenID: 9.0,
          room: "1120AH1",
          email: "tri.luuminh@hcmut.edu.vn",
          phone: "0929347800",
          studentID: 37,
          uni: "University of Economics",
        },
        {
          dormUID: "1811270",
          name: "Nguyen An Khuong",
          citizenID: 16.0,
          room: "1120AH1",
          email: "tri.luuminh@hcmut.edu.vn",
          phone: "0929347800",
          studentID: 23,
          uni: "University of Science",
        },
        {
          dormUID: "1811271",
          name: "Le Dinh Duy",
          citizenID: 3.7,
          room: "1120AH1",
          email: "tri.luuminh@hcmut.edu.vn",
          phone: "0929347800",
          studentID: 67,
          uni: "Bach Khoa University",
        },
        {
          dormUID: "1811272",
          name: "Luu Minh Tri",
          citizenID: 16.0,
          room: "1120AH1",
          email: "tri.luuminh@hcmut.edu.vn",
          phone: "0929347800",
          studentID: 49,
          uni: "Bach Khoa University",
        },
        {
          dormUID: "1811273",
          name: "Nguyen Luan",
          citizenID: 0.0,
          room: "1120AH1",
          email: "tri.luuminh@hcmut.edu.vn",
          phone: "0929347800",
          studentID: 94,
          uni: "Bach Khoa University",
        },
        {
          dormUID: "1811274",
          name: "Tran Nhu Buu",
          citizenID: 0.2,
          room: "1120AH1",
          email: "tri.luuminh@hcmut.edu.vn",
          phone: "0929347800",
          studentID: 98,
          uni: "Bach Khoa University",
        },
        {
          dormUID: "1811275",
          name: "Pham Tho Quoc Long",
          citizenID: 3.2,
          room: "1120AH1",
          email: "tri.luuminh@hcmut.edu.vn",
          phone: "0929347800",
          studentID: 87,
          uni: "Bach Khoa University",
        },
        {
          dormUID: "1811276",
          name: "Huynh Bach Khoa",
          citizenID: 25.0,
          room: "1120AH1",
          email: "tri.luuminh@hcmut.edu.vn",
          phone: "0929347800",
          studentID: 51,
          uni: "Bach Khoa University",
        },
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
};
</script>

<style scoped>
.adminimage {
  background-image: url("../../assets/signup_img.jpg");
  height: 100%;
  
}
</style>
