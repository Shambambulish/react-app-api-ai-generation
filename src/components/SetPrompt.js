import { useId, useState, React} from 'react'

export default function SetPrompt({handlePrompt}) {
    
    const id = useId();
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        handlePrompt(input);
        setInput("");
    }

    return (
    <div id="promptForm">
        <form onSubmit={handleSubmit}>
            <label htmlFor={id}>Custom prompt: </label>
            <input id={id} value={input} onInput={e => setInput(e.target.value)}/>
            <input type="submit" />
        </form>
    </div>
  )
}
