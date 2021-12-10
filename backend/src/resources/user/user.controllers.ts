import { Request, Response} from 'express';

export class UserController {
    
    async signin (req: Request, res: Response) {
        return res.send('Fazendo o login')
    }

    async signup (req: Request, res: Response) {
        return res.send('Criando o cadastro do usuário')
    }

}