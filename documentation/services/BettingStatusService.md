# BettingStatusService

A list of all methods in the `BettingStatusService` service. Click on the method name to view detailed information about that method.

| Methods                                         | Description                                                                                                                                            |
| :---------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bets_GetBettingStatus](#bets_getbettingstatus) | Returns current betting status. During maintenance windows betting could be disabled, you can call this operation to check the current betting status. |

## Bets_GetBettingStatus

Returns current betting status. During maintenance windows betting could be disabled, you can call this operation to check the current betting status.

- HTTP Method: `GET`
- Endpoint: `/v4/bets/betting-status`

**Return Type**

`BettingStatusResponse`

**Example Usage Code Snippet**

```typescript
import { PinnacleBets } from 'pinnacle_bets';

(async () => {
  const pinnacleBets = new PinnacleBets({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
  });

  const { data } = await pinnacleBets.bettingStatus.betsGetBettingStatus();

  console.log(data);
})();
```
