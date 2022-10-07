import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectLang } from '../../Redux/actions/langActions'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import langEnglish from '../../utils/langEng'
import langFran from '../../utils/langFran'
import QUESS from '../../assets/logo.png'

const Home = (props) => {
    console.log('props Home Page',props)
    const dispatch = useDispatch()
    const languages = langEnglish?.map((v) => v)
    const languageFr = langFran?.map((v) => v)
   
    const setLanguageController = (lang) => {
        dispatch(selectLang(lang))
    }

    return (
        <div className='home-main'>
            <div className='cont_home pri_color'>
                <img className='quess_logo' src={QUESS} />
                <h2 className='pri_color heading'>{languageFr?.map((v) => { return v?.select })}</h2>
                <h2 className='pri_color heading'>{languages?.map((v) => { return v?.select })}</h2>
                <Link to='/connection'>
                    <Button className='btn_lng' size={'large'} onClick={() => setLanguageController('english')}>English <ArrowRightOutlined />
                    </Button>
                </Link>
                <Link to='/connection'>
                    <Button className='btn_lng' size={'large'} onClick={() => setLanguageController('france')}>Francais <ArrowRightOutlined />
                    </Button>
                </Link>
            </div>
            
            <h1 className='sec_color welcome'>WELCOME</h1>
        </div>
    )
}

export default Home