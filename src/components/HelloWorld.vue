<template>
  <div class="hello">
    <h2>{{calCurrentTimeStatus}}</h2>
    <h1>{{calLoveDays}}</h1>
    <el-button @click="toLogin">登陆</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods: {
    toLogin() {
      this.$router.push('/login');
    }
  },
  computed: {
    calCurrentTimeStatus() {
      return `${this.$store.getters.calCurrentTimeStatus}好`;
    },
    calLoveDays() {
      return this.$store.getters.calLoveDays;
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
