import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import First from "../../components/First/First";
import './Publish.css';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, Input, message } from 'antd';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Publish = ({ addPost }) => {
  const [topic, setTopic] = useState('');
  const [selectedTag, setSelectedTag] = useState('#学习讨论');
  const [content, setContent] = useState('');
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const navigate = useNavigate();

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handlePublish = () => {
    if (!topic || !content) {
      message.error('标题和内容不能为空');
      return;
    }
    const newPost = { topic, content, selectedTag, images: fileList.map(file => file.url || file.preview) };
    addPost(newPost);
    setTopic('');
    setContent('');
    setFileList([]);
    setSelectedTag('#学习讨论');
    message.success('发帖成功');
    navigate('/contact/attention');
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>
        点击上传
      </div>
    </button>
  );

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
            <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="请输入标题" />
          </div>
          <div className='publish-content'>
            <textarea
              placeholder='分享新鲜事...'
              value={content}
              onChange={handleContentChange}
            ></textarea>
          </div>
          <div className='file-upload-container'>
            <Upload
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
            <span>添加标签：</span>
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
  );
};

export default Publish;
