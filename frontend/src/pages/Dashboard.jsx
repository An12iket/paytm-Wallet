import { useEffect, useState } from "react";
import axios from "axios";

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/balance", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with your token logic
            },
        })
            .then(response => {
                setBalance(response.data.balance);
            })
            .catch(error => {
                console.error("Error fetching balance:", error);
            });
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="balance">
                Balance: {balance !== null ? `$${balance.toFixed(2)}` : "Loading..."}
            </div>
        </div>
    );
};
