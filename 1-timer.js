import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as u}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("#datetime-picker"),t=document.querySelector("[data-start]"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let l=null;t.disabled=!0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=new Date?(u.error({title:"Error",message:"Please choose a date in the future",titleColor:"#FFFFFF",messageColor:"#FFFFFF",color:"#B51B1B",position:"topRight",iconUrl:"/img/bi_x.svg",iconColor:"#FFFFFF"}),t.disabled=!0):(l=e[0],t.disabled=!1)}};y(r,b);function p(e){const m=Math.floor(e/864e5),h=Math.floor(e%864e5/36e5),F=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:h,minutes:F,seconds:f}}function n(e){return String(e).padStart(2,"0")}let c=null;t.addEventListener("click",()=>{t.disabled=!0,r.disabled=!0,c=setInterval(()=>{const e=l-new Date;if(e<=0){clearInterval(c),u.success({title:"Done!",message:"Timer finished!"}),r.disabled=!1;return}const{days:s,hours:a,minutes:i,seconds:d}=p(e);o.days.textContent=n(s),o.hours.textContent=n(a),o.minutes.textContent=n(i),o.seconds.textContent=n(d)},1e3)});
//# sourceMappingURL=1-timer.js.map
