import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
import youtube from '../../assets/img/youtube.png'
import './footer.css'

const Footer = ()=>{
    return(
        <footer className="text-center fixed-bottom" id="footer">
               <div className="footer-sup">
                   <div className="text-center text-black">
                        Bogotá-Colombiatiendavirtual@gmail.com
                        <div className="text-center ">
                                <img src={facebook} width="40"  alt=""/>
                                <img src={twitter} width="40"  alt=""/>
                                <img src={youtube} width="40"  alt=""/>
                                <hr/>
                        </div>
                   </div>
                   
               </div>
                 <div className="text-center text-black" >
                   <span> © Copyright 2021 | GigaDevscorp| All Rights Reserved</span>
            </div>
       
        </footer>
    );
}   
export default Footer