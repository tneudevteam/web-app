import React, { Component } from 'react';
import jsqr from 'jsqr';

class QR extends Component {
  componentDidMount() {
    const camera = document.getElementById('camera');
    const img = document.getElementById('frame');

    camera.addEventListener('change', function(e) {
      const file = e.target.files[0];
      img.src = URL.createObjectURL(file);

      img.onload = function() {
        const imageData = QR.getImageData(img);
        const decodedText = jsqr.decodeQRFromImage(imageData.data, imageData.width, imageData.height);

        alert(decodedText);
      };
    });
  }

  static getImageData(img) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    return context.getImageData(0, 0, img.width, img.height);
  }

  render() {
    return (
      <div>
        <input type="file" accept="image/*" capture="camera" id="camera"/>
        <img id="frame" alt="QR" style={{
          visibility: 'hidden'
        }}/>
      </div>
    )
  }
}

export default QR;
