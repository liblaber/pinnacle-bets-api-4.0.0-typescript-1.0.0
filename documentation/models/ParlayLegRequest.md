# ParlayLegRequest

**Properties**

| Name         | Type                       | Required | Description                                                                                                       |
| :----------- | :------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| uniqueLegId  | string                     | ❌       | Unique id of the leg. It's used to identify and match legs in the response.                                       |
| lineId       | number                     | ❌       | Line identification.                                                                                              |
| altLineId    | number                     | ❌       | Alternate line identification.                                                                                    |
| sportId      | number                     | ❌       | Sport identification.                                                                                             |
| eventId      | number                     | ❌       | Event identification.                                                                                             |
| periodNumber | number                     | ❌       | This represents the period of the match. For example, for soccer we have: 0 - Game, 1 - 1st Half and 2 - 2nd Half |
| legBetType   | ParlayLegRequestLegBetType | ❌       | Only SPREAD, MONEYLINE and TOTAL_POINTS are supported.                                                            |
| team         | string                     | ❌       | Chosen team type. This is needed only for SPREAD and MONEYLINE bet types.                                         |
| side         | ParlayLegRequestSide       | ❌       | Chosen side type. This is needed only for TOTAL_POINTS bet type.                                                  |

# ParlayLegRequestLegBetType

Only SPREAD, MONEYLINE and TOTAL_POINTS are supported.

**Properties**

| Name         | Type   | Required | Description    |
| :----------- | :----- | :------- | :------------- |
| MONEYLINE    | string | ✅       | "MONEYLINE"    |
| SPREAD       | string | ✅       | "SPREAD"       |
| TOTAL_POINTS | string | ✅       | "TOTAL_POINTS" |

# ParlayLegRequestSide

Chosen side type. This is needed only for TOTAL_POINTS bet type.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| OVER  | string | ✅       | "OVER"      |
| UNDER | string | ✅       | "UNDER"     |
