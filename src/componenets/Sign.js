import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Sign = (props) => {
  const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
  const { showAlert } = props;

    let navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const {name, email, password} = credentials;

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });

        const json = await response.json()
        console.log(json);

        if (json.success){
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            showAlert("Sign in Successfully", "success");
        }else{
            showAlert("Invalid Details", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" onChange={onChange} minLength={3} required />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={onChange} required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label for="cpassword" className="form-label">Change Password</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Sign