import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { BettingStatusResponse, bettingStatusResponseResponse } from './models/betting-status-response';

export class BettingStatusService extends BaseService {
  /**
   * Returns current betting status. During maintenance windows betting could be disabled, you can call this operation to check the current betting status.
   * @returns {Promise<HttpResponse<BettingStatusResponse>>} OK
   */
  async betsGetBettingStatus(requestConfig?: RequestConfig): Promise<HttpResponse<BettingStatusResponse>> {
    const request = new Request({
      method: 'GET',
      path: '/v4/bets/betting-status',
      config: this.config,
      responseSchema: bettingStatusResponseResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    return this.client.call(request);
  }
}
