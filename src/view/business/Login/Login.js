import React from 'react'
import style from './Login.module.scss'
import { Form,Button,Input,Footer  } from 'antd-mobile'
import { HandPayCircleOutline  } from 'antd-mobile-icons'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const userlogin=()=>{
    navigate('/report')
  }
  
  return (
    <div className={style.container}>
      <div className={style.containerBg}>11</div>
      <div className={style.content}>
        <Form
          mode='card'
          className={style.form}
          onFieldsChange={userlogin}
          footer={
            <Button block type='submit' color='primary' size='large'> 提交 </Button>
          }>
          <Form.Item
            name='name'
            label='账号'
            rules={[{ required: true, message: '姓名不能为空' }]}>
            <Input onChange={console.log} placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item
            name='name'
            label='密码'
            rules={[{ required: true, message: '姓名不能为空' }]}>
            <Input onChange={console.log} placeholder='请输入密码' />
          </Form.Item>
        </Form>
      </div>
      <div className={style.footer}>
        <Footer  label={<> <HandPayCircleOutline /> 商家登录 </>}></Footer>
      </div>
    </div>
  )
}
