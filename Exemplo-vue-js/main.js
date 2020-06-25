var vue = new Vue({
  el: "#app",
  data: {
    name: "Cris",
    lastName: "Leidens"
  },
  computed: {
    fullName() {
      return this.name + " " + this.lastName;
    }
  }
});
