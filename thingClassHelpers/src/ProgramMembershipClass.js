
import { Thing } from '../thing/thing.models.js'
import { Role } from './RoleClass.js'


export class ProgramMembership  extends Thing {
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

    get membershipNumber(){
        return this.get('membershipNumber')
    }
    set membershipNumber(value){
        this.set('membershipNumber', value)
    }

    get program(){
        return this.get('program')
    }
    set program(value){
        this.set('program', value)
    }

    get membershipStatus(){
        return this.getMembershipStatus()
    }
    
    getMembershipStatus(date){
        date = date || new Date()
        if(!this.startDate || this.startDate > date){
            return false
        }
        if(this.endDate && this.endDate < date){
            return false
        }
        return true  
    }
    

    
    // getter and setter for member and role
    
    get member(){
        this.set('member', this.get('member') || new Role())
        return this.get('member')
    }
    set member(value){
        this.set('member', value instanceof Role ? value : new Role(value))
    }

    get startDate(){
        return this.member.get('startDate')
    }
    set startDate(value){
        return this.member.set('startDate', value)
    }
    get endDate(){
        return this.member.get('endDate')
    }
    set endDate(value){
        return this.member.set('endDate', value)
    }
    get roleName(){
        return this.member.get('roleName')
    }
    set roleName(value){
        return this.member.set('roleName', value)
    }

    
    
}

