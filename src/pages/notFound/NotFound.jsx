import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { localRoute } from "../../routes/localRoutes.js";
import "./NotFoundStyle.jsx";

const NotFound = React.memo((props) => {

  return (
    <>
      <center>
        <h1 style={{ color: "#ccc" }}>Page Not Found UI</h1>
        <hr />
      </center>
    </>
  );
});

export default withRouter(NotFound);
