# SpecialBetRequest

**Properties**

| Name             | Type                          | Required | Description                                                                                                                                                                                      |
| :--------------- | :---------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uniqueRequestId  | string                        | ❌       | This unique id of the place bet requests. This is to support idempotent requests.                                                                                                                |
| acceptBetterLine | boolean                       | ❌       | Whether or not to accept a bet when there is a line change in favor of the client.                                                                                                               |
| oddsFormat       | OddsFormat                    | ❌       | Bet odds format. AMERICAN = American odds format, DECIMAL = Decimal (European) odds format, HONGKONG = Hong Kong odds format, INDONESIAN = Indonesian odds format, MALAY = Malaysian odds format |
| stake            | number                        | ❌       | amount in client’s currency.                                                                                                                                                                     |
| winRiskStake     | SpecialBetRequestWinRiskStake | ❌       | Whether the stake amount is risk or win amount.                                                                                                                                                  |
| lineId           | number                        | ❌       | Line identification.                                                                                                                                                                             |
| specialId        | number                        | ❌       | Special identification.                                                                                                                                                                          |
| contestantId     | number                        | ❌       | Contestant identification.                                                                                                                                                                       |

# SpecialBetRequestWinRiskStake

Whether the stake amount is risk or win amount.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| WIN  | string | ✅       | "WIN"       |
| RISK | string | ✅       | "RISK"      |
