import {useState} from "react"
function ShowHide () {
const [show, showState] = useState(false);
    return (
        <div>
            <button onClick={() => showState(!show)}>
               {show
               ? "Hide"
                :"Show"}
            </button>
            {show && (
            <p>secret text</p>
            )}
        </div>
    );
};
export default ShowHide;