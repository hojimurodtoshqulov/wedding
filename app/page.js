"use client"

import Image from "next/image";
import styles from "./page.module.css";
import locationLogo from "./Photo/Icon/free-icon-wedding-location-706470.png"
import rings from "./Photo/Icon/free-icon-rings-706455.png"
import taom from "./Photo/Icon/free-icon-banquet-6698099.png"
import gul from "./Photo/Icon/free-icon-fireworks-7316099.png"
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css'
export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration:900,
      once:false,
    })
  },[])
  return (
    <div className={styles.page}>

      {/* --------------showcase---------------- */}
      <div className={styles.showcase}>
        <h1 data-aos="fade-down" data-aos-offset="900" data-aos-duration="900">
          All you need is love!
        </h1>
        <div className={styles.showcaseTexts}>
          <p data-aos="fade-up" data-aos-delay="100">Акмаль </p>
          <p data-aos="fade-up" data-aos-delay="300">&</p>
          <p data-aos="fade-up" data-aos-delay="600">Камила </p>
          <p data-aos="fade-up" data-aos-delay="900">5 октября</p>
        </div>
      </div>

      {/* --------------page text---------------- */}
      <p className={styles.pageText}  data-aos="zoom-in" data-aos-delay="900">
        Дорогой гость! <br/>
        Мы будем рады разделить с вами радость неповторимого для нас дня-дня нашей свадьбы!
        Приглашаем присоединиться к нашему празднику и украсить его своим присутствием!
      </p>

      {/* --------------img 1---------------- */}
      <div className={styles.img1}></div>

      {/* --------------date---------------- */}
      <div className={styles.date}>
        <h2 data-aos="fade-down">Программа дня</h2>

        <div className={styles.dateRow}>
          <p data-aos="fade-right">18:00</p>
          <div className={styles.dateRowIcon} data-aos="fade-up">
            <Image src={locationLogo} width={50} height={50}/>
            <bold></bold>
          </div>
          <div className={styles.dateRowText} data-aos="fade-left">
            <p> Сбор гостей</p>
            <span>
              Подарите нам свою улыбку и возьмите 
              с собой хорошее настроение
            </span>
          </div>
        </div>
        <div className={styles.dateRow}>
          <p data-aos="fade-right">18:30</p>
          <div className={styles.dateRowIcon} data-aos="fade-up">
            <Image src={rings} width={50} height={50}/>
            <bold></bold>
          </div>
          <div className={styles.dateRowText} data-aos="fade-left">
            <p>Выход жениха и невесты</p>
            <span>Может быть трогательно, 
            разрешается всплакнуть</span>
          </div>
        </div>
        <div className={styles.dateRow}>
          <p data-aos="fade-right">18:45</p>
          <div className={styles.dateRowIcon} data-aos="fade-up">
            <Image src={taom} width={50} height={50}/>
            <bold></bold>
          </div>
          <div className={styles.dateRowText} data-aos="fade-left">
            <p>Начало мероприятия </p>
            <span>Самое время для вкусной еды, 
            танцев и развлечений</span>
          </div>
        </div>
        <div className={styles.dateRow}>
          <p data-aos="fade-right">23:00</p>
          <div className={styles.dateRowIcon} data-aos="fade-up">
            <Image src={gul} width={50} height={50}/>
          </div>
          <div className={styles.dateRowText } data-aos="fade-left">
            <p>Завершение праздника</p>
            <span>Надеемся, этот вечер вам понравится</span>
          </div>
        </div>
      </div>

      {/* --------------img 2---------------- */}
      <div className={styles.img2}></div>

      {/* --------------ifv---------------- */}
      <div className={styles.location}>
        <h2 data-aos="fade-down">Локация</h2>
        <p className={styles.locationText} data-aos="zoom-in">
        Мы будем ждать вас  <br/>
        5 октября в 18:00  <br/>
        В ресторане «Parvoz»  <br/>
        улица Карасу, 15/2 <br/>
        <a href="https://yandex.ru/maps/-/CDS3vH5S" target="_blank" data-aos="fade-up">ПЕРЕЙТИ НА КАРТУ</a>
        </p>
      </div>
      <a href="https://yandex.ru/maps/-/CDS3vH5S" target="_blank">
        <div className={styles.img3}></div>
      </a>
      <div className={styles.dress}>
        <h2 data-aos="fade-down">Дресс-код</h2>
        <p className={styles.dressText} data-aos="fade-up">
         Для нас главное - ваше присутствие! 
        </p>
      </div>
      <div className={styles.img4}></div>

      <div className={styles.budem}  data-aos="zoom-out">
        <h2>Будем вас ждать!</h2>
      </div>
    </div>
  );
}
