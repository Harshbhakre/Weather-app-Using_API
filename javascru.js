let valueSearch=document.getElementById("valueSearch")
let temp=document.getElementById("temp")
let description=document.querySelector(".description")
let clouds=document.getElementById("clouds")
let Humidity= document.getElementById("Humidity")
let Pressure=document.getElementById("Pressure")
let form=document.querySelector("form")
let main=document.querySelector('main')
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(valueSearch.value!=''){
        searchWeather();
    }
})
let id='fbbd7237e6f2684a8705da94facdb843';
let url='https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather=()=>{
    fetch(url+'&q='+valueSearch.value)
    .then(responsive=>responsive.json())
    .then(data=>{
        console.log(data);
        if(data.cod==200){
            city.querySelector('figcaption').innerText=data.name;
            city.querySelector('img').src='https://flagsapi.com/'+data.sys.country+'/flat/32.png';
            temp.querySelector('img').src='https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
            temp.querySelector('figcaption span').innerText=data.main.temp;
            clouds.innerText=data.clouds.all;
            Humidity.innerText=data.main.humidity;
            Pressure.innerText=data.main.pressure;
        }
        else{
            main.classList.add('error');
            setTimeout(()=>{
                main.classList.remove('error');
            },1000);

        }
        valueSearch.value-''
    })
}
const initApp=()=>{
    valueSearch.value='gondia';
    searchWeather();
}
initApp();