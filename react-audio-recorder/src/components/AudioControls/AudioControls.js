import './AudioControls.css';
import { useEffect, useState } from 'react';

const AudioControls = () => {
    const [audioChunks, updateAudioChunks] = useState([]);

    useEffect(() => {

    })
    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();
                mediaRecorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                });
            });

       
    }

    return (
        <div className="audio-controls">
            <button onClick={startRecording}>Start</button>
            <button>Stop</button>
            <button>Resume</button>
            <button>Save</button>
        </div>
    )
}

export default AudioControls;