import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

const QrCodePackage = () => {
  const [url, setUrl] = useState("https://ahmdselim.github.io/profile");
  const [qrCode, setQrCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(url);
  };
  useEffect(
    () => setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${url}`),
    [url]
  );
  return (
    <div className="qrCodePackage">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text to encode"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button>Generate</button>
      </form>
      <QRCodeSVG className="qrcode" value={url} />
      <br />
      <a href={qrCode} className="qrLink">
        Download
      </a>
    </div>
  );
};

export default QrCodePackage;
