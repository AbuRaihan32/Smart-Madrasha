'use client'
import Lottie from 'lottie-react';
import React from 'react';

const LottieFile = ({data}) => {
    return (
        <div>
            <Lottie animationData={data}></Lottie>
        </div>
    );
};

export default LottieFile;