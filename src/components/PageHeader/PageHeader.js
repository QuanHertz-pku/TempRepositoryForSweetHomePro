import React from "react";

// reactstrap components
import { Container,Button } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
        <h1 className="h1-seo" style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          这里是
          <span style={{ fontSize: "1.5em", fontWeight: "bold", textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}>
            <strong> 甜 </strong>
          </span>
          和
          <span style={{ fontSize: "1.5em", fontWeight: "bold", textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}>
            <strong> 权 </strong>
          </span>
          的小窝
          </h1>
          <h3 className="d-none d-sm-block" style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
            超棒的协作云 <del style={{textDecorationThickness:'4px'}}>笔记x</del> 日记！• 记录生活的一切~ 
          </h3>
          <Button className="btn-round" color="primary" size="lg">
            <i className="tim-icons icon-tap-02"/>  回家！
          </Button>
        </div>
      </Container>
    </div>
  );
}
