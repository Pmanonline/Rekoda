import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const details = [
    {
        id: "1",
        CUSTOMER: "James Onuoha",
        AMOUNT: "N258,936",
        TYPE: "Repayment",
        PROPERTY: "no 23 joseph waku street",
        PLAN: "family plan",
        PAYMENT_DUEDATE: "4th october 2023",
    },
    {
        id: "2",
        CUSTOMER: "Ngutor okpahindi",
        AMOUNT: "369,000",
        TYPE: "Repayment",
        PROPERTY: "no 23 joseph waku street",
        PLAN: "diaspora",
        PAYMENT_DUEDATE: "4th october 2023",
    },
    {
        id: "3",
        CUSTOMER: "uche peter",
        AMOUNT: "369,000",
        TYPE: "Repayment",
        PROPERTY: "no 23 joseph waku street",
        PLAN: "diaspora",
        PAYMENT_DUEDATE: "4th october 2023",
    },
    {
        id: "4",
        CUSTOMER: "michael jonah",
        AMOUNT: "369,000",
        TYPE: "Repayment",
        PROPERTY: "no 23 joseph waku street",
        PLAN: "diaspora",
        PAYMENT_DUEDATE: "4th october 2023",
    },
    {
        id: "5",
        CUSTOMER: "magnus okonkwo",
        AMOUNT: "369,000",
        TYPE: "Repayment",
        PROPERTY: "no 23 joseph waku street",
        PLAN: "diaspora",
        PAYMENT_DUEDATE: "4th october 2023",
    },
];
import { useState, useEffect } from "react";
import axios from "axios";
import DropdownMenu from "../../components/dropdownMenu";
export default function ResponsiveTable() {
    const [data, setData] = useState([]);
    const url = "https://restcountries.com/v3.1/independent?status=true";
    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (_jsx("div", { className: "overflow-x-auto", children: _jsx(BoxWrapper, { children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200 table-auto ", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", style: { width: "10%" }, children: "ID" }), _jsx("th", { scope: "col", className: "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", style: { width: "15%" }, children: "CUSTOMER" }), _jsx("th", { scope: "col", className: "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", style: { width: "10%" }, children: "AMOUNT" }), _jsx("th", { scope: "col", className: "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", style: { width: "10%" }, children: "TYPE" }), _jsx("th", { scope: "col", className: "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", style: { width: "15%" }, children: "PROPERTY" }), _jsx("th", { scope: "col", className: "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", style: { width: "15%" }, children: "PLAN" }), _jsx("th", { scope: "col", className: "py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", style: { width: "15%" }, children: "PAYMENT_DUEDATE" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: details.map((item, index) => (_jsxs("tr", { className: "", children: [_jsx("td", { className: "py-4 px-2 whitespace-nowrap", children: item.id }), _jsx("td", { className: "py-4 px-2 whitespace-nowrap", children: item.CUSTOMER }), _jsx("td", { className: "py-4 px-2 whitespace-nowrap", children: item.AMOUNT }), _jsx("td", { className: "py-4 px-2 whitespace-nowrap", children: item.TYPE }), _jsx("td", { className: "py-4 px-2 whitespace-nowrap", children: item.PROPERTY }), _jsx("td", { className: "py-4 px-2 whitespace-nowrap", children: item.PLAN }), _jsx("td", { className: "py-4 px- whitespace-nowrap", children: item.PAYMENT_DUEDATE }), _jsx("td", { className: "", children: _jsx(DropdownMenu, {}) })] }, index))) })] }) }) }));
}
function BoxWrapper({ children }) {
    return (_jsx("div", { className: "border-x border-gray-200 rounded-sm mt-3 ", children: children }));
}
