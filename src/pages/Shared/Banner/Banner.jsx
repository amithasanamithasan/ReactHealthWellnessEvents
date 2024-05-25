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
    height: '400px'
  }

const Banner = () => {

    const slideImages = [
        {
          url: 'https://i.im.ge/2024/05/25/KsnvWJ.pexels-shvetsa-3845810-1.jpeg',
         
        },
        {
          url: 'https://i.im.ge/2024/05/25/Ks4YCF.pexels-rdne-6129237.jpeg',
          
        },
        {
          url: 'https://i.im.ge/2024/05/25/Ks486X.pexels-cristian-rojas-8460228.jpeg',
         
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