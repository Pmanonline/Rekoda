import { jsx as _jsx } from "react/jsx-runtime";
const Error = ({ children, ...props }) => {
    return (_jsx("div", { style: { color: "#f23838", textAlign: "start", margin: "0.5rem 0" }, ...props, children: children }));
};
export default Error;
