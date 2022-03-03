import { useState } from 'react';
import User from '../models/model.user.js';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';

const Register = () => {
  const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  const nav = useNavigate();

  function handleSubmit(event) {
		event.preventDefault();
		User.register({username, email, first_name, last_name, password}).then((data) => {
			console.log(data);
			console.log(data.token);

			if (data.token) {
				localStorage.setItem("uid", data.token);
				// nav("/dashboard");
        nav("/");
				window.location.reload();
			}
		})
	}

    return (
		<>
			<form className="userEntryForm" onSubmit={handleSubmit}>
				<div className='form-group'>
          <TextField id="outlined-basic" 
            label="First Name" 
            variant="outlined" 
            onChange={(e) => setFirstName(e.target.value)} 
            value={first_name}
            required
          />
				</div>
				<div className='form-group'>
          <TextField id="outlined-basic" 
            label="Last Name" 
            variant="outlined" 
            onChange={(e) => setLastName(e.target.value)} 
            value={last_name}
            required
          />
				</div>
        <div className='form-group'>
          <TextField id="outlined-basic" 
            label="Username" 
            variant="outlined" 
            onChange={(e) => setUsername(e.target.value)} 
            value={username}
            required
          />
				</div>
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
        <Button type='submit' variant="outlined">Create Profile</Button>
			</form>
		</>
	);
}

export default Register;