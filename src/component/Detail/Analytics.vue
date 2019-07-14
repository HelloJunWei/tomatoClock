<template>
  <div class="analytics">
    <div class="number-side">
      <div class="list-bar">
        <span>FOCUS TIME</span>
      </div>
      <div class="all-week">
        <div class="block">
          <span>TODAY</span>
          <div class="number">
            <span class="num-text">20</span>
            <span class="tomato-text">/TOMATO</span>
          </div>
        </div>
        <div class="block">
          <span>WEEK</span>
          <div class="number">
            <span class="num-text">108</span>
            <span class="tomato-text">/TOMATO</span>
          </div>
        </div>
      </div>
    </div>
    <div class="chart-side">
      <div class="list-bar">
        <span>CHART</span>
      </div>
      <div style="width: 100%; margin-top: 30px">
        <canvas id="myChart" width="150" height="100"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'],
        datasets: [{
          label: '# of Votes',
          data: [5, 3, 3, 7, 2, 3, 8],
          backgroundColor: [
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FF4384'
          ],
        }]
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            gridLines: {
              display:false
            },
            ticks: {
              fontColor: 'white',
              fontStyle: "bold"
            }
          }],
          yAxes: [{
            gridLines: {
              display:false
            },
            ticks: {
              max: 10,
              min: 0,
              stepSize: 1,
              fontColor: 'white',
              fontStyle: "bold"
            }
          }]
        }
      }
    });
  },
  methods: {
  }
}
</script>

<style scoped lang="sass">
.analytics
  padding-top: 45px
.list-bar
  height: 44px
  cursor: pointer
  background-color: rgba(255, 255, 255, .2)
  display: flex
  justify-content: space-between
  align-items: center
  span
    margin-left: 16px
    color: white
    font-weight: 550
    font-size: 24px
.all-week
  display: flex
  width: 100%
  .block
    width: 50%
    padding-top: 16px
    span
      font-size: 16px
      font-weight: 550
      color: white
    .number
      .num-text
        font-size: 64px
        color: #FF4384
      .tomato-text
        font-size: 16px
        color: rgba(255, 255, 255, .2)
.chart-side
  margin-top: 90px
</style>
