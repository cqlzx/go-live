import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-canvas',
  templateUrl: './video-canvas.component.html',
  styleUrls: ['./video-canvas.component.css']
})
export class VideoCanvasComponent implements OnInit {

  videoSrc : any = '';

  constructor() { }

  ngOnInit() {
    // navigator.getUserMedia = navigator.getUserMedia;
      // || navigator.webkitGetUserMedia
      // || navigator.mozGetUserMedia
      // || navigator.msgGetUserMedia;

    if (navigator.getUserMedia) {
      const constraints = {
        video: true
      };
      navigator.getUserMedia(constraints, this.loadCam, this.loadFail);
    }
  }

  loadCam(stream) {
    const url = window.URL.createObjectURL(stream);
    console.log(url);
    this.videoSrc = url;
    console.log('Load camera successfully!');
  }

  loadFail() {
    console.log('Load camera failed!');
  }
}
