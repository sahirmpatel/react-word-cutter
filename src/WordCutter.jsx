import React from "react";

const WordCutter = (props) => {
  let inputtext = props.children;
  let wordlimit = props.limit;
  let result;
  if (inputtext.length < wordlimit || !wordlimit) {
    result = inputtext;
  } else {
    result = `${inputtext.slice(0, wordlimit)}...`;
  }

  return <span title={props.children}>{result}</span>;
};

export default WordCutter;
