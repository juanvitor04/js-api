import User from '../models/User.js';

class UserController{
  //store
  async store(req,res){
    try{
      const novoAluno = await User.create(req.body);
      const { id, nome, email} = novoAluno;
      return res.json({ id, nome, email});
    } catch(e){
      return res.status(400).json({
        errors:e.errors.map((err) => err.message)
      });
    }
  }
  //Index
  async index(req,res){
    try{
      const users = await User.findAll({attributes:['id','nome','email']});
      return res.json(users);
    }catch(e){
      return res.json(null);
    }
  }
  // show
  async show(req,res){
    try{
      const user = await User.findByPk(req.params.id);
      const {id,nome,email} = user;
      return res.json({id,nome,email});
    }
    catch(e){
      return res.json(null);
    }
  }
  //update
  async update(req,res){
    try{

      const user = await User.findByPk(req.userId);
      if(!user){
        return res.status(400).json({
          errors:['Usuário não existe']
        });
      }
      const novosDados = await user.update(req.body);
      const {id, nome, email} = novosDados;
      return res.json({id, nome, email});
    }
    catch(e)
    {
      return res.status(400).json({
        errors:e.errors.map((err) => err.message)
      });
    }
  }
  async delete(req,res){
    try{
      const user = await User.findByPk(req.userId);
      if(!user){
        return res.status(400).json({
          errors:['Usuário não existe']
        });
      }
      await user.destroy();
      return res.json(null);
    }
    catch(e){
      return res.status(400).json({
        errors:e.errors.map((err) => message)
      });
    }
  }
}

export default new UserController();
