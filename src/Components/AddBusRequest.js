import React, { useState } from 'react'
import { Container, Row,Col,Form } from 'react-bootstrap'

import '../Styles/AddBusRequest.css'

const timings = [
    "00:00 Hrs","01:00 Hrs","02:00 Hrs","03:00 Hrs","04:00 Hrs","05:00 Hrs","06:00 Hrs",
    "07:00 Hrs","08:00 Hrs","09:00 Hrs","10:00 Hrs","11:00 Hrs","12:00 Hrs","13:00 Hrs",
    "14:00 Hrs","15:00 Hrs","16:00 Hrs","17:00 Hrs","18:00 Hrs","19:00 Hrs","20:00 Hrs",
    "21:00 Hrs","22:00 Hrs","23:00 Hrs",
]

export default function AddBusRequest() {

    const [travelsName , setTravelsName] = useState("")
    const [busType , setBusType] = useState("AC")
    const [busNumber , setBusNumber] = useState("")
    const [departureTime , setDepartureTime] = useState("00:00 Hrs") 
    const [arrivalTime , setArrivalTime] = useState("00:00 Hrs") 
    const [busFare , setBusFare] = useState("") 
    const [source , setSource] = useState("")
    const [destination , setDestination] = useState("")



    const [boardingPoints , setBoardingPoints] = useState("")
    const [droppingPoints , setDroppingPoints] = useState("")
    const [boardingPointsKeys , setBoardingPointsKeys] = useState([])
    const [droppingPointsKeys , setDroppingPointsKeys] = useState([])



    function handleStateChange(event) {
        let target = event.target;

        if(target.name === "travelsName")
        {
            setTravelsName(target.value)
        }
        else if(target.name === "busType")
        {
            setBusType(target.value)
        }
        else if(target.name === "busNumber")
        {
            setBusNumber(target.value)
        }
        else if(target.name === "departureTime")
        {
            setDepartureTime(target.value)
        }
        else if(target.name === "arrivalTime")
        {
            setArrivalTime(target.value)
        }
        else if(target.name === "busFare")
        {
            setBusFare(target.value)
        }
        else if(target.name === 'boardingPoints') {
            setBoardingPoints(target.value)
        }
        else if(target.name === 'droppingPoints')
            setDroppingPoints(target.value)
        else if(target.name === 'departureLocation') {
            setSource(target.value)
        }
        else if(target.name === 'arrivalLocation')
            setDestination(target.value)
    }

    function addBoardingPointsKeys() {

        let index=1;
        while(index<=boardingPoints) {
            boardingPointsKeys.push(`BoardingPoint${index}`)
            if(index == boardingPoints) {
                setBoardingPointsKeys([...boardingPointsKeys])
            }
            index++;
        }
        setBoardingPoints("")
    }

    function resetBoardingPoints() {
        setBoardingPoints("")
        setBoardingPointsKeys([])
    }

    function addDroppingPointsKeys() {

        let index=1;
        while(index<=droppingPoints) {
            droppingPointsKeys.push(`DroppingPoint${index}`)
            if(index == droppingPoints)
                setDroppingPointsKeys([...droppingPointsKeys])
            index++;
        }
        setDroppingPoints("")
    }

    function resetDroppingPoints() {
        setDroppingPoints("")
        setDroppingPointsKeys([])
    }

    function handleSubmit(event) {

        event.preventDefault();
        console.log(event);
    }

    return (
        <Container style = {{backgroundColor : " #d84e55",borderRadius:"5px"}}>
            <div style = {{padding:"20px"}}>
                <h1 className = "headingCSS">Travel Bus Request</h1>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg = {12} style={{border: "2px solid white"}}></Col>
                        <Col lg = {4}>
                            <Form.Group controlId="formBasicTravelName">
                                <Form.Label className = "LabelCSS">Travel's Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Travel's Name" name="travelsName" value={travelsName} onChange={handleStateChange} />
                            </Form.Group>
                        </Col>
                        <Col lg = {4}>
                            <Form.Group controlId="formBasicBusType">
                                <Form.Label className = "LabelCSS" >Bus Type</Form.Label>
                                <Form.Control as="select" className="dropdownCSS" onChange={handleStateChange} name="busType">
                                <option value="AC" defaultValue>AC</option>
                                <option value="NON AC">NON AC</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg = {4}>
                        <Form.Group controlId="formBasicBusNumber">
                                <Form.Label className = "LabelCSS">Bus Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Travel's Bus Number" name="busNumber" value={busNumber} onChange={handleStateChange} />
                            </Form.Group>
                        </Col>
                        <Col lg = {4}>
                        <Form.Group controlId="formBasicDepartureLocation">
                                <Form.Label className = "LabelCSS">Departure Location</Form.Label>
                                <Form.Control type="text"  name="departureLocation" onChange={handleStateChange} placeholder="Departure Location">
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg = {4}>
                        <Form.Group controlId="formBasicDeparture">
                                <Form.Label className = "LabelCSS">Departure Time</Form.Label>
                                <Form.Control as="select" className = "dropdownCSS"  name="departureTime" onChange={handleStateChange}>
                                    {
                                        timings.map(time => <option value={time}>{time}</option>)
                                    }
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg = {4}>
                        <Form.Group controlId="formBasicArrivalLocation">
                                <Form.Label className = "LabelCSS">Departure Location</Form.Label>
                                <Form.Control type="text"  name="arrivalLocation" onChange={handleStateChange} placeholder="Arrival Location">
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg = {4}>
                            <Form.Group controlId="formBasicArrival">
                                <Form.Label className = "LabelCSS">Arrival Time</Form.Label>
                                <Form.Control as="select" className = "dropdownCSS" name="arrivalTime" onChange={handleStateChange}>
                                    {
                                        timings.map(time => <option value={time}>{time}</option>)
                                    }
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg = {4}>
                        <Form.Group controlId="formBasicDuration">
                                <Form.Label className = "LabelCSS">Travel Duration</Form.Label>
                                <Form.Control type="text" placeholder="13 Hrs" />
                            </Form.Group>
                        </Col>
                        <Col lg = {4}>
                            <Form.Group controlId="formBasicBusFare">
                                <Form.Label className = "LabelCSS">Bus Fare</Form.Label>
                                <Form.Control type="text" placeholder="Enter Bus Fare" name="busFare" value={busFare} onChange={handleStateChange} />
                            </Form.Group>
                        </Col>
                        <Col lg = {4}>
                            <Form.Group controlId="formBasicTotalSeats">
                                <Form.Label className = "LabelCSS">Total Seats</Form.Label>
                                <Form.Control type="text" placeholder="24 Seats" readOnly/>
                            </Form.Group>
                        </Col>            
                        <Col lg = {4}></Col>
                        <Col lg = {12} style={{border: "2px solid white"}}></Col>
                        <Col lg = {6}>
                            <Row >
                                <Col lg = {7}>
                                    <Form.Group controlId="formBasicBoardingPoints">
                                    <Form.Label className = "LabelCSS">Total Boarding Points</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Number of Boarding Points" name="boardingPoints" value={boardingPoints} onChange={handleStateChange}/>
                                    </Form.Group>
                                </Col>
                                <Col lg = {3}>
                                    <button type="button" className = "ButtonCSS1" onClick={addBoardingPointsKeys}>Click Here</button>
                                </Col>
                                <Col lg = {2}>
                                    <button type="button" className = "ButtonCSS1" onClick={resetBoardingPoints}>Reset</button>
                                </Col>
                                
                                    {
                                       
                                       (boardingPointsKeys.length != 0)
                                       ?
                                       boardingPointsKeys.map(boardingPoint =>
                                            
                                            <Row key={boardingPoint} style = {{marginLeft : "3px"}}>
                                                <Col lg={7}>
                                                    <Form.Group controlId="formBasicBoardingPointName">
                                                    <Form.Label className = "LabelCSS">Boarding Location</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Boarding Location" style={{width:"300px",marginRight:"70px"}}/>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={5}>
                                                    <Form.Group controlId="formBasicBoardingTime">
                                                        <Form.Label className = "LabelCSS">Time</Form.Label>
                                                        <Form.Control as="select" className = "dropdownCSS">
                                                            {
                                                                timings.map(time => <option value={time}>{time}</option>)
                                                            }
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        )
                                        : 
                                        ""
                                    }    
                            </Row>
                        </Col>
                        <Col lg = {6}>
                            <Row>
                                <Col lg = {7}>
                                    <Form.Group controlId="formBasicDroppingPoints">
                                    <Form.Label className = "LabelCSS">Total Dropping Points</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Number of Dropping Points" name="droppingPoints" value={droppingPoints} onChange={handleStateChange} />
                                    </Form.Group>
                                </Col>
                                <Col lg = {3}>
                                    <button type="button" className = "ButtonCSS1" onClick={addDroppingPointsKeys}>Click Here</button>
                                </Col>
                                <Col lg = {2}>
                                    <button type="button" className = "ButtonCSS1" onClick={resetDroppingPoints}>Reset</button>
                                </Col>
                                {
                                       (droppingPointsKeys.length !== 0)
                                       ?
                                       droppingPointsKeys.map(droppingPoint =>
                                            
                                            <Row key={droppingPoint} style = {{marginLeft : "3px"}}>
                                                <Col lg={7}>
                                                    <Form.Group controlId="formBasicDroppingPointName">
                                                    <Form.Label className = "LabelCSS">Dropping Location</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Dropping Location" style={{width:"300px",marginRight:"70px"}}/>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={5}>
                                                    <Form.Group controlId="formBasicBoardingTime">
                                                        <Form.Label className = "LabelCSS">Time</Form.Label>
                                                        <Form.Control as="select" className = "dropdownCSS">
                                                            {
                                                                timings.map(time => <option value={time}>{time}</option>)
                                                            }
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        )
                                        : 
                                        ""
                                    }
                            </Row>
                        </Col>
                        <Col lg = {12}>
                            <button type="submit" className ="ButtonCSS2" style = {{position:"absolute",right:"0px"}}>Send Request</button>
                        </Col>
                    </Row>
                </form>
            </div>
        </Container>
    )
}