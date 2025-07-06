import { Action } from './src/action/action.models.js';
import { ProgramMembership } from './src/programMembership/programMembership.models.js';
import { ProgramMembershipTier } from './src/programMembershipTier/programMembershipTier.models.js';
import { Role } from './src/role/role.models.js';
import { Thing } from './src/thing/thing.models.js';



export const thingClassHelpers = {
    Thing: Thing,
    ProgramMembership: ProgramMembership,
    ProgramMembershipTier: ProgramMembershipTier,
    Role: Role,
    Action: Action
}