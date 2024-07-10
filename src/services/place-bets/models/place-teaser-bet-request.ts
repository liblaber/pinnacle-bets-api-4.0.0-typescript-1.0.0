// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { oddsFormat } from '../../common/odds-format';
import { teaserBetLeg, teaserBetLegRequest, teaserBetLegResponse } from './teaser-bet-leg';

/**
 * The shape of the model inside the application code - what the users use
 */
export const placeTeaserBetRequest = z.object({
  uniqueRequestId: z.string().optional(),
  teaserId: z.number().optional(),
  oddsFormat: oddsFormat.optional(),
  winRiskStake: z.string().optional(),
  stake: z.number().optional(),
  legs: z.array(teaserBetLeg).optional(),
});

/**
 * 
 * @typedef  {PlaceTeaserBetRequest} placeTeaserBetRequest   
 * @property {string} - Client generated GUID for uniquely identifying the bet.
 * @property {number} - Unique identifier. Teaser details can be retrieved from a call to Get Teaser Groups endpoint.
 * @property {OddsFormat} - Bet odds format.  
AMERICAN = American odds format,  
DECIMAL = Decimal (European) odds format,  
HONGKONG = Hong Kong odds format,  
INDONESIAN = Indonesian odds format,  
MALAY = Malaysian odds format 

 * @property {string} - Whether the stake amount is risk or win amount.
 * @property {number} - amount in clientâ€™s currency.
 * @property {TeaserBetLeg[]} - Collection of legs.
 */
export type PlaceTeaserBetRequest = z.infer<typeof placeTeaserBetRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const placeTeaserBetRequestResponse = z
  .object({
    uniqueRequestId: z.string().optional(),
    teaserId: z.number().optional(),
    oddsFormat: oddsFormat.optional(),
    winRiskStake: z.string().optional(),
    stake: z.number().optional(),
    legs: z.array(teaserBetLegResponse).optional(),
  })
  .transform((data) => ({
    uniqueRequestId: data['uniqueRequestId'],
    teaserId: data['teaserId'],
    oddsFormat: data['oddsFormat'],
    winRiskStake: data['winRiskStake'],
    stake: data['stake'],
    legs: data['legs'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const placeTeaserBetRequestRequest = z
  .object({
    uniqueRequestId: z.string().nullish(),
    teaserId: z.number().nullish(),
    oddsFormat: oddsFormat.nullish(),
    winRiskStake: z.string().nullish(),
    stake: z.number().nullish(),
    legs: z.array(teaserBetLegRequest).nullish(),
  })
  .transform((data) => ({
    uniqueRequestId: data['uniqueRequestId'],
    teaserId: data['teaserId'],
    oddsFormat: data['oddsFormat'],
    winRiskStake: data['winRiskStake'],
    stake: data['stake'],
    legs: data['legs'],
  }));
