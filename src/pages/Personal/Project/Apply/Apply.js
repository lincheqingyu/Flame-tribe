import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Apply.css'
import { CloudUploadOutlined } from '@ant-design/icons'
import { Image, Upload, Input } from 'antd'


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
const Apply = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState([])

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
  }

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList)

  const uploadButton = (
    <button style={{ border: 'none', background: 'none', color: '#fda75f' }} type="button">
      <CloudUploadOutlined />
      <div style={{ marginTop: 8 }}>上传材料</div>
    </button>
  )


  return (
    <div className='apply-all'>
      <form>
        <label>
          申请项目:
          <input type="text" name="project-name" />
        </label>
        <label>
          申请人姓名:
          <input type="text" name="applicant-name" />
        </label>
        <label>
          项目组成员:
          <input type="text" name="members" />
        </label>
        <label>
          项目简介:
          <input type="text" name="introduction" />
        </label>
        <label>
          指导老师:
          <input type="text" name="teacher" />
        </label>
        <label>
          所学专业:
          <input type="text" name="speciality" />
        </label>
        <label>
          申请日期:
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </label>
        <label className='apply-input'>
          申请材料:
          <div className='file-upload-container1'>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{ display: 'none' }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
              />
            )}
          </div>
        </label>
        <input type="submit" value="提交" />
      </form>
    </div>
  )
}

export default Apply