<template>
    <v-container id="thisContainer" fill-height fluid>
       <div class="myPageName"><img src="../assets/home-logo.png" height="60px"></div>
        <div class="myNavBar" style="width: 100%;">
            <ul>
                <li><a href="#" id="about">About Us</a></li>
                <li><a href="#" id="news">News</a></li>
                <li><a href="./signin" id="signIn" style="padding-right:20px; position:relative;">Sign In</a></li>
            </ul>
        </div>  
        <div class="myTitleDescription" id="titleDes">
            <p>WHY CHOOSE US?</p>
        </div>
        <div class="myDescription">
            <p>
                We're leading Vietnam's dormitory renting service.<br/>
                Start your exploration with us now !
            </p>
        </div>
        <div class="buttonPos">
                <v-btn rounded color="red" dark style="margin-right: 10px; width: auto;">Frequently Asked Question</v-btn>
                <v-btn rounded color="blue" dark style="width: auto;" to="signup">Register Now</v-btn>
        </div>
        <div class="myImgDescription"><img src="../assets/img_des.png" height="400px"></div>
        <!--<div class="myNavBarBackground"></div>-->
        <div class="footerSignature">
            <p>© 2020 DMS Corporation • Developed by CLMCA Studio</p>
        </div>
    </v-container>
</template>

<script>
//import DetailView from './detail'

export default {
    //components: { Detail },
    data: () => ({
    
    })
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Quicksand');
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js');
@import url('https://fonts.googleapis.com/css2?family=Roboto');

  /* Navigation Bar */
.myPageName{
    opacity: 100%;
    left: 50px;
    top: 10px;   
    position: absolute;
}

.v-btn--active .v-btn__content { 
  color: white; 
}  

#thisContainer{
    background-image: url("../assets/wallpaper.jpg");
    background-size: cover;
    height: 1;
}
.myNavBar{
    margin-top: 0px;
    font-family: 'Quicksand', sans-serif;
    font-size: 24px;
    color:white;
}

.myNavBar ul{
    list-style-type:none;
    text-align: right;
}

.myNavBar ul li{
    display: inline-table;
    width: auto;
    height: 600px;
    line-height: 40px;
    padding-left: 10px;
    padding-right: 10px;
}

.myNavBar ul li:hover{
    opacity: 80%;
}

.myNavBar ul li a{
    opacity: 100%;
    position: relative;
    top: -40px;
    text-decoration: none;
    color: inherit;
}

/* Navigation Bar */

/* Body Information */

.myTitleDescription{
    position: absolute;
    top: 200px;
    left: 200px;
    font-size: 48px;
    color: white; 
    opacity: 80%;
}

.myDescription{
    position: absolute;
    left: 200px;
    top: 260px;
    font-size: 24px;
    color:white;
    opacity: 90%;
}

.myImgDescription{
    position: absolute;
    top:150px;
    right: 200px;
}

.buttonPos{
    position: absolute;
    left: 200px;
    top: 350px;
}

.footerSignature{
    position: absolute;
    font-family: 'Quicksand', sans-serif;
    bottom: 0px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: white;
    opacity: 80%;
}
</style>