import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectLang } from '../../Redux/actions/langActions'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { BsBoxArrowInRight } from "react-icons/bs";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { AiOutlineSync } from "react-icons/ai";
import langEnglish from '../../utils/langEng'
import langFran from '../../utils/langFran'
import QUESS from '../../assets/logo.png'
import Footer from '../../Components/Footer/Footer'
const Login = (props) => {


    return (
        <div className='conn-main'>
            <Button className='sec_color heading back'><ArrowLeftOutlined /> Back</Button>
            <div className=''>
                <img className='quess_img' src={QUESS} />
            </div>

            <Footer />
        </div>
    )
}

export default Login