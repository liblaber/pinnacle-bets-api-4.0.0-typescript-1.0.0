// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { PlaceBetRequest, placeBetRequestRequest } from './models/place-bet-request';
import { PlaceStraightBetResponse, placeStraightBetResponseResponse } from './models/place-straight-bet-response';
import { PlaceParlayBetRequest, placeParlayBetRequestRequest } from './models/place-parlay-bet-request';
import { PlaceParlayBetResponse, placeParlayBetResponseResponse } from './models/place-parlay-bet-response';
import { PlaceTeaserBetRequest, placeTeaserBetRequestRequest } from './models/place-teaser-bet-request';
import { PlaceTeaserBetResponse, placeTeaserBetResponseResponse } from './models/place-teaser-bet-response';
import {
  MultiBetRequestSpecialBetRequest,
  multiBetRequestSpecialBetRequestRequest,
} from './models/multi-bet-request-special-bet-request';
import {
  MultiBetResponseSpecialBetResponse,
  multiBetResponseSpecialBetResponseResponse,
} from './models/multi-bet-response-special-bet-response';

export class PlaceBetsService extends BaseService {
  /**
 * Place straight bet (SPREAD, MONEYLINE, TOTAL_POINTS, TEAM_TOTAL_POINTS).
Please note when the status is PENDING_ACCEPTANCE and if the live delay was applied, the response will not have betId. Client would have to call /bets by uniqueRequestId to check the status if the bet was ACCEPTED.  For more details please see [How to place a bet on live events?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-place-a-bet-on-live-events)

Make sure you handle properly the case of an unexpected error as per
 [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet)

 * @returns {Promise<HttpResponse<PlaceStraightBetResponse>>} OK
 */
  async betsStraightV2(
    body: PlaceBetRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PlaceStraightBetResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/v4/bets/straight',
      config: this.config,
      responseSchema: placeStraightBetResponseResponse,
      requestSchema: placeBetRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Make sure you handle properly the case of an unexpected error as per
 [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet)

 * @returns {Promise<HttpResponse<PlaceParlayBetResponse>>} OK
 */
  async betsParlayV2(
    body: PlaceParlayBetRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PlaceParlayBetResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/v4/bets/parlay',
      config: this.config,
      responseSchema: placeParlayBetResponseResponse,
      requestSchema: placeParlayBetRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Make sure you handle properly the case of an unexpected error as per
 [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet)

 * @returns {Promise<HttpResponse<PlaceTeaserBetResponse>>} OK
 */
  async betsTeaser(
    body: PlaceTeaserBetRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PlaceTeaserBetResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/v4/bets/teaser',
      config: this.config,
      responseSchema: placeTeaserBetResponseResponse,
      requestSchema: placeTeaserBetRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }

  /**
 * Make sure you handle properly the case of an unexpected error as per
 [How to handle error on placing a bet?](https://github.com/pinnacleapi/pinnacleapi-documentation/blob/master/FAQ.md#how-to-handle-unexpected-error-on-placing-a-bet)

 * @returns {Promise<HttpResponse<MultiBetResponseSpecialBetResponse>>} OK
 */
  async betsSpecial(
    body: MultiBetRequestSpecialBetRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<MultiBetResponseSpecialBetResponse>> {
    const request = new Request({
      method: 'POST',
      body,
      path: '/v4/bets/special',
      config: this.config,
      responseSchema: multiBetResponseSpecialBetResponseResponse,
      requestSchema: multiBetRequestSpecialBetRequestRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call(request);
  }
}
