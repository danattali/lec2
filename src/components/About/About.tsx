import { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

//rafce
const About = () => {
    const [showProgress, setShowProgress] = useState(false);
    return (
        <div>
            <button className="bg-purple-500 text-white rounded p-5 text-2xl mb-2" onClick={() => setShowProgress(true)}>Show Progress</button>
            <button
                onClick={() => {
                    setShowProgress(!showProgress);
                }}
            >
                Toggle
            </button>
            {showProgress && (<ClimbingBoxLoader
                color="#36d7b7"
                size={30}
            />)}
            <p>{`${showProgress}`}</p>
        </div>
    );
};

export default About;