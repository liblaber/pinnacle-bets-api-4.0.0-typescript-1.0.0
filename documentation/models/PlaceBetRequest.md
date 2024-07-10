# PlaceBetRequest

Request to place a bet.

**Properties**

| Name             | Type                        | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :--------------- | :-------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| oddsFormat       | OddsFormat                  | ❌       | Bet odds format. AMERICAN = American odds format, DECIMAL = Decimal (European) odds format, HONGKONG = Hong Kong odds format, INDONESIAN = Indonesian odds format, MALAY = Malaysian odds format                                                                                                                                                                                                                                              |
| uniqueRequestId  | string                      | ❌       | This is a Unique ID for PlaceBet requests. This is to support idempotent requests.                                                                                                                                                                                                                                                                                                                                                            |
| acceptBetterLine | boolean                     | ❌       | Whether or not to accept a bet when there is a line change in favor of the client.                                                                                                                                                                                                                                                                                                                                                            |
| stake            | number                      | ❌       | amount in clientâ€™s currency.                                                                                                                                                                                                                                                                                                                                                                                                               |
| winRiskStake     | PlaceBetRequestWinRiskStake | ❌       | Whether the stake amount is risk or win amount.                                                                                                                                                                                                                                                                                                                                                                                               |
| lineId           | number                      | ❌       | Line identification.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| altLineId        | number                      | ❌       | Alternate line identification.                                                                                                                                                                                                                                                                                                                                                                                                                |
| fillType         | FillType                    | ❌       | NORMAL - bet will be placed on specified stake. FILLANDKILL - If the stake is over the max limit, bet will be placed on max limit, otherwise it will be placed on specified stake. FILLMAXLIMIT - bet will be places on max limit, stake amount will be ignored. Please note that maximum limits can change at any moment, which may result in risking more than anticipated. This option is replacement of isMaxStakeBet from v1/bets/place' |
| sportId          | number                      | ❌       |                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| eventId          | number                      | ❌       |                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| periodNumber     | number                      | ❌       |                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| betType          | PlaceBetRequestBetType      | ❌       | Bet type.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| team             | Team                        | ❌       | Team type.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| side             | PlaceBetRequestSide         | ❌       | Side type.                                                                                                                                                                                                                                                                                                                                                                                                                                    |

# PlaceBetRequestWinRiskStake

Whether the stake amount is risk or win amount.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| WIN  | string | ✅       | "WIN"       |
| RISK | string | ✅       | "RISK"      |

# FillType

NORMAL - bet will be placed on specified stake. FILLANDKILL - If the stake is over the max limit, bet will be placed on max limit, otherwise it will be placed on specified stake. FILLMAXLIMIT - bet will be places on max limit, stake amount will be ignored. Please note that maximum limits can change at any moment, which may result in risking more than anticipated. This option is replacement of isMaxStakeBet from v1/bets/place'

**Properties**

| Name         | Type   | Required | Description    |
| :----------- | :----- | :------- | :------------- |
| NORMAL       | string | ✅       | "NORMAL"       |
| FILLANDKILL  | string | ✅       | "FILLANDKILL"  |
| FILLMAXLIMIT | string | ✅       | "FILLMAXLIMIT" |

# PlaceBetRequestBetType

Bet type.

**Properties**

| Name              | Type   | Required | Description         |
| :---------------- | :----- | :------- | :------------------ |
| MONEYLINE         | string | ✅       | "MONEYLINE"         |
| TEAM_TOTAL_POINTS | string | ✅       | "TEAM_TOTAL_POINTS" |
| SPREAD            | string | ✅       | "SPREAD"            |
| TOTAL_POINTS      | string | ✅       | "TOTAL_POINTS"      |

# Team

Team type.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| TEAM1 | string | ✅       | "TEAM1"     |
| TEAM2 | string | ✅       | "TEAM2"     |
| DRAW  | string | ✅       | "DRAW"      |

# PlaceBetRequestSide

Side type.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| OVER  | string | ✅       | "OVER"      |
| UNDER | string | ✅       | "UNDER"     |

<!-- This file was generated by liblab | https://liblab.com/ -->
