import React from 'react'
import Loader from 'react-loader-spinner'
import s from './Loader.module.css'


const LoaderComponent = () => {
    return (
      <div className={s.Loader}>
        <Loader type="ThreeDots" color="#00bfff" height={120} width={120} timeout={4000}/>
      </div>
    );
}

export default LoaderComponent;