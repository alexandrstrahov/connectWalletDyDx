export interface dataForTrading {
  amountOfTokens: string;
  limitPrice: string;
  priceColumnData: string;
  textForNoOrders: string;
}

export const testData: dataForTrading = {
  amountOfTokens: "1",
  limitPrice: "1100",
  priceColumnData: "$1,100.0",
  textForNoOrders: "You have no orders.",
};
