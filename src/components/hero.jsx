import React, { useState, useRef}from 'react'

const Hero = () => {

    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const gallery = useRef();
    const track = useRef();
    const handleMouseDown = (e) => setMouseDownAt(e.clientX);

    const handleMouseUp = () => {
        setMouseDownAt(0);
        setPrevPercentage(percentage);
    };

    const handleMouseMove = (e) => {
        if (mouseDownAt === 0) return;
        
        const mouseDelta = mouseDownAt - e.clientX;
        const maxDelta = window.innerWidth / 2;
        
        const percentage = (mouseDelta/maxDelta) * -100;
        const nextPercentageUnconstrained = prevPercentage + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    setPercentage(nextPercentage);

    track.current.animate({transform: `translate(${nextPercentage}%, -50%)`}, {duration: 1200, fill: "forwards"});

    for(const image of track.current.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, {duration: 1200, fill: "forwards" });
    }
    }

    return (
        <div className="hero"
            ref={gallery}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div id='image-track' ref={track} data-mouse-down-at="0" data-prev-percentage="0">
                <img src="../images/60.png" className='image' draggable="false" />
                <img src="../images/40.png" className='image' draggable="false" />
                <img src="../images/alice.png" className='image' draggable="false" />
                <img src="../images/split.png" className='image' draggable="false" />
                <img src="../images/mousepad.png" className='image' draggable="false" />
                <img src="../images/keycaps.png" className='image' draggable="false" />
                <img src="../images/switches.png" className='image' draggable="false" />
            </div>
        </div>
    )
}

export default Hero