// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const placeBetRequestSide = z.enum(['OVER', 'UNDER']);

export type PlaceBetRequestSide = z.infer<typeof placeBetRequestSide>;
