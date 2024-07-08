import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Apply.css';
import { CloudUploadOutlined } from '@ant-design/icons';
import { Image, Upload, Input, Button, message, DatePicker, Space } from 'antd';
// 时间框
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

// 上传文件
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Apply = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);
  const [formData, setFormData] = useState({
    projectName: '',
    applicantName: '',
    members: '',
    introduction: '',
    teacher: '',
    speciality: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const uploadButton = (
    <button style={{ border: 'none', background: 'none', color: '#fda75f' }} type="button">
      <CloudUploadOutlined />
      <div style={{ marginTop: 8 }}>上传材料</div>
    </button>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = Date.now();

    if (currentTime - lastSubmitTime < 3000) {
      message.warning('请勿重复提交');
      return;
    }

    if (isSubmitting) {
      message.warning('请勿重复提交');
      return;
    }

    // 检查表单输入
    for (let key in formData) {
      if (!formData[key]) {
        message.error(`${key}不能为空`);
        return;
      }
    }

    if (fileList.length === 0) {
      message.error('请上传申请材料');
      return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(currentTime);

    // 提交数据到后端
    const submitData = {
      ...formData,
      startDate,
      files: fileList.map(file => file.originFileObj)
    };

    // 模拟发送请求
    console.log('提交的数据:', submitData);

    setTimeout(() => {
      message.success('申请已提交');
      setIsSubmitting(false);
    }, 2000); // 模拟网络延迟
  };

  return (
    <div className='apply-all'>
      <form onSubmit={handleSubmit}>
        <label>
          申请项目:
          <Input
            name="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
            placeholder="请输入申请项目"
          />
        </label>
        <label>
          申请人姓名:
          <Input
            name="applicantName"
            value={formData.applicantName}
            onChange={handleInputChange}
            placeholder="请输入申请人姓名"
          />
        </label>
        <label>
          项目组成员:
          <Input
            name="members"
            value={formData.members}
            onChange={handleInputChange}
            placeholder="请输入项目组成员"
          />
        </label>
        <label>
          项目简介:
          <Input
            name="introduction"
            value={formData.introduction}
            onChange={handleInputChange}
            placeholder="请输入项目简介"
          />
        </label>
        <label>
          指导老师:
          <Input
            name="teacher"
            value={formData.teacher}
            onChange={handleInputChange}
            placeholder="请输入指导老师"
          />
        </label>
        <label>
          所学专业:
          <Input
            name="speciality"
            value={formData.speciality}
            onChange={handleInputChange}
            placeholder="请输入所学专业"
          />
        </label>
        <label >
          申请日期:
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='apply-data'/>
        </label>
        <label className='apply-input'>
          申请材料:
          <div className='file-upload-container1'>
            <Upload
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
        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
          {isSubmitting ? '提交中...' : '提交'}
        </Button>
      </form>
    </div>
  );
};

export default Apply;