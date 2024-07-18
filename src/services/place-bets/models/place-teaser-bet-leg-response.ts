import { z } from 'zod';
import { placeTeaserBetLegResponseErrorCode } from './place-teaser-bet-leg-response-error-code';

/**
 * The shape of the model inside the application code - what the users use
 */
export const placeTeaserBetLegResponse: any = z.lazy(() => {
  return z.object({
    status: z.string().optional(),
    errorCode: placeTeaserBetLegResponseErrorCode.optional(),
    legId: z.string().optional(),
    lineId: z.number().optional(),
    points: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {PlaceTeaserBetLegResponse} placeTeaserBetLegResponse   
 * @property {string} - Status of the request.
 * @property {PlaceTeaserBetLegResponseErrorCode} - When Status is PROCESSED_WITH_ERROR, provides a code indicating the specific problem.

CANNOT_TEASER_LIVE_GAME = Teaser is not allowed on a live game,   
CHECK_TEASER_ERROR = The teaser is invalid, check the teaser error for more details,  
INVALID_EVENT = The game is not found in the system,  
INVALID_LEG_BET = The wager is not verified,  
INVALID_LEG_BET_TYPE = Wager type is not “teasable”, can be either Spread or Total,  
LINE_CHANGED = Wager is placed on a line that has changed,  
LINE_DOES_NOT_BELONG_TO_EVENT = There was no game found for the wager,  
OFFLINE_EVENT = Either the game is offline OR there was no game found for the wager,  
PAST_CUTOFFTIME = Wager is placed on a game after the cutoff time,  
POINTS_ARE_NOT_ADJUSTED = The teaser points were not adjusted,  
SYSTEM_ERROR_1 = System error,  
SYSTEM_ERROR_2 = System error,  
WAGER_DATA_MISSING = Wager is denied due to insufficient information available for validation,  
LINE_IS_NOT_AVAILABLE = Line is not available for the specified Teaser Leg, 
TEASER_IS_NOT_ENABLED = Teaser is not available for the specified leg, 
BETTING_SUSPENDED - Due to anomalous market circumstances bets are not currently being accepted on this line. Try again with next LineId.

 * @property {string} - Echo of the legId from the request.
 * @property {number} - Line identification that bet was placed on.
 * @property {number} - Number of points.
 */
export type PlaceTeaserBetLegResponse = z.infer<typeof placeTeaserBetLegResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const placeTeaserBetLegResponseResponse: any = z.lazy(() => {
  return z
    .object({
      status: z.string().optional(),
      errorCode: placeTeaserBetLegResponseErrorCode.optional(),
      legId: z.string().optional(),
      lineId: z.number().optional(),
      points: z.number().optional(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      legId: data['legId'],
      lineId: data['lineId'],
      points: data['points'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const placeTeaserBetLegResponseRequest: any = z.lazy(() => {
  return z
    .object({
      status: z.string().nullish(),
      errorCode: placeTeaserBetLegResponseErrorCode.nullish(),
      legId: z.string().nullish(),
      lineId: z.number().nullish(),
      points: z.number().nullish(),
    })
    .transform((data) => ({
      status: data['status'],
      errorCode: data['errorCode'],
      legId: data['legId'],
      lineId: data['lineId'],
      points: data['points'],
    }));
});
