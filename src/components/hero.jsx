import React from 'react'

const Hero = () => {
    const track = document.getElementById("image-track");

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
        if(track.dataset.mouseDownAt ==="0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;
        
        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animated({
            transform: `translate(${nextPercentage}%, -50%)`
        }, {duration: 1200, fill: "forwards"});

        for(const image of track.getElementsByClassName("image")){
            image.animate({ 
                objectPosition: `${100 + nextPercentage}% center`
                }, {duration: 1200, fill: "forwards"});
            }
        }


    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches[0]);
    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches[0]);
    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);

    return (
        <div className="hero">
            <div id='image-track' data-mouse-down-at="0" data-prev-percentage="0">
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