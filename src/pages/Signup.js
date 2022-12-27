import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, Container, FormGroup, Row, Col, Button, } from 'reactstrap';
import Base from '../components/Base';


function Signup() {





    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        about: '',
    })
    const [error, setError] = useState({
        error: {},
        isError: false

    })
    useEffect(() => {
        console.log(data);
    }, [data])

    //Handle Change
    const handleChange = (event, property) => {

        //Dynamic setting the value
        setData({ ...data, [property]: event.target.value })
    };

    const resetData = () => {
        setData({
            name: '',
            email: '',
            password: '',
            about: '',

        })
    };

    // Submit the Form

    const submitForm = (event) => {
        event.preventDefault()
        console.log(data);
        // Data Validate
    };
    return (
        <div style={{
            background: "skyblue",
            height: "750px"
        }}>
            <Base >
                <Container>
                    {JSON.stringify(data)}

                    <Row className="mt-4">

                        <Col sm={{ size: 6, offset: 3 }}>

                            <Card color="light">

                                <CardHeader style={{ background: "black", textAlign: "center" }}>

                                    <h4 style={{ color: "white" }}>Fill Information To Register !!</h4>

                                </CardHeader>

                                <CardBody style={{ background: "azure" }}>

                                    {/* creating Form   */}

                                    <form onSubmit={submitForm}>

                                        {/*  Name field */}

                                        <FormGroup>
                                            <label for="name"> Enter Name </label>
                                            <br></br>

                                            <input
                                                type="text"
                                                placeholder="Enter Name Here"
                                                id="name"
                                                onChange={(e) => handleChange(e, 'name')}
                                                value={data.name}


                                            />

                                        </FormGroup>
                                        {/*  Email field */}
                                        <FormGroup>
                                            <label for="email"> Enter Name </label>
                                            <br></br>

                                            <input
                                                type="email"
                                                placeholder="Enter Email Here"
                                                id="email"
                                                onChange={(e) => handleChange(e, 'email')}
                                                value={data.email}

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
                                                onChange={(e) => handleChange(e, 'password')}
                                                value={data.password}

                                            />
                                        </FormGroup>
                                        {/*  About field */}
                                        <FormGroup>
                                            <label for="exampleText">
                                                Text Area
                                            </label>
                                            <br></br>
                                            <input
                                                id="exampleText"
                                                placeholder="Enter here"
                                                type="textarea"
                                                onChange={(e) => handleChange(e, 'about')}
                                                value={data.about}

                                            />
                                            <br></br>
                                            <br></br>
                                            <Container className="text-center">
                                                <Button color="success" outline>Register</Button>
                                                <Button onClick={resetData} className="m-2" color="secondary" type="reset" outline> Reset</Button>

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

export default Signup;