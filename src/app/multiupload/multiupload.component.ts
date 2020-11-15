import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-multiupload',
  templateUrl: './multiupload.component.html',
  styleUrls: ['./multiupload.component.css']
})
export class MultiuploadComponent implements OnInit {

  constructor(private af:AngularFireStorage) { }

  ngOnInit(): void {
  }
urls=[];
path:string=null;
fileName:string=null;
onSelectFile(e){
  this.urls=[];
if(e.target.files){
  console.log(e.target.files.length)
  for(let i=0;i<e.target.files.length;i++){
    var reader =new FileReader();
    reader.readAsDataURL(e.target.files[i]);
    this.path=e.target.files[i];
    this.fileName=e.target.files[i].name;
    console.log(e.target.files);
    reader.onload=(events:any)=>{
      this.urls.push(events.target.result);
    
      
    }
    this.af.upload("images/"+Math.random()+this.fileName,this.path);
  }
}
}
}
