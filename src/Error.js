import { useRouteError } from "react-router-dom";
const Error = () => {
  let err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Something went wrong</h1>
    </div>
  );
};

export default Error;
