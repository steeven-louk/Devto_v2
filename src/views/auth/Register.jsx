import React from 'react'
import AuthFooter from '../../components/authFooter'

const Register = () => {
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
           
            <form action="">
            <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name='nom' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name='email' />
                </div>
                <div className="form-group">
                    <label htmlFor="mdp">Mot de passe</label>
                    <input type="password" name='mdp' />
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