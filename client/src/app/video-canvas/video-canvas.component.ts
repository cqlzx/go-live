import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-canvas',
  templateUrl: './video-canvas.component.html',
  styleUrls: ['./video-canvas.component.css']
})
export class VideoCanvasComponent implements OnInit {

  @ViewChild('video') video:ElementRef;

  constructor() { }

  ngOnInit() {
    let _video = this.video.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then(stream => {
          _video.src = window.URL.createObjectURL(stream);
          _video.play();
        })
    }
  }
}
