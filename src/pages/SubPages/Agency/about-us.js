import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import img1 from '../../../images/agency-about/img-1.jpg';
import img2 from '../../../images/agency-about/img-2.jpg';

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="about">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg="7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">About us</p>
                                    <h3>Who We Are</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className="vertical-content mt-4">
                            <Col lg="6">
                                <Row>
                                  
                                    <Col lg="8">
                                        <div className="agency-about-img mt-5">
                                            <img src={img2}  alt="" className="img-fluid mx-auto d-block" />
                                            <div className="agency-about-img-desc text-center text-white">
                                                <h5 className="mt-3 f-17">Dedicated Team</h5>
                                                <p>Turning Your Great Ideas into Successful Web Solutions</p>                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="6">
                                <div className="about-content p-4">
                                    <p className="text-muted">AhazTech is a leading developer of custom Enterprise and eLearning solutions. AhazTech uses the power of Mobile, Web, Analytics, Cloud, and Digital technologies to unlock the potential of businesses across verticals. We focus on serving the Enterprise, ISV and Startup segments across the Retail, Transportation, Healthcare & Financial Services domains. Headquartered in Addis Abeba, Ethiopia, AhazTech has offices around the country</p>
                                    <div className="pt-4">
                                        <Link to="#" className="btn btn-custom">Learn more <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default AboutUs;


