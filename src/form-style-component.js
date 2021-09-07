import styled from 'styled-components'

export const FormBlockTitle = styled.div`
  font-size: 20px;
`

export const FormBlock = styled.div`
  margin-top: 35px;
  ${props => props.$isRequired && `
    ${FormBlockTitle}::after{
      content: '*';
      color: #e74149;
      margin-left: 8px;
    }`
  }
`


export const FormBlockDescription = styled.div`
  font-size: 14px;
  margin-top: 8px;
`

export const FormBlockInputWrapper = styled.div`
  margin-top: 16px;

  input[type = "text"]{
    border: solid 1px #d0d0d0;
    font-size: 16px;
    padding: 3px 12px;
    margin-top:12px;
  }

  & label {
    display:block;
    margin-top:12px;
  }
`
export const InputWarning = styled.div`
    visibility: hidden;
    ${props => props.$isEmpty && `
      visibility:visible;
      margin-top:5px;
      color:#e74149;
    `}
`
export const FormSubmit = styled.input`
  background-color: #fad312;
  color: black;
  padding: 12px 32px;
  font-size: 15px;
  margin-top: 48px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
 
`
