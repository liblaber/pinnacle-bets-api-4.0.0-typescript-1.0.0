import { z } from 'zod';
import { parlayLegResponseStatus } from './parlay-leg-response-status';
import { parlayLegResponseErrorCode } from './parlay-leg-response-error-code';

/**
 * The shape of the model inside the application code - what the users use
 */
export const parlayLegResponse: any = z.lazy(() => {
  return z.object({
    status: parlayLegResponseStatus.optional(),
    errorCode: parlayLegResponseErrorCode.optional().nullable(),
    legId: z.string().optional(),
    lineId: z.number().optional(),
    altLineId: z.number().optional().nullable(),
    price: z.number().optional(),
    correlatedLegs: z.array(z.string()).optional(),
  });
});

/**
 * 
 * @typedef  {ParlayLegResponse} parlayLegResponse   
 * @property {ParlayLegResponseStatus} - Status of the request.
 * @property {ParlayLegResponseErrorCode} - When Status is PROCESSED_WITH_ERROR, provides a code indicating the specific problem.

CANNOT_PARLAY_LIVE_GAME = The wager is placed on Live game,  
CORRELATED = The leg is correlated with another one,  
EVENT_NO_LONGER_AVAILABLE_FOR_BETTING = The event is no longer offered,  
EVENT_NOT_OFFERED_FOR_PARLAY = The event is not offered for parlaying,  
INVALID_EVENT = Live betting is not allowed at this moment,  
INVALID_LEG_BET_TYPE = Leg bet type is not accepted for parlaying. Accepted values are SPREAD, MONEYLINE, TOTAL_POINTS,  
INVALID_PARLAY_BET = The leg did not validated due to error on Parlay Bet. Check the error PlaceParlayBet response for error details,  
LINE_CHANGED = Bet is submitted on a line that has changed,  
LINE_DOES_NOT_BELONG_TO_EVENT = LineId does not match the EventId specified in the request,  
LISTED_PITCHERS_SELECTION_ERROR = If bet was submitted with pitcher1MustStart and/or pitcher2MustStart parameters with values that are not allowed,  
ODDS_NO_LONGER_OFFERED_FOR_PARLAY_1 = Due to line change odds are not offered for parlaying,   
ODDS_NO_LONGER_OFFERED_FOR_PARLAY_2 = Due to line change odds are not offered for parlaying,   
ODDS_NO_LONGER_OFFERED_FOR_PARLAY_3 = Due to line change odds are not offered for parlaying,   
OFFLINE_EVENT = Bet is submitted on an event that is offline or with incorrect lineId,  
PAST_CUTOFFTIME = Bet is submitted on a game after the betting cutoff time,   
SYSTEM_ERROR_1 = Unexpected error,  
SYSTEM_ERROR_2 = Unexpected error,  
SYSTEM_ERROR_3 = Unexpected error,  
LINE_IS_NOT_AVAILABLE = Line is not available for the specified Parlay Leg,  
PERIOD_IS_DISALLOWED_FOR_SAME_GAME_PARLAY = Period is not allowed to be parlayed on a same event, 
BETTING_SUSPENDED - Due to anomalous market circumstances bets are not currently being accepted on this line. Try again with next LineId.

 * @property {string} - Echo of the legId from the request.
 * @property {number} - Line identification that bet was placed on.
 * @property {number} - If bet was accepted on alternate line, the altLineId will be returned.
 * @property {number} - Price that the bet was placed on.
 * @property {string[]} - If errorCode is CORRELATED will contain legIds of all correlated legs.
 */
export type ParlayLegResponse = z.infer<typeof parlayLegResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const parlayLegResponseResponse: any = z.lazy(() => {
  return z
    .object({
      status: parlayLegResponseStatus.optional(),
      errorCode: parlayLegResponseErrorCode.optional().nullable(),
      legId: z.string().optional(),
      lineId: z.number().optional(),
      altLineId: z.number().optional().nullable(),
      price: z.number().optional(),
      correlatedLegs: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      legId: data['legId'],
      lineId: data['lineId'],
      altLineId: data['altLineId'],
      price: data['price'],
      correlatedLegs: data['correlatedLegs'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const parlayLegResponseRequest: any = z.lazy(() => {
  return z
    .object({
      status: parlayLegResponseStatus.nullish(),
      errorCode: parlayLegResponseErrorCode.nullish(),
      legId: z.string().nullish(),
      lineId: z.number().nullish(),
      altLineId: z.number().nullish(),
      price: z.number().nullish(),
      correlatedLegs: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      legId: data['legId'],
      lineId: data['lineId'],
      altLineId: data['altLineId'],
      price: data['price'],
      correlatedLegs: data['correlatedLegs'],
    }));
});
