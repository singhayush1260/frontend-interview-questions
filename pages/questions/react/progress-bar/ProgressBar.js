import { useEffect } from 'react';
import classes from "../../../../styles/pages/questions/react/ProgressBar.module.scss";

const ProgressBar=({value=0,onComplete=()=>{}})=>{


     useEffect(()=>{
        if(value==101){
            onComplete();
        }
    },[value])
    return(
         <div className={classes.progress_bar}>
            <span style={{color:`${value < 50 ? 'black' :'white'}`}}>{Math.min(100,Math.max(value,0))}%</span>
           <div className={classes.current_progress} style={{width:`${value}%`}}/> 
           
         </div>
    )
}
export default ProgressBar;