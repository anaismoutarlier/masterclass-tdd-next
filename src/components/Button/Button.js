// { onClick: handleClick, backgroundColor: "red", type: "submit", children: "Test" }
export const Button = ({ backgroundColor = "red", ...props }) => {
  return <button {...props} style={{ backgroundColor }} />;
};
