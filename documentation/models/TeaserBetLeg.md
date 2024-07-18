# TeaserBetLeg

**Properties**

| Name    | Type                | Required | Description                                                      |
| :------ | :------------------ | :------- | :--------------------------------------------------------------- |
| legId   | string              | ❌       | Client generated GUID for uniquely identifying the leg.          |
| betType | TeaserBetLegBetType | ❌       | Leg bet type can be SPREAD or TOTAL_POINTS                       |
| lineId  | number              | ❌       | Unique identifier.                                               |
| eventId | number              | ❌       | Unique identifier.                                               |
| team    | string              | ❌       | Team being bet on for a spread line.                             |
| side    | TeaserBetLegSide    | ❌       | Chosen side type. This is needed only for TOTAL_POINTS bet type. |

# TeaserBetLegBetType

Leg bet type can be SPREAD or TOTAL_POINTS

**Properties**

| Name         | Type   | Required | Description    |
| :----------- | :----- | :------- | :------------- |
| SPREAD       | string | ✅       | "SPREAD"       |
| TOTAL_POINTS | string | ✅       | "TOTAL_POINTS" |

# TeaserBetLegSide

Chosen side type. This is needed only for TOTAL_POINTS bet type.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| OVER  | string | ✅       | "OVER"      |
| UNDER | string | ✅       | "UNDER"     |
