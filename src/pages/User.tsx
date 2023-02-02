import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

type Props = {};

function User({}: Props) {
  const params = useParams();
  const [queryParams] = useSearchParams(); // querystring

  console.log("params", params);
  console.log("queryParams", queryParams.get("id"), queryParams.get("name"));

  useEffect(() => {}, []);

  return <div>User Page</div>;
}

export default User;
