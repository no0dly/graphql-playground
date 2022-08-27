import { Button, Card } from "antd";
import "./styles.css";
import {
  useGetPostList,
  useMutationRemovePost,
} from "../../../api/query/queries";
import { DeleteOutlined } from "@ant-design/icons";

function HomeCardList() {
  const { data = [] } = useGetPostList();
  const { mutate: mutationRemovePost, isLoading } = useMutationRemovePost();
  const removePost = (id: string) => () => mutationRemovePost(id);

  return (
    <div className="card-list">
      {data.map(({ id, username, timestamp, title }) => (
        <Card
          title={`${new Intl.DateTimeFormat("en-US").format(
            timestamp
          )} ${username}`}
          extra={
            <Button
              danger
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={removePost(id)}
              loading={isLoading}
            />
          }
          style={{ width: 300, marginRight: "20px", marginBottom: "20px" }}
          key={id}
        >
          <p>{title}</p>
        </Card>
      ))}
    </div>
  );
}

export default HomeCardList;
