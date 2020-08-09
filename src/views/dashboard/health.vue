<template>
  <div>
    <span id="background"></span>
    <v-app>
      <v-content>
        <v-row justify="center" style="background-color: black;">
          <v-col md="4">
            <v-btn to="../dashboard" style="margin-left: 50px;">
              <v-icon style="margin-bottom: 3px;">mdi-keyboard-backspace</v-icon>RETURN TO DASHBOARD
            </v-btn>
          </v-col>
          <v-col md="4" style="display: flex; justify-content: center; align-items: center;"></v-col>
          <v-col md="4"></v-col>
        </v-row>
        <v-row>
          <v-col md="5" style="display: flex; justify-content: center; align-items: center;">
            <h1 style="color: white; text-shadow: 1px 1px 20px black;">Admin Update</h1>
          </v-col>
          <v-col md="1">

          </v-col>
          <v-col md="5" style="display: flex; justify-content: center; align-items: center;">
            <h1 style="color: white; text-shadow: 1px 1px 20px black;">Student Self-Update</h1>
          </v-col>
        </v-row>
        <v-row justify="start" align="center">
          <v-col md="5" style="display: flex; justify-content: center; align-items: center;">
            <v-btn rounded color="primary" style="margin-top: -10px;" @click="addNewDuty = true">
              <v-icon>mdi-plus</v-icon>Add new health case
            </v-btn>
            <v-dialog v-model="addNewDuty" width="600px">
              <v-card>
                <v-card-title>Add new case</v-card-title>
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
          <v-col md="1">

          </v-col>
          <v-col md="5">

          </v-col>
        </v-row>
        <v-row justify="center" >
          <v-col md="5" style="justify-content: center; align-items: center;">
            <v-card
              :key="index"
              v-for="index in numberOfDuty"
              style="margin-bottom: 10px;"
            >
              <v-card-title style="color: red; font-size: 30px;">{{ dName[index - 1]}}</v-card-title>
              <v-card-text style="color: black; font-size: 18px;">{{ dDetail[index - 1]}}</v-card-text>
            </v-card>
          </v-col>
          <v-col md="1">

          </v-col>
          <v-col md="5">
            <v-card
              :key="index"
              v-for="index in stdLength"
              style="margin-bottom: 10px;"
            >
              <v-card-title style="color: blue; font-size: 30px;">{{ stdName[index - 1]}}</v-card-title>
              <v-card-text style="color: black; font-size: 18px;">{{ stdDetail[index - 1]}}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-content>
    </v-app>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      obj: [],
      stdLength: 0,
      stdName: [],
      stdDetail: [],
      numberOfDuty: 0,
      dutyName: "",
      dutyContent: "",
      dName: [],
      dDetail: [],
      dutyNumber: 0,
      addNewDuty: false,
      timestamp: "",
      drawer: true,
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
    this.getRecord();
  },

  methods: {
    getRecord() {
      console.log(" *** CLCMA LANDED HERE ***");
      axios
        .get("http://admin-database.herokuapp.com/health/getAll")
        .then((Response) => {
          this.obj = Response.data;
          this.numberOfDuty = this.obj.length;
          for (let i = 0; i < this.numberOfDuty; i++) {
            this.dName.unshift(this.obj[i].name);
            this.dDetail.unshift(this.obj[i].detail);
          }
        });
      axios
        .get('http://admin-database.herokuapp.com/student-health/health/students/admin')
        .then(Response => {
          this.stdLength = Response.data.length
          for(let i = 0; i < this.stdLength; i++){
            this.stdName[i] = Response.data[i].name
            this.stdDetail[i] = Response.data[i].detail
          }
        })
    },
    add() {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let data = {
        name: this.dutyName,
        detail: this.dutyContent,
      };
      axios
        .post(
          "http://admin-database.herokuapp.com/health/addNewHealth/user/id",
          data,
          config
        )
        .then((Response) => Response.data[this.numberOfDuty + 1])
        .then(({ name, detail }) => {
          this.dutyName = name;
          this.dutyContent = detail;
        });
      this.dName.unshift(this.dutyName);
      this.dDetail.unshift(this.dutyContent);
    },
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
