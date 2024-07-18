# GetBetsByTypeResponseV4

**Properties**

| Name          | Type            | Required | Description                                                     |
| :------------ | :-------------- | :------- | :-------------------------------------------------------------- |
| moreAvailable | boolean         | ❌       | Whether there are more pages available.                         |
| pageSize      | number          | ❌       | Page size. Default is 1000.                                     |
| fromRecord    | number          | ❌       | Starting record number of the result set. Records start at zero |
| toRecord      | number          | ❌       | Ending record number of the result set.                         |
| straightBets  | StraightBetV4[] | ❌       | A collection of placed straight bets.                           |
| parlayBets    | ParlayBet[]     | ❌       | A collection of placed parlay bets.                             |
| teaserBets    | TeaserBet[]     | ❌       | A collection of placed teaser bets.                             |
| specialBets   | SpecialBet[]    | ❌       | A collection of placed special bets.                            |
| manualBets    | ManualBet[]     | ❌       | A collection of placed manual bets.                             |
