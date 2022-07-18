import React from 'react'

interface imageProps {
    image : string;
}

const BlinklistThumbnails = (props : imageProps) => {
  return (
    <div>
        <img src={props.image} alt="" />

    </div>
  )
}

export default BlinklistThumbnails