const app = Vue.createApp({
  data() {
    return {
      quantity: 10,
      stars: [],
      activeList: [false, true, true],
      activeListLenght: null,
      currientList:0,
    };
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    changeList(index) {
      for (let i = 0; i < this.activeListLenght; i++) {

        if (index === i) {
          this.activeList[i] = false;
          this.currientList = i;
        } else this.activeList[i] = true;
      }
      for (let i = 0; i < this.quantity; i++) {
        this.stars[i] = this.getRandomInt(3, 6);
      }
    },
  },
  created() {
    for (let i = 0; i < this.quantity; i++) {
      this.stars[i] = this.getRandomInt(3, 6);
    }
    this.activeList.forEach((element) => {
      this.activeListLenght++;
    });
  },
});

app.mount(".review__wrapper");
