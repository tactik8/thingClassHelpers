
import { Thing } from '../thing/thing.models.js'
import { Role } from './RoleClass.js'


export class MemberProgram  extends Thing {
    constructor(record_id){
      super('ProgramMembership', record_id)
    }


    // getter and setter 

    get hostingOrganization(){
        return this.get('hostingOrganization')
    }
    set hostingOrganization(value){
        this.set('hostingOrganization', value)
    }

    get hasTiers(){
        return this.get('hasTiers')
    }
    set hasTiers(value){
        this.set('hasTiers', value)
    }

    
}

