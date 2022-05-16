/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Container, Grid, TextField, Typography, Box } from '@mui/material';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Slide2({menus}) {
  // const [menus, setMenu] = useState([]);
  // http://jinny.dothome.co.kr/2020/06/12/swiper-%ED%95%9C%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EB%84%A3%EA%B8%B0swiper-mutiple/

  // useEffect(() => {
  //   axios
  //     // .get('http://localhost:8080/api/v1/goods')
  //     .get(`https://k6d207.p.ssafy.io/api/v1/goods/${cat}`)
  //     .then(({ data }) => {
  //       setMenu(data.object);
  //       console.log('확인중',data,cat);
  //     });
  // }, []);
  return (

    <Grid container spacing={3} style={{ height: 400, }}>
      <Grid item xs={1} sx={{ paddingLeft: 0, display: { md: 'flex' } }}>
      {/* <Grid item xs={1}> */}
      {/* <Grid item xs={1} sx={{ padding: 0, display: { xs: 'none', md: 'flex' } }}> */}
        <Button className='swiper-button-prev' style={{ color: '#F93D59', display: { } }}
        // <Button className='swiper-button-prev2' style={{ color: 'black'}}
          // style={{ color: '#F93D59', display: { xs: 'none' } }}
        >
          {/* {' '} */}
        </Button>
      </Grid>
      <Grid item xs={10} style={{ padding: 0 }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          observer={true}
          observeParents={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          // modules={[Pagination]}
          modules={[Pagination, Navigation]}
          breakpoints={{
            576: {
              slidesPerView: 3,
              spaceBetween: 20,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
              slidesPerGroup: 4,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 15,
              slidesPerGroup: 5,
            },
          }}
          className='mySwiper'
        >
          {menus.map((menu) => (
            <SwiperSlide key={menu.id}>
              <Link to={`/${menu.id}`} style={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    width: 170,
                    height: 300,
                    boxShadow: 0,
                    border: 1,
                    borderColor: 'grey.300',
                    borderRadius: '16px',
                  }}
                >
                  <Box sx={{ display: 'felx', flexDirection: 'column', width: 180, height: 180 }} >
                    <CardMedia
                      component='img'
                      alt='이미지 준비중'
                      sx={{ width: 160, height: 180 }}
                      image={`${menu.photo}`}
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant='h8' component='div'>
                      {menu.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant='h7'
                      component='div'
                      style={{ fontWeight: 'bold' }}
                    >
                      {/* {menu.price}원 */}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      {/* <Grid item xs={1} sx={{ display: { xs: 'none', md: 'flex' } }}> */}
      {/* <Grid item xs={1} sx={{ display: {  md: 'flex' } }}> */}
      <Grid item xs={1}>
        <Button className='swiper-button-next' style={{ color: '#F93D59' }}>
          {' '}
        </Button>
      </Grid>
    </Grid>


  );
}

export default Slide2;