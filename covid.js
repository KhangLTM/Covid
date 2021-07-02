var state_specific = {
    VNM429: {
      name: "Quảng Ninh"
    },
    VNM444: {
      name: "Tây Ninh"
    },
    VNM450: {
      name: "Điện Biên"
    },
    VNM451: {
      name: "Đông Bắc"
    },
    VNM452: {
      name: "Thái Nguyên"
    },
    VNM453: {
      name: "Lai Châu"
    },
    VNM454: {
      name: "Lạng Sơn"
    },
    VNM455: {
      name: "Sơn La"
    },
    VNM456: {
      name: "Thanh Hóa"
    },
    VNM457: {
      name: "Tuyên Quang"
    },
    VNM458: {
      name: "Yên Bái"
    },
    VNM459: {
      name: "Hòa Bình"
    },
    VNM460: {
      name: "Hải Dương"
    },
    VNM4600: {
      name: "Hải Phòng"
    },
    VNM461: {
      name: "Hưng Yên"
    },
    VNM462: {
      name: "Hà Nội"
    },
    VNM463: {
      name: "Bắc Ninh"
    },
    VNM464: {
      name: "Vĩnh Phúc"
    },
    VNM466: {
      name: "Ninh Bình"
    },
    VNM467: {
      name: "Hà Nam"
    },
    VNM468: {
      name: "Nam Định"
    },
    VNM469: {
      name: "Phú Thọ"
    },
    VNM470: {
      name: "Bắc Giang"
    },
    VNM471: {
      name: "Thái Bình"
    },
    VNM474: {
      name: "Hà Tĩnh"
    },
    VNM475: {
      name: "Nghệ An"
    },
    VNM476: {
      name: "Quảng Bình"
    },
    VNM477: {
      name: "Dak Lak"
    },
    VNM478: {
      name: "Gia Lai"
    },
    VNM479: {
      name: "Khánh Hòa"
    },
    VNM480: {
      name: "Lâm Đồng"
    },
    VNM481: {
      name: "Ninh Thuận"
    },
    VNM482: {
      name: "Phú Yên"
    },
    VNM483: {
      name: "Bình Dương"
    },
    VNM4834: {
      name: "Tiền Giang"
    },
    VNM4835: {
      name: "Đắk Nông"
    },
    VNM484: {
      name: "Bình Phước"
    },
    VNM485: {
      name: "Bình Định"
    },
    VNM486: {
      name: "Kon Tum"
    },
    VNM487: {
      name: "Quàng Nam"
    },
    VNM488: {
      name: "Quảng Ngãi"
    },
    VNM489: {
      name: "Quảng Trị"
    },
    VNM490: {
      name: "Thừa Thiên Huế"
    },
    VNM491: {
      name: "Đà Nẵng"
    },
    VNM495: {
      name: "Bà Rịa Vũng Tàu"
    },
    VNM496: {
      name: "Bình Thuận"
    },
    VNM497: {
      name: "Đông Nam Bộ"
    },
    VNM498: {
      name: "An Giang"
    },
    VNM499: {
      name: "Can Tho"
    },
    VNM500: {
      name: "Đồng Tháp"
    },
    VNM501: {
      name: "Hồ Chí Minh",
      inactive: "no"
    },
    VNM502: {
      name: "Kiên Giang"
    },
    VNM503: {
      name: "Long An"
    },
    VNM504: {
      name: "Bến Tre"
    },
    VNM505: {
      name: "Hậu Giang"
    },
    VNM506: {
      name: "Bạc Liêu"
    },
    VNM507: {
      name: "Cà Mau"
    },
    VNM508: {
      name: "Sóc Trăng"
    },
    VNM509: {
      name: "Trà Vinh"
    },
    VNM510: {
      name: "Vĩnh Long"
    },
    VNM511: {
      name: "Cao Bằng"
    },
    VNM512: {
      name: "Hà Giang"
    },
    VNM5483: {
      name: "Lào Cai"
    }
}
var colors = [
    "rgb(247, 247, 247)",
    "rgb(197, 197, 115)",
    "rgb(255, 156, 7)",
    "rgb(255, 121, 7)",
    "rgb(224, 28, 28)",
    "rgb(247, 2, 2)",
]

 $(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});
async function main(){
    const{canhiem,cakhoi,catuvong}=await (await getData()).chart;
    const{infected,recovered,deceased,detail}=await (await getData()).data;
    renderDta(infected,recovered,deceased);
    const {key}= await (await getData()).heckey;
    renderTable(key,detail);    
    createTable(canhiem,"Cases","#c9302c","infectChart");
    createTable(cakhoi,"Recovered","#86a745","recoverChart");
    createTable(catuvong,"Death","#666666","deadChart");
}

async function getData(){
    const resChart = await fetch("https://api.apify.com/v2/key-value-stores/Tksmptn5O41eHrT4d/records/LATEST");
    const resData=await fetch("https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST");
    const resHeckey= await fetch("https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST");
    const data=await resData.json();
    const heckey= await resHeckey.json();
    const chart=await resChart.json();
    return {data,heckey,chart};

  }

function renderDta(infected,recovered,deceased){
    document.getElementById("infect").innerHTML=`<box-icon type='solid' name='thermometer' color="red"></box-icon> ${infected}`;
    document.getElementById("recover").innerHTML=`<box-icon name='plus-medical' color="green"></box-icon> ${recovered}`;
    document.getElementById("dead").innerHTML=`<box-icon type='solid' name='skull' color="gray"></box-icon> ${deceased}`;
}

function renderTable(key,detail){
    let detailLength=detail.length;
    for(let i=0 ;i<detailLength;i++){
        var tr=document.createElement("tr");
        var name=key.find(k=>k["hec-key"] == detail[i]["hc-key"])
       if (name){
        var tdName=document.createElement("td");
            tdName.innerHTML=execString(name.name);
            for (let property in state_specific) {
                if(removeAccents(state_specific[property].name).toLowerCase() == removeAccents(execString(name.name)).toLowerCase()){
                    state_specific[property].color = setColorMap(parseInt(detail[i].value), colors);
                    state_specific[property].description = `
                    <span>Số ca nhiễm: <badge>${detail[i].value}</badge></span><br>
                    <span>Số ca khỏi: <badge>${detail[i].socakhoi}</badge></span><br>
                    <span>Số ca tử vong: <badge>${detail[i].socatuvong}</badge></span>
                    `;
                }
            }
            
         var tdInfect=document.createElement("td")
            tdInfect.innerHTML=detail[i]["value"];
        var  tdRecover=document.createElement("td");
            tdRecover.innerHTML=detail[i]["socakhoi"];
        var  tdDead=document.createElement("td");
            tdDead.innerHTML=detail[i]["socatuvong"];
        
        tr.appendChild(tdName);
        tr.appendChild(tdInfect);
        tr.appendChild(tdRecover);
        tr.appendChild(tdDead);
        document.getElementById("table").appendChild(tr);
    }
}

}

var execString=(name)=>{
    let textChange="";
    var newWord= name.split("-").forEach(word=>{
        textChange+=capitalFristWord(word);
        textChange+=" ";  
    })
    return textChange;
}

var capitalFristWord=(word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function setColorMap(value){
    if(value >= 1 && value <= 5){
        return colors[1];
    } else if(value > 5 && value <= 10){
        return colors[2];
    } else if(value > 10 && value <= 20){
        return colors[3]
    } else if(value > 20 && value <= 50){
        return colors[4]
    } else if(value > 50){
        return colors[5]
    } else{
        return colors[0]
    }
}
function removeAccents(str) {
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"    
    ];
    for (var i=0; i<AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str.trim();
}
function createTable(data,name,color,idChart){
  var labels= [];
  var dataset= [];
  for(let i in data){
      labels.push(data[i].day);
      dataset.push(data[i].quantity);
    }
    var data = {
      labels: labels,
      datasets: [{
          label: name,
          backgroundColor:color,
          borderColor: color,
          data: dataset,
      }]
  };
  const config = {
    type: 'line',
    data,
    options: {
        tension: 0.3
    }
};
 
  var myChart= new Chart(
    document.getElementById(idChart),
    config
    );

}
