import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'




const spanStyle = {
    padding: '20px',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px'
  }

const Banner = () => {

    const slideImages = [
        {
          url: 'https://i.im.ge/2024/05/28/KDiCQ9.health-wellbeing-wellness-vitality-healthcare-concept-74313146.webp',
         
        },
        {
          url: 'https://i.im.ge/2024/05/28/KDiy8K.rsw-1240h-620cg-true.webp',
          
        },
        {
          url: 'https://i.im.ge/2024/05/28/KDiPu6.banner1.jpeg',
         
        },
      ];


    return (
      

       <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
     
      
    );
};

export default Banner;