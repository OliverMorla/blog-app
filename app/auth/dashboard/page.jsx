"use client"

import { motion } from "framer-motion";
import "./page.scss"

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <motion.div className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h1>Dashboard</h1>
            <div className="account-info-w">
                <img src="/user-icon.png" alt="" className="user-photo" />
                <span className="user-username">Username: {user?.username}</span>
                <span className="user-email">Email: {user?.email}</span>
                <span className="user-password">Password: </span>
            </div>
        </motion.div>
    );
}

export default Dashboard;