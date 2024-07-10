// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const parlayLegResponseStatus = z.enum(['PROCESSED_WITH_ERROR', 'VALID']);

export type ParlayLegResponseStatus = z.infer<typeof parlayLegResponseStatus>;
