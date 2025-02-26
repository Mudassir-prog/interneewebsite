import React from 'react'
import { useEffect,useRef } from 'react';
import Typed from "typed.js";




export default function TypedEffect() {

    const typedRef = useRef(null);

   
    useEffect(() => {
        if (typedRef.current) {
          const typed = new Typed(typedRef.current, {
            strings: ["Market Competitive Salary", "On Your Desired Domain", "Gain Hands On Experience"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
          });
    
          return () => {
            typed.destroy(); 
          };
        }
      }, []);

  return (
    <div>
       <span ref={typedRef} id="typed-output" />
    </div>
  )
}
