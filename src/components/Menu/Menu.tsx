
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'


import logo from '../../images/logo.png'
import listaMenu from "./listaMenu";
import './style.scss'
import RedeSociais from "../RedeSociais/RedeSociais";




const Menu = () => {

    const [handleMenu, setHandleMenu] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(true)


    const [tamanho, setTamanho] = useState({ windowWidth: window.innerWidth })

    const handleResize = () => {
        setTamanho({ windowWidth: window.innerWidth })
    }

    useEffect(() => {

        window.addEventListener('resize', handleResize)

    }, [])


    useEffect(() => {
        if (tamanho.windowWidth >= 768 && handleMenu === true) {

            setHandleMenu(false)

        }


    }, [tamanho])


    const openMenu = () => {

        setHandleMenu(!handleMenu)
        setIsOpen(!isOpen)

    }



    return (
        <>


            <nav className='menu'>

                <div className='container'>

                    <div className='logo-menu'>
                        <a href="/">

                            <img src={logo} ></img>

                        </a>
                    </div>


                    <div className='links '>
                        {listaMenu.map((item, index) => {
                            return (
                                <>

                                    <div >
                                        <NavLink key={index}
                                            className='links'
                                            to={item.href} activeClassName="active">
                                            {item.nome}
                                        </NavLink>

                                    </div>

                                </>
                            )
                        })}

                    </div>

               <RedeSociais/>

                    <div className='menu-mobile'>

                        {handleMenu ?
                            <AiOutlineCloseCircle className='icon-close' fill='#FFF' size={40}
                                onClick={openMenu} />
                            : <GiHamburgerMenu className='icon-menu-navegacao' fill='red' size={40}
                                onClick={openMenu} />}



                    </div>


                </div>

            </nav>
            <div className='container-menu-mobile'>


                {handleMenu && (
                    <>
                        <div className='wrapper-menu-mobile '>
                            {listaMenu.map((item, index) => {
                                return (
                                    <>

                                        <div className='links-mobile'>
                                            <NavLink key={index} className='links-mobile' to={item.href} activeClassName="active">{item.nome}</NavLink>

                                        </div>

                                    </>
                                )
                            })}


                          <RedeSociais/>
                        </div>
                    </>
                )}




            </div>

        </>
    )
}

export default Menu