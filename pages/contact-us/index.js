import React, { Component } from 'react';
var bnr = "/images/banner/inner-banner.jpg"
import Layout from '../../components/Layout';
class Contactus extends Component {
    render() {
        const meta = {
            title: 'Contact US | Limo Service Atlanta | Grand Limousine',
            description: "GrandLimousine.com provides best Corporate Car Service in Atlanta. Book Your Ride Online: (404) 424-4499 ? info@grandlimousine.com",
            keywords: 'react,meta,document,html,tags'
        };
        return (
            <Layout  meta={meta}>
                <div className="inner-banner overlay-black-middle" style={{ backgroundImage: "url(" + bnr + ")" }}>
                    <div className="container">
                        <div className="row">
                            <div class="col-md-6 banner-c-table left">
                                <div class="cont">
                                    <form action="#">
                                        <input type="text" class="validate" placeholder="Pickup Addres or Airport" />

                                        <input type="text" class="validate" placeholder="Drop-off Addres or Airport" />

                                        <div>
                                            <input type="text" class="validate" placeholder="Day" />
                                            <input type="text" class="validate" placeholder="Time" />

                                        </div>
                                        <input type="submit" class="validate" />
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 right">
                                <div className="bnr-content text-center">
                                    <h2><a href="#"> BOOK YOUR RIDE INSTANTLY </a></h2>
                                    <h6>TRAVEL IN CONFORT. ALWAYS ON TIME </h6>
                                    <h3>Call <a href="tel:(404) 424-4499">(404) 424-4499</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contactus;