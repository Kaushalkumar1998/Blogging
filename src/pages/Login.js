import React from 'react'
import Base from '../components/Base'
import { Card, CardBody, CardHeader, Container, FormGroup, Row, Col, Button } from 'reactstrap';
import "./Login.css"
import background from "./sasasas.jpg";

function Login() {
    return (
        <div style={{
            background: "grey",
            height: "745px",
            backgroundImage: `url(${background})`,
            backgroundPosition: "center"

        }}>
            <Base>

                <Container >





                    <Row className="mt-4" >

                        <Col sm={{ size: 6, offset: 3 }} >
                            <Card color="light" >
                                <CardHeader style={{
                                    background: "Black",
                                    textAlign: 'center'
                                }}>
                                    <h4 style={{ color: "white" }}>Login Details</h4>


                                </CardHeader>
                                <CardBody style={{ background: "azure" }}>
                                    <form >

                                        {/*  Email field */}
                                        <FormGroup>
                                            <label for="email"> Enter Email </label>
                                            <br></br>

                                            <input
                                                type="email"
                                                placeholder="Enter Email Here"
                                                id="email"
                                                style={{ width: "auto" }}
                                            />
                                        </FormGroup>
                                        {/*  Password field */}
                                        <FormGroup>
                                            <label for="password"> Enter Password </label>
                                            <br></br>

                                            <input
                                                type="password"
                                                placeholder="Enter Here"
                                                id="password"
                                                style={{ width: "auto" }}
                                            />

                                            <br></br>
                                            <br></br>
                                            <Container className="text-center">
                                                <Button color="dark" outline>Login</Button>
                                                <Button className="m-2" color="info" outline>Reset</Button>


                                            </Container>

                                        </FormGroup>

                                    </form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>


            </Base>
        </div>
    )
}

export default Login