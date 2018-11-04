export const textUtil = {
  getSummarizedText(text = "", charQtd = 30) {
    return text.substring(0, charQtd) + "...";
  }
};
