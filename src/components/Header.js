import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import { auth, provider } from '../firebase'
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../redux/user/userSlice'
import { Link } from 'react-router-dom'
const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const setUser = useCallback((user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
    },[dispatch])
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user)
                history.push('/')
            }
            else {
                history.push('/login')
            }
        })
    }, [userName,history,dispatch,setUser])
    const handleAuth = () => {
        auth.signInWithPopup(provider)
            .then((res) => {
                setUser(res.user)
            })
            .catch((err) => alert(err.message))
    }
    const signOut = () => {
        auth.signOut().then(()=> {
            dispatch(setSignOutState())
            history.push('/login')
        })
        .catch((err)=>alert(err.message))
    }
    return (
        <Nav>
            <HeaderLogo to="/">
               
                <img src="/images/logo.svg" alt="logo"/>
              
            </HeaderLogo>
            {
                !userName ? 
                    <NavLogin onClick = { handleAuth } >Login</NavLogin>
                    : <>
                    <NavMenu>
                    <Link to="/">
                        <img src="/images/home-icon.svg" alt="home"/>
                        <span>HOME</span>
                    </Link>
                    <Link to="/">
                        <img src="/images/search-icon.svg" alt="home"/>
                        <span>SEARCH</span>
                    </Link>
                    <Link to="/">
                        <img src="/images/watchlist-icon.svg" alt="home"/>
                        <span>WATCHLIST</span>
                    </Link>
                    <Link to="/">
                        <img src="/images/original-icon.svg" alt="home"/>
                        <span>ORIGINALS</span>
                    </Link>
                    <Link to="/">
                        <img src="/images/movie-icon.svg" alt="home"/>
                        <span>MOVIES</span>
                    </Link>
                    <Link to="/">
                        <img src="/images/series-icon.svg" alt="home"/>
                        <span>SERIES</span>
                    </Link>
                </NavMenu>
                <NavSignOut>
                    <UserImg src={userPhoto} alt={userName}/>
                    <SignOutDropDown onClick={signOut}>
                        <span>Sign Out</span>
                    </SignOutDropDown>
                </NavSignOut>
                
                </>
            }
        </Nav>
    )
}

const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:70px;
    background-color:#090b13;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 36px;
    letter-spacing:2px;
    z-index:3;
    /* overflow-x:hidden; */
`

const HeaderLogo = styled(Link)`
    padding: 0;
    width:80px;
    max-height:70px;
    margin-top:4px;
    display:inline-block;
    cursor:pointer;
    img {
        display:block;
        width:100%;
    }
`
const NavMenu = styled.div`
    display:flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content:flex-end;
    margin:0;
    padding:0 ;
    position:relative;
    margin-right:auto;
    margin-left:25px;
    @media ( max-width: 768px ){
        display:none;
    }
    a {
        display:flex;
        align-items:center;
        padding: 0 12px;
        img{
            height:20px;
            min-width:20px;
            width:20px;
        }
        span {
            color: #fff;
            font-size: 14px;
            margin-left: 5px;
            line-height:20px;
            letter-spacing:2px;
            padding: 2px 0;
            white-space:nowrap;
            position:relative;
            ::after{
                content:"";
                position:absolute;
                height:2px;
                background-color:#fff;
                width:0;
                left:-1px;
                bottom:-4px;
                transition: all 0.2s ease;
            }
        }
        &:hover{
        span::after {
            width: 100%;
        }
    }
    }
`

const NavLogin = styled.a`
    background-color:#090b13;
    padding: 8px 16px;
    text-transform:uppercase;
    border:1px solid #f9f9f9;
    letter-spacing:2px;
    border-radius: 5px;
    transition: all 0.2s ease;
    cursor:pointer;
    &:hover{
        background-color:#f9f9f9;
        color:#090b13;
        border-color: transparent;
    }
`
const UserImg = styled.img`
    height:100%;
    border-radius:50%;
`

const SignOutDropDown = styled.div`
    position:absolute;
    top: 48px;
    left: -50px;
    background: rgb(19,19,19);
    border: 1px solid rgba(151,151,151,0.4);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /50%) 0px 0px 0px;
    padding: 10px;
    font-size:14px;
    letter-spacing:2px;
    width:100px;
    display:none;
    cursor:pointer;
    transition:all 0.2s ease;
    z-index:999;
    &:hover{
        background-color: #262525;
    }
`
const NavSignOut = styled.div`
    height:50%;
    position:relative;
    &:hover{
        ${SignOutDropDown} {
            display:block
        }
    }
    ::after{
        content:"";
        position:absolute;
        left:-50px;
        top: 30px;
        width:100px;
        height:20px;
    }
`

export default Header
