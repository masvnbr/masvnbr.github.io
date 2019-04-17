const url = "http://118.69.126.39:88/tapi/DSDonVi";
const vm = new Vue({
    el: '#app',
    data: {
        results: []
        },
        mounted() {
          axios.get(url).then(response => {
            this.results = response.data
          })
        }
    });