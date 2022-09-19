const { BlobServiceClient } = require("@azure/storage-blob");
const { v1: uuidv1 } = require("uuid");
const fs = require("fs");

async function downloadImage(blobName) {
  console.log("Azure Blob storage v12 - JavaScript quickstart sample");
  // Quick start code goes here
  const AZURE_STORAGE_CONNECTION_STRING =
    "DefaultEndpointsProtocol=https;AccountName=saadobe;AccountKey=0LWoRQMxMuqW1EQRG6/WXi2AU5d1I18n9eJL7U/rdd8U/OpZsJcf7wA1MIAVMI60fCxub3AuXqfY+AStWRRAEg==;EndpointSuffix=core.windows.net";
  const containerName = "tutorial-container";

  // Create the BlobServiceClient object which will be used to create a container client
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    AZURE_STORAGE_CONNECTION_STRING
  );

  console.log("Azure Blob storage v12 - JavaScript quickstart sample");

  // Get a reference to a container
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  // const downloadBlockBlobResponse = await blockBlobClient.downloadToFile(
  //   "local-file-path455.jpg"
  // );
  const downloadBlockBlobResponse = await blockBlobClient.downloadToFile(
    `${blobName}`
  );

  // const content = fs.readFileSync("help.txt").toString();
  // const base64 = fs.readFileSync("help.txt");
  // let buff = Buffer.from(base64, "base64");
  // fs.writeFileSync("stack-abuse-logo-out.png", buff);

  // console.log(content);

  console.log("\nDownloaded blob content...");
}

module.exports = {
  downloadImage,
};
