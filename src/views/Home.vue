<template>
  <div class="home">
    <span>{{ hour }}</span>
    <span>:</span>
    <span>{{ minute }}</span>
    <span>:</span>
    <span>{{ second }} </span>
    <span v-if="twelveHour"> {{ amPm }}</span>
    <div>
      <button @click="setType(false)">24 hours</button>
      <button @click="setType(true)">12 hours</button>
    </div>  

  </div>
  
</template>

<script>

function addZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

const getDate = () => new Date();

const getSeconds = () => addZero(getDate().getSeconds());

const getMinutes = () => addZero(getDate().getMinutes());

const getHours = twelveHour => {
  let hours = getDate().getHours();
  if (twelveHour && hours > 12) {
    hours = hours - 12;
  }
  return addZero(hours);
};

const getAmPm = () => (getDate().getHours() > 12 ? "pm" : "am");

import { mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      ticker: null,
      minute: getMinutes(),
      hour: getHours(),
      second: getSeconds(),
      amPm: getAmPm()
    }
  },
  computed: {
		...mapState({
      twelveHour: state => state.twelveHour
    })
  },
  created() {
    this.ticker = setInterval(() => {
      this.minute = getMinutes();
      this.hour = getHours(this.twelveHour);
      this.second = getSeconds();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.ticker);
  },
  methods: {
    ...mapActions([
      'setType',
    ]),
  }

}
</script>
<style scoped>
  .home span{
    font-size: 40px;
  }
</style>
