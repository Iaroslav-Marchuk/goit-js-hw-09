import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const r="feedback-form-state",a=document.querySelector(".feedback-form"),l=localStorage.getItem(r);l&&(e=JSON.parse(l),a.querySelector('[name="email"]').value=e.email,a.querySelector('[name="message"]').value=e.message);a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem(r,JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(r),a.reset(),e={email:"",message:""}});
//# sourceMappingURL=2-form.js.map
