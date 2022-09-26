export interface dataForTrading {
  amountOfTokens: string;
  limitPrice: string;
  priceColumnData: string;
  textForNoOrders: string;
}

export const testData: dataForTrading = {
  amountOfTokens: "1",
  limitPrice: "1580",
  priceColumnData: "$1,580.0",
  textForNoOrders: "You have no orders.",
};
