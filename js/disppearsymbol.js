const splashScreen = document.getElementById("splash-screen");
console.log(splashScreen);
function removeSplashScreen() {
  splashScreen.remove();
}
setTimeout(removeSplashScreen, 3000);
