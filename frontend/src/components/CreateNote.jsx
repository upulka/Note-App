import React , {useState} from 'react';
import axios from 'axios';

//Most of the classNames are copied from the bootstrap forms in the internet
//Just like "container" , "form-group" , "form-control"
function CreateNote(){

    const [input , setInput] = useState({
        title : '',
        content : ''
    })

    function handleChange(event){
        const {name , value} = event.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name] : value
            }
        })
    }

    function handleClick(event){
        //prevent the default state
        //it will not refresh the page after clicking the button
        event.preventDefault();
        //console.log(input);

        const newNote = {
            title : input.title,
            content : input.content
        }

        axios.post('http://localhost:3001/create' , newNote); //passing the newNote to the url given within single quotes
    }

    return <div className = "container">
        <h1>Create Note Page</h1>
        <form>
            <div className = "form-group">
                <input onChange={handleChange} name = "title"  value = {input.title} autocomplete = "off" className = "form-control" placeholder = "note title"/>
            </div>
            <br/>

            <div className = "form-group">
                <textarea onChange={handleChange} name = "content" value={input.content} autocomplete = "off" className = "form-control" placeholder = "note content"/>
            </div>
            <br/>

            <button onClick={handleClick} className = "btn btn-lg btn-info">ADD NOTE</button>
        </form>
    </div>
}

export default CreateNote;