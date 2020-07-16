import React from 'react';

function Footer(props) {
    return (
    <footer className="site-footer bg-dark">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className="wrapper">
                        <div className="line"></div>
                            <h5>Links</h5>
                        <div className="line"></div>
                    </div>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="menu.html">Menu</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                </div>
                <div className="col text-center">
                    <div className="wrapper">
                        <div className="line"></div>
                            <h5>Social</h5>
                        <div className="line"></div>
                    </div>
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram fa-lg"></i></a>{' '}
                    <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook fa-lg"></i></a>{' '}
                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-lg"></i></a>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    </footer> 
    )
}

export default Footer;