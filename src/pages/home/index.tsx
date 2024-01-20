import { DealsChart, UpcomingEvents } from "@/components";
import { Col, Row } from "antd";

export const Home = () => {
  return (
    <div>
      <Row
        style={{
          border: "1px solid blue",
          marginTop: "32px",
        }}
        gutter={[32, 32]}
      >
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "460px",
            border: "1px solid red",
          }}
        >
          <UpcomingEvents />
        </Col>

        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "460px",
            border: "1px solid red",
          }}
        >
          <DealsChart />
        </Col>
      </Row>
    </div>
  );
};
