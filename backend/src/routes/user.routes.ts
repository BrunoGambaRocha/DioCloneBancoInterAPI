import { Router } from 'express';

const userRouter = Router();

userRouter.post('/signin', (request, response) => {
	return response.send('Fazendo o login')
})

userRouter.post('/signup', (request, response) => {
	return response.send('Criando o cadastro do usuário')
})

export default userRouter;