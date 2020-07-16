import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row row-content">
                    {/* <!-- Welcome --> */}
                    <div className="col-xl-7 col-sm-12 col-lg-6">
                        <div id="welcome">
                            <h2 className="text-center">Welcome to the Daily Grind</h2>
                                <hr/>
                                <br/>
                                <p className="text-center font-italic"><a href="https://www.google.com/maps/place/1419+Westwood+Blvd,+Los+Angeles,+CA+90024/@34.0547779,-118.4438564,17z/data=!4m5!3m4!1s0x80c2bb7f30f69be3:0x26005d9e1492ec74!8m2!3d34.0547735!4d-118.4416677" target="_blank">1419 Westwood Blvd <br/> Los Angeles, CA 90024</a></p>
                                <p className="text-center"><a href="tel:+14123815500">818-230-1466</a></p>
                                <p className="text-center">Sunday: 8:00am–2:00pm <br/>
                                Monday: CLOSED
                                <br/>
                                Tuesday: 7:00am-2:00pm
                                <br/>
                                Wed–Sat: 7:00am-2:00pm</p>
                                <br/>
                                <p className="text-center text-white"><a role="button" className="btn btn-dark btn-lg" href="menu.html">Explore our Menu</a></p>
                        </div>
                    </div>
                    {/* <!-- Social --> */}
                    <div className="col text-center">
                        <div id="social">
                            <h2 className="text-center">Social</h2>
                                <hr/>
                                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram fa-lg"></i></a>
                                <br/>
                                <br/>
                                <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook fa-lg"></i></a>
                                <br/>
                                <br/>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-lg"></i></a>
                        </div>
                        <p className="font-weight-bold" id="love">Handcrafted with     <i className="fa fa-heart" aria-hidden="true"></i></p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div class="row row-content" id="carousel">
                    <div class="col-md-8 mx-auto">
                        <Carousel id="homeCarousel">
                            <Carousel.Item>
                                <img
                                className="d-block w-100 active"
                                src="./assets/images/view.jpg"
                                alt="View of the coffee shop"
                                />
                                <Carousel.Caption>
                                <h3 className="carouselComments">Relax</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="./assets/images/plates.jpg"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3 className="carouselComments">Order your favorites</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="./assets/images/adults.jpg"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3 className="carouselComments">And enjoy our coffee</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;