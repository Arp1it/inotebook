import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()

    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    }

    React.useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <div className='d-flex gap-2'>
                        {
                            localStorage.getItem("token")
                                ? <button className='btn btn-success mx-1' onClick={handleLogout}>Logout</button>
                                : <>
                                    <Link className='btn btn-success mx-1' to='/login' role='button'>Login</Link>
                                    <Link className='btn btn-primary mx-1' to='/sign' role='button'>Sign</Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar