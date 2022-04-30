import React, { useState, useEffect } from "react";

const QrCodeScratch = () => {
  const [url, setUrl] = useState("https://ahmdselim.github.io/profile");
  const [qrCode, setQrCode] = useState(
    `http://api.qrserver.com/v1/create-qr-code/?data=${url}`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(url);
  };
  useEffect(
    () => setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${url}`),
    [url]
  );
  return (
    <div className="qrCodeScratch">
      <img src={qrCode} alt={qrCode} className="qrcode" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text to encode"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button>Generate</button>
      </form>
      <a href={qrCode} className="qrLink">
        Download
      </a>
    </div>
  );
};

export default QrCodeScratch;
