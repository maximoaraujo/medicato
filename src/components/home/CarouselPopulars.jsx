import React, { Fragment } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Producto_1 from '../../asset/productos/producto_1.png';
import Producto_2 from '../../asset/productos/producto_2.png';
import Producto_3 from '../../asset/productos/producto_3.png';
import Producto_4 from '../../asset/productos/producto_4.png';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function CarouselPopulars() {
    return (
        <Fragment>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Typography gutterBottom variant="h5" component="div">
                Los más populares
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Link href="#" underline="none">Ver más →</Link>
            </Grid>
        </Grid>
        <Carousel
            responsive={responsive} 
            centerMode={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={10000}
        >
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ width: 84, height: 136, marginLeft: '5.8rem'}}
                        component="img"
                        image= {Producto_1}
                        alt="producto 1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div">
                        Vidanat colageno
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        $149
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ width: 84, height: 136, marginLeft: '5.8rem' }}
                        component="img"
                        image= {Producto_2}
                        alt="producto 3"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div">
                        Advil Max
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        $87
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ width: 84, height: 136, marginLeft: '5.8rem' }}
                        component="img"
                        image= {Producto_3}
                        alt="producto 3"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div">
                        Redoxon plus
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        $77
                        </Typography>
                    </CardContent>
                </Card> 
            </div>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ width: 84, height: 136, marginLeft: '5.8rem' }}
                        component="img"
                        image= {Producto_4}
                        alt="producto 4"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div">
                        Jarabe inf Tempra
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        $117
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </Carousel>
        </Fragment>
    );
}