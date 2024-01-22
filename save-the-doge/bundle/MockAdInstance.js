var h=Object.defineProperty;var f=(t,n,e)=>n in t?h(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var r=(t,n,e)=>(f(t,typeof n!="symbol"?n+"":n,e),e);import{G as u}from"./core.js";import{F as g}from"../GameCore.js";import"./vendor.js";import"./__commonjsHelpers__.js";const y=`<div id="mockads">
    <div
        style="
            color: #fff;
            display: flex;
            align-content: space-between;
            justify-content: space-between;
            flex-direction: column;
            flex-wrap: nowrap;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            font-family: sans-serif;
            background: #000;
        "
    >
        <div
            style="
                display: flex;
                height: 6vh;
                background-color: #0d0d0d;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                align-content: center;
                font-size: larger;
            "
            id="ad-header"
        >
            <div
                style="
                    width: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 10px;
                    cursor: pointer;
                "
                id="close-btn"
            >
                Close
            </div>
            <div
                style="
                    width: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 10px;
                    cursor: pointer;
                "
                id="reward-btn"
            >
                Reward
            </div>
        </div>
        <div
            style="
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                align-content: center;
                justify-content: center;
                height: 100%;
                align-items: center;
            "
            id="ad-content"
        >
            <div
                style="
                    display: flex;
                    background-color: #101010;
                    align-items: center;
                    justify-content: center;
                    border-radius: 100vw;
                    margin-bottom: 50px;
                    padding: 20px;
                    text-transform: uppercase;
                "
            >
                <span>AD {AD_TYPE}</span>
            </div>
            <div
                style="
                    background-color: #101010;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 75%;
                    height: 75%;
                    border-radius: 16px;
                "
            >
                <img
                    src="{AD_CONTENT}"
                    style="position: relative; width: inherit; border-radius: 6px"
                />
            </div>
        </div>
        <div
            style="
                display: flex;
                height: 3vh;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                background-color: #000000;
            "
            id="ad-footer"
        ></div>
    </div>
</div>
`,{Utils:c,Configs:A,Plugins:w}=u,{ErrorRate:p,GiphyApiKey:E}=A.Mockup.Ads,{Types:m}=w.Ads,l=t=>n=>{n.preventDefault();const e=document.getElementById("popup-ads");e==null||e.remove(),t()},I=async t=>new Promise((n,e)=>{const o=new Image;o.onload=()=>n(),o.onerror=()=>e(),o.src=t}),v=async(t,n,e,o)=>{const i=document.getElementById("GameDiv");if(!i){o({code:"DEVELOPER_INPUT",message:"Game element not found"});return}const s=document.createElement("div");s.id="popup-ads",s.innerHTML=y.replace("{AD_TYPE}",t).replace("{AD_CONTENT}",n),i.appendChild(s);const a=document.getElementById("close-btn");a&&(t===m.REWARDED_VIDEO?(a.innerHTML="Skip",a.onclick=l(()=>{o({code:"USER_INPUT",message:"Skip ads mock error"})})):a.onclick=l(e));const d=document.getElementById("reward-btn");d&&(t===m.REWARDED_VIDEO?d.onclick=l(e):d.remove())};class x{constructor(n,e){r(this,"type");r(this,"placementId");r(this,"adContent");r(this,"apiAdContent");r(this,"loadTimer");this.type=n,this.placementId=e,this.adContent="",this.apiAdContent=`https://api.giphy.com/v1/gifs/trending?api_key=${E}&rate=pg&bundle=low_bandwidth`}async loadAsync(){const n=Math.random()*100<=p;return n||(this.adContent=await this.getAdContentAsync(),await I(this.adContent)),new Promise((e,o)=>{c.Time.sleepAsync(1500).then(()=>{if(clearTimeout(this.loadTimer),n){const i=["NETWORK_FAILURE","ADS_FREQUENT_LOAD","ADS_NO_FILL","INVALID_PARAM"],s=i[Math.floor(Math.random()*i.length)];o({code:s,message:"Load ads mock error"});return}e()})})}async showAsync(){const n=Math.random()*100<=p;return new Promise((e,o)=>{c.Time.sleepAsync(1500).then(()=>{if(n){const i=["INVALID_OPERATION","RATE_LIMITED","NETWORK_FAILURE","INVALID_PARAM","ADS_NOT_LOADED"],s=i[Math.floor(Math.random()*i.length)];o({code:s,message:"Show ads mock error"});return}v(this.type,this.adContent,e,o)})})}getPlacementID(){return this.placementId}async getAdContentAsync(){const e=await(await fetch(this.apiAdContent,{method:"GET"})).json();if(!c.Valid.isObject(e))return"";const o=e.data,i=Math.floor(Math.random()*o.length);return o[i].images.downsized.url}}class C extends g{async createInstanceByType(n){return new x(n,this.placementId)}}export{C as default};
