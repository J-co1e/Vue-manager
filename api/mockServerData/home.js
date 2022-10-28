import Mock from 'mockjs'
let List=[]
export default{
  getStaticalData:()=>{
    for(let i =0;i<7;i++){
      List.push(
        Mock.mock({
          苹果:Mock.Random.float(100,8000,0,0),
          vivo:Mock.Random.float(100,8000,0,0),
          oppo:Mock.Random.float(100,8000,0,0),
          小米:Mock.Random.float(100,8000,0,0),
          华为:Mock.Random.float(100,8000,0,0),
          三星:Mock.Random.float(100,8000,0,0),
        })
      )
    }
    return {
      code:20000,
      data:{
        videoData:[
          {
            name:'小米',
            value:2999
          },
          {
            name:'苹果',
            value:7999
          },
          {
            name:'vivo',
            value:3299
          },
          {
            name:'华为',
            value:5999
          },
          {
            name:'oppo',
            value:3499
          },
          {
            name:'三星',
            value:6999
          },
        ],
        userData:[
          {
            data:'周一',
            new:8,
            active:200
          },
          {
            data:'周二',
            new:15,
            active:500
          },
          {
            data:'周三',
            new:22,
            active:550
          },
          {
            data:'周四',
            new:44,
            active:430
          },
          {
            data:'周五',
            new:38,
            active:680
          },
          {
            data:'周六',
            new:65,
            active:775
          },
          {
            data:'周日',
            new:54,
            active:710
          },
        ],
        dateData:{
          date:['20221001','20221002','20221003','20221004','20221005','20221006','20221007'],
          data:List
        },
        tableData:[
          {
            name:'oppo',
            todayBuy:500,
            monthBuy:3500,
            totalBuy:22000
          },
          {
            name:'vivo',
            todayBuy:600,
            monthBuy:3800,
            totalBuy:20000
          },
          {
            name:'苹果',
            todayBuy:800,
            monthBuy:4500,
            totalBuy:65000
          },
          {
            name:'小米',
            todayBuy:700,
            monthBuy:3000,
            totalBuy:44000
          },
          {
            name:'华为',
            todayBuy:600,
            monthBuy:4000,
            totalBuy:42000
          },
          {
            name:'三星',
            todayBuy:600,
            monthBuy:2000,
            totalBuy:33000
          },
        ],
        countData:[
          {value:1024},
          {value:468},
          {value:432},
          {value:42165},
          {value:1566},
          {value:7564},
        ]
      }
    }
  }
}