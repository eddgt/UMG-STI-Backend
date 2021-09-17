import {Request, Response} from 'express';

import {connect} from '../database';

import {Post} from '../interface/post.interface';

class PostController{

    public post(req: Request, res: Response){
        res.json({
            texto: 'post is start'
        });
    }

    public async getPost(req: Request, res: Response): Promise<Response> {
        const conne = await connect();

        const post = await conne.query('SELECT * FROM posts');
        return res.json(post[0]);
    }

    public async createPost(req: Request, res: Response): Promise<Response> {
        const newPos: Post = req.body;
        //console.log(newPos);
        
        const conne = await connect();
        await conne.query('INSERT INTO posts SET ?', [newPos]);

        return res.json({
            text: 'publicacion creada'
        });
    }

    public async Obtener(req: Request, res: Response): Promise<Response>{

        const id_post = req.params.id;

        const conne = await connect();

        const post = await conne.query('SELECT * FROM posts WHERE id = ?',[id_post]);

        return res.json(post[0]);
    }

    public async Eliminar(req: Request, res: Response): Promise<Response>{

        const id_delete = req.params.id;
        const conne = await connect();

        await conne.query('DELETE FROM posts WHERE id = ? ', [id_delete]);

        return res.json({
            texto: 'Publicacion eliminada'
        })
    }

    public async Actualizar(req: Request, res: Response): Promise<Response> {
        const id_delete = req.params.id;
        const update: Post = req.body;
        
        const conne = await connect();

        await conne.query('UPDATE posts set ? WHERE id = ?', [update,id_delete])

        return res.json({
            message: 'post update'
        })
    }
}

export const postController = new PostController();

