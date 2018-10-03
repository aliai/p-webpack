// import { getOptions } from "loader-utils";

module.exports = function loader(source) {
  // const options = getOptions(this);

  return `export default ${JSON.stringify(source)}`;
};
