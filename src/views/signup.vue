<template>
    <v-app id="signUpContainer">
      <div class="myPageName"><img src="../assets/page_logo.png" height="60px"></div>
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
              color="white"
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              color="white"
              v-model="Password"
              :rules="Password"
              label="Password"
              required
            ></v-text-field>

            <v-text-field
              color="white"
              v-model="RePassword"
              :rules="RePassword"
              label="Re-enter password"
              required
            ></v-text-field>

            <v-text-field
              color="white  "
              v-model="Email"
              :rules="Email"
              label="Your Email"
              required
            ></v-text-field>

          <!--
            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="I agree to the term of use"
              class="black--text"
              required
            ></v-checkbox> -->

            <v-btn class ="white--text"
              color="hsl(227, 58%, 65%)"
              @click="signUp"
            >
              Continue
            </v-btn>

            <div class="termOfUse">
              <p>By registering, you have agreed to DMS's <b>Term of Service</b> and <b>Privacy Policy</b></p>
            </div>

          </v-form>
        </v-card>
    </v-app>
</template>

<script>
export default {

}
</script>

<style>

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
  background-image: url("../assets/signup_img.jpg");
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
  height: 480px;
  top:  100px;
}

.myPageName{
    opacity: 100%;
    left: 50px;
    top: 10px;   
    position: absolute;
}
</style>

