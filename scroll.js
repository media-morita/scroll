window.addEventListener('load', scroll_ev, false);
window.addEventListener('resize', scroll_ev, false);
var flag = false;
function scroll_ev(){
	
	function Target(el){
		this.el = el;
	}
	Target.prototype.set = function(){
		var item = document.querySelector(this.el);
		var rect = item.getBoundingClientRect();
		var success = rect.top + window.pageYOffset
		return success;
	}

	window.addEventListener('scroll', function(){

		var scroll_h = window.pageYOffset;
		var items01 = new Target('el');
		
		if(scroll_h > items01.set()){
			if(!flag){
				action
				flag = true;
			}
		}

	},false)
}

