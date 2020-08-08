<template>
  <div class="adminimage">
    <v-container
      fill-height
    >
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
            <h2 style="color: white; text-shadow: 1px 1px 20px red;">Hi {{ username }}</h2>
            <h5 style="color: white; text-shadow: 1px 1px 12px red;"> {{ timestamp   }}</h5>
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
        <v-row>
          <v-col md="3"></v-col>
          <v-col md="auto">
            <h1 style="color: white; text-shadow: 1px 1px 20px red;"> FEEDBACK</h1>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col md="lg">     
            <v-card style="margin-left: 150px; margin-right: -140px;" light>
              <v-card-title>
          Tell us how you feel here and report the problems you may meet and what we can do to improve.
                <v-spacer></v-spacer>
                
            </v-card-title>       
                        <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                        >
                        <v-row>

        <v-col cols="12" sm="6" md="12">
          <v-textarea
            label="Title"
            outlined
            v-model="t_name"
          ></v-textarea>
        </v-col>

     <v-col cols="12" sm="6" md="12">
          <v-textarea
           v-model="t_address"
           outlined
            label="Problem"
          ></v-textarea>
        </v-col>
 

        <v-col cols="12" sm="6" md="12">
          <v-textarea
           v-model="t_currentDisease"
            outlined
            label="Suggestion"
          ></v-textarea>
        </v-col>   

        </v-row>
     <v-dialog v-model="displayMess" persistent max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="updateInfo()"
        >
          Submit
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Submitted your feedback</v-card-title>
        <v-card-text>Thanks for your feedback.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>          
          <v-btn  text @click="displayMess = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

                         
  </v-form>
             
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
      name:"hien",
      t_name:"",
      address: 'hi!',
      t_address:"",
      currentDisease:'', 
      t_currentDisease:"",
      citizendID:'',
      t_citizenID:"",
      

      displayMess:false,
      expanded: [],
      singleExpand: false,
      drawer: true,
      index:0,
      username:"Hien",
      timestamp:"",
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
          title: "Update info",
          icon: "mdi-information",
          link: "updateInfo",
        },
        {
          title: "Messages and notifications",
          icon: "mdi-folder-open",
          link: "report",
        },
        {
          title: "Student's Feedback",
          icon: "mdi-chat",
          link: "feedback",
        },
        {
          title: "Sanitation (COVID-19)",
          icon: "mdi-hand-water",
          link: "sanitation",
        },
      
        { title: "Logout", icon: "mdi-logout-variant", link: "../../../sign-in" },
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
        { text: "Content", value: "MessageContent" },
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
  },
  methods: {
 
    updateInfo()    
  {
      this.name=this.t_name;
      this.address=this.t_address;
      this.currentDisease=this.t_currentDisease;
      this.citizenID=this.t_citizenID;
  },

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
  },
};
</script>


<style scoped>
.adminimage {
  background-image: url("../../assets/signup_img.jpg");
}


@import url('https://fonts.googleapis.com/css?family=Quicksand');
@import url('https://fonts.googleapis.com/css2?family=Roboto');

.termOfUse{
  color: hsl(227, 58%, 65%);;
  margin-top: 10px;
  font-size: 10px;
}

.signUpDescription{
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: white;
  margin-top: 24px;
  font-size: 24px;
}


.v-btn{
  width: 360px;
  background-color: hsl(227, 58%, 65%);
}

.v-col{
  height: 75%;
}

.v-card-title{
  text-align: center;
}

.v-textarea{
  width: 800px;
}

.v-row{
      top: 0px;
  position: relative;
  left: 40px;
}

.v-form{
  top: 0px;
  position: relative;
  left: 40px;
}


.myPageName{
    opacity: 100%;
    left: 50px;
    top: 10px;   
    /*position: absolute;
}
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

