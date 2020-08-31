import * as data from './data.json';
import { NowRequest, NowResponse } from '@now/node';


  
export default (_req: NowRequest, res: NowResponse) => {
    res.json(data as any);
};
