import{e as k,j as e,l as n,m as o,n as i,o as l,p as s,q as a,t as d,u as B,x as c,y as u}from"./chunks-RZTAOOVQ.js";var r,m,b=k(()=>{"use strict";e();n();o();i();l();s();a();u();c();B();r=class{popup;title;content;okButton;noButton;okCallback$;noCallback$;async setupTemplate(){
let t=await d();t&&(this.popup=t,this.title=t.querySelector("#title"),this.content=t.querySelector("\
#content"),this.okButton=t.querySelector("#ok"),this.noButton=t.querySelector("#no"),this.hide())}onYes=t=>{
this.okButton&&(this.okButton.removeEventListener("click",this.okCallback$),this.okCallback$=this.handleCallback$(
t),this.okButton.addEventListener("click",this.okCallback$,{once:!0}))};onNo=t=>{this.noButton&&(this.
noButton.removeEventListener("click",this.noCallback$),this.noCallback$=this.handleCallback$(t),this.
noButton.addEventListener("click",this.noCallback$,{once:!0}))};handleCallback$=t=>p=>{p.stopImmediatePropagation(),
this.hide(),t()};show(t){this.content.textContent=`${t}`,this.popup.style.display="flex"}hide(){this.
popup.style.display="none"}},m=r});var h,g,L=k(()=>{e();n();o();i();l();s();a();u();c();b();h=class extends m{show(t){this.title.textContent=
"Purchase",this.okButton.textContent="Purchase",this.noButton.textContent="Cancel";let p=JSON.stringify(
t,null,2);super.show(`Do you want to purchase?
Payload: ${p}`)}},g=h});L();export{g as default};
