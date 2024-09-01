import React from 'react'
import Video_1 from '../asserts/video1.mp4'
import image_1 from '../asserts/image1.png'
import image_2 from '../asserts/image2.png'
import image_3 from '../asserts/image3.png'

const Backgorund = ({playStatus,heroCount}) => {
    if(playStatus){
        return (
<video className='background ' autoPlay loop muted >
    <source src={Video_1} type='video/mp4' />
</video>
        )
    }
 

    else if(heroCount===0){
        return <img src={image_1} alt=""  className='background'/>
    }
    else if(heroCount===1){
        return <img src={image_2} alt=""  className='background'/>
    }
    else if(heroCount===2){
        return <img src={image_3} alt=""  className='background'/>
    }
}

export default Backgorund