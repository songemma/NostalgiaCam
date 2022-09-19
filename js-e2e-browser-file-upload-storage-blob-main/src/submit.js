import "./App.css";
import smokePic from "./images/smoke.jpeg";
import darkPic from "./images/dark.jpeg";
import housePic from "./images/house.png";

// import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

import React, { useState } from "react";
import Path from "path";

import uploadFileToBlob, {
  isStorageConfigured,
  getAllFilesBlob,
  testFunction,
} from "./azure-storage-blob";

const storageConfigured = isStorageConfigured();

const { v1: uuidv1 } = require("uuid");

const Temp = () => {
  const [blobList, setBlobList] = useState([]);
  const [fileSelected, setFileSelected] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));
  // const [currBlobName, setCurrBlobName] = useState("");

  const onStart = async () => {
    const blobsInContainer = await getAllFilesBlob();
    setBlobList(blobsInContainer);
  };

  const onFileChange = (event) => {
    // capture file into state
    setFileSelected(event.target.files[0]);
  };

  const onFileUpload = async () => {
    // prepare UI
    setUploading(true);

    let blobname = `${uuidv1()}.jpg`;

    // // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer = await uploadFileToBlob(fileSelected, blobname);

    // prepare UI for results
    setBlobList(blobsInContainer);

    // reset state/form
    setFileSelected(null);
    setUploading(false);
    setInputKey(Math.random().toString(36));

    await fetch(`/api/add-photo`, {
      method: "post",
      // body: ,
      body: JSON.stringify({ blobName: "basketballs.jpeg" }),
      // body: JSON.stringify({ blobName: { blobname } }),

      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  // display form
  const DisplayForm = () => (
    <div>
      <input type="file" onChange={onFileChange} key={inputKey || ""} />
      <button type="submit" onClick={onFileUpload}>
        Upload!
      </button>
      <button onClick={onStart}>See Your Original Photos</button>
    </div>
  );

  // display file name and image
  const DisplayImagesFromContainer = () => (
    <div>
      {/* {onStart} */}
      <h2>Container items</h2>
      <ul>
        {blobList.map((item) => {
          if (item.toString())
            return (
              <li key={item}>
                <div>
                  {Path.basename(item)}
                  <br />
                  <img src={item} alt={item} />
                  {console.log(item.toString())}
                </div>
              </li>
            );
        })}
      </ul>
    </div>
  );

  return (
    <div>
      <h1>Upload file to Azure Blob Storage</h1>
      <img src={darkPic} id="canvas-id" />
      <img
        src={darkPic}
        width="auto"
        id="image"
        data-caman="
              brightness(5)
              contrast(15)
              exposure(10)
              noise(5)
              saturation(10)
              vibrance(-30)
              channels({
                red: 5,
                green: 7,
                blue: 7
              })
              "
      />

      <a href={darkPic} download>
        Click to download
      </a>

      <br></br>
      {/* <img src={smokePic} />
      <img
        src={smokePic}
        width="auto"
        id="image"
        data-caman="
              brightness(5)
              contrast(15)
              exposure(10)
              noise(5)
              saturation(10)
              vibrance(-30)
              channels({
                red: 5,
                green: 7,
                blue: 7
              })

              "
      />
 */}
      {/* data-caman="
        brightness(-15)
        channels({
          red: 15,
          green: -10,
          blue: 4
        })
        contrast(-5)
        exposure(5)
        noise(15)
        saturation(-20)
        vibrance(10)
        "
 */}

      {storageConfigured && !uploading && DisplayForm()}
      {storageConfigured && uploading && <div>Uploading</div>}
      <hr />
      {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()}
      {!storageConfigured && <div>Storage is not configured.</div>}
    </div>
  );
};

export default Temp;

/*

-------------------------
*/
// import { useEffect, useState, useRef, React } from "react";
// import kittenPic from "./images/cards.jpeg";

// export default function Submit() {
//   //   var testString = "";
//   const [testy, setTestString] = useState("");
//   const testString = useRef("");

//   const kitten = React.useRef(null);

//   useEffect(() => {
//     window.Caman(`#${kitten.current.id}`, function () {
//       this.brightness(10);
//       this.contrast(30);
//       this.sepia(60);
//       this.saturation(-30);
//       this.render(async function () {
//         var temp = this.toBase64();
//         testString.current = temp;
//         setTestString(testString.current);
//         // console.log(testString.current);
//         console.log(testy);
//         // await testFunction(testy);
//       });
//     });
//   }, []);
//   console.log(testy);
//   // testFunction(testy);

//   return (
//     <div className="App">
//       {/* {console.log(testy)} */}
//       <img src={kittenPic} alt="" style={{ width: 200, height: 200 }} />
//       <img
//         id="kitten"
//         src={kittenPic}
//         alt=""
//         // ref={kitten}
//         style={{ width: 200, height: 200 }}
//       />
//       {/* <img src={testy} alt="" style={{ width: 200, height: 200 }} />{" "}
//       <a href={testString.current} download>
//         Click to download
//       </a>{" "} */}
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import Path from "path";
// import uploadFileToBlob, {
//   isStorageConfigured,
//   getAllFilesBlob,
//   testFunction,
// } from "./azure-storage-blob";

// import kittenPic from "./images/cards.jpeg";

// const storageConfigured = isStorageConfigured();

// const Submit = () => {
//   const [blobList, setBlobList] = useState([]);
//   const [fileSelected, setFileSelected] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [inputKey, setInputKey] = useState(Math.random().toString(36));

//   const onStart = async () => {
//     const blobsInContainer = await getAllFilesBlob();
//     setBlobList(blobsInContainer);
//   };

//   const onFileChange = (event) => {
//     setFileSelected(event.target.files[0]);
//   };

//   const onFileUpload = async () => {
//     setUploading(true);

//     const blobsInContainer = await uploadFileToBlob(fileSelected);

//     setBlobList(blobsInContainer);

//     setFileSelected(null);
//     setUploading(false);
//     setInputKey(Math.random().toString(36));

//     console.log(`${blobsInContainer[0]}`);
//     console.log(`${blobList[0]}`);

//     await fetch(`/api/add-photo`, {
//       method: "post",
//       body: JSON.stringify({ blobName: "basketballs.jpeg" }),

//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   };

//   const ViewEdits = () => {
//     const [testy, setTestString] = useState("");
//     const testString = useRef("");

//     //   const kittenPic = pic;

//     const kitten = React.useRef(null);

//     useEffect(() => {
//       window.Caman(`#${kitten.current.id}`, function () {
//         this.brightness(10);
//         this.contrast(30);
//         this.sepia(60);
//         this.saturation(-30);
//         this.render(async function () {
//           var temp = this.toBase64();
//           testString.current = temp;
//           setTestString(testString.current);
//           console.log(testy);
//         });
//       });
//     }, []);
//     console.log(testy);
//     // testFunction(testy);

//     return (
//       <div className="App">
//         <img src={fileSelected} alt="" style={{ width: 200 }} />

//         <img
//           id="kitten"
//           src={fileSelected}
//           alt=""
//           ref={kitten}
//           style={{ width: 200 }}
//         />

//         <img src={testy} alt="" style={{ width: 200 }} />

//         <a href={testString.current} download>
//           <button>Click to download</button>
//         </a>
//       </div>
//     );
//   };

//   const DisplayForm = () => (
//     <div>
//       <input type="file" onChange={onFileChange} key={inputKey || ""} />
//       <button type="submit" onClick={onFileUpload}>
//         Upload!
//       </button>
//       <button onClick={onStart}>See Your Original Photos</button>
//     </div>
//   );

//   return (
//     <div>
//       <h1>Upload file</h1>

//       <br></br>

//       {storageConfigured && !uploading && DisplayForm()}
//       {storageConfigured && uploading && <div>Uploading</div>}

//       <ViewEdits />

//       <hr />
//     </div>
//   );
// };

// export default Submit;
