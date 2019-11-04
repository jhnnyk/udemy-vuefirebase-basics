new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja',
    name: 'John',
    url: 'http://www.youtube.com',
    classes: ['one', 'two']
  },
  methods: {
    greet(time) {
      return `Hello and good ${time}, ${this.name}`;
    }
  }
});
