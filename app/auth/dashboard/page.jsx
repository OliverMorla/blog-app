"use client"

import { motion } from "framer-motion";
import "./page.scss"

export const metadata = {
    title: 'Blog App - Dashboard',
    description: 'Blog Application',
}

const getUserInfo = async () => {

}

const Dashboard = () => {
    return (
        <motion.div className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h1>Dashboard</h1>
            <div className="account-info-w">
                <img src="/user-icon.png" alt="" className="user-photo" />
                <span className="user-username">Username: </span>
                <span className="user-email">Email:</span>
                <span className="user-password">Password:</span>
            </div>
        </motion.div>
    );
}

export default Dashboard;