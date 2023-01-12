import { useEffect, useState } from "react";
import { Card, Col, Layout, Input, Form, Row, Button, Table } from "antd";
import axios from "axios";

const { Content } = Layout;
const { Item } = Form;
const { Column, ColumnGroup } = Table;

const Question2 = () => {
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [hop, setHop] = useState("");
  const [yeast, setYeast] = useState("");
  const [malts, setMalts] = useState("");
  const [ibu, setIbu] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [blg, setBlg] = useState("");
  const [result, setResult] = useState([]);
  const [old_data, setOldData] = useState([]);
  const [dataRandom, setDataRandom] = useState([
    {
      brand: "",
      name: "",
      style: "",
      hop: "",
      yeast: "",
      malts: "",
      ibu: "",
      alcohol: "",
      blg: "",
      count: 0,
    },
  ]);

  const createBeer = async () => {
    console.log(process.env.API);
    const res = await axios
      .post(`http://localhost:3001/beer`, {
        brand: brand,
        name: name,
        style: style,
        hop: hop,
        yeast: yeast,
        malts: malts,
        ibu: ibu,
        alcohol: alcohol,
        blg: blg,
      })
      .then(function (res) {
        console.log(res);
        if (res.status == 201) {
          setResult(res.data.result);
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    setBrand("");
    setName("");
    setStyle("");
    setHop("");
    setYeast("");
    setMalts("");
    setIbu("");
    setAlcohol("");
    setBlg("");
  };

  const rendomBeer = async () => {
    console.log(old_data);
    const res = await axios
      .get(
        `http://localhost:3001/beer/random_beer?old_data=[${old_data}]&limit=1`
      )
      .then(function (res) {
        if (res.status == 200) {
          const old = [];
          old.push(...old_data, res.data.data[0].uid);
          console.log(old);

          setDataRandom(res.data.data);
          return res.data.data[0].uid;
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    setOldData([...old_data, res]);
  };

  useEffect(() => {});

  return (
    <>
      {/* <Col span={24}>
        <Content style={{ margin: "10px 0px 0px 0px" }}> */}
      <Card
        title="Question2.1"
        style={{ width: "100%", marginTop: "25px" }}
        actions={[
          <Button key="primary" type="primary" onClick={() => createBeer()}>
            create
          </Button>,
          <Button key="primary" type="primary" danger>
            cancel
          </Button>,
        ]}
      >
        <Form labelCol={{ span: 8 }}>
          <Row>
            <Col span={12}>
              <Item label="brand" name="brand">
                <Input value={brand} style={{ display: "none" }} />
                <Input
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </Item>
              <Item label="name" name="name">
                <Input value={name} style={{ display: "none" }} />
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </Item>
              <Item label="style" name="style">
                <Input value={style} style={{ display: "none" }} />
                <Input
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                />
              </Item>
              <Item label="hop" name="hop">
                <Input value={hop} style={{ display: "none" }} />
                <Input value={hop} onChange={(e) => setHop(e.target.value)} />
              </Item>
              <Item label="yeast" name="yeast">
                <Input value={yeast} style={{ display: "none" }} />
                <Input
                  value={yeast}
                  onChange={(e) => setYeast(e.target.value)}
                />
              </Item>
              <Item label="malts" name="malts">
                <Input value={malts} style={{ display: "none" }} />
                <Input
                  value={malts}
                  onChange={(e) => setMalts(e.target.value)}
                />
              </Item>
              <Item label="ibu" name="ibu">
                <Input value={ibu} style={{ display: "none" }} />
                <Input value={ibu} onChange={(e) => setIbu(e.target.value)} />
              </Item>
              <Item label="alcohol" name="alcohol">
                <Input value={alcohol} style={{ display: "none" }} />
                <Input
                  value={alcohol}
                  onChange={(e) => setAlcohol(e.target.value)}
                />
              </Item>
              <Item label="blg" name="blg">
                <Input value={blg} style={{ display: "none" }} />
                <Input value={blg} onChange={(e) => setBlg(e.target.value)} />
              </Item>
            </Col>
          </Row>
        </Form>
      </Card>

      <hr />
      <Card
        title="Question2.2"
        style={{ width: "100%", marginTop: "25px" }}
        actions={[
          <Button key="primary" type="primary" onClick={() => rendomBeer()}>
            Next
          </Button>,
          <Button key="primary" type="primary" danger>
            cancel
          </Button>,
        ]}
      >
        <Form labelCol={{ span: 8 }}>
          <Row>
            <Col span={24}>
              {dataRandom.length > 0 ? (
                <Table
                  dataSource={dataRandom}
                  style={{ width: "100%" }}
                  tableLayout="auto"
                >
                  <Column title="brand" dataIndex="brand" key="brand" />
                  <Column title="name" dataIndex="name" key="name" />
                  <Column title="style" dataIndex="style" key="style" />
                  <Column title="hop" dataIndex="hop" key="hop" />
                  <Column title="yeast" dataIndex="yeast" key="yeast" />
                  <Column title="malts" dataIndex="malts" key="malts" />
                  <Column title="ibu" dataIndex="ibu" key="ibu" />
                  <Column title="alcohol" dataIndex="alcohol" key="alcohol" />
                  <Column title="blg" dataIndex="blg" key="blg" />
                  <Column title="count" dataIndex="count" key="count" />
                </Table>
              ) : null}
            </Col>
          </Row>
        </Form>
      </Card>
      {/* </Content>
      </Col> */}
    </>
  );
};
export default Question2;
