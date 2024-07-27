import React from 'react';
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet iure cum distinctio pariatur 
                doloribus facilis architecto, consequatur quia deserunt, iusto asperiores.
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste molestias 
                harum suscipit accusantium voluptates nam minima numquam. Vitae iusto praesentium iste a!
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John doe</h2>
        </div>
    </div>
  )
};

export default Testimonials;