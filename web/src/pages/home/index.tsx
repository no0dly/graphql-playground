import { PageHeader } from "antd";
import { Link } from "react-router-dom";
import "./styles.css";
import HomeActions from "./components/Actions";
import HomeCardList from "./components/CardList";

function Home() {
  return (
    <div className="container">
      <PageHeader
        className="site-page-header"
        title="Posts App"
        subTitle="application to add or remove posts"
        extra={[
          <Link to="/" key="link-1">
            Home
          </Link>,
          <Link to="/post" key="link-2">
            Post
          </Link>,
        ]}
      />
      <HomeActions />
      <HomeCardList />
    </div>
  );
}

export default Home;
