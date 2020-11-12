
import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage"

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  percentDone: number;
  uploadSuccess: boolean;
  size:any;
  width:number;
  height:number;

  @ViewChild('coverFilesInput') imgType:ElementRef;
  constructor(private af:AngularFireStorage) { }
  path:string=null;
  path2:File=null;
  fileName:string=null;
  url:String;
  
  version = VERSION

  onChange(evt:any){
   this.percentDone = 100;
   this.uploadSuccess = true;
   let image:any = evt.target.files[0];
   this.size = image.size;
   let fr = new FileReader();
   fr.onload = () => { // when file has loaded
    var img = new Image();

    img.onload = () => {
        this.width = img.width;
        this.height = img.height;
    };

    img.src = fr.result; // This is the data URL 
   };

  fr.readAsDataURL(image);
   this.imgType.nativeElement.value = "";
  }  
  //---------------
  onFileSelected(event){
  console.log(event);
  if(event.target.files){
    this.path=event.target.files[0];
    this.fileName=event.target.files[0].name;
    var reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
}
  }

onUpload(){
console.log("buraa",this.path);

this.af.upload("images/"+Math.random()+this.fileName,this.path);
}
onResize(event)
{ var dene;
  dene=event.target.files[0];
 // dene.width="10";
  //dene.height="10";
 // dene.size=4095;
 
 // this.path=this.width.files[0];
console.log(dene)
  this.af.upload("images/"+Math.random()+"size",dene);
 // this.path.css("width", "200px")
 //this.path.
}
}
/*
imageUpload(image,path){
 //firebae storage
 // return url 
 // saveImage(url) path DB
}

resizeImage (imagem, w, h, orginal){
 if (orginal){
   imageUpload();

  return resizedImage() --->> uploadImage()
   200 200 
 }
}

croppedImage()*/