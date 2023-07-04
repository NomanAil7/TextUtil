import { prettyFormat } from '@testing-library/react'
import React, { useState } from 'react'

export default function TextFrom(props) {
    const handleUpper = () => {

        let newText = Text.toUpperCase();
        stateText(newText)
    }

    const handleLower = () => {

        let newText = Text.toLowerCase();
        stateText(newText)
    }

    const handleReverse = () => {

        let newText = Text.split("").reverse().join("");
        stateText(newText)
    }


    const handleClear = () => {

        let newText = Text.replace(Text, "");
        stateText(newText)
    }


    const onChange = (event) => {
        stateText(event.target.value)
    }


    const handleSpace = () => {
        let newText = Text.split(/[ ]+/);
        stateText(newText.join(" "))
    }
    const mode = () => {
        if (my.color == 'black') {
            Fontmy({
                color: 'white',
                backgroundColor: 'black'
            })
            setfont('LightMode')
         
        }
        else {
            Fontmy(
                {
                    color: 'black',
                    backgroundColor: 'white'

                }
            )
            setfont('DarkMode'
            )
        }
    }

    const [Text, stateText] = useState("Enter your text");

    const [my, Fontmy] = useState(
        {
            color: 'black',
            backgroundColor: 'white'
        }
    )
    const[font,setfont] = useState('DarkMode')

    return (
        <>
            <div style={my} className=''>

                <div className="container"  >
                    <div className="container">
                        < div className="form-check form-switch " style={my}>
                            <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={mode}/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">{font}</label>
                        </div>
                    </div>
                    <h1>{props.head}</h1>
                    <div className="mb-3 " style={my} >
                        <label for="exampleFormControlTextarea1" className="form-label"></label>
                        <textarea className="form-control" style={my} value={Text} onChange={onChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <div className="" aria-label="Basic example">
                        <button type="button" class="btn btn-danger mx-2" onClick={handleUpper} >Upper</button>
                        <button type="button" class="btn btn-danger mx-2" onClick={handleLower}>Lower</button>
                        <button class="btn btn-danger mx-2" type="submit" onClick={handleReverse}>Reverse</button>
                        <button class="btn btn-danger mx-2" type="submit" onClick={handleClear}>Clear</button>

                    </div>
                </div>
                <div className="container my-3 ">
                    <h1>Your Text Summary</h1>
                    <p> {Text.split(" ").length} Word {Text.length} character </p>
                    <p>{0.008 * Text.split(" ").length} Minutes To Read</p>
                    <h2>Preview</h2>
                    <p >{Text}</p>
                </div>
                <div className="container-fluid" style={my}>
                    <hr />
                    <p>2023 <spam className="link">TextUtil@gmail.com</spam></p>
                </div>

            </div>
        </>
    )
}
