import { z } from 'zod';
import { oddsFormat } from '../../common/odds-format';
import { parlayLegRequest, parlayLegRequestRequest, parlayLegRequestResponse } from './parlay-leg-request';
import { roundRobinOptions } from './round-robin-options';

/**
 * The shape of the model inside the application code - what the users use
 */
export const placeParlayBetRequest: any = z.lazy(() => {
  return z.object({
    uniqueRequestId: z.string().optional(),
    acceptBetterLine: z.boolean().optional(),
    riskAmount: z.number().optional(),
    oddsFormat: oddsFormat.optional(),
    legs: z.array(parlayLegRequest).optional(),
    roundRobinOptions: z.array(roundRobinOptions).optional(),
  });
});

/**
 * Request to place a bet
 * @typedef  {PlaceParlayBetRequest} placeParlayBetRequest - Request to place a bet - Request to place a bet
 * @property {string} - This unique id of the place bet requests. This is to support idempotent requests.
 * @property {boolean} - Whether or not to accept a bet when there is a line change in favor of the client.
 * @property {number} - Amount in client’s currency. It is always risk amount when placing Parlay bets NOTE: If round robin options is used this amount will apply for all parlays so actual amount wagered will be riskAmount X number of Parlays.
 * @property {OddsFormat} - Bet odds format.  
AMERICAN = American odds format,  
DECIMAL = Decimal (European) odds format,  
HONGKONG = Hong Kong odds format,  
INDONESIAN = Indonesian odds format,  
MALAY = Malaysian odds format 

 * @property {ParlayLegRequest[]} - Collection of parlay legs.
 * @property {RoundRobinOptions[]} 
 */
export type PlaceParlayBetRequest = z.infer<typeof placeParlayBetRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const placeParlayBetRequestResponse: any = z.lazy(() => {
  return z
    .object({
      uniqueRequestId: z.string().optional(),
      acceptBetterLine: z.boolean().optional(),
      riskAmount: z.number().optional(),
      oddsFormat: oddsFormat.optional(),
      legs: z.array(parlayLegRequestResponse).optional(),
      roundRobinOptions: z.array(roundRobinOptions).optional(),
    })
    .transform((data) => ({
      uniqueRequestId: data['uniqueRequestId'],
      acceptBetterLine: data['acceptBetterLine'],
      riskAmount: data['riskAmount'],
      oddsFormat: data['oddsFormat'],
      legs: data['legs'],
      roundRobinOptions: data['roundRobinOptions'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const placeParlayBetRequestRequest: any = z.lazy(() => {
  return z
    .object({
      uniqueRequestId: z.string().nullish(),
      acceptBetterLine: z.boolean().nullish(),
      riskAmount: z.number().nullish(),
      oddsFormat: oddsFormat.nullish(),
      legs: z.array(parlayLegRequestRequest).nullish(),
      roundRobinOptions: z.array(roundRobinOptions).nullish(),
    })
    .transform((data) => ({
      uniqueRequestId: data['uniqueRequestId'],
      acceptBetterLine: data['acceptBetterLine'],
      riskAmount: data['riskAmount'],
      oddsFormat: data['oddsFormat'],
      legs: data['legs'],
      roundRobinOptions: data['roundRobinOptions'],
    }));
});
