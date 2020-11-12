import { Component, OnInit, ViewChild } from '@angular/core';
import {CropperComponent} from "angular-cropperjs"
@Component({
  selector: 'cropperjs',
  templateUrl: './cropperjs.component.html',
  styleUrls: ['./cropperjs.component.css']
})
export class CropperjsComponent implements OnInit {
  @ViewChild("angularCropper") angularCropper:CropperComponent;
imageUrl:string;
croppedresult:string;
config={
  zoomable:true
};
isOver:Boolean=false;
  public constructor() {
   
  }
  onSelectFile(event){
if(event.target.files && event.target.files[0]){
  const reader=new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload=()=>{
    this.imageUrl=reader.result as string;
  }
}
  }
  getCroppedImage(){
this.croppedresult=this.angularCropper.cropper.getCroppedCanvas().toDataURL();
/*this.angularCropper.cropper.getCroppedCanvas().toBlob((blob)=>{
  const reader=new FileReader();
  reader.readAsDataURL(blob);
  reader.onload=()=>{
    this.croppedresult=reader.result as string;
  };
},"image/jpeg",0.95);*/
  }
  zoomOut($event){
    if($event.deltaY>0){
    this.angularCropper.cropper.zoom(0.1);
  }
  else{
    this.angularCropper.cropper.zoom(-0.1);
  }
  }
  rotateLeft(){
    this.angularCropper.cropper.rotate(-0.45);
  }
  public ngOnInit() { }

}
