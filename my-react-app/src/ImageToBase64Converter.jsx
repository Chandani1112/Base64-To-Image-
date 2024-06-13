

import React, { useState } from 'react';
import './ImageToBase64Converter.css'; // Import the CSS file

const ImageToBase64Converter = () => {
    const [imageFile, setImageFile] = useState(null);
    const [base64, setBase64] = useState('');

    const handleImageInputChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            setImageFile(file);
            setBase64(reader.result);
        };
    };

    const handleBase64InputChange = (event) => {
        setBase64(event.target.value);
    };

    const convertToImage = () => {
        const image = new Image();
        image.src = base64;
        setImageFile(null);
    };

    return (
        <div className="container">
            <div className='row'>
                <div className='col-sm-6'>
                    <div className="box">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageInputChange}
                        />
                        {base64 && (
                            <img
                                src={base64}
                                alt="converted-to-base64"
                            />
                        )}
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className="box">
                        <textarea
                            rows="12"
                            value={base64}
                            onChange={handleBase64InputChange}
                        ></textarea>
                        {base64 && (
                            <button onClick={convertToImage}>Convert to Image</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageToBase64Converter;
