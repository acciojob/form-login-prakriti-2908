function getFormvalue() {
    //Write your code here
	let inp = form.querySelectorAll("input");
	let f_name = inp[0].value;
	let l_name = inp[1].value;
	let ans = f_name + " " + l_name;
	alert(ans);

}
