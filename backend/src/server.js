import express from "express";
import bodyParser from "body-parser";

const fsLibrary = require("fs");

const download = require("./download");

const { BlobServiceClient } = require("@azure/storage-blob");

const containerName = `tutorial-container`;
const sasToken = process.env.REACT_APP_STORAGESASTOKEN;
const storageAccountName = process.env.REACT_APP_STORAGERESOURCENAME;

const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;

const articlesInfo = {
  "number-1": {
    upvotes: 1,
    comments: [],
  },
  "number-2": {
    upvotes: 0,
    comments: [],
  },
  "number-3": {
    upvotes: 0,
    comments: [],
  },
};

const app = express();

app.use(bodyParser.json());

app.post("/api/articles/:name/upvote", (req, res) => {
  const articleName = req.params.name;
  articlesInfo[articleName].upvotes += 1;
  res
    .status(200)
    .send(
      `${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`
    );
});

app.post("/api/add-photo", (req, res) => {
  download.downloadImage(req.body.blobName);
  res.status(200).send(`done`);
});

// app.get("/hello", (req, res) => {
//   res.send("hello");
// });
app.post("/api/convert-photo", (req, res) => {
  //   console.log(req.body.pic.toString());
  document.body.appendChild(image);
});
// app.post("/api/", (req, res) => {
//   res.send(`Hello ${req.body.name}!`);
// });

app.listen(8000, () => console.log("listening on port 8000"));
