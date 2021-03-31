const { jsPDF } = require("jspdf");
var JsBarcode = require('jsbarcode');
var { createCanvas } = require("canvas");
const font = require("./HuaKangBiaoKaiTi-B5-1-normal.js")
const doc = new jsPDF({
    unit: "cm",
    format: [13, 20]
});

var canvas = createCanvas();
JsBarcode(canvas, "*0311863001*");
// doc.addFileToVFS("normal", font)
// doc.addFont("normal", "n", "normal")
// doc.setFont("n")
doc.addFileToVFS("normal", font)
doc.addFont("normal", "n", "normal")
doc.setFont("n")
doc.addImage(canvas.toDataURL(), "JPEG", 3, 0.25, 7, 4);
doc.setFontSize(18);
doc.text("Billing", 0.5, 1.25);
doc.setFontSize(10);
doc.text("(0)", 1, 2.5);
doc.text("共一種", 1, 3);
doc.text("郵局", 10.75, 1.25);
doc.text("一般 COD", 10.75, 1.75);
doc.text("A2", 11, 2.2);
doc.setFontSize(18);
doc.text("863", 10.75, 3);
doc.setFontSize(12);
doc.text("1-OG-新活惺白松露精華", 1.75, 5);
doc.text("7614-8", 9, 5);
doc.text("10-OG-酵素煥妍面膜石榴彈力", 1.75, 5.75);
doc.text("1460-7", 9, 5.75);
doc.text("30-A4-新活恆白松露精華體驗包", 1.75, 6.5);
doc.text("7504-3", 9, 6.5);
doc.text("1- D-新活恆白松露安瓶C", 1.75, 7.25);
doc.text("7618-4", 9, 7.25);
doc.text("TOTAL PCS  :       42", 1.75, 8);
doc.save("custom.pdf");

function horizontalCenteredText(text) {
    var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    return textOffset
}

function verticalCenterText(text) {
    var textHeight = doc.getTextDimensions(text).h
    var textOffset = (doc.internal.pageSize.height - textHeight) / 2;
    return textOffset
}