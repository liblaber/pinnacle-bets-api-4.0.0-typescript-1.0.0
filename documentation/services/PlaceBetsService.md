# PlaceBetsService

A list of all methods in the `PlaceBetsService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Bets_StraightV2](#bets_straightv2) | Place straight bet (SPREAD, MONEYLINE, TOTAL_POINTS, TEAM_TOTAL_POINTS). Please note when the status is PENDING_ACCEPTANCE and if the live delay was applied, the response will not have betId. Client would have to call /bets by uniqueRequestId to check the status if the bet was ACCEPTED. For more details please see [How to place a bet on live events?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-place-a-bet-on-live-events) Make sure you handle properly the case of an unexpected error as per [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet) |
| [Bets_ParlayV2](#bets_parlayv2)     | Make sure you handle properly the case of an unexpected error as per [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Bets_Teaser](#bets_teaser)         | Make sure you handle properly the case of an unexpected error as per [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Bets_Special](#bets_special)       | Make sure you handle properly the case of an unexpected error as per [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Bets_StraightV2

Place straight bet (SPREAD, MONEYLINE, TOTAL_POINTS, TEAM_TOTAL_POINTS). Please note when the status is PENDING_ACCEPTANCE and if the live delay was applied, the response will not have betId. Client would have to call /bets by uniqueRequestId to check the status if the bet was ACCEPTED. For more details please see [How to place a bet on live events?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-place-a-bet-on-live-events) Make sure you handle properly the case of an unexpected error as per [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet)

- HTTP Method: `POST`
- Endpoint: `/v4/bets/straight`

**Parameters**

| Name | Type                                            | Required | Description       |
| :--- | :---------------------------------------------- | :------- | :---------------- |
| body | [PlaceBetRequest](../models/PlaceBetRequest.md) | ✅       | The request body. |

**Return Type**

`PlaceStraightBetResponse`

**Example Usage Code Snippet**

```typescript
import { PinnacleBets, PlaceBetRequest } from 'pinnacle_bets';

(async () => {
  const pinnacleBets = new PinnacleBets({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
  });

  const oddsFormat = OddsFormat.AMERICAN;

  const placeBetRequestWinRiskStake = PlaceBetRequestWinRiskStake.WIN;

  const fillType = FillType.NORMAL;

  const placeBetRequestBetType = PlaceBetRequestBetType.MONEYLINE;

  const team = Team.TEAM1;

  const placeBetRequestSide = PlaceBetRequestSide.OVER;

  const input: PlaceBetRequest = {
    oddsFormat: oddsFormat,
    uniqueRequestId: 'd5cc50e4-284d-4d50-8d49-429bdc4f2a48',
    acceptBetterLine: true,
    stake: 10.5,
    winRiskStake: placeBetRequestWinRiskStake,
    lineId: 420921914,
    altLineId: 8,
    fillType: fillType,
    sportId: 29,
    eventId: 757504261,
    periodNumber: 2,
    betType: placeBetRequestBetType,
    team: team,
    side: placeBetRequestSide,
  };

  const { data } = await pinnacleBets.placeBets.betsStraightV2(input);

  console.log(data);
})();
```

## Bets_ParlayV2

Make sure you handle properly the case of an unexpected error as per [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet)

- HTTP Method: `POST`
- Endpoint: `/v4/bets/parlay`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [PlaceParlayBetRequest](../models/PlaceParlayBetRequest.md) | ✅       | The request body. |

**Return Type**

`PlaceParlayBetResponse`

**Example Usage Code Snippet**

```typescript
import { ParlayLegRequest, PinnacleBets, PlaceParlayBetRequest } from 'pinnacle_bets';

(async () => {
  const pinnacleBets = new PinnacleBets({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
  });

  const oddsFormat = OddsFormat.AMERICAN;

  const parlayLegRequestLegBetType = ParlayLegRequestLegBetType.MONEYLINE;

  const parlayLegRequestSide = ParlayLegRequestSide.OVER;

  const parlayLegRequest: ParlayLegRequest = {
    uniqueLegId: 'CFAD8ACF-E410-437C-8F0F-33611F565981',
    lineId: 419715968,
    altLineId: 8,
    sportId: 29,
    eventId: 758023991,
    periodNumber: 2,
    legBetType: parlayLegRequestLegBetType,
    team: 'TEAM1',
    side: parlayLegRequestSide,
  };

  const roundRobinOptions = RoundRobinOptions.Parlay;

  const input: PlaceParlayBetRequest = {
    uniqueRequestId: 'a9eb2eb1-13a5-4600-9f1b-4859379cdec4',
    acceptBetterLine: true,
    riskAmount: 10.5,
    oddsFormat: oddsFormat,
    legs: [parlayLegRequest],
    roundRobinOptions: [roundRobinOptions],
  };

  const { data } = await pinnacleBets.placeBets.betsParlayV2(input);

  console.log(data);
})();
```

## Bets_Teaser

Make sure you handle properly the case of an unexpected error as per [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet)

- HTTP Method: `POST`
- Endpoint: `/v4/bets/teaser`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [PlaceTeaserBetRequest](../models/PlaceTeaserBetRequest.md) | ✅       | The request body. |

**Return Type**

`PlaceTeaserBetResponse`

**Example Usage Code Snippet**

```typescript
import { PinnacleBets, PlaceTeaserBetRequest, TeaserBetLeg } from 'pinnacle_bets';

(async () => {
  const pinnacleBets = new PinnacleBets({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
  });

  const oddsFormat = OddsFormat.AMERICAN;

  const teaserBetLegBetType = TeaserBetLegBetType.SPREAD;

  const teaserBetLegSide = TeaserBetLegSide.OVER;

  const teaserBetLeg: TeaserBetLeg = {
    legId: '10924E23-A2FE-4317-BFFD-80504675F554',
    betType: teaserBetLegBetType,
    lineId: 8,
    eventId: 1,
    team: 'team',
    side: teaserBetLegSide,
  };

  const input: PlaceTeaserBetRequest = {
    uniqueRequestId: '10924e23-a2fe-4317-bffd-80504675f554',
    teaserId: 1,
    oddsFormat: oddsFormat,
    winRiskStake: 'winRiskStake',
    stake: 2.37,
    legs: [teaserBetLeg],
  };

  const { data } = await pinnacleBets.placeBets.betsTeaser(input);

  console.log(data);
})();
```

## Bets_Special

Make sure you handle properly the case of an unexpected error as per [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet)

- HTTP Method: `POST`
- Endpoint: `/v4/bets/special`

**Parameters**

| Name | Type                                                                              | Required | Description       |
| :--- | :-------------------------------------------------------------------------------- | :------- | :---------------- |
| body | [MultiBetRequestSpecialBetRequest](../models/MultiBetRequestSpecialBetRequest.md) | ✅       | The request body. |

**Return Type**

`MultiBetResponseSpecialBetResponse`

**Example Usage Code Snippet**

```typescript
import { MultiBetRequestSpecialBetRequest, PinnacleBets, SpecialBetRequest } from 'pinnacle_bets';

(async () => {
  const pinnacleBets = new PinnacleBets({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
  });

  const oddsFormat = OddsFormat.AMERICAN;

  const specialBetRequestWinRiskStake = SpecialBetRequestWinRiskStake.WIN;

  const specialBetRequest: SpecialBetRequest = {
    uniqueRequestId: '10924e23-a2fe-4317-bffd-80504675f554',
    acceptBetterLine: true,
    oddsFormat: oddsFormat,
    stake: 10.5,
    winRiskStake: specialBetRequestWinRiskStake,
    lineId: 51024304,
    specialId: 726394409,
    contestantId: 726394411,
  };

  const input: MultiBetRequestSpecialBetRequest = {
    bets: [specialBetRequest],
  };

  const { data } = await pinnacleBets.placeBets.betsSpecial(input);

  console.log(data);
})();
```
