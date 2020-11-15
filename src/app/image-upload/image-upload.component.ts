
import { Component, Input } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage"


@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {

  constructor(private af:AngularFireStorage) { }
  path:string=null;
  path2:File=null;
  fileName:string=null;
  url:String;
  width:any;
  aaa:string;
  base64:any;
  resized:string;
  picture:File;
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
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
fileChangeEvent(fileInput: any) {
  this.imageError = null;
  if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
          this.imageError =
              'Maximum size allowed is ' + max_size / 1000 + 'Mb';

          return false;
      }

      
      const reader = new FileReader();
      reader.onload = (e: any) => {
          const image = new Image();
          image.src = e.target.result;
          image.onload = rs => {
              const img_height = 300;
              const img_width = 300;

              console.log(img_height, img_width);


              if (img_height > max_height && img_width > max_width) {
                  this.imageError =
                      'Maximum dimentions allowed ' +
                      max_height +
                      '*' +
                      max_width +
                      'px';
                  return false;
              } else {
                  const imgBase64Path = e.target.result;
                  this.cardImageBase64 = imgBase64Path;
                  this.isImageSaved = true;
                  // this.previewImagePath = imgBase64Path;
              }
          };
      };
      
      reader.readAsDataURL(fileInput.target.files[0]);
      this.af.upload("images/"+Math.random()+this.fileName,fileInput.target.files[0]);
  }
}

onResizer(event){
  var image = new Image();   var form=new FormData();
  console.log(event);
  if(event.target.files){
    this.path=event.target.files[0];
    this.fileName=event.target.files[0].name;
    var reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
      image.onload=function(){
        document.getElementById("original-Img").setAttribute("src",image.src);
        var canvas=document.createElement("canvas");
        var context=canvas.getContext("2d");
        canvas.width=image.width/4;
        canvas.height=image.height/4;
        context.drawImage(image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            canvas.width,
            canvas.height
        );
        
      
        document.getElementById("upload-Preview").setAttribute("src",canvas.toDataURL()); 
        console.log(canvas.toDataURL());
    }
    image.src=<string>event.target.result;
    var fd = new FormData();
    fd.append("name", this.fileName);
    fd.append("image", this.path);
    fd.append("info", "lah_de_dah");
    console.log(fd);
   // console.log(image.src);
   // var aFileParts = ["<img src='"+image.src+"'width='200' height='200'>"];
   //var newBlob = new Blob(aFileParts,{type : 'image/jpeg'});
  // const data = new FormData();
   //data.append('file', document.getElementById("upload-Preview").);
   this.af.upload("images/"+Math.random()+"imgg",fd);  
  }
    
   
}
}
}


/*------------------------------
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