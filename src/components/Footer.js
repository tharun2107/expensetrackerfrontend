import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer id="contact" className="footer bg-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="mb-0">&copy; 2024 Expenses Tracker. All rights reserved.</p>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-right">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-md-row justify-content-center justify-content-md-end">
                            <li className="mx-2"><a href="#about" className="text-decoration-none">About Us</a></li>
                            <li className="mx-2"><a href="#contact" className="text-decoration-none">Contact Us</a></li>
                            <li className="mx-2"><a href="#userlogin" className="text-decoration-none">Login</a></li>
                            <li className="mx-2"><a href="#usersignup" className="text-decoration-none">Signup</a></li>
                            <li className="mx-2"><a href="#privacy" className="text-decoration-none">Privacy Policy</a></li>
                            <li className="mx-2"><a href="#terms" className="text-decoration-none">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
