

import { thingClassHelpers } from './thingClassHelpers/thingClassHelpers.js'


function test(){
    let action = new thingClassHelpers.Action()

    action.setActive()
    console.log(JSON.stringify(action, null, 4))


    action .object = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }

    action.startTime = "2022-01-01"
    console.log(JSON.stringify(action, null, 4))

    
    console.log(action.duration)
}


test()