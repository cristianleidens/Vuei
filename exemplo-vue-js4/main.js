var vue = new Vue({
  el: "#app",
  data: {
    name:"Cris",
    grade1: 7.5,
    grade2: 9.4,
    status: false
  },
  computed: {
    average() {
      return (this.grade1 + this.grade2) / 2;
    }
  },
  methods: {

    }
});
