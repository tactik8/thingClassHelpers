
import { jsonldHelpers as h} from "#jsonldHelpers"
import { dataHelpers as dh} from "#dataHelpers"




export const thingService = {
    toString,
    toObject,
    toJSON,
    get,
    getFirst,
    getOne,
    getAll,
    set,
    getRef,
    setRef,
    getRecordType,
    setRecordType,
    getRecordId,
    setRecordId,
    getName,
    setName,
    getUrl,
    setUrl,
    getDescription,
    setDescription,
    getImage,
    setImage,
    getSameAs,
    setSameAs,
    getAdditionalType,
    setAdditionalType,
    getAlternateName,
    setAlternateName
    
}




// -----------------------------------------------------
//  Base methods 
// -----------------------------------------------------

function toString(record){
    return JSON.stringify(record, null, 4)
}

function toObject(record){
    return JSON.parse(JSON.stringify(record, null, 4))
}

function toJSON(record){
    return JSON.parse(JSON.stringify(record, null, 4))
}


// -----------------------------------------------------
//  Property methods 
// -----------------------------------------------------

function get(record, property, defaultValue){
    return h.values.get(record, property) || defaultValue
}

function getFirst(record, property, defaultValue){
    return h.value.get(record, property) || defaultValue
}

function getOne(record, property, defaultValue){
    return h.value.get(record, property) || defaultValue
}

function getAll(record, property, defaultValue){
    return h.values.get(record, property) || defaultValue
}

function set(record, property, value){
    return h.value.set(record, property, value)
}


// -----------------------------------------------------
//  Properties 
// -----------------------------------------------------



function getRef(record, defaultValue){
    return h.ref.get(record) || defaultValue
}

function setRef(record, ref){
    return h.ref.set(record, ref)
}

function getRecordType(record, defaultValue){
    return h.value.get(record, '@type') || defaultValue
}

function setRecordType(record, value){
    return h.value.set(record, '@type', value)
}

function getRecordId(record, defaultValue){
    return h.value.get('@id') || defaultValue
}

function setRecordId(record, value){
    return h.value.set(record, '@id', value)
}

function getName(record, defaultValue){
    return h.value.get(record, 'name') || defaultValue
}

function setName(record){
    return h.value.set(record, 'name', value)
}

function getUrl(record, defaultValue){
    return h.value.get(record, 'url') || defaultValue
}

function setUrl(record, value){
    return h.value.set(record, 'url', value)
}

function getDescription(record, defaultValue){
    return h.value.get(record, 'description') || defaultValue
}

function setDescription(record, value){
    return h.value.set(record, 'description', value)
}

function getImage(record, defaultValue){
    return h.value.get(record, 'image') || defaultValue
}

function setImage(record, value){
    return h.value.set(record, 'image', value)
}

function getSameAs(record, defaultValue){
    return h.value.get(record, 'sameAs') || defaultValue
}

function setSameAs(record, value){
    return h.value.set(record, 'sameAs', value)
}

function getAdditionalType(record, defaultValue){
    return h.value.get(record, 'additionalType') || defaultValue
}

function setAdditionalType(record, value){
    return h.value.set(record, 'additionalType', value)
}

function getAlternateName(record, defaultValue){
    return h.value.get(record, 'alternateName') || defaultValue
}

function setAlternateName(record, value){
    return h.value.set(record, 'alternateName', value)
}

