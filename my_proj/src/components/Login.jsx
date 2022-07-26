import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const Login = () => {
    
        const onFinish = (values) => {
          console.log('Success:', values);
          axios.post("http://localhost:9001/login",values).then(response=>{
            console.log(response.data)
            localStorage.setItem("token",response.data.token)
          }).catch(err=>{
            console.log(err)
          })

        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
    <div><img  style={{height:'50',width:'700px'}} src="https://th.bing.com/th/id/OIP.Cy7sBSVjO83O6F968OeZjwHaE7?pid=ImgDet&rs=1"/></div>
<div style={{marginLeft:'150px', marginTop:'100px',height:'300px',Width:'300px'}}>
    <Form
    name="basic"
    labelCol={{ span: 12 }}
    wrapperCol={{ span: 12}}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
 
   
 
    <Form.Item
        label="Email"
        name="emailid"
        rules={[{ required: true, message: 'Please input your Email id!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
      label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  )
}

export default Login