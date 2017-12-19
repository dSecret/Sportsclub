<template>
	<div>
		<md-whiteframe 	md-elevation="2"
						class="wrapper-newpost"
						v-if="!postcount"
		>	
				<div class="err-cont">
						{{err}}
				</div>
				<div>
					<p>'*' fields are required.</p>
				</div>
				<md-input-container>
				    <label>Title</label>
				    <md-input required v-model="postobj.title"></md-input>
					<md-icon>create</md-icon>
				</md-input-container>
				<md-input-container>
				    <label>Textarea</label>
				    <md-textarea required v-model="postobj.body"></md-textarea>
					<md-icon>create</md-icon>
				</md-input-container>
				<md-input-container>
				  	<label>Banner</label>
				  	<md-file  id="ban" @input="addImg"></md-file>
				</md-input-container>
				<!-- for adding forms (title and links) -->
				<h3>Forms:</h3>
				<md-button class="md-icon-button"
							@click="addicon"
				>
					<md-icon>{{formicon}}</md-icon>
				</md-button>
				<div 	v-if="!iconcount"
						class="form-cont"
				>
					<md-input-container>
						<md-icon>create</md-icon>
					    <label>FormTitle</label>
					    <md-input required v-model="formobj.title"></md-input>
					</md-input-container>
					<md-input-container>
						<md-icon>create</md-icon>
				   		<label>FormLink</label>
				    <md-input required v-model="formobj.linki"></md-input>
					</md-input-container>
				    <div align="right">
					    <md-button class="md-primary"
									@click="addform"
					    >
					    		Add
					    </md-button>
					</div>
				</md-input-container>
				</div>
				<div>
					<md-chip 	v-for="(form,index) in forms"
								md-deletable
								@delete="removeform(index)"
					>
							{{form.title}}
					</md-chip>
				</div>
				<md-divider></md-divider>
				<div align="right">
					<md-button 	class="md-accent md-raised"
								@click="postnow"
					>
					    		PostNow
					</md-button>
				</div>
		</md-whiteframe>
		<md-whiteframe	md-elevation="2"
						v-if="postcount"
						class="wrapper-newpost"
						style="padding:30px 40px"

		>
				<md-progress class="md-warn" 
							:md-progress="progress"
							style="margin:5px 0"
				>
				</md-progress>
<!-- 				<md-theme class="complete-example" md-name="default">
				  <md-button class="md-fab"  :class="{ 'md-warm': progress==100 }">
				    		<span v-if="progress<100">{{progress.toFixed(0)}}</span>
				    		<md-icon v-if="progress==100">done</md-icon>
				  </md-button>
				  <md-spinner :md-size="74" :md-stroke="2.2" :md-progress="progress">
				  </md-spinner>
				</md-theme> -->
				<div align="right" v-if="!cancelcount">
					<span v-if="progress<100">Uploading</span>
					<span v-if="progress==100">Done</span>
					...{{progress.toFixed(0)}}%
				</div>
				<div v-if="cancelcount" class="cancelcount">
							{{this.neterr}}
				</div>
				<div v-if="cancelcount" class="cancelcount">
							Oops!! Upload is terminated.
				</div>
				<div align="center" style="margin:5px 0">
						<md-button class="md-raised md-accent"
									@click="postcount=!postcount"
									v-if="progress==100 || cancelcount"
						>
								NewPost
						</md-button>
						<md-button class="md-primary"
									@click="cancelup"
									v-if="progress<100 && !cancelcount"
						>
								Cancel
						</md-button>
				</div>
		</md-whiteframe>
	</div>
</template>
<script>
import firebase from 'firebase'
var st=firebase.storage()
var dtb=firebase.database()
var uploadTask
export default {
	data(){
		return{
			postobj:{id:'',title:'',body:'',banner:'',date:'',forms:[]},
			imgi:'',
			err:'',
			neterr:'',
			formicon:'add',
			iconcount:true,
			formobj:{title:'',linki:''},
			forms:[],
			postcount:false,
			cancelcount:false,
			progress:0
		}
	},
	computed:{
		acterr:function(){
					return this.err
		}
	},
	methods:{
		cancelup:function(){
						this.cancelcount=!this.cancelcount
						uploadTask.cancel()
		},
		postnow:function(){
				var c={id:'',title:'',body:'',banner:'',date:'',forms:[]}
				var b=this.postobj
					this.progress=0;
				if(b.title!='' && b.body!=''){
						this.postcount=true;
						b.date=new Date()
						// to have a node of form there must be atleast one elem in forms
						this.forms.push({title:'',linki:''})
						b.forms=this.forms
					var foo=this.addImg()
					var metadata = {contentType: 'image/jpeg'}	
					var downloadURL	
						uploadTask = st.ref('images/'+foo.name).put(foo.file)
						uploadTask.on('state_changed',(snapshot)=>{
				  			var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
								this.progress=progress
				  			// console.log('Upload is ' + progress + '% done');

				  			switch (snapshot.state) {
				    			case firebase.storage.TaskState.PAUSED:
				      					console.log('Upload is paused');
				      			break;
				    			case firebase.storage.TaskState.RUNNING:
				      					// console.log('Upload is running');
				      			break;
				  			}
					}, (error)=>{
							this.cancelcount=!this.cancelcount
							this.neterr=error
							console.log(error)
					}, ()=> {
				  			downloadURL = uploadTask.snapshot.downloadURL;
				  			b.banner=downloadURL;
				  		var newPostKey = dtb.ref('/newposts').push().key;
				  			b.id=newPostKey
				  			dtb.ref('/newposts/'+b.id).update(b)
				  		var like={id:b.id,user:['1']}
				  			dtb.ref('/likes/'+b.id).update(like)
				  			this.postobj=c;
					});
				}				
				else{
					return this.err="required fields can't be empty"
				}
				
		},
		removeform:function(index){
					this.forms.splice(index,1)
		},
		addform:function(){
				let foo={title:'',linki:''}
				let bar=this.formobj
					if(bar.title=='' || bar.linki==''){
						this.err="required fields can't be empty"
					}
					else{
						this.forms.push(this.formobj)
						this.addicon()
					}
					
				return	this.formobj=foo
		},
		addicon:function(){
				this.iconcount=!this.iconcount
				if(this.iconcount)
					this.formicon='add'
				else
					this.formicon='cancel'
		},
		addImg:function(){
				var file=document.getElementById('ban').files
				var	foo=new File(file,file[0].name)
				return {file:foo,name:file[0].name}
		}
	}
}
</script>
<style scoped>
.wrapper-newpost{
	margin-top:100px;
	padding:10px;
	font-family:'Roboto',sans-serif;
}
.err-cont{
	color:red;
}
.form-cont{
	width:80%;
	margin:0 auto;
}
.cancelcount{
	font-size:25px;
	text-align: center;
	padding:15px;
}
.complete-example {
  width: 56px;
  height: 56px;
  position: relative;
}
 .md-fab {
    margin: 0;
  }

  .md-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>