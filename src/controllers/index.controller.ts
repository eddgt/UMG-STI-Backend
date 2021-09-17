import {Request, Response, text} from 'express';

class IndexController{

    public index(req: Request, res: Response){
        res.json(
            {
                texto: 'API is start'
            }
        );
    }
}

export const indexController = new IndexController();