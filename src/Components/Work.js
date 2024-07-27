import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from"../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: 'lorem ipsum dolor sits amet consectetur. maecenas orci et sagittis duis elementum interdum facilisi bibendum'
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: 'lorem ipsum dolor sits amet consectetur. maecenas orci et'
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: 'lorem ipsum dolor sits amet consectetur. maecenas orci et sagittis duis'
        }
    ]
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nisi neque 
                molestiae eum accusamus illum suscipit quo earum commodi eos. Unde, inventore.
            </p>
        </div>
        <div className="work-section-bottom">
           { workInfoData.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                      <h2>{data.title}</h2>
                      <p>{data.text}</p>  
                </div>
            ))}
        </div>
    </div>
  )
};

export default Work;
