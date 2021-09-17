import {Router} from 'express'

import {postController} from '../controllers/post.controller'


class PostRoutes{

    public router = Router();

    constructor(){
        this.config();
    }


    config (): void{
        // this.router.get('/',postController.post)

        this.router.get('/',postController.getPost);

        this.router.post('/',postController.createPost);

        this.router.get('/:id', postController.Obtener)

        this.router.delete('/:id',postController.Eliminar);

        this.router.put('/:id',postController.Actualizar);
    }


}

const postRoutes = new PostRoutes();

export default postRoutes.router;
