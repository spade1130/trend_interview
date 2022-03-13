import React, { useRef } from "react";
import styled from "@emotion/styled";
import { ReactComponent as ArrowIcon } from "./img/Arrow 1.svg";
import { ReactComponent as GoogleIcon } from "./img/Vector.svg";
import { ReactComponent as Google1Icon } from "./img/Vector1.svg";
import { ReactComponent as FbIcon } from "./img/Fb.svg";
import { ReactComponent as Fb1Icon } from "./img/Fb1.svg";
import { ReactComponent as EyeIcon } from "./img/view hide.svg";
import { ReactComponent as CheckIcon } from "./img/Group 2.svg";

const Container = styled.div`
  background-color: #e5e5e5;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Page = styled.div`
  background-color: #fff;
  position: relative;
  min-width: 360px;
  box-sizing: border-box;
  padding: 32px 31px 36px 31px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Navbar = styled.div`
  z-index: 5;
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  font-family: "Interstate";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  &:hover {
    border-bottom: 2px solid #3c71ff;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  p {
    font-family: "Interstate";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    width: 100%;
    span {
      font-family: "Interstate";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
    }
  }
`;

const SignUpBtn = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Google = styled.div`
  @media (max-width: 768px) {
    width: 350px;
    font-size: 12px;
    padding: 5px;
    margin-right: 15px;
    svg {
      width: 15px;
    }
  }
  width: 190px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #3c71ff;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "Interstate";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin-right: 60px;
  svg {
    margin-right: 15px;
  }
  svg:nth-of-type(1) {
    display: none;
  }
  &:hover {
    color: white;
    background: #3c71ff;

    svg {
      display: none;
    }
    svg:nth-of-type(1) {
      display: block;
    }
  }
`;
const Facebook = styled.div`
  @media (max-width: 768px) {
    width: 370px;
    font-size: 12px;
    padding: 5px;
    svg {
      width: 12px;
    }
  }
  width: 190px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #3c71ff;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "Interstate";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  svg {
    margin-right: 15px;
  }
  svg:nth-of-type(1) {
    display: none;
  }
  &:hover {
    color: white;
    background: #3c71ff;

    svg {
      display: none;
    }
    svg:nth-of-type(1) {
      display: block;
    }
  }
`;

const InputInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Hint = styled.div`
  p {
    display: flex;
    align-items: center;
    span {
      background: #fff;
      margin-right: 9px;
      font-family: "Interstate";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
  }
  p:before,
  p:after {
    background: black;
    height: 1px;
    flex: 1;
    content: "";
  }
  p:before {
    background: none;
    display: none;
  }
`;

const Name = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const FirstName = styled.div`
  width: 190px;
  height: 55px;
  position: relative;
  margin-right: 45px;
  input {
    outline: none;
    border: none;
    width: 100%;
    padding: 20px 0 18px 11px;
    color: #000;
    font-size: 16px;
    background: #f1f5ff;
  }
  label {
    position: absolute;
    top: 17px;
    left: 11px;
    color: #757575;
    font-family: "Interstate";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    pointer-events: none;
    transition: all 0.5s;
  }
  input:focus + label,
  input:valid + label {
    font-size: 12px;
    top: 2px;
    color: #757575;
  }
`;

const LastName = styled.div`
  width: 190px;
  height: 55px;
  position: relative;
  input {
    outline: none;
    border: none;
    width: 100%;
    padding: 20px 0 18px 11px;
    color: #000;
    font-size: 16px;
    background: #f1f5ff;
  }
  label {
    position: absolute;
    top: 17px;
    left: 11px;
    color: #757575;
    font-family: "Interstate";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    pointer-events: none;
    transition: all 0.5s;
  }
  input:focus + label,
  input:valid + label {
    font-size: 12px;
    top: 2px;
    color: #757575;
  }
`;

const Email = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 425px;
  height: 55px;
  position: relative;
  margin-bottom: 12px;
  input {
    outline: none;
    border: none;
    width: 100%;
    padding: 20px 0 18px 11px;
    color: #000;
    font-size: 16px;
    background: #f1f5ff;
  }
  label {
    position: absolute;
    top: 17px;
    left: 11px;
    color: #757575;
    font-family: "Interstate";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    pointer-events: none;
    transition: all 0.5s;
  }
  input:focus + label,
  input:valid + label {
    font-size: 12px;
    top: 2px;
    color: #757575;
  }
`;

const Pwd = styled.div`
  display: flex;
  align-items: center;
  background: #f1f5ff;
  margin-bottom: 34px;
  position: relative;
`;

const PwdInput = styled.div`
  width: 425px;
  height: 55px;
  position: relative;
  input {
    outline: none;
    border: none;
    width: 100%;
    padding: 20px 0 18px 11px;
    color: #000;
    font-size: 16px;
    background: #f1f5ff;
  }
  label {
    position: absolute;
    top: 17px;
    left: 11px;
    color: #757575;
    font-family: "Interstate";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    pointer-events: none;
    transition: all 0.5s;
  }
  input:focus + label,
  input:valid + label {
    font-size: 12px;
    top: 2px;
    color: #757575;
  }
`;

const Verify = styled.div`
  display: flex;
  position: absolute;
  top: 235px;
  display: none;
`;

const Character = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;
  font-family: "Interstate";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  font-family: "Interstate";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
`;

const Check = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-right: 14px;
    border-radius: 5px;
  }
  p {
    color: #757575;
    font-family: "Interstate";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
`;

const Send = styled.div`
  display: flex;
  width: 100%;
  input {
    width: 440px;
    height: 55px;
    color: white;
    background: #3c71ff;
    border: none;
    border-radius: 5px;
    font-family: "Interstate";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  &:hover {
    filter: drop-shadow(0 5px 5px rgba(60, 113, 255, 0.7));
  }
`;

const LogIn = styled.div`
  p {
    font-family: "Interstate";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    span {
      color: #3c71ff;
    }
  }
  &:hover {
    span {
      border-bottom: 2px solid #3c71ff;
    }
  }
`;

function App() {
  const pwdRef = useRef();
  const verifyRef = useRef();

  const handlePwdChange = () => {
    if (pwdRef.current.value.length >= 8) {
      verifyRef.current.style.display = "flex";
    } else {
      verifyRef.current.style.display = "none";
    }
  };

  return (
    <Container>
      <Page>
        <Navbar>
          <ArrowIcon style={{ marginRight: "3px" }} />
          Back
        </Navbar>

        <Header>
          <p>
            Start from free
            <br />
            <span>Create an account</span>
          </p>
        </Header>
        <SignUpBtn>
          <Google>
            <Google1Icon />
            <GoogleIcon />
            Sign up with Google
          </Google>
          <Facebook>
            <Fb1Icon />
            <FbIcon />
            Sign up with Facebook
          </Facebook>
        </SignUpBtn>
        <InputInfo>
          <Hint>
            <p>
              <span>Or use your email for registration</span>
            </p>
          </Hint>
          <Name>
            <FirstName>
              <input type="text" required="required" />
              <label>First Name</label>
            </FirstName>
            <LastName>
              <input type="text" required="required" />
              <label>Last Name</label>
            </LastName>
          </Name>
          <Email>
            <input type="email" required="required" />
            <label>E-mail</label>
          </Email>
          <Pwd>
            <PwdInput>
              <input
                type="password"
                required="required"
                pattern="^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$"
                onChange={handlePwdChange}
                ref={pwdRef}
              />
              <label>Password</label>
            </PwdInput>
            <EyeIcon
              style={{ zIndex: "5", position: "absolute", right: "18px" }}
            />
          </Pwd>
          <Verify ref={verifyRef}>
            <Character>
              <CheckIcon style={{ marginRight: "4px" }} />
              <p>8 Characters min.</p>
            </Character>
            <Number>
              <CheckIcon style={{ marginRight: "4px" }} />
              <p>One number</p>
            </Number>
          </Verify>
        </InputInfo>
        <Check>
          <input type="checkbox" />
          <p>
            By creating account, you agree to accept our Privacy Policy, Terms
            of Service <br /> and Notification settings.
          </p>
        </Check>
        <Send>
          <input type="button" value="Create an Free Account!" />
        </Send>
        <LogIn>
          <p>
            Already have an account? <span>Log in</span>
          </p>
        </LogIn>
      </Page>
    </Container>
  );
}

export default App;
