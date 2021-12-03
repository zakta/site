import { Container, SliderBox, SliderImage } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export default function Home(){
  const settings={
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    <Container id="/">
      <Slider {...settings}>
        <SliderBox>
          <SliderImage src="./workspace.jpg" alt="Imagem espaço de trabalho"/>
        </SliderBox>
        <SliderBox>
          <SliderImage src="./computer-one.jpg" alt="Imagem espaço de trabalho"/>
        </SliderBox>
        <SliderBox>
          <SliderImage src="./computer-two.jpg" alt="Imagem espaço de trabalho"/>
        </SliderBox>
      </Slider>
    </Container>
  );
}
