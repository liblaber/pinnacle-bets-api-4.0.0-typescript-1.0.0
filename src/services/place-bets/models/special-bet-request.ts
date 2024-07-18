import { z } from 'zod';
import { oddsFormat } from '../../common/odds-format';
import { specialBetRequestWinRiskStake } from './special-bet-request-win-risk-stake';

/**
 * The shape of the model inside the application code - what the users use
 */
export const specialBetRequest: any = z.lazy(() => {
  return z.object({
    uniqueRequestId: z.string().optional(),
    acceptBetterLine: z.boolean().optional(),
    oddsFormat: oddsFormat.optional(),
    stake: z.number().optional(),
    winRiskStake: specialBetRequestWinRiskStake.optional(),
    lineId: z.number().optional(),
    specialId: z.number().optional(),
    contestantId: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {SpecialBetRequest} specialBetRequest   
 * @property {string} - This unique id of the place bet requests. This is to support idempotent requests.
 * @property {boolean} - Whether or not to accept a bet when there is a line change in favor of the client.
 * @property {OddsFormat} - Bet odds format.  
AMERICAN = American odds format,  
DECIMAL = Decimal (European) odds format,  
HONGKONG = Hong Kong odds format,  
INDONESIAN = Indonesian odds format,  
MALAY = Malaysian odds format 

 * @property {number} - amount in client’s currency.
 * @property {SpecialBetRequestWinRiskStake} - Whether the stake amount is risk or win amount.
 * @property {number} - Line identification.
 * @property {number} - Special identification.
 * @property {number} - Contestant identification.
 */
export type SpecialBetRequest = z.infer<typeof specialBetRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const specialBetRequestResponse: any = z.lazy(() => {
  return z
    .object({
      uniqueRequestId: z.string().optional(),
      acceptBetterLine: z.boolean().optional(),
      oddsFormat: oddsFormat.optional(),
      stake: z.number().optional(),
      winRiskStake: specialBetRequestWinRiskStake.optional(),
      lineId: z.number().optional(),
      specialId: z.number().optional(),
      contestantId: z.number().optional(),
    })
    .transform((data) => ({
      uniqueRequestId: data['uniqueRequestId'],
      acceptBetterLine: data['acceptBetterLine'],
      oddsFormat: data['oddsFormat'],
      stake: data['stake'],
      winRiskStake: data['winRiskStake'],
      lineId: data['lineId'],
      specialId: data['specialId'],
      contestantId: data['contestantId'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const specialBetRequestRequest: any = z.lazy(() => {
  return z
    .object({
      uniqueRequestId: z.string().nullish(),
      acceptBetterLine: z.boolean().nullish(),
      oddsFormat: oddsFormat.nullish(),
      stake: z.number().nullish(),
      winRiskStake: specialBetRequestWinRiskStake.nullish(),
      lineId: z.number().nullish(),
      specialId: z.number().nullish(),
      contestantId: z.number().nullish(),
    })
    .transform((data) => ({
      uniqueRequestId: data['uniqueRequestId'],
      acceptBetterLine: data['acceptBetterLine'],
      oddsFormat: data['oddsFormat'],
      stake: data['stake'],
      winRiskStake: data['winRiskStake'],
      lineId: data['lineId'],
      specialId: data['specialId'],
      contestantId: data['contestantId'],
    }));
});
