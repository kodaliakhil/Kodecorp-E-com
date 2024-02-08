import { Box, Stack, Typography } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import HsImg1 from "../assets/hs-img1.png"
import Link from '@mui/material/Link';

function CarouselItem({ image, link }) {
    return (
        <Stack height={"100%"}
            width={"75%"}
            className='container d-flex flex-sm-column flex-md-row justify-content-center align-items-center'
            // direction={"row"} alignItems={"center"} justifyContent={"center"}
            spacing={2} >
            <Stack spacing={1} width={"100%"} className='order-1 order-md-0' >
                <Typography className='fw-bolder text-center text-md-start'
                    sx={{ fontSize: "clamp( 0.2rem, 5vw, 2rem )" }}
                    color={"#fff"} fontFamily={"Poppins"} textAlign={"left"}>Fueling Innovation in Every Drop</Typography>
                <Typography className='text-center text-md-start' color={"#fff"} variant='subtitle2' fontFamily={"Poppins"} textAlign={"left"}>Developing state-of-the-art procurement and  settlement platforms using cutting-edge technologies</Typography>
                <Link href={link} underline="always" className='fw-bolder text-center text-md-start text-decoration-underline' variant='caption' color={"#fff"} fontFamily={"Poppins"} textAlign={"left"} >MORE</Link>
            </Stack>
            <div className='w-100 text-center order-0 order-md-1'>
                <img alt='fuel' style={{ height: "auto", width: "80%" }} src={image} />
            </div>
        </Stack>
    )
}

const carousels = [
    {
        id: 0,
        text: "Fueling Innovation in Every Drop",
        image: HsImg1,
        link: "#"
    },
    {
        id: 1,
        text: "Fueling Innovation in Every Drop",
        image: HsImg1,
        link: "#"
    },
    {
        id: 2,
        text: "Fueling Innovation in Every Drop",
        image: HsImg1,
        link: "#"
    },
]

function HeroSectionCarousel() {

    return (
        <Box height={"60vh"} className="d-flex align-items-center justify-content-center" sx={{ backgroundColor: "#273C99" }}>
            <Carousel className='container' indicators={false}
                style={{ height: "60vh", width: "100vw", }} >
                {carousels.map(each => (
                    <Carousel.Item key={each.id} style={{ height: "60vh", width: "100%", }}>
                        <CarouselItem {...each} />
                    </Carousel.Item>
                ))}

            </Carousel>
        </Box >
    );
}

export default HeroSectionCarousel;