new Vue({
	el:'#app',
	data:{
		x:0,
		y:0,
		z:0,
		w:0
	},
	methods:{
		DToN:function(){
			if(this.x == ""){
				this.w=0;
				this.y=0;
				this.z=0;
			}
			else{
			this.y=Number((this.x)).toString(2);
			this.z=Number((this.x)).toString(8);
			this.w=Number((this.x)).toString(16).toUpperCase();
		   }
		},
		BToN:function(){
			if(this.y == "" || this.y>=2){
				this.w=0;
				this.x=0;
				this.z=0;
			}
			else{
			this.x=parseInt(this.y,2);
			this.z=Number((this.x)).toString(8);
			this.w=Number((this.x)).toString(16).toUpperCase();
		   }
		},
		OToN:function(){
			if(this.z == "" || this.z>=8){
				this.w=0;
				this.y=0;
				this.x=0;
			}
			else{
			this.x=parseInt(this.z,8);
			this.y=Number((this.x)).toString(2);
			this.w=Number((this.x)).toString(16).toUpperCase();
		   }
		},
		HToN:function(){
			if(this.w == ""){
				this.x=0;
				this.y=0;
				this.z=0;
			}
			else{
			this.x=parseInt(this.w,16);
			this.y=Number((this.x)).toString(2);
			this.z=Number((this.x)).toString(8);
		  }
		},
		reset:function(){
			this.x=this.y=this.z=this.w=0;
		},
		isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
     }
     
	}
	
});