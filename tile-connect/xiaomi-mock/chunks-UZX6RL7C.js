import{a as d}from"./chunks-KEX3JHX6.js";import{j as s,l as a,m as n,n as o,o as p,p as c,q as u,
x as l,y as h}from"./chunks-YRGLJTH6.js";s();a();n();o();p();c();u();h();l();s();a();n();o();p();c();u();h();l();s();a();n();o();p();c();u();h();l();var m=class{options;performance;isRunning=!1;checkTimer;fpsHistory;actualFPS=0;constructor(e,t){
this.options=t,this.performance=e}start=()=>{this.isRunning||(this.isRunning=!0,this.checkTimer=this.
options.CheckInterval,this.fpsHistory=[])};stop=()=>{this.isRunning&&(this.isRunning=!1,this.options.
OnlyUpdateWhenSwitchScene&&this.checkFps())};postStep=e=>{this.isRunning&&(this.checkTimer-=e,!(this.
checkTimer>0)&&(this.checkTimer+=this.options.CheckInterval,this.fpsHistory.push(this.actualFPS),this.
options.OnlyUpdateWhenSwitchScene||this.fpsHistory.length>=5&&this.checkFps()))};checkFps(){let{ads:e}=this.
performance.codex;if(e.isAdFullSizeShowing()||this.fpsHistory.length===0)return;let t=!1;this.options.
AutoUpgradeQuality&&this.isHighFps()&&(t=this.performance.upgradeGraphicsQuality()),this.isLowFps()&&
(t=this.performance.downgradeGraphicsQuality()),t&&(this.fpsHistory=[])}getFpsMedian(){return this.getMedian(
this.fpsHistory)}getMedian(e){if(e.length===0)return Number.NaN;let t=e.sort((r,f)=>r-f),i=Math.floor(
t.length/2);return t.length%2===0?(t[i-1]+t[i])/2:t[i]}isLowFps(){return this.getFpsMedian()<this.options.
FpsThreshold}isHighFps(){return this.getFpsMedian()>this.options.FpsThreshold*1.2}},S=m;var{Utils:{Device:x}}=Ludex,g=class extends Ludex.Plugins.BasePlugin{enabled=!1;quality;fpsTracker;pixelRatio;trackingSceneNames=[];configure(e){
let{Enabled:t,Quality:i,Options:r,TrackingSceneNames:f}=e;this.enabled=t,this.quality=i,this.pixelRatio=
x.pixelRatio(),this.trackingSceneNames=f,this.createFPSTracker(r)}trackingScene=e=>{if(this.trackingSceneNames.
indexOf(e)<0){console.warn(`\u{1F6AB} Adaptive performance: ${e} is not configured`);return}this.stopFPSTracker(),
this.startFPSTracker(),console.info(`\u{1F4C8} Adaptive performance: tracking ${e}`)};getCurrentQuality(){
return this.pixelRatio}downgradeGraphicsQuality(){this.event.emit(d.REQUEST_QUALITY_DOWNGRADED);let{
Min:e,AdjustStep:t}=this.quality,i=this.pixelRatio;if(i<=e)return!1;let r=+(i-t).toFixed(2);return r<
e?!1:(this.pixelRatio=r,this.resizeGameWorld(this.pixelRatio),console.warn(`\u{1F4AB} Graphics quality was \
downgraded! (${i} -> ${r})`),!0)}upgradeGraphicsQuality(){this.event.emit(d.REQUEST_QUALITY_UPGRADED);
let{Max:e,AdjustStep:t}=this.quality,i=this.pixelRatio;if(i>=e)return!1;let r=+(i+t).toFixed(2);return r>
e?!1:(this.pixelRatio=r,this.resizeGameWorld(this.pixelRatio),console.warn(`\u{1F680} Graphics quality was \
upgraded! (${i} -> ${r})`),!0)}createFPSTracker(e){this.fpsTracker=new S(this,e)}get event(){return this.
codex.event}startFPSTracker=()=>{this.fpsTracker.start()};stopFPSTracker=()=>{this.fpsTracker.stop()};resizeGameWorld(e){
let t={forcePixelRatio:e};this.event.emit(d.REQUEST_RESIZE_GAME,t)}updatePostStepDeltaTime(e){this.fpsTracker.
postStep(e)}updateActualFPS(e){this.fpsTracker.actualFPS=e}},k=g;var Y=k;export{Y as default};
