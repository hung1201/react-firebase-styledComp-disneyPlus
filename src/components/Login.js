import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { auth, provider } from '../firebase'
import { setUserLoginDetails } from '../redux/user/userSlice'

const Login = () => {
    const dispatch = useDispatch()
    const handleAuth = () => {
        auth.signInWithPopup(provider)
            .then((res) => {
                setUser(res.user)
            })
            .catch((err) => alert(err.message))
    }
    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
    }
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="img"/>
                    <SignUp onClick={handleAuth}>GET ALL THREE FOR $69.69/MONTH</SignUp>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse asperiores culpa fugiat expedita laboriosam fugiat expedita laboriosam fugiat expedita laboriosam.</Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="img"/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    )
}
const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100%;
`
const Content = styled.div`
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:80px 40px;
    height:100%;
`
const BgImage = styled.div`
    background-image: url("/images/login-background.jpg");
    height:100%;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    position:absolute;
    top:0;
    right:0;
    left:0;
    z-index:-1;
`
const CTA = styled.div`
    max-width:650px;
    display:flex;
    flex-direction:column;
    width:100%;
`

const CTALogoOne = styled.img`
    max-width:100%;
    margin-bottom:12px;
    width:600px;
    min-height:1px;
    display:block;
    `
const SignUp = styled.a`
    font-weight:bold;
    color:#fff;
    background-color:#0063e5;
    margin-bottom:12px;
    width:100%;
    letter-spacing:2px;
    font-size:18px;
    padding: 16px 0 ;
    border: 1px solid transparent;
    border-radius:5px;
    cursor:pointer;
    transition: all 0.2s ease;
    &:hover{
        background-color:#0483ee;
    }
`
const Description = styled.p`
    color:hsla(0,0%,95%,1);
    font-size:11px;
    margin: 0 0 24px;
    letter-spacing:2px;
    overflow:hidden;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
`
const CTALogoTwo = styled.img`
    max-width:600px;
    width:100%;
    margin-bottom:20px;
    display:inline-block;
    vertical-align:bottom;
`
export default Login
