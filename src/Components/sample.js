const [travelsName , setTravelsName] = useState("")
    const [busType , setBusType] = useState("AC")
    const [busNumber , setBusNumber] = useState("")
    const [departureTime , setDepartureTime] = useState("00:00 Hrs") 
    const [arrivalTime , setArrivalTime] = useState("00:00 Hrs") 
    const [busFare , setBusFare] = useState("") 
    const [source , setSource] = useState("")
    const [destination , setDestination] = useState("")

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
