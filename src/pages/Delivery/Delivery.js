import React from 'react';
import styles from './Delivery.module.css';
import image from '../../access/images/devilery_image.png';
import {NavLink} from "react-router-dom";

const Delivery = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.block}>
                    <div>
                        <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                        <NavLink to="/basket">
                            <button>Оформить доставку</button>
                        </NavLink>
                    </div>

                    <div className={styles.image}>
                        <img className={styles.image_img} src={image} alt=""/>
                    </div>
                </div>

                <div className={styles.how_work}>

                    <h2>Как работает доставка</h2>
                    <div>
                        <span>1</span>
                        <img src="https://nambafood.kg/new_design/static/img/icons/icon-pc.svg?1660044311" alt=""/>
                        <p>НЕСКОЛЬКО КЛИКОВ И ЗАКАЗ ГОТОВ</p>
                    </div>

                    <div>
                        <span>2</span>
                        <img src="https://nambafood.kg/new_design/static/img/icons/icon-support.svg?1660044311" alt=""/>
                        <p>ОПЕРАТОР ПОДТВЕРДИТ ЗАКАЗ</p>
                    </div>

                    <div>
                        <span>3</span>
                        <img src="https://nambafood.kg/new_design/static/img/icons/icon-cafe.svg?1660044311" alt=""/>
                        <p>ЗАВЕДЕНИЕ ПРИГОТОВИТ ЗАКАЗ</p>
                    </div>

                    <div>
                        <span>4</span>
                        <img src="https://nambafood.kg/new_design/static/img/icons/icon-moto.svg?1660044311" alt=""/>
                        <p>КУРЬЕР ЗАБИРАЕТ ЗАКАЗ</p>
                    </div>

                    <div>
                        <span>5</span>
                        <img src="https://nambafood.kg/new_design/static/img/icons/icon-motoride.svg?1660044311"
                             alt=""/>
                        <p>КУРЬЕР ДОСТАВЛЯЕТ ЗАКАЗ</p>
                    </div>

                    <div>
                        <span>6</span>
                        <img src="https://nambafood.kg/new_design/static/img/icons/icon-home.svg?1660044311" alt=""/>
                        <p>ПОЛУЧЕНИЕ И ОПЛАТА ЗАКАЗА</p>
                    </div>
                </div>

                <h2>Доставка в самые короткие сроки</h2>
                <div className={styles.how_pay}>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="36px">
                            <path fill="#2b2b2b"
                                  d="M33.750,0.008 C32.414,0.008 31.200,0.298 30.240,0.843 C29.428,1.303 28.751,1.988 28.560,2.870 C27.704,3.238 26.761,3.648 26.010,3.973 C25.259,4.298 24.745,4.502 24.540,4.599 C23.996,4.858 23.553,5.246 23.340,5.762 C23.127,6.278 23.204,6.880 23.460,7.312 C23.973,8.178 25.040,8.549 26.130,8.296 C26.997,8.096 27.695,7.593 28.290,7.133 C29.124,9.567 30.015,13.069 29.760,16.227 C29.612,18.063 29.088,19.675 28.080,20.788 C27.072,21.902 25.567,22.637 23.040,22.637 C21.179,22.637 19.624,22.605 19.080,22.190 C18.808,21.982 18.626,21.719 18.570,20.937 C18.514,20.156 18.669,18.925 19.170,17.181 C19.211,17.024 19.211,16.860 19.170,16.704 C19.170,16.704 19.045,16.106 18.630,15.511 C18.659,15.487 18.691,15.479 18.720,15.452 C18.963,15.226 19.200,14.854 19.200,14.408 C19.200,13.673 18.960,12.957 18.540,12.351 C18.120,11.745 17.445,11.188 16.530,11.188 L2.670,11.188 C1.755,11.188 1.080,11.745 0.660,12.351 C0.240,12.957 0.000,13.673 0.000,14.408 C0.000,14.840 0.213,15.223 0.450,15.452 C0.687,15.680 0.950,15.804 1.230,15.929 C1.375,15.994 1.547,16.052 1.710,16.108 C1.017,17.400 0.000,19.758 0.000,22.637 C0.000,24.099 1.047,25.255 2.430,26.066 C2.757,26.258 3.106,26.434 3.480,26.602 C3.105,27.430 2.880,28.352 2.880,29.316 C2.880,32.992 5.900,35.994 9.600,35.994 C13.300,35.994 16.320,32.992 16.320,29.316 C16.320,29.236 16.323,29.156 16.320,29.077 C18.302,29.215 20.299,29.316 22.230,29.316 C25.164,29.316 27.694,29.074 29.880,28.660 C30.014,29.447 30.264,30.046 30.690,30.478 C31.318,31.116 32.148,31.224 32.640,31.224 C33.062,31.224 33.477,31.083 33.810,30.896 C34.531,33.810 37.171,35.994 40.320,35.994 C44.020,35.994 47.040,32.992 47.040,29.316 C47.040,28.273 46.783,27.279 46.350,26.394 C46.501,26.363 46.644,26.306 46.800,26.244 C47.150,26.108 47.523,25.841 47.730,25.470 C47.937,25.098 48.000,24.690 48.000,24.277 C48.000,22.912 47.066,21.631 45.510,20.610 C44.161,19.724 42.269,19.043 39.900,18.880 C39.736,18.367 39.503,17.875 39.210,17.389 C39.210,17.380 39.210,17.370 39.210,17.360 C37.892,15.220 35.015,11.552 33.360,6.746 C33.489,6.751 33.618,6.776 33.750,6.776 C34.417,6.776 34.977,6.722 35.460,6.537 C35.943,6.352 36.358,6.013 36.600,5.613 C37.083,4.812 36.960,4.022 36.960,3.377 C36.960,2.734 37.083,1.971 36.600,1.170 C36.358,0.770 35.943,0.431 35.460,0.246 C34.977,0.061 34.417,0.007 33.750,0.008 ZM33.750,1.916 C34.269,1.916 34.609,1.974 34.770,2.035 C34.931,2.097 34.925,2.114 34.950,2.154 C34.999,2.235 35.040,2.676 35.040,3.377 C35.040,4.079 34.999,4.548 34.950,4.629 C34.925,4.670 34.931,4.686 34.770,4.748 C34.609,4.810 34.269,4.868 33.750,4.868 C32.711,4.868 31.795,4.609 31.200,4.271 C30.605,3.934 30.420,3.598 30.420,3.377 C30.420,3.158 30.605,2.820 31.200,2.482 C31.795,2.145 32.711,1.916 33.750,1.916 ZM27.330,5.464 C27.278,5.506 27.295,5.510 27.240,5.553 C26.720,5.958 26.021,6.376 25.710,6.448 C25.439,6.510 25.371,6.437 25.290,6.388 C25.328,6.358 25.287,6.373 25.380,6.328 C25.412,6.313 26.042,6.027 26.790,5.702 C26.951,5.633 27.154,5.540 27.330,5.464 ZM29.940,5.732 C30.040,5.800 30.135,5.881 30.240,5.941 C30.532,6.106 30.865,6.241 31.200,6.358 C32.901,12.057 36.354,16.343 37.590,18.344 C37.595,18.352 37.585,18.365 37.590,18.374 C37.690,18.541 37.783,18.713 37.860,18.880 C33.640,19.304 30.124,22.584 29.790,26.751 C27.690,27.169 25.188,27.408 22.230,27.408 C20.008,27.408 17.677,27.295 15.420,27.109 C15.322,27.083 15.221,27.074 15.120,27.079 C12.632,26.865 10.243,26.559 8.190,26.096 C6.194,25.645 4.512,25.037 3.420,24.396 C2.328,23.756 1.920,23.191 1.920,22.637 C1.920,19.697 3.148,17.403 3.660,16.555 C5.248,16.800 7.258,16.913 9.510,16.913 C11.928,16.913 14.136,16.778 15.810,16.495 C16.132,16.441 16.425,16.384 16.710,16.316 C17.033,16.468 17.211,16.923 17.250,17.032 C16.813,18.660 16.575,20.011 16.650,21.057 C16.733,22.204 17.176,23.150 17.910,23.710 C19.378,24.831 21.275,24.545 23.040,24.545 C25.962,24.545 28.127,23.610 29.520,22.071 C30.913,20.531 31.510,18.505 31.680,16.405 C31.994,12.523 30.903,8.323 29.940,5.732 ZM2.670,13.096 L16.530,13.096 C16.557,13.096 16.754,13.171 16.950,13.454 C17.091,13.658 17.141,13.910 17.190,14.140 C17.169,14.150 17.184,14.159 17.160,14.170 C16.840,14.307 16.260,14.490 15.510,14.617 C14.011,14.871 11.848,15.005 9.510,15.005 C7.172,15.005 5.084,14.870 3.630,14.617 C2.903,14.490 2.311,14.334 2.010,14.200 C2.053,13.961 2.098,13.674 2.250,13.454 C2.446,13.171 2.643,13.096 2.670,13.096 ZM38.790,20.759 C41.366,20.759 43.235,21.405 44.430,22.190 C45.625,22.975 46.080,23.938 46.080,24.277 C46.080,24.442 46.055,24.470 46.050,24.485 C45.947,24.512 45.493,24.534 44.790,24.515 C43.317,24.476 40.926,24.426 38.010,25.619 C35.431,26.673 34.225,27.745 33.540,28.511 C33.198,28.893 32.978,29.171 32.880,29.256 C32.782,29.341 32.860,29.316 32.640,29.316 C32.354,29.316 32.208,29.277 32.070,29.137 C31.932,28.996 31.680,28.577 31.680,27.408 C31.680,23.744 34.946,20.759 38.790,20.759 ZM43.530,26.424 C43.745,26.420 43.930,26.420 44.130,26.424 C44.748,27.227 45.120,28.223 45.120,29.316 C45.120,31.961 42.981,34.086 40.320,34.086 C37.659,34.086 35.520,31.961 35.520,29.316 C35.521,29.286 35.521,29.256 35.520,29.226 C35.785,28.991 36.157,28.724 36.600,28.451 C36.535,28.727 36.480,29.020 36.480,29.316 C36.480,31.412 38.211,33.132 40.320,33.132 C42.429,33.132 44.160,31.412 44.160,29.316 C44.160,28.170 43.623,27.155 42.810,26.454 C43.051,26.439 43.306,26.426 43.530,26.424 ZM5.250,27.258 C5.555,27.357 5.856,27.467 6.180,27.556 C5.902,28.085 5.760,28.678 5.760,29.316 C5.760,31.412 7.491,33.132 9.600,33.132 C11.709,33.132 13.440,31.412 13.440,29.316 C13.440,29.166 13.400,29.018 13.380,28.868 C13.710,28.905 14.035,28.926 14.370,28.958 C14.378,29.078 14.400,29.191 14.400,29.316 C14.400,31.961 12.261,34.086 9.600,34.086 C6.939,34.086 4.800,31.961 4.800,29.316 C4.800,28.576 4.953,27.884 5.250,27.258 ZM40.320,27.408 C41.392,27.408 42.240,28.251 42.240,29.316 C42.240,30.381 41.392,31.224 40.320,31.224 C39.248,31.224 38.400,30.381 38.400,29.316 C38.400,29.106 38.429,28.907 38.490,28.719 C38.865,29.161 39.254,29.574 39.630,29.972 C39.954,30.388 40.557,30.465 40.977,30.143 C41.396,29.820 41.473,29.221 41.149,28.804 C41.108,28.751 41.061,28.703 41.010,28.660 C40.654,28.283 40.291,27.859 39.930,27.437 C40.056,27.412 40.186,27.408 40.320,27.408 ZM8.100,28.004 C8.487,28.087 8.866,28.167 9.270,28.242 C9.148,28.381 9.034,28.528 8.910,28.660 C8.505,29.000 8.455,29.602 8.798,30.004 C9.141,30.407 9.747,30.456 10.151,30.116 C10.202,30.073 10.249,30.024 10.290,29.972 C10.674,29.564 11.056,29.113 11.430,28.660 C11.437,28.752 11.457,28.842 11.490,28.928 C11.515,29.044 11.520,29.180 11.520,29.316 C11.520,30.379 10.670,31.224 9.600,31.224 C8.530,31.224 7.680,30.379 7.680,29.316 C7.680,28.929 7.786,28.572 7.980,28.272 C8.034,28.189 8.074,28.099 8.100,28.004 Z"/>
                        </svg>
                        <p>У нас действует собственная служба доставки</p>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 32" width="46" height="32">

                            <path id="Фигура_7" className="st0"
                                  d="M5 0c-2.8 0-5 2.2-5 5v22c0 2.8 2.2 5 5 5h36c2.8 0 5-2.2 5-5v-22c0-2.8-2.2-5-5-5h-36zm0 2h36c1.6 0 3 1.3 3 3v22c0 1.6-1.3 3-3 3h-36c-1.6 0-3-1.3-3-3v-22c0-1.6 1.3-3 3-3zm3 5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-4zm0 2h4v3h-4v-3zm-1.3 10c-.6.1-1 .6-.9 1.1.1.6.6 1 1.1.9h5c.6 0 1-.4 1-1s-.4-1-1-1h-5.2zm9 0c-.6.1-1 .6-.9 1.1.1.6.6 1 1.1.9h5c.6 0 1-.4 1-1s-.4-1-1-1h-5.199999999999999zm9 0c-.6.1-1 .6-.9 1.1.1.6.6 1 1.1.9h5c.6 0 1-.4 1-1s-.4-1-1-1h-5.199999999999999zm9 0c-.6.1-1 .6-.9 1.1.1.6.6 1 1.1.9h5c.6 0 1-.4 1-1s-.4-1-1-1h-5.199999999999999zm-27 5c-.6.1-1 .6-.9 1.1.1.6.6 1 1.1.9h13c.6 0 1-.4 1-1s-.4-1-1-1h-13.2z"/>
                            <g id="g5439">
                                <path id="path3810" className="st1" d="M35.6 13.3h-3.3v-5.6h3.3v5.6z"/>
                                <path id="path3814" className="st2"
                                      d="M32.5 10.5c0-1.1.6-2.1 1.4-2.8-.6-.4-1.4-.7-2.3-.7-2.1 0-3.7 1.6-3.7 3.5s1.7 3.5 3.7 3.5c.9 0 1.7-.3 2.3-.7-.8-.7-1.4-1.7-1.4-2.8"/>
                                <path id="path3822" className="st3"
                                      d="M40 10.5c0 1.9-1.7 3.5-3.7 3.5-.9 0-1.7-.3-2.3-.7.9-.6 1.4-1.6 1.4-2.8s-.6-2.1-1.4-2.8c.6-.4 1.4-.7 2.2-.7 2.1 0 3.8 1.6 3.8 3.5"/>
                            </g>
                        </svg>
                        <p>Доставка по большинству районов города</p>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="43px">
                            <path fill="#2b2b2b"
                                  d="M40.986,-0.009 L40.052,0.229 L31.400,2.521 C31.349,2.532 31.300,2.537 31.249,2.550 L9.695,8.265 L0.923,10.586 L-0.012,10.824 L0.229,11.747 L2.309,19.307 L2.309,19.366 L5.565,31.241 L5.565,36.568 L5.565,42.045 L5.565,42.997 L6.530,42.997 L12.860,42.997 L40.715,42.997 L47.045,42.997 L48.010,42.997 L48.010,42.045 L48.010,36.568 L48.010,27.044 L48.010,19.187 L48.010,18.235 L47.045,18.235 L45.960,18.235 L41.227,0.883 L40.986,-0.009 ZM39.599,2.312 L40.685,6.330 C40.484,6.282 40.279,6.213 40.082,6.181 C39.473,6.083 38.894,6.030 38.424,5.973 C37.953,5.916 37.589,5.817 37.550,5.794 C37.512,5.773 37.253,5.521 36.947,5.140 C36.640,4.758 36.250,4.270 35.771,3.800 C35.651,3.683 35.518,3.555 35.379,3.443 L39.599,2.312 ZM32.636,4.276 C33.403,4.274 33.886,4.621 34.414,5.140 C34.767,5.485 35.082,5.922 35.409,6.330 C35.737,6.738 36.044,7.153 36.585,7.461 C37.123,7.767 37.644,7.812 38.183,7.877 C38.721,7.943 39.284,7.976 39.780,8.056 C40.276,8.136 40.689,8.260 40.956,8.413 C41.199,8.553 41.326,8.678 41.408,8.919 C41.416,8.943 41.431,8.953 41.438,8.979 L43.940,18.235 L37.941,18.235 L32.485,18.235 C32.521,17.223 32.406,16.180 32.123,15.140 C31.102,11.379 28.108,8.639 24.708,8.026 C24.141,7.924 23.568,7.883 22.989,7.907 C22.411,7.931 21.826,8.020 21.241,8.175 C16.974,9.305 14.445,13.674 15.061,18.235 L6.530,18.235 L5.565,18.235 L5.565,19.187 L5.565,23.919 L4.148,18.741 C4.116,18.528 4.141,18.367 4.269,18.146 C4.423,17.881 4.724,17.538 5.113,17.223 C5.502,16.909 5.976,16.623 6.409,16.300 C6.842,15.978 7.244,15.670 7.555,15.140 L7.585,15.140 C7.896,14.606 7.930,14.107 8.007,13.592 C8.083,13.077 8.148,12.547 8.278,12.074 C8.538,11.128 8.879,10.461 10.207,10.110 L31.762,4.395 C32.094,4.307 32.380,4.277 32.636,4.276 ZM23.050,9.783 C26.182,9.681 29.273,12.031 30.254,15.646 C30.493,16.523 30.593,17.394 30.556,18.235 L17.020,18.235 C16.385,14.418 18.421,10.865 21.723,9.991 C22.167,9.873 22.602,9.797 23.050,9.783 ZM37.369,10.913 C35.515,10.913 33.992,12.417 33.992,14.247 C33.992,16.076 35.515,17.580 37.369,17.580 C39.222,17.580 40.745,16.076 40.745,14.247 C40.745,12.417 39.222,10.913 37.369,10.913 ZM6.560,11.092 C6.496,11.257 6.453,11.407 6.409,11.568 C6.232,12.212 6.179,12.812 6.108,13.294 C6.036,13.776 5.918,14.150 5.897,14.187 C5.874,14.227 5.612,14.500 5.233,14.783 C4.855,15.064 4.385,15.379 3.907,15.765 C3.744,15.896 3.582,16.032 3.425,16.181 L2.340,12.193 L6.560,11.092 ZM37.369,12.818 C38.179,12.818 38.816,13.447 38.816,14.247 C38.816,15.047 38.179,15.675 37.369,15.675 C36.558,15.675 35.922,15.047 35.922,14.247 C35.922,13.447 36.558,12.818 37.369,12.818 ZM7.494,20.140 L11.866,20.140 C11.761,20.283 11.679,20.442 11.594,20.586 C11.254,21.163 11.006,21.746 10.810,22.193 C10.615,22.640 10.419,22.937 10.388,22.967 C10.355,23.000 10.044,23.208 9.605,23.384 C9.165,23.559 8.629,23.758 8.067,24.009 C7.877,24.093 7.688,24.204 7.494,24.306 L7.494,20.140 ZM15.634,20.140 L37.941,20.140 C39.316,20.140 39.824,20.692 40.323,21.538 C40.572,21.962 40.777,22.460 40.986,22.937 C41.195,23.415 41.359,23.900 41.800,24.336 C42.239,24.769 42.744,24.939 43.247,25.140 C43.750,25.340 44.266,25.530 44.724,25.735 C45.183,25.939 45.561,26.173 45.779,26.390 C45.997,26.606 46.081,26.740 46.081,27.044 L46.081,36.568 C46.081,36.703 46.070,36.727 45.960,36.836 C45.850,36.946 45.600,37.088 45.297,37.223 C44.994,37.358 44.661,37.496 44.302,37.640 C43.943,37.783 43.554,37.903 43.187,38.265 C42.818,38.630 42.701,38.970 42.554,39.306 C42.406,39.643 42.261,39.988 42.102,40.259 C41.782,40.801 41.567,41.092 40.715,41.092 L12.860,41.092 C12.008,41.092 11.793,40.801 11.474,40.259 C11.314,39.988 11.169,39.643 11.022,39.306 C10.874,38.970 10.758,38.629 10.388,38.265 C10.021,37.902 9.632,37.783 9.273,37.640 C8.914,37.496 8.581,37.358 8.278,37.223 C7.976,37.088 7.725,36.946 7.615,36.836 C7.505,36.727 7.494,36.703 7.494,36.568 L7.494,31.092 L7.524,31.092 L7.494,30.973 L7.494,27.044 C7.494,26.740 7.578,26.606 7.796,26.390 C8.014,26.173 8.393,25.939 8.851,25.735 C9.309,25.530 9.825,25.340 10.328,25.140 C10.831,24.939 11.336,24.769 11.775,24.336 C12.216,23.901 12.380,23.415 12.589,22.937 C12.798,22.460 13.003,21.962 13.252,21.538 C13.751,20.692 14.259,20.140 15.634,20.140 ZM41.710,20.140 L46.081,20.140 L46.081,24.306 C45.891,24.204 45.698,24.093 45.508,24.009 C44.946,23.758 44.410,23.559 43.971,23.384 C43.531,23.208 43.219,22.999 43.187,22.967 C43.157,22.937 42.960,22.640 42.765,22.193 C42.569,21.746 42.321,21.163 41.981,20.586 C41.896,20.442 41.815,20.283 41.710,20.140 ZM26.788,21.092 C21.939,21.092 18.106,25.424 18.106,30.616 C18.106,35.807 21.939,40.140 26.788,40.140 C31.636,40.140 35.470,35.807 35.470,30.616 C35.470,25.424 31.636,21.092 26.788,21.092 ZM26.788,22.997 C30.463,22.997 33.540,26.340 33.540,30.616 C33.540,34.892 30.463,38.235 26.788,38.235 C23.112,38.235 20.035,34.892 20.035,30.616 C20.035,26.340 23.112,22.997 26.788,22.997 ZM12.800,27.759 C10.947,27.759 9.424,29.262 9.424,31.092 C9.424,32.922 10.947,34.425 12.800,34.425 C14.653,34.425 16.176,32.922 16.176,31.092 C16.176,29.262 14.653,27.759 12.800,27.759 ZM40.775,27.759 C38.922,27.759 37.399,29.262 37.399,31.092 C37.399,32.922 38.922,34.425 40.775,34.425 C42.628,34.425 44.151,32.922 44.151,31.092 C44.151,29.262 42.628,27.759 40.775,27.759 ZM12.800,29.664 C13.611,29.664 14.247,30.292 14.247,31.092 C14.247,31.892 13.611,32.521 12.800,32.521 C11.989,32.521 11.353,31.892 11.353,31.092 C11.353,30.292 11.989,29.664 12.800,29.664 ZM40.775,29.664 C41.586,29.664 42.222,30.292 42.222,31.092 C42.222,31.892 41.586,32.521 40.775,32.521 C39.964,32.521 39.328,31.892 39.328,31.092 C39.328,30.292 39.964,29.664 40.775,29.664 ZM7.494,38.979 C7.890,39.153 8.261,39.280 8.550,39.396 C8.845,39.514 9.042,39.644 9.002,39.604 C8.961,39.563 9.109,39.774 9.243,40.080 C9.363,40.356 9.516,40.715 9.725,41.092 L7.494,41.092 L7.494,38.979 ZM46.081,38.979 L46.081,41.092 L43.850,41.092 C44.059,40.715 44.212,40.356 44.332,40.080 C44.466,39.774 44.615,39.563 44.574,39.604 C44.534,39.643 44.730,39.514 45.026,39.396 C45.314,39.280 45.685,39.153 46.081,38.979 Z"/>
                        </svg>
                        <p>Онлайн оплата или наличными курьеру после получения заказа</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Delivery;