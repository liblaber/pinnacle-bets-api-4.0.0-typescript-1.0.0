import { z } from 'zod';
import { straightBetV4, straightBetV4Request, straightBetV4Response } from './straight-bet-v4';
import { parlayBet, parlayBetRequest, parlayBetResponse } from './parlay-bet';
import { teaserBet, teaserBetRequest, teaserBetResponse } from './teaser-bet';
import { specialBet, specialBetRequest, specialBetResponse } from './special-bet';
import { manualBet, manualBetRequest, manualBetResponse } from './manual-bet';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getBetsByTypeResponseV4: any = z.lazy(() => {
  return z.object({
    moreAvailable: z.boolean().optional(),
    pageSize: z.number().optional(),
    fromRecord: z.number().optional(),
    toRecord: z.number().optional(),
    straightBets: z.array(straightBetV4).optional(),
    parlayBets: z.array(parlayBet).optional(),
    teaserBets: z.array(teaserBet).optional(),
    specialBets: z.array(specialBet).optional(),
    manualBets: z.array(manualBet).optional(),
  });
});

/**
 *
 * @typedef  {GetBetsByTypeResponseV4} getBetsByTypeResponseV4
 * @property {boolean} - Whether there are more pages available.
 * @property {number} - Page size. Default is 1000.
 * @property {number} - Starting record number of the result set. Records start at zero
 * @property {number} - Ending record number of the result set.
 * @property {StraightBetV4[]} - A collection of placed straight bets.
 * @property {ParlayBet[]} - A collection of placed parlay bets.
 * @property {TeaserBet[]} - A collection of placed teaser bets.
 * @property {SpecialBet[]} - A collection of placed special bets.
 * @property {ManualBet[]} - A collection of placed manual bets.
 */
export type GetBetsByTypeResponseV4 = z.infer<typeof getBetsByTypeResponseV4>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getBetsByTypeResponseV4Response: any = z.lazy(() => {
  return z
    .object({
      moreAvailable: z.boolean().optional(),
      pageSize: z.number().optional(),
      fromRecord: z.number().optional(),
      toRecord: z.number().optional(),
      straightBets: z.array(straightBetV4Response).optional(),
      parlayBets: z.array(parlayBetResponse).optional(),
      teaserBets: z.array(teaserBetResponse).optional(),
      specialBets: z.array(specialBetResponse).optional(),
      manualBets: z.array(manualBetResponse).optional(),
    })
    .transform((data) => ({
      moreAvailable: data['moreAvailable'],
      pageSize: data['pageSize'],
      fromRecord: data['fromRecord'],
      toRecord: data['toRecord'],
      straightBets: data['straightBets'],
      parlayBets: data['parlayBets'],
      teaserBets: data['teaserBets'],
      specialBets: data['specialBets'],
      manualBets: data['manualBets'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getBetsByTypeResponseV4Request: any = z.lazy(() => {
  return z
    .object({
      moreAvailable: z.boolean().nullish(),
      pageSize: z.number().nullish(),
      fromRecord: z.number().nullish(),
      toRecord: z.number().nullish(),
      straightBets: z.array(straightBetV4Request).nullish(),
      parlayBets: z.array(parlayBetRequest).nullish(),
      teaserBets: z.array(teaserBetRequest).nullish(),
      specialBets: z.array(specialBetRequest).nullish(),
      manualBets: z.array(manualBetRequest).nullish(),
    })
    .transform((data) => ({
      moreAvailable: data['moreAvailable'],
      pageSize: data['pageSize'],
      fromRecord: data['fromRecord'],
      toRecord: data['toRecord'],
      straightBets: data['straightBets'],
      parlayBets: data['parlayBets'],
      teaserBets: data['teaserBets'],
      specialBets: data['specialBets'],
      manualBets: data['manualBets'],
    }));
});
