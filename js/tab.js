(function(window){

    
	function Tab(){
		this.oParent=null;
		this.aChild=null;
		this.aDiv=null;
		this.setting={
			"title":['1','2','3','4'],
			"content":['111','222','333','444'],
			"iNow":0
		}
	}
	Tab.prototype.init=function(opt){
		
		extend(this.setting,opt)
		
		console.log(this.setting);
		
		this.creatHtml();
		this.oParent=document.getElementById('tab');
		this.aChild=this.oParent.getElementsByClassName('tab-title')[0].getElementsByTagName('a');
		this.aDiv=this.oParent.getElementsByClassName('tab-content');
		this.noSel(this.setting.iNow);
		this.setData();
		this.change();
		
	}
	Tab.prototype.change=function(){
		for(var i=0;i<this.aChild.length;i++){
			var This=this;
		    This.aChild[i].index=i;
		    This.aDiv[i].style.height=viewHeight()-This.oParent.getElementsByClassName('tab-title')[0].offsetHeight+'px';
			this.aChild[i].onclick=function(){	
				
				for(var i=0;i<This.aChild.length;i++){
					
					This.aChild[i].className="";
					
					This.aDiv[i].style.display="none";
				}
				this.className="active";
				
				This.aDiv[this.index].style.display="block";
				This.setting.iNow=this.index;
			}
		}
	}
	Tab.prototype.setData=function(){
		for(var i=0;i<this.aChild.length;i++){
			this.aChild[i].innerHTML=this.setting.title[i];
			this.aDiv[i].innerHTML=this.setting.content[i];
		}
	}
	Tab.prototype.noSel=function(index){
		for(var i=0;i<this.aChild.length;i++){		
			this.aChild[i].className="";	
			this.aDiv[i].style.display="none";	 
		}
		this.aChild[index].className="active";
		this.aDiv[index].style.display="block";
	}
	
	Tab.prototype.creatHtml=function(){
		var tab=document.createElement('div');
		tab.id="tab";
		tab.innerHTML="<ul class='tab-title'><li><a href='javascript:;' class='active'></a></li><li><a href='javascript:;'></a></li><li><a href='javascript:;'></a></li><li><a href='javascript:;'></a></li></ul><div class='tab-content' style='display: block;'></div><div class='tab-content'></div><div class='tab-content'></div><div class='tab-content'></div>";
		document.body.appendChild(tab);
	}
	
	function extend(obj1,obj2){
		for(var attr in obj2){
			obj1[attr] = obj2[attr];
		}
	}
	
	function viewWidth(){
		return document.documentElement.clientWidth;
	}
	function viewHeight(){
		return document.documentElement.clientHeight;
	}
	
	
	window.tab = new Tab();
})(window)