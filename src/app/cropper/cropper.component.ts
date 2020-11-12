import { Component } from '@angular/core';

import { ImageCroppedEvent, ImageTransform , Dimensions} from 'ngx-image-cropper';
@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent  {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  transform: ImageTransform = {};
  scale = 1;
  isOver:Boolean;
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log(event);
      this.croppedImage = event.base64;
  }
  imageLoaded() {
   
  }

  cropperReady(d: Dimensions) {
    console.log(this.transform);
    
     console.log("burda",d)
  }
  loadImageFailed() {
      // show message
  }
  zoomOut() {
    this.scale -= .1;
    this.transform = {
        ...this.transform,
        scale: this.scale
    };
}

async zoomIn($event) {

  console.log(this.isOver);
  if($event.deltaY>0){
    this.scale += .02;
   this.transform = {
        ...this.transform,
        scale: this.scale
    };
  }
  if($event.deltaY<0&& this.scale>=0){
    this.scale -= .02;
  
    this.transform = {
         ...this.transform,
         scale: this.scale
     };
  }
  console.log(this.scale);
}
}
