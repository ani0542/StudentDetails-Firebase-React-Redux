import React from 'react'

function Avatar(props) {

    const {url,width='100px',height='100px'} = props;

    return (
        <div style={{margin:'auto',width:width,height:height}}>
                <img src={url} alt='user' className='card-img-top rounded-circle'/>
        </div>
    )
}

export default Avatar
