import { useState, useEffect } from "react";
import { TextField, Button } from '@mui/material';
import User from "../../models/model.user.js";

function OneUser(props){
  const [user, setUser] = useState("");
  let id = props.id;
  console.log(props);
  console.log(id);
  useEffect(function() {
      fetchUser(id)
  }, []);

  function fetchUser(id) {
    console.log("fetching")
	  User.oneUser(id).then((data) => {
			console.log(data);
      setUser(data);
		})
	}

    return(
        <>
          {user ? 
          <>
            <div>{user.username}</div>
            <div>{user.first_name}</div>
            <div>{user.last_name}</div>
            <div>{user.email}</div>
          </> : 
          <p>Loading User Info</p>}
        </>
    )
}

export default OneUser;