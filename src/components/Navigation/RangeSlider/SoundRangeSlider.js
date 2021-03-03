import React, {useState} from 'react'
import SoundButton from "../Buttons/SoundButton";
import classesCss from "./SoundRangeSlider.module.scss"

export default function SoundRangeSlider({onChange, onSoundToggle, soundMuted, initValue}){

    const [sliderValue, setSliderValue] = useState(initValue)

    const handleChange = (e) => {
        setSliderValue(e.target.value);
    }

    return (
        <div className = {classesCss.SoundRangeSlider}>
            <SoundButton
                onSoundToggle = {onSoundToggle}
                soundMuted = {soundMuted}
                className={classesCss.SoundButton}/>
            <input
                onChange={(e) => handleChange(e)}
                type={"range"}
                value={sliderValue}
                min={0}
                max={100}
                className={"slider"}
                id={"myRange"}
                onMouseUp={() => onChange(sliderValue)}
                onTouchEnd={() => onChange(sliderValue)}
            />
        </div>
    );
}