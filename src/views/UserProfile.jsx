import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

class UserProfile extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card className="card-user">
                                <CardBody>
                                    <CardText />
                                    <div className="author">
                                        <div className="block block-one" />
                                        <div className="block block-two" />
                                        <div className="block block-three" />
                                        <div className="block block-four" />
                                        <a
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            <img
                                                alt="..."
                                                className="avatar"
                                                src={require("assets/img/cool.jpg")}
                                            />
                                            <h5 className="title">
                                                Dr. Charles
                                            </h5>
                                        </a>
                                        <p className="description">
                                            Cardiothoracic Surgeon (MBBS, MD,
                                            PhD)
                                        </p>
                                    </div>
                                    <div className="card-description">
                                        Dr Charles is a Indian trained Surgeon.
                                        He graduated in 1991 from Coimbatore
                                        Institute of Medicine India and has
                                        additional qualifications in ultrasound,
                                        additions, emergency medicine,
                                        traumatology and pneumology. After his
                                        military service in the air force, he
                                        has worked for more than 15 years in
                                        India countryside and mountainous
                                        regions including in some remote places
                                        and ski resorts. Dr Charles’s has
                                        extensive medical experience across
                                        general medicine, emergency medicine,
                                        radiology, trauma, pneumology,
                                        addictions and paediatrics. Dr Charles
                                        joined our Coimbatore clinic in 2014 and
                                        provides quality, compassionate care to
                                        all his patients. He is fluent in Tamil
                                        and English and has professional
                                        proficiency in Germany
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <Button
                                            className="btn-icon btn-round"
                                            color="facebook"
                                        >
                                            <i className="fab fa-facebook" />
                                        </Button>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="twitter"
                                        >
                                            <i className="fab fa-twitter" />
                                        </Button>
                                        <Button
                                            className="btn-icon btn-round"
                                            color="google"
                                        >
                                            <i className="fab fa-google-plus" />
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default UserProfile;
