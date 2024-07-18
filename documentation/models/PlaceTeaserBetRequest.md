# PlaceTeaserBetRequest

**Properties**

| Name            | Type           | Required | Description                                                                                                                                                                                      |
| :-------------- | :------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uniqueRequestId | string         | ❌       | Client generated GUID for uniquely identifying the bet.                                                                                                                                          |
| teaserId        | number         | ❌       | Unique identifier. Teaser details can be retrieved from a call to Get Teaser Groups endpoint.                                                                                                    |
| oddsFormat      | OddsFormat     | ❌       | Bet odds format. AMERICAN = American odds format, DECIMAL = Decimal (European) odds format, HONGKONG = Hong Kong odds format, INDONESIAN = Indonesian odds format, MALAY = Malaysian odds format |
| winRiskStake    | string         | ❌       | Whether the stake amount is risk or win amount.                                                                                                                                                  |
| stake           | number         | ❌       | amount in client’s currency.                                                                                                                                                                     |
| legs            | TeaserBetLeg[] | ❌       | Collection of legs.                                                                                                                                                                              |
