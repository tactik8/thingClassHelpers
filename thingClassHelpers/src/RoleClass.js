
import { Thing } from '../thing/thing.models.js'


export class Role extends Thing {
    constructor(record_id){
      super('Role', record_id)
    }


    get roleName(){
        return this.get('roleName')
    }
    set roleName(value){
        this.set('roleName', value)
    }
    
    get startDate(){
        return this.get('startDate')
    }
    set startDate(value){
        this.set('startDate', value)
    }
    
    get endDate(){
        return this.get('endDate')
    }
    set endDate(value){
        this.set('endDate', value)
    }
}

