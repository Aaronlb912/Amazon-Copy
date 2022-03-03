import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__nav'>
            <div className='footer__column'>
               <div className='footer__columnTitle'>
                   <span> Get To Know Us </span>
                </div>
                <div className='footer__columnList'>
                    <ul>
                    <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Sustainability</li>
                        <li>Press Center</li>
                        <li>Investor Relations</li>
                        <li>Amazon Devices</li>
                        <li>Amazon Science</li>
                    </ul>
                </div>

            </div>
            <div className='footer__column'>
                <div className='footer__columnTitle'>
                    <span> Make Money with </span>
                </div>
                <div className='footer__columnList'>
                    <ul>
                        <li>Sell products on Amazon</li>
                        <li>Sell apps on Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Become a Delivery Driver</li>
                        <li>Start a package delivery business</li>
                        <li>Advertise Your Products</li>
                        <li>Self-Publish with Us</li>
                        <li>Host an Amazon Hub</li>
                        <li>›See More Ways to Make Money</li>
                    </ul>
                </div>
            </div>
            <div className='footer__column'>
               <div className='footer__columnTitle'>
                   <span> Amazon Payment Products </span>
                </div>
                <div className='footer__columnList'>
                    <ul>
                        <li>Amazon Rewards Visa Signature Cards</li>
                            <li>Amazon.com Store Card</li>
                            <li>Amazon Secured Card</li>
                            <li>Amazon Business Card</li>
                            <li>Amazon Business Line of Credit</li>
                            <li>Shop with Points</li>
                            <li>Credit Card Marketplace</li>
                            <li>Reload Your Balance</li>
                            <li>Amazon Currency Converter</li>
                    </ul>
                </div>
            </div>
            <div className='footer__column'>
                <div className='footer__columnTitle'>
                 <span> Let Us Help You </span>
                </div>
                <div className='footer__columnList'>
                    <ul>
                        <li>Amazon and COVID-19</li>
                        <li>Your Account</li>
                        <li>Your Orders</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Amazon Prime</li>
                        <li>Returns & Replacements</li>
                        <li>Manage Your Content and Devices</li>
                        <li>Amazon Assistant</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>                                    
        </div>
    </div>
  )
}

export default Footer