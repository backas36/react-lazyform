import { useState } from 'react'

import * as FSC from './form-style-component'


const Input = ({ label, name, handleChange, desc, data }) => {
  return (
    <>
      <FSC.FormBlockTitle>{label}</FSC.FormBlockTitle>
      {desc && <FSC.FormBlockDescription>對活動的一些建議</FSC.FormBlockDescription>}
      <input
        type="text"
        name={name}
        onChange={handleChange}
        value={data}
      />
    </>
  )
}

const Radio = ({ label, name, handleChange, data }) => {
  return (
    <>
      <FSC.FormBlockTitle>{label}</FSC.FormBlockTitle>
      <label>
        <input
          type="radio"
          value='躺在床上用想像力實作'
          name={name}
          onChange={handleChange}
          checked={data === '躺在床上用想像力實作'}
        />
        躺在床上用想像力實作
      </label>
      <label>
        <input
          type="radio"
          value='趴在地上滑手機找現成的'
          name={name}
          onChange={handleChange}
          checked={data === '趴在地上滑手機找現成的'}
        />
        趴在地上滑手機找現成的
      </label>
    </>
  )
}

const originForm = [
  {
    title: 'nickname',
    content: '',
    isRequired: true,
    isEmpty: null
  },
  {
    title: 'email',
    content: '',
    isRequired: true,
    isEmpty: null,
  },
  {
    title: 'phone',
    content: '',
    isRequired: true,
    isEmpty: null,
  },
  {
    title: 'type',
    content: '',
    isRequired: true,
    isEmpty: null,
  },
  {
    title: 'referal',
    content: '',
    isRequired: true,
    isEmpty: null,
  },
  {
    title: 'others',
    content: '',
    isRequired: false,
    isEmpty: null,
  }
]

const Form = () => {
  const [form, setForms] = useState(originForm)


  const handleSubmit = (e) => {
    e.preventDefault()

    const handleValidation = (item) => {
      return item.content ? true : false
    }

    let result = ''

    if (form.filter(item => item.isRequired).every(item => handleValidation(item))) {
      form.map(item => {
        result += `${item.title} : ${item.content} \n`
        return item
      })
      alert(result)
      setForms(originForm)
    } else {
      setForms(form.map(item => {
        if (item.isRequired && !handleValidation(item)) {
          return {
            ...item,
            isEmpty: true
          }
        }
        return item
      }))
    }
  }

  const handleInputChange = (e) => {
    setForms(form.map(item => {
      if (item.title !== e.target.name) return item
      return {
        ...item,
        content: e.target.value,
        isEmpty: false
      }
    }))
  }

  const handleRadioChange = (e) => {
    setForms(form.map(item => {
      if (item.title !== e.target.name) return item
      return {
        ...item,
        content: e.target.value,
        isEmpty: false
      }
    }))
  }

  return (
    <form onSubmit={handleSubmit}>

      <FSC.FormBlock $isRequired={true}>
        <FSC.FormBlockInputWrapper>
          <Input
            label="暱稱"
            name="nickname"
            handleChange={handleInputChange}
            data={(form.filter(item => item.title === 'nickname')[0].content)}
          />

          <FSC.InputWarning $isEmpty={(form.filter(item => item.title === 'nickname')[0].isEmpty)}>請輸入暱稱</FSC.InputWarning>
        </FSC.FormBlockInputWrapper>
      </FSC.FormBlock>

      <FSC.FormBlock $isRequired={true}>
        <FSC.FormBlockInputWrapper>
          <Input
            label="電子郵件"
            name="email"
            handleChange={handleInputChange}
            data={(form.filter(item => item.title === 'email')[0].content)}
          />
          <FSC.InputWarning $isEmpty={(form.filter(item => item.title === 'email')[0].isEmpty)}>請輸入電子郵件</FSC.InputWarning>
        </FSC.FormBlockInputWrapper>
      </FSC.FormBlock>

      <FSC.FormBlock $isRequired={true}>
        <FSC.FormBlockInputWrapper>
          <Input
            label="手機號碼"
            name="phone"
            handleChange={handleInputChange}
            data={(form.filter(item => item.title === 'phone')[0].content)}
          />
          <FSC.InputWarning $isEmpty={(form.filter(item => item.title === 'phone')[0].isEmpty)}>請輸入手機號碼</FSC.InputWarning>
        </FSC.FormBlockInputWrapper>
      </FSC.FormBlock>

      <FSC.FormBlock $isRequired={true}>
        <FSC.FormBlockInputWrapper>
          <Radio
            label="報名類型"
            name="type"
            handleChange={handleRadioChange}
            data={(form.filter(item => item.title === 'type')[0].content)}
          />
          <FSC.InputWarning $isEmpty={(form.filter(item => item.title === 'type')[0].isEmpty)}>請選擇報名類型</FSC.InputWarning>
        </FSC.FormBlockInputWrapper>
      </FSC.FormBlock>

      <FSC.FormBlock $isRequired={true}>
        <FSC.FormBlockInputWrapper>
          <Input
            label="怎麼知道這活動的？"
            name="referal"
            handleChange={handleInputChange}
            data={(form.filter(item => item.title === 'referal')[0].content)}
          />
          <FSC.InputWarning $isEmpty={(form.filter(item => item.title === 'referal')[0].isEmpty)}>請輸入怎麼知道的</FSC.InputWarning>
        </FSC.FormBlockInputWrapper>
      </FSC.FormBlock>

      <FSC.FormBlock>
        <FSC.FormBlockInputWrapper>
          <Input
            label="其他"
            name="others"
            handleChange={handleInputChange}
            desc={"對活動的一些建議"}
            data={(form.filter(item => item.title === 'others')[0].content)}
          />
        </FSC.FormBlockInputWrapper>
      </FSC.FormBlock>

      <FSC.FormSubmit type="submit" />
      <p>
        請勿透過表單送出您的密碼。
      </p>

    </form>
  )
}

export default Form