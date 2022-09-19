webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\nimg {\n  height: 500px;\n  width: auto;\n}\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,aAAa;EACb,WAAW;AACb","sourcesContent":[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\nimg {\n  height: 500px;\n  width: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_smoke_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/smoke.jpeg */ "./src/images/smoke.jpeg");
/* harmony import */ var _images_dark_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/dark.jpeg */ "./src/images/dark.jpeg");
/* harmony import */ var _images_house_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/house.png */ "./src/images/house.png");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _azure_storage_blob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./azure-storage-blob */ "./src/azure-storage-blob.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/emmasong/Downloads/js-e2e-browser-file-upload-storage-blob-main/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();




 // import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";





const storageConfigured = Object(_azure_storage_blob__WEBPACK_IMPORTED_MODULE_6__["isStorageConfigured"])();

const App = () => {
  _s();

  const [blobList, setBlobList] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const [fileSelected, setFileSelected] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const [uploading, setUploading] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const [inputKey, setInputKey] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Math.random().toString(36));

  const onStart = async () => {
    const blobsInContainer = await Object(_azure_storage_blob__WEBPACK_IMPORTED_MODULE_6__["getAllFilesBlob"])();
    setBlobList(blobsInContainer);
  };

  const onFileChange = event => {
    // capture file into state
    setFileSelected(event.target.files[0]);
  };

  const onFileUpload = async () => {
    // prepare UI
    setUploading(true); // // *** UPLOAD TO AZURE STORAGE ***

    const blobsInContainer = await Object(_azure_storage_blob__WEBPACK_IMPORTED_MODULE_6__["default"])(fileSelected); // prepare UI for results

    setBlobList(blobsInContainer); // reset state/form

    setFileSelected(null);
    setUploading(false);
    setInputKey(Math.random().toString(36));
    await fetch(`/api/add-photo`, {
      method: "post",
      // body: ,
      body: JSON.stringify({
        blobName: "basketballs.jpeg"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }; // display form


  const DisplayForm = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
      type: "file",
      onChange: onFileChange
    }, inputKey || "", false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
      type: "submit",
      onClick: onFileUpload,
      children: "Upload!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
      onClick: onStart,
      children: "See your Photos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined); // display file name and image


  const DisplayImagesFromContainer = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
      children: "Container items"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
      children: blobList.map(item => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: [path__WEBPACK_IMPORTED_MODULE_5___default.a.basename(item), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
              src: item,
              alt: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, undefined)
        }, item, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, undefined);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
      children: "Upload file to Azure Blob Storage"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
      src: _images_dark_jpeg__WEBPACK_IMPORTED_MODULE_2__["default"],
      id: "canvas-id"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
      src: _images_dark_jpeg__WEBPACK_IMPORTED_MODULE_2__["default"],
      width: "auto",
      id: "image",
      "data-caman": " brightness(5) contrast(15) exposure(10) noise(5) saturation(10) vibrance(-30) channels({ red: 5, green: 7, blue: 7 }) "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
      href: "/somefile.txt",
      download: true,
      children: "Click to download"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined), storageConfigured && !uploading && DisplayForm(), storageConfigured && uploading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: "Uploading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 42
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, undefined), storageConfigured && blobList.length > 0 && DisplayImagesFromContainer(), !storageConfigured && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: "Storage is not configured."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 30
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined);
};

_s(App, "wwAQdibxXaQpKQBaUAAQ8BlsqAE=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/azure-storage-blob.js":
/*!***********************************!*\
  !*** ./src/azure-storage-blob.js ***!
  \***********************************/
/*! exports provided: isStorageConfigured, getAllFilesBlob, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStorageConfigured", function() { return isStorageConfigured; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllFilesBlob", function() { return getAllFilesBlob; });
/* harmony import */ var _azure_storage_blob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/storage-blob */ "./node_modules/@azure/storage-blob/dist-esm/storage-blob/src/index.browser.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const containerName = `tutorial-container`;
const sasToken = "?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-08-14T02:33:23Z&st=2022-08-13T18:33:23Z&spr=https&sig=pMmYhVu59USj%2BNWnon8Q9G1HyyhFEp9QIiESQLgigz8%3D";
const storageAccountName = "saadobe"; // </snippet_package>
// <snippet_isStorageConfigured>
// Feature flag - disable storage feature to app if not configured

const isStorageConfigured = () => {
  return !storageAccountName || !sasToken ? false : true;
}; // </snippet_isStorageConfigured>
// <snippet_getBlobsInContainer>
// return list of blobs in container to display

const getBlobsInContainer = async containerClient => {
  const returnedBlobUrls = []; // get list of blobs in container
  // eslint-disable-next-line

  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(`https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`);
  }

  return returnedBlobUrls;
}; // </snippet_getBlobsInContainer>
// <snippet_createBlobInContainer>


const createBlobInContainer = async (containerClient, file) => {
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name); // set mimetype as determined from browser with file upload control

  const options = {
    blobHTTPHeaders: {
      blobContentType: file.type
    }
  }; // upload file

  await blobClient.uploadData(file, options);
}; // </snippet_createBlobInContainer>
// <snippet_uploadFileToBlob>


const uploadFileToBlob = async file => {
  if (!file) return []; // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal

  const blobService = new _azure_storage_blob__WEBPACK_IMPORTED_MODULE_0__["BlobServiceClient"](`https://${storageAccountName}.blob.core.windows.net/?${sasToken}`); // get Container - full public read access

  const containerClient = blobService.getContainerClient(containerName);
  await containerClient.createIfNotExists({
    access: "container"
  }); // upload file

  await createBlobInContainer(containerClient, file); // get list of blobs in container

  return getBlobsInContainer(containerClient);
}; // </snippet_uploadFileToBlob>
// export default uploadFileToBlob;
// // ./src/azure-storage-blob.ts
// // <snippet_package>
// // THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE
// // import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
// const { BlobServiceClient } = require("@azure/storage-blob");
// const containerName = `tutorial-container`;
// const sasToken = process.env.REACT_APP_STORAGESASTOKEN;
// const storageAccountName = process.env.REACT_APP_STORAGERESOURCENAME;
// const AZURE_STORAGE_CONNECTION_STRING =
//   "DefaultEndpointsProtocol=https;AccountName=saadobe;AccountKey=0LWoRQMxMuqW1EQRG6/WXi2AU5d1I18n9eJL7U/rdd8U/OpZsJcf7wA1MIAVMI60fCxub3AuXqfY+AStWRRAEg==;EndpointSuffix=core.windows.net";
// // </snippet_package>
// // <snippet_isStorageConfigured>
// // Feature flag - disable storage feature to app if not configured
// export const isStorageConfigured = () => {
//   return !storageAccountName || !sasToken ? false : true;
// };
// // </snippet_isStorageConfigured>
// // <snippet_getBlobsInContainer>
// // return list of blobs in container to display
// export const getBlobsInContainer = async (containerClient) => {
//   const returnedBlobUrls = [];
//   // get list of blobs in container
//   // eslint-disable-next-line
//   for await (const blob of containerClient.listBlobsFlat()) {
//     // if image is public, just construct URL
//     returnedBlobUrls.push(
//       `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
//     );
//   }
//   return returnedBlobUrls;
// };
// // </snippet_getBlobsInContainer>
// // <snippet_createBlobInContainer>
// const createBlobInContainer = async (containerClient, file) => {
//   // create blobClient for container
//   const blobClient = containerClient.getBlockBlobClient(file.name);
//   // set mimetype as determined from browser with file upload control
//   const options = { blobHTTPHeaders: { blobContentType: file.type } };
//   // upload file
//   await blobClient.uploadData(file, options);
// };
// // </snippet_createBlobInContainer>
// // <snippet_uploadFileToBlob>
// const uploadFileToBlob = async (file) => {
//   if (!file) return [];
//   // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
//   const blobService = new BlobServiceClient(
//     `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
//   );
//   // get Container - full public read access
//   const containerClient = blobService.getContainerClient(containerName);
//   await containerClient.createIfNotExists({
//     access: "container",
//   });
//   // upload file
//   await createBlobInContainer(containerClient, file);
//   // get list of blobs in container
//   return getBlobsInContainer(containerClient);
// };


const getAllFilesBlob = async () => {
  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new _azure_storage_blob__WEBPACK_IMPORTED_MODULE_0__["BlobServiceClient"](`https://${storageAccountName}.blob.core.windows.net/?${sasToken}`);
  const containerClient = blobService.getContainerClient(containerName);
  await containerClient.createIfNotExists({
    access: "container"
  });
  const returnedBlobUrls = []; // get list of blobs in container
  // eslint-disable-next-line

  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(`https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`);
  }

  return returnedBlobUrls;
};
/* harmony default export */ __webpack_exports__["default"] = (uploadFileToBlob);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/images/dark.jpeg":
/*!******************************!*\
  !*** ./src/images/dark.jpeg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/dark.d86090c4.jpeg");

/***/ }),

/***/ "./src/images/house.png":
/*!******************************!*\
  !*** ./src/images/house.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/house.7f3d3016.png");

/***/ }),

/***/ "./src/images/smoke.jpeg":
/*!*******************************!*\
  !*** ./src/images/smoke.jpeg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/smoke.824866e8.jpeg");

/***/ }),

/***/ 2:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

})
//# sourceMappingURL=main.2950409362d437adbffc.hot-update.js.map