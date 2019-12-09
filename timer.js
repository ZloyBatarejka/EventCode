document.body.addEventListener("keydown",(event)=>{
	code.value = event.code;
	key.value = event.key;
	keyCode.value = event.keyCode;
	welcome.classList.add("hidden");
	output.classList.remove("hidden")
})

let btns = document.querySelectorAll(".btn");
btns.forEach(btn=>{
	btn.addEventListener("click",(event)=>{
		btn.previousSibling.previousSibling.select()
		document.execCommand("Copy");
		alert("Copied")
	})
})