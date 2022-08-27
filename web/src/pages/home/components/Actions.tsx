import { Button, Form, Input, Modal, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./styles.css";
import { useState } from "react";
import TextArea from "antd/lib/input/TextArea";
import { FormPost } from "../../../common/interfaces";
import { useMutationAddPost } from "../../../api/query/queries";
// import { useQueryClient } from "@tanstack/react-query";

function HomeActions() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { mutate: mutationAddPost } = useMutationAddPost();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSubmit = (values: FormPost) => {
    mutationAddPost(values);
  };

  return (
    <div className="actions">
      <Tooltip title="Add new post">
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={toggleModal}
        />
      </Tooltip>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={toggleModal}
        footer={false}
      >
        <Form
          name="post-form"
          labelCol={{ flex: "110px" }}
          labelAlign="left"
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Your name"
            name="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Title of your post"
            name="title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tell us about your story"
            name="article"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default HomeActions;
