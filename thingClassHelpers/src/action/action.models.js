import { actionService  } from './action.service.js'

import { Thing } from '../thing/thing.models.js'



export class Action extends Thing {
    constructor(object) {
        super("Action", undefined);
        this.object = object;
        this.setActive()
    }

    // getter and setter
    get startTime() {
        return actionService.getStartTime(this.record)
    }
    set startTime(value) {
        this.record = actionService.setStartTime(this.record, value)
    }

    get endTime() {
        return actionService.getEndTime(this.record)
    }
    set endTime(value) {
        this.record = actionService.setEndTime(this.record, value)
    }

    get object() {
        return actionService.getObject(this.record)
    }
    set object(value) {
        this.record = actionService.setObject(this.record, value)
    }

    get result() {
        return actionService.getResult(this.record)
    }
    set result(value) {
        this.record = actionService.setResult(this.record, value)
    }

    get results() {
        return actionService.getResults(this.record)
    }
    set results(value) {
        this.record = actionService.setResults(this.record, value)
    }

    get error() {
        return actionService.getError(this.record)
    }
    set error(value) {
        this.record = actionService.setError(this.record, value)
    }

    get agent() {
        return actionService.getAgent(this.record, "startTime")
    }
    set agent(value) {
        this.record = actionService.setAgent(this.record,value)
    }
    get instrument() {
        return actionService.getInstrument(this.record)
    }
    set instrument(value) {
        this.record = actionService.setInstrument(this.record, value)
    }

    get actionStatus() {
        return actionService.getActionStatus(this.record)
    }
    set actionStatus(value) {
        this.record = actionService.setActionStatus(this.record, value)
    }

    // Shortcuts
    get status() {
        return actionService.getActionStatus(this.record)
    }
    set status(value) {
        this.record = actionService.setActionStatus(this.record, value)
    }

    get duration(){
        return actionService.getDuration(this.record)
    }

    // Tests
    isPotential() {
        return actionService.isPotential(this.record)
    }
    isActive() {
        return actionService.isActive(this.record)
    }
    isCompleted() {
        return actionService.isCompleted(this.record)
    }
    isFailed() {
        return actionService.isFailed(this.record)
    }
  

    // Methods
    setPotential(otherAction) {
        this.record = actionService.set(this.record, otherAction)
    }
    setPotential() {
        this.record = actionService.setPotential(this.record)
    }
    setActive() {
        this.record = actionService.setActive(this.record)
    }
    setCompleted(result) {
        this.record = actionService.setCompleted(this.record, result)
    }
    setFailed(error) {
        this.record = actionService.setFailed(this.record, error)
    }
}
