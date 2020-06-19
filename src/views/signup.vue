<template>
    <v-app id="signUpContainer">
      <div class="myPageName"><img src="../assets/home-logo.png" height="60px"></div>
        <v-card
          class="mx-auto"
          max-width="700"
          tile
          color="hsl(220, 8%, 23%)"
        >
          <div class="signUpDescription">
            <p><b>Create an account</b></p>
          </div>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          
            <v-text-field
              dark
              v-model="name"
              :counter="10"
              :rules="nameRules"
              outlined
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              dark
              v-model="Password"
              :rules="Password"
              outlined
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              label="Password"
              required
            ></v-text-field>

            <v-text-field
              dark
              v-model="RePassword"
              :rules="RePassword"
              outlined
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              label="Re-enter password"
              required
            ></v-text-field>

            <v-text-field
              dark
              v-model="Email"
              :rules="Email"
              outlined
              label="Your Email"
              required
            ></v-text-field>

            <v-btn class ="white--text"
              color="hsl(227, 58%, 65%)"
              @click="signUp"
            >
              Continue
            </v-btn>

            <div class="termOfUse">
              <p>By continuing, you have agreed to DMS's <b>Term of Service</b> and <b>Privacy Policy</b></p>
            </div>

          </v-form>
        </v-card>
    </v-app>
</template>

<script>
export default {

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Quicksand');
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js');
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

#signUpContainer{
  background-image: url("../assets/tsignup_img.jpg");
  background-size: cover;
  height: 1;
}

.v-btn{
  width: 360px;
  background-color: hsl(227, 58%, 65%);
}

.v-card-title{
  text-align: center;
}

.v-text-field{
  width: 360px;
}

.v-form{
  top: 0px;
  position: relative;
  left: 40px;
}

.v-card{
  position: absolute;
  width: 440px;
  left: 548px;
  height: 520px;
  top:  100px;
}

.myPageName{
    opacity: 100%;
    left: 50px;
    top: 10px;   
    position: absolute;
}
</style>

