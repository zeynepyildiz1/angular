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

zoomIn($event) {
  console.log($event);
    this.scale += .1;
    this.transform = {
        ...this.transform,
        scale: this.scale
    };
}
}
