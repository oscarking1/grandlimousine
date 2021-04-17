import React, {Component} from 'react';
import {Link} from 'react-router-dom';


var tofrom = require ('./../../images/services/nashville.png');
var sedans = require ('./../../images/services/sedans.png');
var suvs = require ('./../../images/services/suvs.png');
var vans = require ('./../../images/services/vans.png');
var titlesedans = require ('./../../images/services/landing-title-sedans.png');
var titlesuvs = require ('./../../images/services/landing-title-suv.png');
var titlevans = require ('./../../images/services/landing-title-vans.png');
var landingphonebottom = require ('./../../images/services/landing-phone-bottom.png');
var landingcarlimo = require ('./../../images/services/landing-car-limo.png');

class Nashvilletable extends Component {
    render() {
        return (
            <section className="section-full booknowtable">
                    <table>
                            <tbody>
                                <tr>
                                    <td valign="bottom"> <img loading="lazy" title="To/From" src={tofrom}></img> </td>
                                    <td valign="bottom"> <img loading="lazy" title="Sedans" src={sedans}></img> </td>
                                    <td valign="bottom"> <img loading="lazy" title="Suvs" src={suvs}></img> </td>
                                    <td valign="bottom"> <img loading="lazy" title="Vans" src={vans}></img> </td>
                                </tr>
                                <tr style={{backgroundColor: '#3e3e3e', color: '#fff'}}>
                                    <td> <strong>TO/FROM</strong> </td>
                                    <td> <img loading="lazy" title="Sedans" src={titlesedans}></img> 
                                    </td>
                                    <td> <img loading="lazy" title="Suvs" src={titlesuvs}></img> 
                                    </td>
                                    <td> <img loading="lazy" title="Vans" src={titlevans}></img> 
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nashville</td>
                                    <td> <strong>$59</strong> </td>
                                    <td> <strong>$79</strong> </td>
                                    <td> <strong>$179</strong> </td>
                                </tr>
                                <tr>
                                    <td>Donelson</td>
                                    <td> <strong>$59</strong> </td>
                                    <td> <strong>$79</strong> </td>
                                    <td> <strong>$164</strong> </td>
                                </tr>
                                <tr>
                                    <td>Berry Hill	</td>
                                    <td> <strong>$59</strong> </td>
                                    <td> <strong>$79</strong> </td>
                                    <td> <strong>$174</strong> </td>
                                </tr>
                                <tr>
                                    <td>Oak Hill	</td>
                                    <td> <strong>$59</strong> </td>
                                    <td> <strong>$84</strong> </td>
                                    <td> <strong>$184</strong> </td>
                                </tr>
                                <tr>
                                    <td>Brentwood	</td>
                                    <td> <strong>$64</strong> </td>
                                    <td> <strong>$84</strong> </td>
                                    <td> <strong>$189</strong> </td>
                                </tr>
                                <tr>
                                    <td valign="middle"> <img loading="lazy" title="Luxury/Space" src={landingcarlimo}></img> </td>
                                    <td colspan="3" valign="middle"> <strong>NEED MORE LUXURY/SPACE? CALL NOW</strong> </td>
                                </tr>
                                <tr style={{backgroundColor: '#3e3e3e'}}>
                                    <td colspan="4"> <img loading="lazy" class="alignnone" title="Book Now" src={landingphonebottom}></img> </td>
                                </tr>
                            </tbody>
                        </table>
                </section>
        )
    }
}


export default Nashvilletable;