// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  cancellationDetailsItem,
  cancellationDetailsItemRequest,
  cancellationDetailsItemResponse,
} from './cancellation-details-item';

/**
 * The shape of the model inside the application code - what the users use
 */
export const cancellationReason = z.object({
  code: z.string(),
  details: z.array(cancellationDetailsItem).optional(),
});

/**
 * Possible keys \:  
* correctTeam1Id
* correctTeam2Id
* correctListedPitcher1
* correctListedPitcher2
* correctSpread
* correctTotalPoints
* correctTeam1TotalPoints
* correctTeam2TotalPoints
* correctTeam1Score
* correctTeam2Score
* correctTeam1TennisSetsScore
* correctTeam2TennisSetsScore

 * @typedef  {CancellationReason} cancellationReason - Possible keys \:  
* correctTeam1Id
* correctTeam2Id
* correctListedPitcher1
* correctListedPitcher2
* correctSpread
* correctTotalPoints
* correctTeam1TotalPoints
* correctTeam2TotalPoints
* correctTeam1Score
* correctTeam2Score
* correctTeam1TennisSetsScore
* correctTeam2TennisSetsScore
 - Possible keys \:  
* correctTeam1Id
* correctTeam2Id
* correctListedPitcher1
* correctListedPitcher2
* correctSpread
* correctTotalPoints
* correctTeam1TotalPoints
* correctTeam2TotalPoints
* correctTeam1Score
* correctTeam2Score
* correctTeam1TennisSetsScore
* correctTeam2TennisSetsScore

 * @property {string} 
 * @property {CancellationDetailsItem[]} 
 */
export type CancellationReason = z.infer<typeof cancellationReason>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const cancellationReasonResponse = z
  .object({
    code: z.string(),
    details: z.array(cancellationDetailsItemResponse).optional(),
  })
  .transform((data) => ({
    code: data['code'],
    details: data['details'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const cancellationReasonRequest = z
  .object({ code: z.string().nullish(), details: z.array(cancellationDetailsItemRequest).nullish() })
  .transform((data) => ({
    code: data['code'],
    details: data['details'],
  }));