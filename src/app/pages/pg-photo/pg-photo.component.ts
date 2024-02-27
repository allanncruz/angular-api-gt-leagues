import { Component } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-pg-photo',
  templateUrl: './pg-photo.component.html',
  styleUrls: ['./pg-photo.component.scss']
})
export class PgPhotoComponent {
  constructor(private imageCompress: NgxImageCompressService) {}

  imgResultBeforeCompression: string = '';
  imgResultAfterCompression: string = '';
  labelImgCompress = '' as string;
  labelImgCompressed = '' as string;

  ormatBytes(bytes: any, decimals = 2) {
    if (!+bytes) return '0 Bytes'
    
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

  compressFile() {
    this.imageCompress.uploadFile().then(({image, orientation}) => {
      this.imgResultBeforeCompression = image;
      this.labelImgCompress = this.ormatBytes(this.imageCompress.byteCount(image));

      this.imageCompress
        .compressFile(image, orientation, 50, 50)
        .then(compressedImage => {
            this.imgResultAfterCompression = compressedImage;
            this.labelImgCompressed = this.ormatBytes(this.imageCompress.byteCount(compressedImage));
        });
    });
  }

  ngOnInit() {
    this.ormatBytes(2000);
  }
}
