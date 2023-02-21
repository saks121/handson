import React from 'react';


class ClassCompo extends React.Component{
    render(){
        return(
            <div id="div-main2">
                <h1>This is created using Class Component</h1>
                <p>This is done using External CSS</p>
                <p style={{color:'red'}}>This is done using Inline CSS</p>  
            </div>
        );    
    }
}
export default ClassCompo;  