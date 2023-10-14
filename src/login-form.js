import React from 'react';
import Navbar from './navbar';

export default class LoginForm extends React.Component{
    render (){
        return(
            <div class="card w-100">
                <div class="card-header">
                    <Navbar />
                </div>
            <form class="card-footer" content-align="center" text-align="center" display="inline-block">
                <h3>Log In</h3>
                <input type="text" name="userName" placeholder="Username"></input> <br></br>
                <input type="text" name="password" placeholder="Password"></input>
            </form>
            </div>
        )    
    }
}