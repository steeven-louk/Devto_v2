import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import AuthFooter from '../../components/authFooter'

const Register = ({auth}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      
    const navigate = useNavigate()
   
    const userRegister = (e) =>{
        e.preventDefault();
        

        const validate = ()=>{
            if(name || email || password === '') {
                console.log('veuillez remplir tout les champs');
                return false;
          }
          return true;
    }

    if(validate){
        localStorage.setItem('name',JSON.stringify(name));
        localStorage.setItem('email', JSON.stringify(email));
        auth(true);

        
        navigate('/');
    }
}


  return (
    <>
        <div className='register_container'>
        <div className="container">
        <div className="header">
        <h1>Bienvenue dans la communauté DEV 👩‍💻👨‍💻</h1>
            <p>DEV Community 👩‍💻👨‍💻 est une communauté de 987 598 développeurs incroyables</p>
            <br />

            <p>Vous avez déjà un compte? <a href='../auth/Login.jsx'>Connectez-vous .</a></p>

        </div>
           
            <form onSubmit={userRegister}>
            <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name='nom' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" value={email} name='email'  onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="mdp">Mot de passe</label>
                    <input type="password" value={password} name='mdp'  onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="checkbox" name="remember"/>
                    <label htmlFor="remember">Souviens-toi de moi</label>
                </div>


                <button className="btn-submit">continue</button>
                
            </form>

        </div>

      
    </div>
    <footer>
            <AuthFooter/>
        </footer>
    </>
  )
}

export default Register