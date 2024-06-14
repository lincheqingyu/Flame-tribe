import React, { useState } from 'react'
import First from "../../components/First/First"
import './Publish.css'
import { PlusOutlined } from '@ant-design/icons'
import { Image, Upload, Input } from 'antd'
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => resolve(reader.result);
    // reader.onerror = (error) => reject(error);
  })
const Publish = () => {

  const [topic, setTopic] = useState('')
  const [selectedTag, setSelectedTag] = useState('#学习讨论') // 新增状态，默认选中
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)

  const handleTopicChange = (event) => {
    setTopic(event.target.value)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

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
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        点击上传
      </div>
    </button>
  )

  const handleTagClick = (tag) => {
    setSelectedTag(tag)
  }


  const handlePublish = () => {
    console.log('发布内容:', { topic, content, image, selectedTag })
    // 在这里执行一键发帖的逻辑，包括发送数据到服务器等
  }

  return (
    <div className='publish-all'>
      <First />
      <div className='publish-header'>
        <button className='publish-button' onClick={handlePublish}>
          一键发帖
        </button>
      </div>
      <div className='publish-main'>
        <div className='publish-container'>
          <div className='publish-header'>
            <span className='publish-title'>主题：</span>
            <Input placeholder="请输入标题" />
          </div>
          <div className='publish-content'>
            <textarea
              placeholder='分享新鲜事...'
              value={content}
              onChange={handleContentChange}
            ></textarea>
          </div>
          {/* 上传图片 */}
          <div className='file-upload-container'>
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{
                  display: 'none',
                }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
              />
            )}
          </div>
          <div className="publish-tags">
            <span>
              添加标签：
            </span>
            <span
              className={`publish-tag ${selectedTag === '#学习讨论' ? 'selected' : ''}`}
              onClick={() => handleTagClick('#学习讨论')}
            >
              #学习讨论
            </span>
            <span
              className={`publish-tag ${selectedTag === '#竞赛分享' ? 'selected' : ''}`}
              onClick={() => handleTagClick('#竞赛分享')}
            >
              #竞赛分享
            </span>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Publish;









