import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';
import { getImageByCategory, getImages, removeImage, updateImage, uploadImage } from 'apis/UploadImage';
import {
  Upload, Select, Button, Divider, Input,
} from 'antd';
import { DeleteOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { dummyRequest, getBase64, notification } from '../../utils/CommonFunction';

const { Option } = Select;

const Home = React.memo((props) => {
  const [imageByCategory, setImageByCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    getImages().then((res) => {
      setCategories(res);
    });
  }, []);

  const getDetailCategory = (category) => {
    const categoryName = JSON.parse(category).category;
    getImageByCategory(categoryName).then((res) => {
      setImageByCategory(res.data);
    });

    setCategoryId(category);
  };

  const changeCategory = (category) => {
    getDetailCategory(category);
  };

  const deleteImage = (e, id) => {
    e.stopPropagation();

    removeImage(id).then((res) => {
      getDetailCategory(categoryId);
      notification('success', 'Xóa ảnh thành công!');
    });
  };

  const viewDetailImage = (e, content) => {
    e.stopPropagation();
    const image = new window.Image();
    image.src = content;

    const w = window.open('');
    w.document.write(image.outerHTML);
  };

  const onUploadImg = ({ file: newFile }) => {
    if (categoryId && JSON.parse(JSON.stringify(newFile.status)) === 'done') {
      getBase64(newFile.originFileObj).then((res) => {
        const category = JSON.parse(String(categoryId));

        const params = {
          Name: newFile.name,
          Category: category.category,
          ContentImage: res,
          Url: '',
        };

        uploadImage(params).then(() => {
          notification('success', 'Upload ảnh thành công!');
          getDetailCategory(categoryId);
        });
      });
    }
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const addItem = () => {
    setName('');
    if (name !== '') {
      setCategories([
        ...categories,
        {
          imageName: '',
          category: name,
          contentImage: '',
          url: '',
        },
      ]);
    }
  };

  return (
    <div className="container">
      <div>
        <Upload
          onChange={onUploadImg}
          customRequest={(onSuccess) => dummyRequest(onSuccess)}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
      <div>
        <Select
          className="category"
          onChange={changeCategory}
          dropdownRender={(menu) => (
            <div>
              {menu}
              <Divider style={{ margin: '4px 0' }} />
              <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                <Input style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
                <a
                  style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                  onClick={addItem}
                >
                  <PlusOutlined /> Add item
                </a>
              </div>
            </div>
          )}
        >
          {categories && categories.length > 0 && categories.map((item) => (
            <Option value={JSON.stringify(item)}>
              {item.category}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        {imageByCategory.length > 0 && imageByCategory.map((item) => (
          <div style={{ marginBottom: 30 }} onClick={(e) => viewDetailImage(e, item.contentImage)}>
            <span className="tag">
              {item.name}
            </span>
            <DeleteOutlined style={{ color: 'red', fontSize: 18 }} onClick={(e) => deleteImage(e, item.id)} className="cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
});

export default withRouter(Home);
