import './App.scss';
import music from './images/icon-music.svg';
import image from './images/illustration-hero.svg';

export default function Desktop () {
    return(
      <div className='desktop'>
        <DesktopImages/>
        <DesktopContent/>
      </div>
    )
}

const DesktopImages = () => {
  return(
    <div className='desktop_image'>
      <img src={image} alt='desktop'/>
    </div>
  )
}

const DesktopContent = () => {
  return(
    <div className='desktop_content'>
      <div className='desktop_text'>
        <h2>Order Summary</h2>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <DesktopPlan/>
        <DesktopButton/>
      </div>
    </div>
  )
}  

const DesktopPlan = () => {
  return(
    <div className='desktop_plan'>
      <img src={music} alt='desktop'/>
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

const DesktopButton = () => {
  return(
    <div className='desktop_button'>
      <button>
        Proceed to Payment
      </button>
      <button>
        Cancel Order
      </button>
    </div>
  )
}