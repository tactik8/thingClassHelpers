
import { jsonldHelpers as h} from "#jsonldHelpers"
import { thingService as sh } from './thing.service.js' 

export class Thing {
    constructor(record_or_record_type, record_id){
        this._record = {}
        this.record_type = record_or_record_type?.["@type"] || record_or_record_type
        this.record_id = record_or_record_type?.["@id"] || record_id || h.uuid.new()
    }



    // -----------------------------------------------------
    //  Base methods 
    // -----------------------------------------------------

    toString(){
        return sh.toString(this.record)
    }
    toJSON(){
        return sh.toJSON(this.record)
    }
    toObject(){
        return sh.toObject(this.record)
    }


    // -----------------------------------------------------
    //  Property methods 
    // -----------------------------------------------------

    
    get(propertyID){
        return sh.get(this._record, propertyID)
    }
    getFirst(propertyID){
        return sh.getFirst(this._record, propertyID)
    }
    getOne(propertyID){
        return sh.getOne(this._record, propertyID)
    }
    getAll(propertyID){
        return sh.getAll(this._record, propertyID)
    }
    set(propertyID, value){
        this.record = sh.set(this._record, propertyID, value)
    }

    // getters and setters
    get record_type(){
        return sh.getRecordType(this.record)
    }
    set record_type(value){
        this.record = sh.setRecordType(this.record, value)
    }
    get record_id(){
        return sh.getRecordId(this.record)
    }
    set record_id(value){
        this.record = sh.setRecordId(this.record, value)
    }
    get record(){
        return this._record
    }
    set record(value){
        this._record = value
    }
    get ref(){
        return sh.getRef(this.record)
    }
    set ref(value){
        this.record = sh.setRef(this.record, value)
    }


    // getters and setters
    get name(){
        return this.getName(this.record)
    }
    set name(value){
        this.record = this.setName(this.record, value)
    }
    get description(){
        return sh.getDescription(this.record)
    }
    set description(value){
        this.record = sh.setDescription(this.record, value)
    }

    get url(){
        return sh.getUrl(this.record)
    }
    set url(value){
        this.record = sh.setUrl(this.record, value)
    }

    get subjectOf(){
        return sh.getSubjectOf(this.record)
    }
    set subjectOf(value){
        this.record = sh.setSubjectOf(this.record, value)
    }

    get sameAs(){
        return sh.getSameAs(this.record)
    }
    set sameAs(value){
        this.record = sh.setSameAs(this.record, value)
    }

    get identifier(){
        return sh.getIdentifier(this.record)
    }
    set identifier(value){
        this.record = sh.setIdentifier(this.record, value)
    }

    get image(){
        return sh.getImage(this.record)
    }
    set image(value){
        this.record = sh.setImage(this.record, value)
    }

    get alternateName(){
        return sh.getAlternateName(this.record)
    }
    set alternateName(value){
        this.record = sh.setAlternateName(this.record, value)
    }


}

