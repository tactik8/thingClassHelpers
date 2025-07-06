
import { Thing } from '../thing/thing.models.js'
import { Role } from './RoleClass.js'


export class MemberProgramTier  extends Thing {
    constructor(record_id){
      super('ProgramMembership', record_id)
    }


    // getter and setter 

    get hasTierBenefit(){
        return this.get('hasTierBenefit')
    }
    set hasTierBenefit(value){
        this.set('hasTierBenefit', value)
    }

    get hasTierRequirement(){
        return this.get('hasTierRequirement')
    }
    set hasTierRequirement(value){
        this.set('hasTierRequirement', value)
    }

    get isTierOf(){
        return this.get('isTierOf')
    }
    set isTierOf(value){
        this.set('isTierOf', value)
    }

    get membershipPointsEarned(){
        return this.get('membershipPointsEarned')
    }
    set membershipPointsEarned(value){
        this.set('membershipPointsEarned', value)
    }
    
}

