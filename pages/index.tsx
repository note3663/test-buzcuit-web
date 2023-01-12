import { useEffect, useState } from "react";
import { Card, Col, Layout, Input, Form, Row, Button } from "antd";
import axios from "axios";
import Question2 from "./question2";

const { Content } = Layout;
const { Item } = Form;

const Home = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [type_result, setType_result] = useState("");
  const [] = useState();

  const getData = async () => {
    console.log(process.env.API);
    const res = await axios
      .post(`http://localhost:3001/test1`, { a, b })
      .then(function (res) {
        console.log(res);
        if (res.status == 201) {
          setResult(res.data.result);
          setType_result(res.data.type_result);
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {});

  return (
    <>
      <Col span={24}>
        <Content style={{ margin: "10px 0px 0px 0px" }}>
          <Card
            title="Question1"
            style={{ width: "100%" }}
            actions={[
              <Button key="primary" type="primary" onClick={() => getData()}>
                Find
              </Button>,
            ]}
          >
            <Form labelCol={{ span: 5 }}>
              <Row gutter={[24, 4]}>
                <Col span={12}>
                  <Item label="a" name="a">
                    <Input onChange={(e) => setA(e.target.value)}></Input>
                  </Item>
                  <Item label="result" name="result">
                    <Input value={result} style={{ display: "none" }} />
                    <Input value={result} />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item label="b" name="b">
                    <Input onChange={(e) => setB(e.target.value)}></Input>
                  </Item>
                  <Item label="type_result" name="type_result">
                    <Input value={result} style={{ display: "none" }} />
                    <Input value={type_result} />
                  </Item>
                </Col>
              </Row>
            </Form>
          </Card>

          <Question2 />
        </Content>
      </Col>
    </>
  );
};
export default Home;
