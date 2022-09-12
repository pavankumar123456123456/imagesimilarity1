import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { localRoute } from "../../routes/localRoutes.js";
import "./NotFound500Style.jsx";

const NotFound = React.memo((props) => {
  useEffect(() => {
    document.title = `Greatvet`
  }, [])
  return (
    <>
      500 Error page
    </>
  );
});

export default withRouter(NotFound);
