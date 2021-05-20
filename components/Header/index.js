import React, { Component } from 'react';
import Link from 'next/link'

class Header extends Component {
    componentDidMount() {

        // sidebar open/close

        var btn = document.querySelector('.navicon');
        var aaa = document.querySelector('.myNavbar ');

        function toggleFunc() {
            return aaa.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            navUl.forEach(el => el.classList.remove('open'));
            current.classList.add('open');
        }

    }

    render() {
        return (
            <header className="site-header header-transparent mo-left">

                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">

                            <div className="logo-header mostion">
                                <Link href={"/"} className="logo-1"><img src="/images/logo-grand.png" width="180px" height="59px" alt="Grand Limousine - Private Chauffeur and Car Service across USA" /></Link>
                            </div>

                            <button className="navbar-toggler collapsed navicon  justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>



                            <div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
                                <ul className="nav navbar-nav">

                                    <li className=""><Link href={"/super-bowl/"} rel="noopener noreferrer">The Super Bowl</Link></li>
                                    <li className=""><Link href={"/about-us/"} rel="noopener noreferrer">About Us</Link></li>
                                    <li>
                                        <Link href="#" className="down">
                                            <a>Services
                                            <i className="fa fa-chevron-down"></i>
                                                 </a>
                                        </Link>
                                        <ul className="sub-menu">
											<li><Link href={"/car-service/"} rel="noopener noreferrer" ><a>Car Service <span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/limousine-service/"} rel="noopener noreferrer">Limousine Service</Link></li>
											<li><Link href={"/corporate-transportation/"} rel="noopener noreferrer"><a>Corporate Transportation</a></Link></li>
											<li><Link href={"/wedding-transportation/"} rel="noopener noreferrer"><a>Wedding Limousine Service<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/airport-car-service/"} rel="noopener noreferrer"><a>Airport Car Service<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/wine-tour/"} rel="noopener noreferrer"><a>Wine Tour<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/transportation-coordinator/"} rel="noopener noreferrer"><a>Transportation Coordinator<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/church-limo/"} rel="noopener noreferrer"><a>Church Limo<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/casino-trips/"} rel="noopener noreferrer"><a>Casino Trips<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/party-limo/"} rel="noopener noreferrer"><a>Party Limo<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/bachelor-party/"} rel="noopener noreferrer"><a>Bachelor Party<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/bachelorette-party/"} rel="noopener noreferrer"><a>Bachelorette Party<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/graduation-limo/"} rel="noopener noreferrer"><a>Graduation Limo<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/concert-limo/"} rel="noopener noreferrer"><a>Concert Limo<span className="tag-new">New</span></a></Link></li>
										</ul>
                                    </li>
                                    <li className="down"><Link  href={"/locations/"} rel="noopener noreferrer"><a>Top Cities <i className="fa fa-chevron-down"></i></a></Link>
										<ul className="sub-menu">
											<li><Link href={"/locations/atlanta/"} rel="noopener noreferrer"><a>Atlanta, GA <span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/augusta/"} rel="noopener noreferrer"><a>Augusta, GA<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/columbus/"} rel="noopener noreferrer"><a>Columbus, GA<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/chicago/"} rel="noopener noreferrer"><a>Chicago, IL<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/destin-fl-32540/"} rel="noopener noreferrer"><a>Destin, FL<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/gray/"} rel="noopener noreferrer"><a>Gray, GA<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/houston/"} rel="noopener noreferrer"><a>Houston, TX<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/jacksonville/"} rel="noopener noreferrer"><a>Jacksonville, FL<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/los-angeles/"} rel="noopener noreferrer"><a>Los Angeles, CA <span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/kentucky-car-service/"} rel="noopener noreferrer"><a> Louisville, KY <span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/macon-ga-31201/"} rel="noopener noreferrer"><a>Macon, GA<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/miami/"} rel="noopener noreferrer"><a>Miami, FL<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/new-york/"} rel="noopener noreferrer"><a>New York<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/orlando/"} rel="noopener noreferrer"><a>Orlando, FL<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/palm-beach/"} rel="noopener noreferrer"><a>Palm Beach, FL<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/san-francisco/"} rel="noopener noreferrer"><a>San Francisco, CA<span className="tag-new">New</span></a></Link></li>
											<li><Link href={"/locations/savannah-ga-31302/"} rel="noopener noreferrer"><a>Savannah, GA<span className="tag-new">New</span></a></Link></li>
											<li><Link exact href={"/locations/"} rel="noopener noreferrer"><a>All Locations & Services<span className="tag-new">New</span></a></Link></li>
										
										</ul>
                                    </li>
                                    <li className=""><Link href={"/posts/"} rel="noopener noreferrer">Posts</Link></li>
									<li><Link href={"/contact-us/"} rel="noopener noreferrer">Contact Us</Link></li>
									<li className="my-account" ><a href="https://account.chauffeurbookingsoftware.com/account/login/?guid=123fd7f0-ff6c-4a9d-80fb-05c694c9ed03" rel="nofollow noopener noreferrer" target="_blank">My Account <i className="ti-import m-r5 rotate90"></i> </a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}

export default Header;
