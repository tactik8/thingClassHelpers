
import { Thing } from '../thing/thing.models.js'
import { Role } from '../role/role.models.js'


export class ProgramMembershipTier  extends Thing {
    constructor(record_id){
      super('ProgramMembershipTier', record_id)
    }
}
