import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { GetBetsByTypeResponseV4, getBetsByTypeResponseV4Response } from './models/get-bets-by-type-response-v4';
import { BetsGetBetsByTypeV4Params } from './request-params';

export class GetBetsService extends BaseService {
  /**
 * Returns bets. 

### Get running bets by time range:
```
https://api.pinnacle.com/v4/bets?betlist=RUNNING&fromDate=2017-11-21T00:00:00Z&toDate=2017-11-29T00:00:00Z
```
Running bets are queried by *placedAt* date time


### Get settled bets by time range:
  
```
https://api.pinnacle.com/v4/bets?betlist=SETTLED&fromDate=2015-12-28T00:00:00Z&toDate=2015-12-29T00:00:00Z
```
Settled bets are queried by *settledAt* date time
https://api.pinnacle.com/v4/bets?betlist=SETTLED&fromDate=2017-11-20T00:00:00Z&toDate=2017-11-23T00:00:00Z


### Get settled cancelled bets by time range:
  
```
https://api.pinnacle.com/v4/bets?betList=SETTLED&fromDate=2018-03-01&toDate=2018-03-28&betStatuses=CANCELLED
```


### Get bets by bet ids:

```
https://api.pinnacle.com/v4/bets?betIds=775856112,775856113,775856114
```

### Get bets by uniqueRequestIds:

```
https://api.pinnacle.com/v4/bets?uniqueRequestIds=62335222-dae4-479a-8c05-46440ccdd3bb,42335222-dae4-479a-8c05-46440ccdd3bb
```

 * @param {Betlist} [betlist] - Type of bet list to return. Not needed when betids is submitted.
 * @param {BetStatuses[]} [betStatuses] - Type of bet statues to return. This works only in conjustion with betlist, as additional filter.
 * @param {string} [fromDate] - Start date of the requested period. Required when betlist parameter is submitted. Start date can be up to 30 days in the past. Expected format is ISO8601 - can be set to just date or date and time.

 * @param {string} [toDate] - End date of the requested period. Required when betlist parameter is submitted. Expected format is ISO8601 - can be set to just date or date and time.  toDate value is exclusive, meaning it cannot be equal to fromDate.

 * @param {SortDir} [sortDir] - Sort direction by postedAt/settledAt. Respected only when querying by date range.
 * @param {number} [pageSize] - Page size in case. Max is 1000. Respected only when querying by date range.
 * @param {number} [fromRecord] - Starting record (inclusive) of the result. Respected only when querying by date range. To fetch next page set it to toRecord+1 
 * @param {number[]} [betids] - A comma separated list of bet ids. When betids is submitted, no other parameter is necessary. Maximum is 100 ids. Works for all non settled bets and all bets settled in the last 30 days.
 * @param {string[]} [uniqueRequestIds] - A comma separated list of `uniqueRequestId` from the place bet request. If specified, it's highest priority, all other parameters are ignored. Maximum is 10 ids. If client has bet id, preferred way is to use `betIds` query parameter, you can use `uniqueRequestIds` when you do not  have bet id. 
That are 2 cases when client may not have a bet id:

1. When you bet on live event with live delay, place bet response in that case does not return bet id, so client can query bet status by `uniqueRequestIds`.
2. In case of any network issues when client is not sure what happened with his place bet request. Empty response means that the bet was not placed. Please check [Deduplication section](https://www.pinnacle.com/de/api/manual#overview) for more details.

Note that there is a restriction: querying by uniqueRequestIds  is supported for straight and  special bets and only up to 30 min from the moment the bet was place. 

 * @param {BetsGetBetsByTypeV4BetType[]} [betType] - A comma separated list of bet types.
 * @returns {Promise<HttpResponse<GetBetsByTypeResponseV4>>} OK
 */
  async betsGetBetsByTypeV4(
    params?: BetsGetBetsByTypeV4Params,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetBetsByTypeResponseV4>> {
    const request = new Request({
      method: 'GET',
      path: '/v4/bets',
      config: this.config,
      responseSchema: getBetsByTypeResponseV4Response,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addQueryParam('betlist', params?.betlist);
    request.addQueryParam('betStatuses', params?.betStatuses);
    request.addQueryParam('fromDate', params?.fromDate);
    request.addQueryParam('toDate', params?.toDate);
    request.addQueryParam('sortDir', params?.sortDir);
    request.addQueryParam('pageSize', params?.pageSize);
    request.addQueryParam('fromRecord', params?.fromRecord);
    request.addQueryParam('betids', params?.betids);
    request.addQueryParam('uniqueRequestIds', params?.uniqueRequestIds);
    request.addQueryParam('betType', params?.betType);
    return this.client.call(request);
  }
}
