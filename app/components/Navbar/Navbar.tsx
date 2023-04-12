import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    // const logged = false

    return (
        <nav className='grid grid-flow-row grid-cols-12 flex items-center h-24 fixed top-0 w-full px-2 z-50'>
            <Link className={"menu col-span-5 max-sm:col-span-7"} href={"/"}>
                <svg className='max-h-20' id="academy" viewBox="0 0 210 124" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M26.5573 93.5062C15.464 93.5062 5.38397 91.0529 -3.6827 86.1462C-12.6427 81.1329 -19.6827 74.3062 -24.8027 65.6662C-29.816 57.0262 -32.3227 47.3196 -32.3227 36.5462C-32.3227 25.7729 -29.816 16.0662 -24.8027 7.42623C-19.6827 -1.21377 -12.6427 -7.98711 -3.6827 -12.8938C5.38397 -17.9071 15.464 -20.4138 26.5573 -20.4138C37.6506 -20.4138 47.624 -17.9604 56.4773 -13.0538C65.4373 -8.1471 72.4773 -1.32044 77.5973 7.42623C82.7173 16.0662 85.2773 25.7729 85.2773 36.5462C85.2773 47.3196 82.7173 57.0796 77.5973 65.8262C72.4773 74.4662 65.4373 81.2396 56.4773 86.1462C47.624 91.0529 37.6506 93.5062 26.5573 93.5062ZM26.5573 82.9462C35.4106 82.9462 43.4106 80.9729 50.5573 77.0262C57.704 72.9729 63.304 67.4262 67.3573 60.3862C71.4106 53.2396 73.4373 45.2929 73.4373 36.5462C73.4373 27.7996 71.4106 19.9062 67.3573 12.8662C63.304 5.71957 57.704 0.172898 50.5573 -3.77378C43.4106 -7.82711 35.4106 -9.85377 26.5573 -9.85377C17.704 -9.85377 9.65064 -7.82711 2.3973 -3.77378C-4.74936 0.172898 -10.4027 5.71957 -14.5627 12.8662C-18.616 19.9062 -20.6427 27.7996 -20.6427 36.5462C-20.6427 45.2929 -18.616 53.2396 -14.5627 60.3862C-10.4027 67.4262 -4.74936 72.9729 2.3973 77.0262C9.65064 80.9729 17.704 82.9462 26.5573 82.9462ZM111.624 102.722C107.784 102.722 104.232 101.89 100.968 100.226C97.7681 98.5622 95.144 96.1942 93.096 93.1222L97.128 88.3222C98.984 91.0102 101.128 93.0582 103.56 94.4662C105.992 95.8742 108.648 96.5782 111.528 96.5782C119.912 96.5782 124.104 91.6502 124.104 81.7942V31.4902H99.5281V25.3462H131.112V81.5062C131.112 88.5462 129.448 93.8262 126.12 97.3462C122.856 100.93 118.024 102.722 111.624 102.722ZM230.056 92.5462L193.896 43.2662L157.896 92.5462H144.296L186.856 34.9462L147.016 -19.4538H160.616L194.376 26.3062L227.976 -19.4538H240.776L201.096 34.6262L243.816 92.5462H230.056Z" fill="white" />
                    </g>
                    <path d="M55.04 120L61.44 106H62.9L69.3 120H67.74L61.86 106.86H62.46L56.58 120H55.04ZM57.56 116.26L58 115.06H66.14L66.58 116.26H57.56ZM75.5783 120.1C74.5383 120.1 73.6049 119.873 72.7783 119.42C71.9649 118.953 71.3249 118.32 70.8583 117.52C70.3916 116.707 70.1583 115.78 70.1583 114.74C70.1583 113.687 70.3916 112.76 70.8583 111.96C71.3249 111.16 71.9649 110.533 72.7783 110.08C73.6049 109.627 74.5383 109.4 75.5783 109.4C76.4716 109.4 77.2783 109.573 77.9983 109.92C78.7183 110.267 79.2849 110.787 79.6983 111.48L78.6383 112.2C78.2783 111.667 77.8316 111.273 77.2983 111.02C76.7649 110.767 76.1849 110.64 75.5583 110.64C74.8116 110.64 74.1383 110.813 73.5383 111.16C72.9383 111.493 72.4649 111.967 72.1183 112.58C71.7716 113.193 71.5983 113.913 71.5983 114.74C71.5983 115.567 71.7716 116.287 72.1183 116.9C72.4649 117.513 72.9383 117.993 73.5383 118.34C74.1383 118.673 74.8116 118.84 75.5583 118.84C76.1849 118.84 76.7649 118.713 77.2983 118.46C77.8316 118.207 78.2783 117.82 78.6383 117.3L79.6983 118.02C79.2849 118.7 78.7183 119.22 77.9983 119.58C77.2783 119.927 76.4716 120.1 75.5783 120.1ZM89.0678 120V117.68L89.0078 117.3V113.42C89.0078 112.527 88.7545 111.84 88.2478 111.36C87.7545 110.88 87.0145 110.64 86.0278 110.64C85.3478 110.64 84.7011 110.753 84.0878 110.98C83.4745 111.207 82.9545 111.507 82.5278 111.88L81.8878 110.82C82.4211 110.367 83.0611 110.02 83.8078 109.78C84.5545 109.527 85.3411 109.4 86.1678 109.4C87.5278 109.4 88.5745 109.74 89.3078 110.42C90.0545 111.087 90.4278 112.107 90.4278 113.48V120H89.0678ZM85.4478 120.1C84.6611 120.1 83.9745 119.973 83.3878 119.72C82.8145 119.453 82.3745 119.093 82.0678 118.64C81.7611 118.173 81.6078 117.64 81.6078 117.04C81.6078 116.493 81.7345 116 81.9878 115.56C82.2545 115.107 82.6811 114.747 83.2678 114.48C83.8678 114.2 84.6678 114.06 85.6678 114.06H89.2878V115.12H85.7078C84.6945 115.12 83.9878 115.3 83.5878 115.66C83.2011 116.02 83.0078 116.467 83.0078 117C83.0078 117.6 83.2411 118.08 83.7078 118.44C84.1745 118.8 84.8278 118.98 85.6678 118.98C86.4678 118.98 87.1545 118.8 87.7278 118.44C88.3145 118.067 88.7411 117.533 89.0078 116.84L89.3278 117.82C89.0611 118.513 88.5945 119.067 87.9278 119.48C87.2745 119.893 86.4478 120.1 85.4478 120.1ZM98.4647 120.1C97.4647 120.1 96.5647 119.873 95.7647 119.42C94.978 118.967 94.358 118.34 93.9047 117.54C93.4514 116.727 93.2247 115.793 93.2247 114.74C93.2247 113.673 93.4514 112.74 93.9047 111.94C94.358 111.14 94.978 110.52 95.7647 110.08C96.5647 109.627 97.4647 109.4 98.4647 109.4C99.3847 109.4 100.205 109.607 100.925 110.02C101.658 110.433 102.238 111.04 102.665 111.84C103.105 112.627 103.325 113.593 103.325 114.74C103.325 115.873 103.111 116.84 102.685 117.64C102.258 118.44 101.678 119.053 100.945 119.48C100.225 119.893 99.398 120.1 98.4647 120.1ZM98.5647 118.84C99.3114 118.84 99.978 118.673 100.565 118.34C101.165 117.993 101.631 117.513 101.965 116.9C102.311 116.273 102.485 115.553 102.485 114.74C102.485 113.913 102.311 113.193 101.965 112.58C101.631 111.967 101.165 111.493 100.565 111.16C99.978 110.813 99.3114 110.64 98.5647 110.64C97.8314 110.64 97.1714 110.813 96.5847 111.16C95.998 111.493 95.5314 111.967 95.1847 112.58C94.838 113.193 94.6647 113.913 94.6647 114.74C94.6647 115.553 94.838 116.273 95.1847 116.9C95.5314 117.513 95.998 117.993 96.5847 118.34C97.1714 118.673 97.8314 118.84 98.5647 118.84ZM102.525 120V116.84L102.665 114.72L102.465 112.6V105.16H103.885V120H102.525ZM112.299 120.1C111.206 120.1 110.246 119.873 109.419 119.42C108.593 118.953 107.946 118.32 107.479 117.52C107.013 116.707 106.779 115.78 106.779 114.74C106.779 113.7 106.999 112.78 107.439 111.98C107.893 111.18 108.506 110.553 109.279 110.1C110.066 109.633 110.946 109.4 111.919 109.4C112.906 109.4 113.779 109.627 114.539 110.08C115.313 110.52 115.919 111.147 116.359 111.96C116.799 112.76 117.019 113.687 117.019 114.74C117.019 114.807 117.013 114.88 116.999 114.96C116.999 115.027 116.999 115.1 116.999 115.18H107.859V114.12H116.239L115.679 114.54C115.679 113.78 115.513 113.107 115.179 112.52C114.859 111.92 114.419 111.453 113.859 111.12C113.299 110.787 112.653 110.62 111.919 110.62C111.199 110.62 110.553 110.787 109.979 111.12C109.406 111.453 108.959 111.92 108.639 112.52C108.319 113.12 108.159 113.807 108.159 114.58V114.8C108.159 115.6 108.333 116.307 108.679 116.92C109.039 117.52 109.533 117.993 110.159 118.34C110.799 118.673 111.526 118.84 112.339 118.84C112.979 118.84 113.573 118.727 114.119 118.5C114.679 118.273 115.159 117.927 115.559 117.46L116.359 118.38C115.893 118.94 115.306 119.367 114.599 119.66C113.906 119.953 113.139 120.1 112.299 120.1ZM133.03 109.4C133.883 109.4 134.623 109.567 135.25 109.9C135.89 110.22 136.383 110.713 136.73 111.38C137.09 112.047 137.27 112.887 137.27 113.9V120H135.85V114.04C135.85 112.933 135.583 112.1 135.05 111.54C134.53 110.967 133.79 110.68 132.83 110.68C132.11 110.68 131.483 110.833 130.95 111.14C130.43 111.433 130.023 111.867 129.73 112.44C129.45 113 129.31 113.68 129.31 114.48V120H127.89V114.04C127.89 112.933 127.623 112.1 127.09 111.54C126.556 110.967 125.81 110.68 124.85 110.68C124.143 110.68 123.523 110.833 122.99 111.14C122.456 111.433 122.043 111.867 121.75 112.44C121.47 113 121.33 113.68 121.33 114.48V120H119.91V109.5H121.27V112.34L121.05 111.84C121.37 111.08 121.883 110.487 122.59 110.06C123.31 109.62 124.156 109.4 125.13 109.4C126.156 109.4 127.03 109.66 127.75 110.18C128.47 110.687 128.936 111.453 129.15 112.48L128.59 112.26C128.896 111.407 129.436 110.72 130.21 110.2C130.996 109.667 131.936 109.4 133.03 109.4ZM141.005 123.98C140.512 123.98 140.039 123.9 139.585 123.74C139.145 123.58 138.765 123.34 138.445 123.02L139.105 121.96C139.372 122.213 139.659 122.407 139.965 122.54C140.285 122.687 140.639 122.76 141.025 122.76C141.492 122.76 141.892 122.627 142.225 122.36C142.572 122.107 142.899 121.653 143.205 121L143.885 119.46L144.045 119.24L148.365 109.5H149.765L144.505 121.26C144.212 121.94 143.885 122.48 143.525 122.88C143.179 123.28 142.799 123.56 142.385 123.72C141.972 123.893 141.512 123.98 141.005 123.98ZM143.805 120.3L138.965 109.5H140.445L144.725 119.14L143.805 120.3Z" fill="white" />
                </svg>
            </Link>


            <Link className='menu col-span-2 font-bold text-center' href={"/"}>
                Home<br className='sm:hidden' /> page
                <hr className='border-0 bg-gradient-to-l from-transparent via-white to-transparent my-1' style={{ height: "1px" }} />
            </Link>

            <div className="col-span-1"></div>


            <Link className='menu col-span-2 font-bold text-center' href={"/Studente/Login"}>
                Area<br className='sm:hidden' /> studenti
                <hr className='border-0 bg-gradient-to-l from-transparent via-white to-transparent my-1' style={{ height: "1px" }} />
            </Link>
        </nav>
    )
}