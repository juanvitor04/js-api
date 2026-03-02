import Aluno from '../models/Aluno.js';

class HomeController{
  async index(req,res){
    const novoAluno = await Aluno.create({
      nome:'Carlos',
      sobrenome:'Prazeres',
      email:'vitor@gmail.com',
      idade:21,
      peso:56,
      altura:1.7
    });
    res.json(novoAluno);
  }
}
export default new HomeController();
