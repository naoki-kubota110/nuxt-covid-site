export const state = () => ({
  bedsUsage : {}
})

export const mutations = {
  setData(state, bedsData){
    state.bedsUsage = bedsData
  }
}

export const actions = {
  fechBedsUsageData({commit}, payload){
    const bedsData = []
    for(let i=0; i<payload.length;i++){
      bedsData.push({
        id: Number(payload[i]["都道府県番号"]),
        prefecture: payload[i]["都道府県名"],
        per_positive: Number(payload[i]["PCR検査陽性者数"]),
        num_hospitalization: Number(payload[i]["入院者数"]),
        phase_hospitalization: payload[i]["入院患者フェーズ"],
        beds_num_hospitalization: Number(payload[i]["入院患者受入即応病床数"]),
        use_bed_rate_hospitalization: Number(payload[i]["入院患者病床使用率"].slice(0,2)),
        num_severe: Number(payload[i]["うち重症者数"]),
        phase_severe:payload[i]["重症者フェーズ"],
        beds_num_severe: Number(payload[i]["重症患者受入即応病床数"]),
        use_bed_rate_severe: payload[i]["重症患者病床使用率"],
        num_mild: Number(payload[i]["宿泊療養者数"]),
        phase_mild: payload[i]["宿泊療養フェーズ"],
        beds_num_mild: Number(payload[i]["宿泊施設受入即応室数"]),
        use_bed_rate_mild: payload[i]["宿泊療養施設居室使用率"],
        num_home: Number(payload[i]["自宅療養者数"]),
        adjust_hospitalization: Number(payload[i]["うち入院先調整中の人数"]),
        updateDate: payload[i]["更新日"],
        source: payload[i]["出典"]
      })
    }
    for(let i = 0; i < bedsData.length; i++){
      if(bedsData[i].use_bed_rate_hospitalization >= 50){
        console.log(bedsData[i].prefecture, "50%")
        bedsData[i].bgColor= "red"
      }else if(bedsData[i].use_bed_rate_hospitalization < 50 && bedsData[i].use_bed_rate_hospitalization >= 20){
        console.log(bedsData[i].prefecture, "20-50%")
        bedsData[i].bgColor= "red"
      }else if(bedsData[i].use_bed_rate_hospitalization < 20){
        console.log(bedsData[i].prefecture, "20%")
        bedsData[i].bgColor= "red"
      }
    }
    commit("setData", bedsData)
  }
}

// [{"都道府県番号":"01","都道府県名":"北海道","PCR検査陽性者数":"3050","入院者数":"644","入院患者フェーズ":"２／３","入院患者受入即応病床数":"1622","入院患者受入確保病床":"1995","入院患者病床使用率":"32%","入院率":"21%","うち重症者数":"15","重症者フェーズ":"２／３","重症患者受入即応病床数":"121","重症患者受入確保病床数":"148","重症患者病床使用率":"10%","宿泊療養者数":"535","宿泊療養フェーズ":"２／２","宿泊施設受入即応室数":"2385","宿泊施設受入可能室数":"2385","宿泊療養施設居室使用率":"22%","自宅療養者数":"1367","うち社会福祉施設等療養者数":"10","療養先調整中の人数":"504","うち入院先調整中の人数":"24","更新日":"2021-08-11","出典":"https://www.mhlw.go.jp/content/10900000/000819111.xlsx"}