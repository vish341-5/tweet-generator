import { useState } from 'react'
import './home.css'

export default function home(){

    const [input, setInput]= useState('');

    function handleChange(e){
        setInput(e.target.value)
    }

    const [loading, setLoading] = useState(false);

    const [output, setOutput] = useState('Your generated tweets will appear...')

    async function generateTweets(){
        setLoading(true);

        const response = await fetch('http://localhost:3000/generate', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ prompt: input })
        });
        const data = await response.json();
        setOutput(data.tweets);
        console.log(data);
        setLoading(false);
    }
    return(
        <div className='home'>
            <div className='heading'>
                Tweet Generator
            </div>
            <div className='sub-heading'>
                Paste your last 10-15 tweets below to generate more tweets 
            </div>
            <textarea className='input' value={input} onChange={handleChange} placeholder='Enter tweets'/>
            <button className='btn' onClick={generateTweets} disabled={loading}>
                {loading ? 'Generating...' : 'Generate tweets'}
            </button>
            <div className='output'>{output}
            </div>
        </div>
    )
}