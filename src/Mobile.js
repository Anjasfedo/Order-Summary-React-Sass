import './App.scss';
import music from './images/icon-music.svg';
import image from './images/illustration-hero.svg';

export default function Mobile () {
    return(
      <div className='mobile'>
        <MobileImage/>
        <MobileContent/>
      </div>
    )
}

const MobileImage = () => {
  return(
    <div className='mobile_image'>
      <img src={image} alt='mobile'/>
    </div>
  )
}

const MobileContent = () => {
  return (
    <div className='mobile_content'>
      <div className='mobile_text'>
        <h2>Order Summary</h2>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <MobilePlan/>
        <MobileButton/>
      </div>
    </div>
  )
}

const MobilePlan = () => {
  return(
    <div className='mobile_plan'>
      <img src={music} alt='mobile'/>
      <div className='plan_text'>
        <p>
        Annual Plan
        </p>
        <p>
        $59.99/year
        </p>
      </div>
      <a href='_blank'>Change</a>
    </div>
  )
}

const MobileButton = () => {
  return(
    <div className='mobile_button'>
      <button>
        Proceed to Payment
      </button>
      <button>
        Cancel Order
      </button>
    </div>
  )
}