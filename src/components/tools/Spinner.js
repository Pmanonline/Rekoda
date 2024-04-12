import { jsx as _jsx } from "react/jsx-runtime";
export default function Spinner() {
    return (_jsx("div", { className: "inline-block h-[20px] w-[20px] animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]", role: "status", children: _jsx("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]", children: "Loading..." }) }));
}
