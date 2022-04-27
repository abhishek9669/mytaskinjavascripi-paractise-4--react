import React, { useEffect, useState } from 'react'

export default function Covid19() {
  //1 state
  const [first, setfirst] = useState([])
  //2function
  useEffect(() => {
    getcoviddata();
   
  }, []);

  let getcoviddata = async()=>{
    try {

     fetch('https://data.covid19india.org/data.json').then((res)=>{
       return res.json();
     }).then((data)=>{
       
       setfirst(data.statewise[0])
     });

     console.log(first)
     
     
    
      
    } catch (error) {
      
    }

  }
  




  //return statment


  return (
    <div>
    <h1>Live</h1>
    <h1>covid 19 data</h1>
    <section>
        <ul>
            <li className='card'>
                <div className='card_main'>
                    <div className='card-inner'>
                        <p className='card_name'><span>OUR</span>COUNTRY</p>
                        <p className='card_total card_small'>INDIA</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card-inner'>
                        <p className='card_name'><span>TOTAL</span>RECOVERED</p>
                        <p className='card_total card_small'>{first.recovered}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card-inner'>
                        <p className='card_name'><span>TOTAL</span>CONFORMED</p>
                        <p className='card_total card_small'>{first.confirmed}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card-inner'>
                        <p className='card_name'><span>TOTAL</span>DEATH</p>
                        <p className='card_total card_small'>{first.deaths}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card-inner'>
                        <p className='card_name'><span>TOTAL</span>ACTIVE</p>
                        <p className='card_total card_small'>{first.active}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card-inner'>
                        <p className='card_name'><span>LAST</span>UPDATE</p>
                        <p className='card_total card_small'>{first.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>

</div>
  )
}
