import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QRGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  return (
    <>
      <div className="container">
        <div className="form flex justify-center gap-2 p-2 flex-wrap">
          <input
            className=" border border-slate-400 rounded-md focus:outline-none px-2 py-1"
            type="text"
            name="qr-code"
            id="qr-code"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className={`px-2 py-1 text-white bg-gray-800 rounded-md`}
            onClick={() => {
              setQrCode(input);
              setInput("");
            }}
          >
            Generate QR Code
          </button>
        </div>
        <div className="qr-code flex justify-center my-5">
          <QRCode id="qr-code-value" value={qrCode || "ek is the best"} />
        </div>
      </div>
    </>
  );
}
