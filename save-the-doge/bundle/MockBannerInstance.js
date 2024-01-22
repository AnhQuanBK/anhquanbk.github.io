import{G as i}from"./core.js";import{a as d}from"../GameCore.js";import"./vendor.js";import"./__commonjsHelpers__.js";class y extends d{async showAsync(){const t=await this.getAdContentAsync(),o=document.getElementById("mock-banner-ads");if(o){const e=o.getElementsByTagName("img");if(!e||e.length<=0)return;e[0].src=t}else{const e=document.createElement("div");e.id="mock-banner-ads",e.style.width="100%",e.style.height="50px",e.style.bottom="var(--sab)",e.style.position="fixed",e.style.background=`#fff url(${t}) center center/auto no-repeat`,e.style.outline="2px solid #ffffff40",e.style.outlineOffset="-2px";const n=document.createElement("style");(document.head||document.getElementsByTagName("head")[0]).appendChild(n);const a=`@keyframes fake-gif {
                0%,10% {
                    background-position-y: top
                }
                60% {
                    background-position-y: center
                }
                100% {
                    background-position-y: bottom
                }
            }`;n.appendChild(document.createTextNode(a)),e.style.animation="fake-gif 6s ease-in-out 0s infinite alternate both",document.body.appendChild(e)}}async getAdContentAsync(){const{GiphyApiKey:t}=i.Configs.Mockup.Ads,o=`https://api.giphy.com/v1/gifs/trending?api_key=${t}&rate=pg&bundle=low_bandwidth`,n=await(await fetch(o,{method:"GET"})).json();if(!i.Utils.Valid.isObject(n))return"";const s=n.data,a=Math.floor(Math.random()*s.length);return s[a].images.downsized.url}async hideAsync(){const t=document.getElementById("mock-banner-ads");t&&t.remove()}}export{y as default};
