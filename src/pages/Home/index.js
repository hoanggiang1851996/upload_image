import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';
import { getImageByCategory, getImages, removeImage, updateImage, uploadImage } from 'apis/UploadImage';
import {
  Upload, Select, Button, Divider, Input,
} from 'antd';
import { CloseOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { dummyRequest, getBase64 } from '../../utils/CommonFunction';

const { Option } = Select;

const Home = React.memo((props) => {
  const [imageByCategory, setImageByCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    getImages().then((res) => {
      console.log(res)
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
      console.log(res);
      getDetailCategory(categoryId);
    });
  };

  const viewDetailImage = (e, content) => {
    e.stopPropagation();
    const image = new window.Image();
    image.src = content;

    const w = window.open('');
    w.document.write(image.outerHTML);
  };

  const onUploadImg = ({ fileList: newFileList }) => {
    if (categoryId) {
      const file = newFileList.length > 0 ? newFileList[0].originFileObj : null;

      getBase64(file).then((res) => {
        const category = JSON.parse(String(categoryId));

        const params = {
          imageName: file.name,
          Category: category.category,
          ContentImage: res,
          Url: '',
        };
        if (category.id) {
          updateImage(category.id).then((res1) => {
            console.log(res1);
            getDetailCategory(categoryId);
          });
        } else {
          uploadImage(params).then((res1) => {
            console.log(res1);
            getDetailCategory(categoryId);
          });
        }
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
          <div onClick={(e) => viewDetailImage(e, item.contentImage)}>
            <span style={{ marginRight: 10 }}>
              {item.url}
            </span>
            <CloseOutlined onClick={(e) => deleteImage(e, item.id)} className="cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
});

export default withRouter(Home);
