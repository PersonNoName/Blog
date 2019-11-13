Enter()
function Enter(){
	var password = 'personnoname_github';
	var Input = prompt("请输入密码","");
	var isCancle = false;

	while(Input != password){
		if(Input == null){
			isCancle = true;
			break;
		}else{
			Input = prompt("密码错误","");
		}
		
	}
	if(isCancle){
		location.replace("http://personnoname.github.io");
		window.close();
	}
}
