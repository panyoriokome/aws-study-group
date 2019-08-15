let btn = document.querySelector("#simulate-button");
let amount = document.querySelector("#amount");
let duration = document.querySelector("#duration");
let annual_return = document.querySelector("#annual_return");


url = 'http://ec2-3-114-138-229.ap-northeast-1.compute.amazonaws.com:80/'

btn.addEventListener("click", function(){

  const params = new URLSearchParams();
  params.set('amount', amount.value);
  params.set('duration', duration.value);
  params.set('annual_return', annual_return.value);

  fetch(url + '?' + params.toString(), {
    method: 'GET',
    mode: 'no-cors'
  })
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    removeGraph();
    drawGraph(data.result);
  })
});



let sample_dataset = [
  {
    date : "2019/1/1",
    value : 120000
  },
  {
    date : "2019/4/1",
    value : 280000
  },
  {
    date : "2019/7/1",
    value : 970000
  },
  {
    date : "2019/10/1",
    value : 1200000
  },
  {
    date : "2020/1/1",
    value : 2500000
  },
  {
    date : "2020/4/1",
    value : 4000000
  },
  {
    date : "2020/7/1",
    value : 5000000
  },
  {
    date : "2021/7/1",
    value : 5000000
  },
  {
    date : "2022/7/1",
    value : 5300000
  },
  {
    date : "2023/7/1",
    value : 5500000
  },
  {
    date : "2024/7/1",
    value : 5800000
  },
  {
    date : "2025/7/1",
    value : 25000000
  },
  {
    date : "2030/7/1",
    value : 30000000
  },
  {
    date : "2035/7/1",
    value : 34000000
  },
  {
    date : "2040/7/1",
    value : 50000000
  }
]


const contents = d3.select('#chart-wrapper');

let padding = 100;

// グラフの幅
width = contents.node().clientWidth - padding;
// グラフの高さ
height = contents.node().clientHeight - padding;

drawGraph(sample_dataset)

function removeGraph(){
  svg = d3.select('svg')
  svg.remove();
}

function drawGraph(data){
  let svg = contents.append("svg");
  let datasets = data

  let timeparser = d3.timeParse("%Y/%m/%d");
  // x軸の目盛りの表示フォーマット
  let format = d3.timeFormat("%Y");
  datasets = datasets.map(function(d){
    // 日付のデータをパース
    return  { date: timeparser(d.date), value:d.value } ;
  });

  // svg要素にg要素を追加しクラスを付与しxに代入
  x = svg.append("g")
  .attr("class", "axis axis-x")
  
  // svg要素にg要素を追加しクラスを付与しyに代入
  y = svg.append("g")
  .attr("class", "axis axis-y")

  // x軸の目盛りの量
  let xTicks = (window.innerWidth < 768) ? 6: 12;
  // X軸を時間のスケールに設定する
  xScale = d3.scaleTime()
  // 最小値と最大値を指定しX軸の領域を設定する
  .domain([
      // データ内の日付の最小値を取得
      d3.min(datasets, function(d){return d.date;}),
      // データ内の日付の最大値を取得
      d3.max(datasets, function(d){return d.date;})
  ])
  // SVG内でのX軸の位置の開始位置と終了位置を指定しX軸の幅を設定する
  .range([padding, width]);

  // Y軸を値のスケールに設定する
  yScale = d3.scaleLinear()
  // 最小値と最大値を指定しX軸の領域を設定する
  .domain([
      // 0を最小値として設定
      0,
      // データ内のvalueの最大値を取得
      d3.max(datasets, function(d){return d.value;})
  ])
  // SVG内でのY軸の位置の開始位置と終了位置を指定しY軸の幅を設定する
  .range([height, padding]);

  // scaleをセットしてX軸を作成
  axisx = d3.axisBottom(xScale)
  // グラフの目盛りの数を設定
  .ticks(xTicks)
  // 目盛りの表示フォーマットを設定
  .tickFormat(format);
  
  // scaleをセットしてY軸を作成
  axisy = d3.axisLeft(yScale);

  // X軸の位置を指定し軸をセット
  x.attr("transform", "translate(" + 0 + "," + (height) + ")")  
  .call(axisx); 
  
  // Y軸の位置を指定し軸をセット
  y.attr("transform", "translate(" + padding + "," + 0 + ")")
  .call(axisy)

  // 線の描画

  let color = d3.rgb("#85a7cc");

  // パス要素を追加
  path = svg.append("path");

  //lineを生成
  line = d3.line()
  // lineのX軸をセット
  .x(function(d) { return xScale(d.date); })
  // lineのY軸をセット
  .y(function(d) { return yScale(d.value); })
  // 線を曲線に
  line.curve(d3.curveCatmullRom.alpha(0.4))

  path
  // dataをセット
  .datum(datasets)
  // 塗りつぶしをなしに
  .attr("fill", "none")
  // strokeカラーを設定
  .attr("stroke", color)
  // d属性を設定
  .attr("d", line)

  lineArea = svg.append("path")
  
  g = svg.append("g");
  
  linearGradient = svg.append("defs")
  .append("linearGradient")
  .attr("id", "linear-gradient")
  .attr("gradientTransform", "rotate(90)");
  
  linearGradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color",color.brighter(1.5));
  
  linearGradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color","rgba(255,255,255,0)");

  area = d3.area()
  .x(function(d) { return xScale(d.date); })
  .y1(function(d) { return yScale(d.value); })
  .y0(yScale(0))
  // カーブを設定
  .curve(d3.curveCatmullRom.alpha(0.4))

  lineArea
  .datum(datasets)
  .attr("d",area)
  .style("fill", "url(#linear-gradient)")

  let totalLength = path.node().getTotalLength();
  
  path
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
  .duration(1000)
  .ease(d3.easeCircleInOut)
  .attr("stroke-dashoffset", 0);
  
  lineArea.style("opacity",0)
  .transition()
  .delay(300)
  .duration(400)
  .ease(d3.easeCircleOut)
  .style("opacity",1);

  let dLine0 = path.attr("d");
  let dArea0 = lineArea.attr("d");
  
  // データをセットする
  //dataset = datasets[dataSelect.value];
  
  // path
  // .attr("d", dLine0)
  // .transition()
  // .duration(1000)
  // .ease(d3.easeExpInOut)
  // .attrTween('d', function () { 
  //     return d3.interpolatePath(dLine0, dLine1(datasets)); 
  // });
  
  // lineArea.attr("d", dArea0)
  // .transition()
  // .delay(50)
  // .duration(1000)
  // .ease(d3.easeExpInOut)
  // .attrTween('d', function () { 
  //     return d3.interpolatePath(dArea0, dArea1(datasets)); 
  // });
}


