# PlaceParlayBetRequest

Request to place a bet

**Properties**

| Name              | Type                | Required | Description                                                                                                                                                                                                                 |
| :---------------- | :------------------ | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uniqueRequestId   | string              | ❌       | This unique id of the place bet requests. This is to support idempotent requests.                                                                                                                                           |
| acceptBetterLine  | boolean             | ❌       | Whether or not to accept a bet when there is a line change in favor of the client.                                                                                                                                          |
| riskAmount        | number              | ❌       | Amount in client’s currency. It is always risk amount when placing Parlay bets NOTE: If round robin options is used this amount will apply for all parlays so actual amount wagered will be riskAmount X number of Parlays. |
| oddsFormat        | OddsFormat          | ❌       | Bet odds format. AMERICAN = American odds format, DECIMAL = Decimal (European) odds format, HONGKONG = Hong Kong odds format, INDONESIAN = Indonesian odds format, MALAY = Malaysian odds format                            |
| legs              | ParlayLegRequest[]  | ❌       | Collection of parlay legs.                                                                                                                                                                                                  |
| roundRobinOptions | RoundRobinOptions[] | ❌       |                                                                                                                                                                                                                             |

# RoundRobinOptions

**Properties**

| Name               | Type   | Required | Description          |
| :----------------- | :----- | :------- | :------------------- |
| Parlay             | string | ✅       | "Parlay"             |
| TwoLegRoundRobin   | string | ✅       | "TwoLegRoundRobin"   |
| ThreeLegRoundRobin | string | ✅       | "ThreeLegRoundRobin" |
| FourLegRoundRobin  | string | ✅       | "FourLegRoundRobin"  |
| FiveLegRoundRobin  | string | ✅       | "FiveLegRoundRobin"  |
| SixLegRoundRobin   | string | ✅       | "SixLegRoundRobin"   |
| SevenLegRoundRobin | string | ✅       | "SevenLegRoundRobin" |
| EightLegRoundRobin | string | ✅       | "EightLegRoundRobin" |
