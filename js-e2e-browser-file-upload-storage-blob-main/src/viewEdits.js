import React, { useState, useEffect, useRef } from "react";

import { testFunction } from "./azure-storage-blob";

import kittenPic from "./images/cards.jpeg";

export const ViewEdits = (pic) => {
  const [testy, setTestString] = useState("");
  const testString = useRef("");

  const kitten = React.useRef(null);

  useEffect(() => {
    window.Caman(`#${kitten.current.id}`, function () {
      this.brightness(10);
      this.contrast(30);
      this.sepia(60);
      this.saturation(-30);
      this.render(async function () {
        var temp = this.toBase64();
        testString.current = temp;
        setTestString(testString.current);
        console.log(testy);
      });
    });
  }, []);
  console.log(testy);
  testFunction(testy);

  return (
    <div className="App">
      <img src={kittenPic} alt="" style={{ width: 200 }} />

      <img
        id="kitten"
        src={kittenPic}
        alt=""
        ref={kitten}
        style={{ width: 200 }}
      />

      <img src={testy} alt="" style={{ width: 200 }} />

      <a href={testString.current} download>
        <button>Click to download</button>
      </a>
    </div>
  );
};
