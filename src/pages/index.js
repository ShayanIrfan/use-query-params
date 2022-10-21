import * as React from "react";
import Child from "../component/chilld";

// Use Query Params Import
import { useQueryParamString } from "react-use-query-param-string";
import { navigate } from "gatsby";

const IndexPage = () => {
  // Initialize
  const [searchText, setSearchText, initialized] = useQueryParamString(
    "search",
    ""
  );

  React.useEffect(() => {
    console.log("parent___>", "init");
  }, []);

  React.useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const handler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <div>
        ADD QUERY PARAM &nbsp;
        <Child qureyHandler={handler} />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
