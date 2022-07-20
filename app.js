const key ='f478ddd15a0691bbee4394a2de255833';
    let city=cityField.value;
    fetch('https://api.ipfind.com?ip=91.231.41.48&auth=b5dc3cde-96fe-4e7e-943c-ab964602fe75' + city  )
    .then(res => {
    return res.json();
    })
    .then(data => {
    let gL=(data.city);
    cityLocation.innerText=gL;
    locationmessage.style.marginTop="80px";
    locationmessage.onclick=function(){
    locationmessage.style.marginTop="-120px";
    }
    locationYes.onclick=function(){
    cityField.value=(data.city); 
    locationmessage.style.marignTop='-120px';
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
    pTemperature.innerText=t+'°C';
    cityField.value="";
    maxtempWidget2.innerText=tMax+'°C';
    mintempWidget3.innerText=tMin+'°C';
    cityLocationInfo.innerText=cName+',';
    feelsWidget1.innerText=fLike+'°C';
    humidityWidget1.innerText=hM+'%';
    cloudsWidget2.innerText=cL+'%';
    windWidget3.innerText=wS;
    countryLocation.innerText=cN;
    
})           
    cardFind.style.right="10%";
    maincard.style.left="10%";
}
  }
    locationNo.onclick=function(){
    locationmessage.style.marginTop = '-120px';
    locationmessage.style.display = 'none';
    warnmessage.style.display="flex";
    warnmessage.style.marginTop="80px";
setTimeout(function(){
    warnmessage.style.transition = '.3s';
            warnmessage.style.marginTop = '-120px';
        },2000);
    } 
                    })
                    
    btnFind.onclick=function(){ 
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
    pTemperature.innerText=t+'°C';
    cityField.value="";
    maxtempWidget2.innerText=tMax+'°C';
    mintempWidget3.innerText=tMin+'°C';
    cityLocationInfo.innerText=cName+',';
    feelsWidget1.innerText=fLike+'°C';
    humidityWidget1.innerText=hM+'%';
    cloudsWidget2.innerText=cL+'%';
    windWidget3.innerText=wS;
    countryLocation.innerText=cN;

    

})           
cardFind.style.right="10%";
maincard.style.left="10%";
locationmessage.style.display="none";
warnmessage.style.display="none";
}else{
warnmessage.style.marginTop="80px";
warnmessage.style.display="flex";
locationmessage.style.display="none";
setTimeout(function(){
    warnmessage.style.transition = '.3s';
            warnmessage.style.marginTop = '-120px';
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
    pTemperature.innerText=t+'°C';
    cityField.value="";
    maxtempWidget2.innerText=tMax+'°C';
    mintempWidget3.innerText=tMin+'°C';
    cityLocationInfo.innerText=cName+',';
    feelsWidget1.innerText=fLike+'°C';
    humidityWidget1.innerText=hM+'%';
    cloudsWidget2.innerText=cL+'%';
    windWidget3.innerText=wS;
    countryLocation.innerText=cN;
})
 cardFind.style.right="10%";
 maincard.style.left="10%";
 locationmessage.style.display="none";
 warnmessage.style.display="none";
        }
    }
       
        
   }