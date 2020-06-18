<template>
    <v-app id="signUpContainer">
      <div class="myPageName"><img src="../assets/page_logo.png" height="60px"></div>
        <v-card
          class="mx-auto"
          max-width="700"
          tile
        >
        
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Password"
              required
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="I agree to the term of use"
              required
            ></v-checkbox>

            <v-btn
              color="#1219"
              @click="signUp"
            >
              Sign Up
            </v-btn>
          </v-form>
        </v-card>
    </v-app>
</template>

<script>
export default {

}
</script>

<style>

#signUpContainer{
  background-image: url("../assets/signup_img.jpg");
  background-size: cover;
  height: 1;
}

.v-card-title{
  text-align: center;
}

.v-text-field{
  width: 200px;
}

.v-form{
  position: relative;
  left: 140px;
}

.v-card{
  position: absolute;
  width: 480px;
  height: 500px;
  top:  100px;
}

.myPageName{
    opacity: 100%;
    left: 50px;
    top: 10px;   
    position: absolute;
}
</style>

