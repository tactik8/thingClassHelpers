import { jsonldHelpers as h} from "#jsonldHelpers"
import { dataHelpers as dh} from "#dataHelpers"


export const actionService = {

    getObject,
    getInstrument,
    getAgent,
    getActionStatus,
    getStartTime,
    getEndTime,
    getResult,
    getResults,
    getError,
    set,
    setObject,
    setInstrument,
    setAgent,
    setActionStatus,
    setStartTime,
    setEndTime,
    setResult,
    setResults,
    setError,
    setPotential,
    setActive,
    setCompleted,
    setFailed,
    isPotential,
    isActive,
    isCompleted,
    isFailed,
    getDuration
    
}


// Object
function getObject(actionRecord){
    return h.value.get(actionRecord, 'object')
}

function setObject(actionRecord, objectRecord){
    return h.values.set(actionRecord, 'object', objectRecord)
}


// agent
function getAgent(actionRecord){
    return h.value.get(actionRecord, 'agent')
}

function setAgent(actionRecord, objectRecord){
    return h.values.set(actionRecord, 'agent', objectRecord)
}


// Instrument
function getInstrument(actionRecord){
    return h.value.get(actionRecord, 'instrument')
}

function setInstrument(actionRecord, objectRecord){
    return h.values.set(actionRecord, 'instrument', objectRecord)
}


// actionStatus
function getActionStatus(actionRecord){
    return h.value.get(actionRecord, 'actionStatus')
}

function setActionStatus(actionRecord, objectRecord){
    return h.values.set(actionRecord, 'actionStatus', objectRecord)
}

// startTime
function getStartTime(actionRecord){
    return dh.date.toDate(h.value.get(actionRecord, 'startTime'))
}

function setStartTime(actionRecord, objectRecord){
    return h.values.set(actionRecord, 'startTime', dh.date.toDate(objectRecord))
}

// endTime
function getEndTime(actionRecord){
    return dh.date.toDate(h.value.get(actionRecord, 'endTime'), null)
}

function setEndTime(actionRecord, objectRecord){
    return h.values.set(actionRecord, 'endTime', dh.date.toDate(objectRecord))
}

// result
function getResult(actionRecord){
    return h.value.get(actionRecord, 'result')
}

function setResult(actionRecord, objectRecord){
    return h.values.set(actionRecord, 'result', objectRecord)
}

function getResults(actionRecord){
    return h.values.get(actionRecord, 'result')
}

function setResults(actionRecord, objectRecord){
    return h.values.set(actionRecord, 'result', objectRecord)
}

// error
function getError(actionRecord){
    return h.value.get(actionRecord, 'error')
}

function setError(actionRecord, objectRecord){
    return h.values.set(actionRecord, 'error', objectRecord)
}



// -----------------------------------------------------
//  Non standard properties 
// -----------------------------------------------------

function getDuration(actionRecord){
    /**
     * Gets the duration of an action in seconds
     */
    let startTime = getStartTime(actionRecord)
    if (startTime === undefined || startTime === null){ return 0 }
    let endTime = getEndTime(actionRecord) || new Date()
    try {
        let result = (endTime - startTime) / 1000
        return result
    } catch(error){
        processError("Error in getDuration", error, 0)
    }
    return result
    
}


// -----------------------------------------------------
//  Tests 
// -----------------------------------------------------

function isPotential(actionRecord){
    return getActionStatus(actionRecord) == "PotentialActionStatus"
}

function isActive(actionRecord){
    return getActionStatus(actionRecord) == "ActiveActionStatus"
}

function isCompleted(actionRecord){
    return getActionStatus(actionRecord) == "CompletedActionStatus"
}

function isFailed(actionRecord){
    return getActionStatus(actionRecord) == "FailedActionStatus"
}


// -----------------------------------------------------
//  Methods 
// -----------------------------------------------------


function set(actionRecord, otherActionRecord){
    actionRecord = setActionStatus(actionRecord, otherActionRecord.actionStatus)
    actionRecord = setResults(actionRecord, otherActionRecord.results || otherActionRecord.result)
    actionRecord = setError(actionRecord, otherActionRecord.error)
    actionRecord = setEndTime(actionRecord, new Date())
    return actionRecord
}

function setPotential(actionRecord){
    actionRecord = setActionStatus(actionRecord, "PotentialActionStatus")
    actionRecord = setStartTime(actionRecord, null)
    actionRecord = setEndTime(actionRecord, null)
    return actionRecord
}

function setActive(actionRecord){
    actionRecord = setActionStatus(actionRecord, "ActiveActionStatus")
    actionRecord = setStartTime(actionRecord, new Date())
    return actionRecord
}

function setCompleted(actionRecord, result){
    actionRecord = setActionStatus(actionRecord, "CompletedActionStatus")
    actionRecord = setStartTime(actionRecord, getStartTime(actionRecord) || new Date())
    actionRecord = setEndTime(actionRecord, new Date())
    actionRecord = setResult(actionRecord, result)
    return actionRecord
}

function setFailed(actionRecord, error){
    actionRecord = setActionStatus(actionRecord, "FailedActionStatus")
    actionRecord = setStartTime(actionRecord, getStartTime(actionRecord) || new Date())
    actionRecord = setEndTime(actionRecord, new Date())
    actionRecord = setError(actionRecord, error)
    return actionRecord
}



// -----------------------------------------------------
//  error processing 
// -----------------------------------------------------



function processError(message, error, defaultValue){
    if(defaultValue !== undefined){
        return defaultValue
    }
    throw(message + ' - ' + String(error))
}
