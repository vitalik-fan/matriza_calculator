import React from "react";
import decryptPeriods from "../../../../../data/decryptPeriods";
import { TabItemI } from "../../../../../data/MainScreenData";
import dataText, { dataTextI } from "./data";
import ResultItem from "./ResultItem";

export type numbType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22

interface ResultItemListI {
  periods?: numbType[]
}

const ResultItemList = ({ periods = [] }: ResultItemListI) => {
  return (
    <div className={"ResultItemsList"}>
      {periods.map((period, index) => (
        <ResultItem periodNumb={period} key={period + "helloList1" + index + "helloList"} item={decryptPeriods[period]} />
      ))}
    </div>
  );
};

export default ResultItemList;
