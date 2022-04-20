const key ='f478ddd15a0691bbee4394a2de255833';
    let city=cityField.value;
    
    fetch('https://api.freegeoip.app/json/?apikey=6719b7a0-b686-11ec-8094-a3b1bae48427' + city  )
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        console.log(data)
                        let gL=(data.city);
                        geoloc.innerText=gL;
                        locmessage.style.top="10%";
                        locmessage.onclick=function(){
                            locmessage.style.top="-20%";
                        }
                        yesbutton.onclick=function(){
                            cityField.value=(data.city); 
                            locmessage.style.top='-20%';
                            if(cityField.value!=city&&cityField.value!=' '){
            let city=cityField.value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key)
.then(response =>{
    return (response.json())
})
.then(data=>{
    let t=(data.main.temp-273).toFixed(2);
    let tMax=(data.main.temp_max-273).toFixed(2);
    let tMin=(data.main.temp_min-273).toFixed(2);
    let cName=(data.name);
    let fLike=(data.main.feels_like-273).toFixed(2);
    let hM=(data.main.humidity);
    let cL=(data.clouds.all);
    let wS=(data.wind.speed);
    let cN=(data.sys.country);
    console.log(data);
    res.innerText=t+'°C';
    cityField.value="";
    temp_max.innerText=tMax+'°C';
    temp_min.innerText=tMin+'°C';
    city_name.innerText=cName+',';
    feels_like.innerText=fLike+'°C';
    humidity.innerText=hM+'%';
    clouds.innerText=cL+'%';
    ws.innerText=wS;
    country.innerText=cN;
    
})           
    card.style.left="70%";
    card__weather.style.left="0";
}
  }
    nobutton.onclick=function(){
    locmessage.style.top = '-20%';
    warnmessage.style.top="10%";
setTimeout(function(){
    warnmessage.style.transition = '.3s';
            warnmessage.style.top = '-20%';
        },2000);
    } 
                    })
                    
    check.onclick=function(){ 
        if(cityField.value!=city&&cityField.value!=' '){
            let city=cityField.value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key)
.then(response =>{
    return (response.json())
})
.then(data=>{
    let t=(data.main.temp-273).toFixed(2);
    let tMax=(data.main.temp_max-273).toFixed(2);
    let tMin=(data.main.temp_min-273).toFixed(2);
    let cName=(data.name);
    let fLike=(data.main.feels_like-273).toFixed(2);
    let hM=(data.main.humidity);
    let cL=(data.clouds.all);
    let wS=(data.wind.speed);
    let cN=(data.sys.country);
    console.log(data);
    res.innerText=t+'°C';
    cityField.value="";
    temp_max.innerText=tMax+'°C';
    temp_min.innerText=tMin+'°C';
    city_name.innerText=cName+',';
    feels_like.innerText=fLike+'°C';
    humidity.innerText=hM+'%';
    clouds.innerText=cL+'%';
    ws.innerText=wS;
    country.innerText=cN;

    

})           
    card.style.left="70%";
    card__weather.style.left="0";
}else{
   
warnmessage.style.top="10%";
setTimeout(function(){
    warnmessage.style.transition = '.3s';
            warnmessage.style.top = '-20%';
        },2000);

       
}

    }
    cityField.onkeydown=function(e){
        if(cityField.value!=city){
        if(e.keyCode===13){
            let city=cityField.value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key)
.then(response =>{
    return (response.json())
})
.then(data=>{
    let t=(data.main.temp-273).toFixed(2);
    let tMax=(data.main.temp_max-273).toFixed(2);
    let tMin=(data.main.temp_min-273).toFixed(2);
    let cName=(data.name);
    let fLike=(data.main.feels_like-273).toFixed(2);
    let hM=(data.main.humidity);
    let cL=(data.clouds.all);
    let wS=(data.wind.speed);
    let cN=(data.sys.country);
    console.log(data);
    res.innerText=t+'°C';
    cityField.value="";
    temp_max.innerText=tMax+'°C';
    temp_min.innerText=tMin+'°C';
    city_name.innerText=cName+',';
    feels_like.innerText=fLike+'°C';
    humidity.innerText=hM+'%';
    clouds.innerText=cL+'%';
    ws.innerText=wS;
    country.innerText=cN;
})
card.style.left="70%";
    card__weather.style.left="0";
        }
    }
       
        
    }