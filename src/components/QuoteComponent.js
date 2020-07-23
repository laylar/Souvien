import React from 'react';

function Quote({quote}) {
    
    if(quote) {
        console.log(quote);
        return(
                <div className="container">
                <h4><i>{quote.quote}</i></h4>
                <h5>{quote.author}</h5>
            </div>
            )
        }else{
            return(<div className="container">
            <h4><i>In order to write about life first you must live it.</i></h4>
            <h5>- Ernest Hemingway</h5>
        </div>)
        }
}




export default Quote;