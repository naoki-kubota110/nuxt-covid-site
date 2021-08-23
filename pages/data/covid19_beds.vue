<template>
  <Content :bed-usage="bedUsage"/>
</template>

<script>
import axios from "axios"
import Content from '../../components/data/beds/Content.vue'

export default{
  components:{
    Content
  },
  async fetch({store}){
    await axios.get('https://www.stopcovid19.jp/data/covid19japan_beds/latest.json')
    .then(res => {
    store.dispatch("beds/fechBedsUsageData", res.data)
    })
  },
  computed:{
    bedUsage(){
      return this.$store.state.beds.bedsUsage
    }
  }
}
</script>