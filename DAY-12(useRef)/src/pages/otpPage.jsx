import { useRef } from 'react'
import './OTP.css'
import { useEffect } from 'react';

function OTPPage() {
    const titleRef = useRef(null);
    const titleRef2 = useRef(null);
    const titleRef3 = useRef(null);
    const titleRef4 = useRef(null);
    const titleRef5 = useRef(null);
    const titleRef6 = useRef(null);

    useEffect(() => {
        titleRef.current.focus();
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let userOTP = Number(titleRef.current.value + "" + titleRef2.current.value + "" +  titleRef3.current.value + "" + titleRef4.current.value + "" + titleRef5.current.value + "" + titleRef6.current.value);
    
        console.log(userOTP);
        
    }

    const handleInput = (e, nextRef, prevRef) => {
        if(e.target.value.length === 1 && nextRef) {
            nextRef.current.focus();
        }

        if(e.target.value.length === 0 && prevRef) {
            prevRef.current.focus();
        }

    }
    
    
    return (
        <>
            <div className="otp-main">
                <h2>Varify Email</h2>
                <span>priyankraychura@gmail.com</span>
                <form action="" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input type="text" ref={titleRef} onChange={(e) => handleInput(e, titleRef2, null)}/>
                        <input type="text" ref={titleRef2} onChange={(e) => handleInput(e, titleRef3, titleRef)}/>
                        <input type="text" ref={titleRef3} onChange={(e) => handleInput(e, titleRef4, titleRef2)} />
                        <input type="text" ref={titleRef4} onChange={(e) => handleInput(e, titleRef5, titleRef3)}/>
                        <input type="text" ref={titleRef5} onChange={(e) => handleInput(e, titleRef6, titleRef4)}/>
                        <input type="text" ref={titleRef6} onChange={(e) => handleInput(e, null, titleRef5)}/>
                    </div>
                    <input type="submit" className='btn' value="Varify OTP"/>
                </form>
            </div>
        </>
    )
}

export default OTPPage