import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
// import './SearchForm.css'; 
import { Button, Form, FormControl, Container, Row, Col } from 'react-bootstrap'; 

const API_Key = `${process.env.REACT_APP_API_KEY}`
const url = "https://pixabay.com/api"

function SearchForm(){
    const [input, setInput] = useState(''); 
    const [imagesResult, setImagesResult] = useState([]); 
    const [amountResult, setAmountResult] = useState(''); 
    const [inputFromButton, setInputFromButton] = useState(''); 
    const [loading, setLoading] = useState(true); 
    // console.log(input);

//     const handleClick = () => {
//         console.log(input)
//         setInputFromButton(input)
//     }

//     useEffect(() => {
//         fetchData(input); 
//     }, [input]); 

//     async function fetchData(input){
//         try {
//        let data = await fetch(`https://pixabay.com/api/?key=${API_Key}&q=${input}`); 
//        const items = await data.json(); 
//        console.log(items)
//        setImagesResult(items.results); 
//     }   catch (error) {
//         console.log(error)
//     }
// }
    
    const handleClick = () => {
        setInputFromButton(input)
        console.log(input)
    }
    const searchPhotos = async (e) => {
        e.preventDefault();
        console.log("Submitting the Form")
        
      };
    //   const searchPhotos = async (e) => {
    //     const response = await axios.get(`https://pixabay.com/api/?key=${API_Key}&q=flowers`, {
    //         // params: {key: 19658239-f347a00b7f11bf55a7d8e89ae, 
    //         safesearch: true }, 
    //     )
    //     setImagesResult(response.data.hits)
    //     e.preventDefault();
    //     console.log("Submitting the Form")
        
    //   };

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(`${url}/?key=${API_Key}&q=${inputFromButton}&safesearch=true&per_page=${amountResult}`); 
            // console.log(request.data.hits)
            // let url1 = window.URL.createObjectURL(request.data.hits); 
            // a.href = url1; 
            // a.download = 'images.json'
            setImagesResult(request.data.hits); 
            // a.click(); 
            return request; 
        }
        fetchData(); 
    }, [inputFromButton])

    // console.log(imagesResult)

    //use this one
    const onAmountChange = (e) => {
        console.log(e.target.value)
        setAmountResult(e.target.value)
    }
    //  const onAmountChange = (e) => {
    //     console.log(e)
    //     setAmountResult(e)
    // }


    // USE THIS ONE
    // useEffect(function(){
	// 	// const result = axios.get(`https://pixabay.com/api/?key=${API_Key}&q=${inputFromButton}`)
	// 		axios.get(`${url}/?key=${API_Key}&q=${inputFromButton}`)
	// 		.then(res => {
    //     console.log(res)
    //     // result(res.data.hits)
    //     setImagesResult(res.data.hits)
    //     // setImagesResult(result => [...result, res.data.hits])
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 		})
    // }, [inputFromButton])

    // useEffect(() => {
	// 	const result = axios
	// 		.get(`https://pixabay.com/api/?key=${API_Key}&q=${input}`)
	// 		.then(res => {
    //     console.log(res)
    //     result(res.data.hits)
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 		})
    // }, [searchPhotos])
    
// const API = axios.create({
//     baseURL = 'https://pixabay.com/api', 
//     headers: {
//         Accept: 'application/json', 
//         'Content-type': 'application/json', 
//     }, 
//     params: {
//         key: 19658239-f347a00b7f11bf55a7d8e89ae,
//         safesearch: true,  

//     }, 
// }); 
    
    // useEffect(function () => {
    //     async function deckUser() {
    //     const response = await fetch(`${url}/key=${API_Key}&q=${input}&image_type=photo&per_page=${amountResult}&safesearch=true`); 
    //     const data = await response.json(); 
    //     const [item] = data.results;
    //     console.log(item) 
    //     setImagesResult(item); 
    //     setLoading(false); 
    // }
    // }, []); 

    // async function showResult() {
    // const result = await axios.get(url); 
    // console.log(result.data)
    // }

    // const onChange = evt => {
    //     setInput(evt.target.value); 
    //     console.log(evt.target.value)
    //}

    // Input(evt) {
    //     setInput({
    //         input: evt.target.value
    //     })
    // }

    return (
        <div>
          {/* <h1>Image Search</h1> */}
          <Container fluid={true}>
            {/* <Row> */}
                {/* <Col> */}
                <Form onSubmit={searchPhotos}>
                {/* <label htmlFor="searchTerm">Search Term</label> */}
                <Form.Group>
                <Form.Label>Search Term</Form.Label>
                    <Form.Control
                     className="keyWord"
                     placeholder="Enter key word(s)"
                     value={input}
                     onChange={(evt) => setInput(evt.target.value)}
                     type="text"
                     />
                       
                  
                    {/* <input 
                        className="u-full-width"
                        type="text" 
                        id="searchTerm" 
                        name="searchTerm"
                        placeholder="Enter key word(s)"
                        value={input}
                        onChange={(evt) => setInput(evt.target.value)}/> */}
                        {/* onChange={searchPhotos}/> */}
                        {/* <button onClick={handleClick}>Submit</button> */}
                </Form.Group>
                </Form>
                {/* </Col> */}
           
  
            {/* <Col> */}
            <Form onChange={onAmountChange} value={amountResult}>
                <Form.Group controlId="formAmount">
                    {/* <Form.Label>Select Number of Results</Form.Label> */}
                        <Form.Control as="select">
                            <option>Select Number of Results</option>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                        </Form.Control>
                </Form.Group>
                <Button data-testid="search-button" onClick={handleClick}>Search</Button>

            </Form>
            {/* </Col> */}
               
            {/* </Row> */}
            {/* <Button class="col-md-12 text-center" onClick={handleClick}>Submit</Button> */}

            {/* <select onChange={onAmountChange} value={amountResult}>
                <option value="Select Number of Results">Select Number of Results</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select> */}
            
            {/* <br></br> */}
            {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                 Dropdown Button
                </Dropdown.Toggle>

            <Dropdown.Menu onChange={onAmountChange} value={amountResult}>
                <Dropdown.Item href="#/action-1">Select Number of Results</Dropdown.Item>
                <Dropdown.Item href="#/action-2">5</Dropdown.Item>
                <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                <Dropdown.Item href="#/action-1">15</Dropdown.Item>
                <Dropdown.Item= href="#/action-1"</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown> */}


            {/* <DropdownButton
      alignRight
      title="Dropdown right"
      id="dropdown-menu-align-right"
      onSelect={onAmountChange} 
        >
              <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
      </DropdownButton> */}



            {/* <Button onClick={handleClick}>Submit</Button> */}
         
            
          < br></br>
            {imagesResult.map(img => {
                return (
                    <a href={img.largeImageURL} target="_blank">
                    <img className="image" width="200" height="200" src={img.webformatURL} alt={img.tags}/>
                    </a>
                )
            })}
            </Container>
        </div>
      );
    }

export default SearchForm; 

