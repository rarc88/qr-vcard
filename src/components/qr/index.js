import React from 'react';
import QRCode from 'qrcode.react';

export const QR = ({ value = '' }) => {

  return (

    <QRCode
      id="qr"
      value={value}
      size={250}
      renderAs={"svg"}
      level={"H"}
      includeMargin={true}
    />

  );

}