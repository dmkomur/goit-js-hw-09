const e=document.querySelector(".form"),t={delay:e.elements.delay,step:e.elements.step,amount:e.elements.amount};function o(e,t){return new Promise(((o,n)=>{const l=Math.random();setTimeout((()=>{l>.5?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();const n=Number(t.delay.value);let l=n;for(let e=1;e<=Number(t.amount.value);e+=1)e>1&&(l=n+Number(t.step.value)),o(e,l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.904fdb66.js.map
