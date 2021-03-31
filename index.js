const { jsPDF } = require("jspdf");

const doc = new jsPDF({
    unit: "cm",
    format: [8.89, 508]
});
doc.setFontSize(22);
doc.text("Top", horizontalCenteredText("Top"), .575);
doc.text("Bottom", horizontalCenteredText("Bottom"), 508);
doc.text("Left", 0, verticalCenterText("Left"));
doc.text("Right", doc.internal.pageSize.width - doc.getStringUnitWidth("Right") * doc.internal.getFontSize() / doc.internal.scaleFactor, verticalCenterText("Right"));
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