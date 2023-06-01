import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";

export default function MovieDetail() {
    const { id } = useParams();
    const { state } = useLocation();

    useEffect(() => {
        console.log('state', state);
    }, [state]);

    return (
        <div className="page-container">
            <div style={{display: 'flex'}}>
                <img style={{width: '300px', height: '450px'}}
                src={IMG_BASE_URL + state.poster_path} alt='영화 포스터 이미지' />
                <div>
                    <div style={{fontSize:'20px', color:'white', padding:'10px'}}>
                        [{id}]
                    </div>
                    <div style={{fontSize:'32px', color:'white', padding:'10px'}}>
                        {state.title}
                    </div>
                </div>
            </div>
        </div>
    );
}