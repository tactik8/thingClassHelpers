
import { actionService } from './action.service.js'
import { jsonldHelpers as h } from '#jsonldHelpers'

export const getRecord = async (req, res) => {
    try {
        // req.user is attached by the verifyToken middleware
        
        let ref = getRefFromReq(req)

        
        
        res.status(200).json({
            message: 'Welcome to your profile!',
            user: user.record,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



function getRefFromReq(req){
    
    let record_type = req.params?.['@type'] || req.body?.['@type'] || req.params?.record_type || req.body?.record_type
    let record_id = req.params?.['@id'] || req.body?.['@id'] || req.params?.record_id || req.body?.record_id
    
    return { "@type": record_type, "@id": record_id }
    
}