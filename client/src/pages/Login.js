import { useState } from 'react';
import User from '../models/model.user';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault();

        User.login({ email, password }).then((response) => {
            console.log(response.token);
            if (response.status === 200) {
                localStorage.setItem("uid", response.token);
                nav('/')
                window.location.reload()
            }
        })
    }
    
    return (
        <>
            <form className='userEntryForm' onSubmit={handleSubmit}>
                <div className='form-group'>
                <TextField id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    required
                />
				        </div>
                <div className='form-group'>
                <TextField id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                    required
                    type="password"
                />
			        	</div>
                <Button type='submit' variant="outlined">Login</Button>
            </form>
        </>
    );
}

export default Login;