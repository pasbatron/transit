import React from 'react'
import './createblog.scss'
import { Input, Button, Upload, Gap, TextArea } from '../../components'


const CreateBlog = () => {
  return (
    <div>
      <p>Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <Button title="Save" />
      <Gap height={20} />
    </div>
  )
}

export default CreateBlog