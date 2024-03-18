import React from 'react';
import {
  FaShareAltSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#000300]'>
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#bfb749]'>CloudFusion.</h1>
          <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
          <div className='flex justify-between md:w-[75%] my-6'>
              <a href="https://www.facebook.com/WesternUniversity/"><FaFacebookSquare size={30} /></a>
              <a href="https://twitter.com/WesternU"><FaTwitterSquare size={30} /></a>
              <a href="https://www.westerncybersociety.com/"><FaShareAltSquare size={30} /></a>
              <a href="https://github.com/ColeBranston/cloudFusion"><FaGithubSquare size={30} /></a>
              <a href="https://www.instagram.com/westerncybersociety/"><FaInstagram size={30} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;