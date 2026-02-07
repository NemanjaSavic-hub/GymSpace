import { useRef, useState } from "react"
import { data } from "react-router-dom"
interface FinalData {
    text: string, rating: number
}

interface Props {
    username?: string,
    onSubmitProp: (data: FinalData) => void
}


const AddReview = ({username, onSubmitProp}: Props) => {
    const [radioValue, setRadioValue] = useState(0)
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const [error, setError] = useState("")

    const onsubmit = () => {
        const er = "Rate and text at least 10 characters long are required"
        if(radioValue === 0){
            setError(er);
            return;
        }
        if(inputRef.current){
            if(inputRef.current.value.length > 10) {
                setError("");
                console.log(radioValue);
                console.log(inputRef.current.value);
                onSubmitProp({text: inputRef.current.value, rating: radioValue});
                return;
            }
        }
        setError(er);


}

    return (
        <>
        <div className="flex w-full">
            <label className="text-xl">Give rating:</label>
            <div className="rating">
                <input type="radio" name="rating-2" className="rating-hidden" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" onClick={() => setRadioValue(1)}/>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" onClick={() => setRadioValue(2)}/>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" onClick={() => setRadioValue(3)}/>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" onClick={() => setRadioValue(4)}/>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" onClick={() => setRadioValue(5)}/>
            </div>
        </div>
        <div className="w-full ">
            <textarea placeholder="Type here" className="font-mono border-2 rounded-2xl border-gray-500 w-full px-3 py-2" rows={5} ref={inputRef} />
        </div>
        {error && <p className="text-xs text-error mt-1">{error}</p>}
        <div className="card-actions">
          <button className="btn btn-primary" onClick={() => onsubmit()}>Write review</button>
        </div>
        </>
    )
}

export default AddReview