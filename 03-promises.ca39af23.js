!function(){var e=document.querySelector(".form"),n={delay:e.elements.delay,step:e.elements.step,amount:e.elements.amount};function t(e,n){return new Promise((function(t,o){var a=Math.random();setTimeout((function(){a>.5?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var o=Number(n.delay.value),a=o,i=1;i<=Number(n.amount.value);i+=1)i>1&&(a=o+Number(n.step.value)),t(i,a).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.ca39af23.js.map
