// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const team = z.enum(['TEAM1', 'TEAM2', 'DRAW']);

export type Team = z.infer<typeof team>;
