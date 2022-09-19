import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
// const { v1: uuidv1 } = require("uuid");
require("dotenv").config();

const containerName = `tutorial-container`;
const sasToken = process.env.REACT_APP_STORAGESASTOKEN;
const storageAccountName = process.env.REACT_APP_STORAGERESOURCENAME;
// </snippet_package>

// <snippet_isStorageConfigured>
// Feature flag - disable storage feature to app if not configured
export const isStorageConfigured = () => {
  return !storageAccountName || !sasToken ? false : true;
};
// </snippet_isStorageConfigured>

// <snippet_getBlobsInContainer>
// return list of blobs in container to display
const getBlobsInContainer = async (containerClient) => {
  const returnedBlobUrls = [];

  // get list of blobs in container
  // eslint-disable-next-line
  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
};
// </snippet_getBlobsInContainer>

// <snippet_createBlobInContainer>
const createBlobInContainer = async (containerClient, file, fileName) => {
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(fileName);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  // upload file
  await blobClient.uploadData(file, options);
};
// </snippet_createBlobInContainer>

// <snippet_uploadFileToBlob>
const uploadFileToBlob = async (file, fileName) => {
  if (!file) return [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  // get Container - full public read access
  const containerClient = blobService.getContainerClient(containerName);
  await containerClient.createIfNotExists({
    access: "container",
  });

  // upload file
  await createBlobInContainer(containerClient, file, fileName);

  // get list of blobs in container
  return getBlobsInContainer(containerClient);
};

export const testFunction = async (data) => {
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  const containerClient = blobService.getContainerClient(containerName);
  await containerClient.createIfNotExists({
    access: "container",
  });
  const returnedBlobUrls = [];

  const blobName = "current.txt";

  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  console.log("\nUploading to Azure storage as blob:\n\t", blobName);

  // const data = "Hello, World!";
  const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
  console.log(
    "Blob was uploaded successfully. requestId: ",
    uploadBlobResponse.requestId
  );
};

// </snippet_uploadFileToBlob>

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

export const getAllFilesBlob = async () => {
  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  const containerClient = blobService.getContainerClient(containerName);
  await containerClient.createIfNotExists({
    access: "container",
  });
  const returnedBlobUrls = [];

  // get list of blobs in container
  // eslint-disable-next-line
  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
};

export default uploadFileToBlob;
