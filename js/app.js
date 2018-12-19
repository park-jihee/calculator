var inp = document.forms['cal'];
var input = inp.getElementsByTagName('input');
var cls_btn = document.getElementsByClassName('cls_btn')[0];
var result_btn = document.getElementsByClassName('result_btn')[0];

function clr(){
	inp['result'].value = 0;
}

function calc(val){
	if(inp['result'].value == 0){
		inp['result'].value = '';
	}
	inp['result'].value += val;
}

function my_result(){
	var result = document.forms['cal']['result'];
	var calc = eval(result.value);

	inp['result'].value = calc;
}

function my_err(){
	inp['result'].value = '입력오류';
}

for (var i = 0; i < input.length; i++) {
	if(input[i].value != '=' && input[i] != 'clear'){
		input[i].onclick = function(){
			calc(this.value);
		}
	}
}

cls_btn.onclick = function(){
	clr();
	try{
		my_result();
	} catch(err){
		my_err();
	}
}

result_btn.onclick = function(){
	my_result();
}
