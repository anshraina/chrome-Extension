// Selectors

const thirtyMin = document.querySelector(".thirtymin");
const frtyFiveMin = document.querySelector(".ffivemin");
const oneHr = document.querySelector(".onehr");
const customBtn = document.querySelector(".custom");
const saveBtn = document.querySelector(".Save");
const cancelBtn = document.querySelector(".Cancel");
const masking = document.getElementById("mask");
const dgBox = document.getElementById("dialog");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const customOkBtn = document.querySelector(".custom-ok-btn");
const abc = document.getElementById("custom-cnfrm-panel");


const clk30min = document.querySelector(".clk-thirty-min");
const clk40min = document.querySelector(".clk-frtyfive-min");
const clk1hr = document.querySelector(".clk-one-hr");

const text =  document.querySelector(".textBox");


//Event Listeners
thirtyMin.addEventListener("click", funtThirtyMin);
frtyFiveMin.addEventListener("click", funtFrtyFiveMin);
oneHr.addEventListener("click", funtOneHr);
saveBtn.addEventListener("click", funtSave);
cancelBtn.addEventListener("click" ,funCancel);
customBtn.addEventListener("click", funcCustom);
yesBtn.addEventListener("click", funYesBtn);
noBtn.addEventListener("click", funNoBtn);
customOkBtn.addEventListener("click", funCstmOkBtn);
//Functions
let time = 0;
backColor = "green";

function funtThirtyMin(event){
    
    time=event.target.value;
    thirtyMin.style.background =  backColor;
    frtyFiveMin.style.background =  "#EE9644";
    oneHr.style.background =  "#EE9644";
    customBtn.style.background =  "#EE9644";

    console.log(time);

    
}

function funtFrtyFiveMin(event){
    time=event.target.value;
    frtyFiveMin.style.background =  backColor;
    thirtyMin.style.background =  "#EE9644";
    oneHr.style.background =  "#EE9644";
    customBtn.style.background =  "#EE9644";
}

function funtOneHr(event){
    time=event.target.value;
    oneHr.style.background =  backColor;
    frtyFiveMin.style.background =  "#EE9644";
    thirtyMin.style.background =  "#EE9644";
    customBtn.style.background =  "#EE9644";

    console.log(time);
}

function funCancel(event){
    time=event.target.value;
    thirtyMin.style.background =  "#EE9644";
    frtyFiveMin.style.background =  "#EE9644";
    customBtn.style.background =  "#EE9644";
    oneHr.style.background =  "#EE9644";
    
}

function funcCustom(event){
    console.log(event.target);
    thirtyMin.style.background =  "#EE9644";
    frtyFiveMin.style.background =  "#EE9644";
    oneHr.style.background =  "#EE9644";
    customBtn.style.background =  backColor;
    masking.classList.remove("hidden");
    
    abc.classList.add("custom-dialog");
    abc.classList.remove("hidden");

    
}
    
function funtSave(event){
    console.log(time);
    time = parseInt(time,10);
    console.log(time);
    let popTime = 0;
    
   switch(time){
       case 30:
            popTime = time * 60 * 1000;
            break;
        case 45:
            popTime = time * 60 * 1000;
            break;
        case 1:
            popTime = time *3600 * 1000;
            break;
        default:
            popTime = time;
   }
   
   
   setTimeout(()=>{
    alert(`to be completed: ${text.value} `);
    masking.classList.remove("hidden");
    dgBox.classList.remove("hidden");
     
   },popTime);

   
}

function funYesBtn(event){
    console.log(event.target);
    masking.classList.add("hidden");
    dgBox.classList.add("hidden");
    document.querySelector(".textBox").value = "";

}

function funNoBtn(event){
    console.log(event.target);
    masking.classList.add("hidden");
    dgBox.classList.add("hidden");
    //document.querySelector(".textBox").value = "Need more time to finsh it?"

}

function funCstmOkBtn(event){
    let hrIp = document.querySelector(".hr-input");
    let minIp = document.querySelector(".min-input");
    //console.log(event.target);
    console.log(hrIp.value);
    console.log(minIp.value);
    hrIp = parseInt(hrIp.value, 10);
    minIp = parseInt(minIp.value, 10);  
    console.log(hrIp);
    console.log(minIp);

    let newTime = 0;
    console.log(hrIp);
    console.log(minIp);
    hrIp = hrIp * 3600 * 1000;
    console.log(hrIp);
    minIp = minIp * 60 * 1000;
    
    console.log(minIp);
    newTime = hrIp + minIp;
    console.log(newTime);
    setTimeout(()=>{
        alert(`Task to be completed ${text.value}`);
        masking.classList.remove("hidden");
        dgBox.classList.remove("hidden");
        abc.classList.remove("custom-dialog");
        abc.classList.add("hidden");

    }, newTime);
   


}




