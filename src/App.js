import styled from 'styled-components'


import Form from './Form'

const Wrapper = styled.div`
  max-width: 645px;
  background-color: white;
  margin: 10% auto;
  box-shadow: 1.8px 2.4px 5px 0 rgba(0, 0, 0, 0.3);
  border-top: 8px solid #fad312;
  padding: 64px 32px;
`

const FormTitle = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: bold;
`
const FormDescription = styled.p`
  margin-top: 35px;
  font-size: 14px;
  line-height: 2em ;
`

const FormNotice = styled.p`
  font-size: 16px;
  color: #e74149;
  margin-top: 20px;
`

const Footer = styled.footer`
    background-color: black;
    color: #999999;
    font-size: 13px;
    padding: 24px 12px;
    text-align: center;
`


const App = () => {

  return (
    <>
      <Wrapper>
        <FormTitle >新拖延運動表單</FormTitle>

        <FormDescription >
          活動日期：2020/12/10 ~ 2020/12/11 <br />
          活動地點：台北市大安區新生南路二段1號
        </FormDescription>

        <FormNotice className="form__notice">* 必填</FormNotice>

        <Form />

      </Wrapper >

      <Footer>© 2020 © Copyright. All rights Reserved.</Footer>
    </>
  )
}


export default App