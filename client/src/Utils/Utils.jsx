import React from "react";

export const formatDate = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
};

export const truncatMessage = (message, wordsLimit = 8) => {
  const words = message.split(" ");
  if (words.length <= wordsLimit) {
    return message;
  }
  return words.slice(0, wordsLimit).join(" ");
};
