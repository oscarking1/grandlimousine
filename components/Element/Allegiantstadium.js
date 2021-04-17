import React, {Component} from 'react';
import Link from 'next/link'

var allegiantstadiumimg1 = "/images/allegiantstadium/So-Fi_Stadium.jpg";


class Allegiantstadium extends Component{
	render(){
		return(

         
                <div className="allegiant-stadium text-center">
                    <img src={allegiantstadiumimg1} alt="SoFi Stadium"></img>
                    <div className="allegiant-stadium-btn custom-btn">
                        <Link href={"/contact-us/"} rel="noopener noreferrer"> Contact Us </Link>
                        <a href="tel:4044244499"> Call (404) 424-4499  </a>
                    </div>
                </div>
    

            )
        }
    }
export default Allegiantstadium;