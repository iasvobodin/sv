// import imageData from "~/static/new.json";
// const jsonString = JSON.stringify(imageData, null, 2);

const polka = require("polka");
// const config = require("./static/new.json");
const fs = require("fs");

const jsonString = fs.readFileSync("./static/new.json");
const customer = JSON.parse(jsonString);

// import express from 'express'
const app = polka();
// console.log(fs);

const a = [
  {
    SourceFile: "img/svph-10.jpg",
    FileName: "svph-10.jpg",
    ShutterSpeedValue: "1/200",
    ApertureValue: 3.2,
    FocalLength: "50.0 mm",
    Keywords: ["Анжелика", "Все фото", "Свадьба", "photoseries1"],
    ImageWidth: 481,
    ImageHeight: 720,
    Rating: 5,
    OriginalDocumentID: "704ADB5290DA0F6CFE7C63DCCA53D2A3",
    Creator: "@Svobodinaphoto",
    Subject: ["Анжелика", "Все фото", "Свадьба"],
    FileTypeExtension: "jpg"
  },
  {
    SourceFile: "./00001-08-41-50.jpg",
    FileName: "00001-08-41-50.jpg",
    ShutterSpeedValue: "1/250",
    ApertureValue: 4.0,
    FocalLength: "24.0 mm",
    Subject: ["Рита и Влад", "Свадьба"],
    ImageWidth: 6016,
    ImageHeight: 4016,
    Creator: "@Svobodinaphoto",
    FileTypeExtension: "jpg",
    Keywords: ["Рита и Влад", "Свадьба", "photoseries19"]
  }
];
const jsonString2 = JSON.stringify(jsonString, null, 2);
export default (req, res) => {
  res.end(jsonString2);
};
