// import { getOptions } from "loader-utils";

module.exports = function loader(source) {
  // const options = getOptions(this);
  // const content = source.replace(/\[name\]/g, options.name);
  console.log(this);

  return `export default ${JSON.stringify(source)}`;
};
