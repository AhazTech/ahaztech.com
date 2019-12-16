import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg="7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Services</p>
                                    <h3>What We Do</h3>
                                    <p className="text-muted mt-3">AhazTech taps into the power of digital to develop custom software applications and products for industry domains such as Retail, Transportation & Supply Chain and Financial Services. In the times, we grew swiftly to serve more customers across Ethiopia.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="4">
                                <div className="agency-services-box text-center p-4 bg-white mt-4">
                                    <div className="agency-services-icon">
                                        <i className="pe-7s-monitor display-4"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mt-4 mb-4 f-18">Software Development</h5>
                                        <p className="text-muted">The development of reliable and scalable software solutions for any OS or device.We bring together deep industry expertise and the latest IT advancements to deliver custom solutions </p>
                                        <div>
                                            <Link yo="#" className="text-custom">
                                                <i className="mdi mdi-arrow-right h3"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="agency-services-box text-center p-4 bg-white mt-4">
                                    <div className="agency-services-icon">
                                        <i className="pe-7s-notebook display-4"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mt-4 mb-4 f-18">eLearning Applications</h5>
                                        <p className="text-muted">Efficient and high-end custom eLearning development services both for educators and learners. Bring innovation to every aspect of the educational process from management to assessment.

.</p>
                                        <div>
                                            <Link to="#" className="text-custom">
                                                <i className="mdi mdi-arrow-right h3"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="agency-services-box text-center p-4 bg-white mt-4">
                                    <div className="agency-services-icon">
                                        <i className="pe-7s-exapnd2 display-4"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mt-4 mb-4 f-18">Cybersecurity Solutions</h5>
                                        <p className="text-muted">To achieve the robust protection of the companies’ applications and networks.Our security experts are ready to deliver a variety of cyber protection services.</p>
                                        <div>
                                            <Link to="#" className="text-custom">
                                                <i className="mdi mdi-arrow-right h3"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="4">
                                <div className="agency-services-box text-center p-4 bg-white mt-4">
                                    <div className="agency-services-icon">
                                        <i className="pe-7s-repeat display-4"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mt-4 mb-4 f-18">Awesome Support</h5>
                                        <p className="text-muted">We take on solving diverse issues from answering application functionality questions to performing fixes and enhancements on the code level for improved adoption of software, its smooth functioning and increased end user satisfaction.</p>
                                        <div>
                                            <Link to="#" className="text-custom">
                                                <i className="mdi mdi-arrow-right h3"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="agency-services-box text-center p-4 bg-white mt-4">
                                    <div className="agency-services-icon">
                                        <i className="pe-7s-albums display-4"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mt-4 mb-4 f-18">User Experience</h5>
                                        <p className="text-muted">Able to lead the creation of the user experience or execute it through visual design, we bring expertise in all stages from proof-of-concept prototyping to complete mobile/web solution transformation. </p>
                                        <div>
                                            <Link to="#" className="text-custom">
                                                <i className="mdi mdi-arrow-right h3"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="agency-services-box text-center p-4 bg-white mt-4">
                                    <div className="agency-services-icon">
                                        <i className="pe-7s-upload display-4"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mt-4 mb-4 f-18">Automation Services</h5>
                                        <p className="text-muted">Slash down the costs while boosting up productivity with our sophisticated automating solutions</p>
                                        <div>
                                            <Link to="#" className="text-custom">
                                                <i className="mdi mdi-arrow-right h3"></i>
                                            </Link>
                                        </div>
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

export default Services;


