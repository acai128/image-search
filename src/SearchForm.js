import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
// import './SearchForm.css'; 
import { Button, Form, Container } from 'react-bootstrap'; 

const API_Key = `${process.env.REACT_APP_API_KEY}`
const url = "https://pixabay.com/api"

function SearchForm(){
    const [input, setInput] = useState(''); 
    const [imagesResult, setImagesResult] = useState([]); 
    const [amountResult, setAmountResult] = useState(''); 
    const [inputFromButton, setInputFromButton] = useState(''); 
    
    const handleClick = () => {
        setInputFromButton(input)
        console.log(input)
    }
    const searchPhotos = async (e) => {
        e.preventDefault();
        console.log("Submitting the Form")
        
      };

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(`${url}/?key=${API_Key}&q=${inputFromButton}&safesearch=true&per_page=${amountResult}`); 
            setImagesResult(request.data.hits); 
            return request; 
        }
        fetchData(); 
    }, [inputFromButton])

    const onAmountChange = (e) => {
        console.log(e.target.value)
        setAmountResult(e.target.value)
    }
    
    return (
        <div>
          <Container fluid={true}>
                <Form onSubmit={searchPhotos}>
                <Form.Group>
                <Form.Label>Search Term</Form.Label>
                    <Form.Control
                     className="keyWord"
                     placeholder="Enter key word(s)"
                     value={input}
                     onChange={(evt) => setInput(evt.target.value)}
                     type="text"
                     />
                </Form.Group>
                </Form>

                <Form onChange={onAmountChange} value={amountResult}>
                <Form.Group controlId="formAmount">
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

