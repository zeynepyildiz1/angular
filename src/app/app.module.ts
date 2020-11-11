import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import {HttpClientModule} from "@angular/common/http"

import {AngularFireStorageModule} from "@angular/fire/storage";

import { CropperComponent } from './cropper/cropper.component'
@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    CropperComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [CropperComponent]
})
export class AppModule { }

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


