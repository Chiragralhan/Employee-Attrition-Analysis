import { motion } from "framer-motion";
import './DashboardHeader.css'; // <-- Import CSS file

export default function DashboardHeader() {
  return (
    <header className="header-container">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="logo-section"
      >
        <img
          src="/logo.png"
          alt="Company Logo"
          className="logo-img"
        />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="title-section"
      >
        <h1 className="header-title">
          Employee Attrition Analytics
        </h1>
        <p className="header-subtitle">
          Insight-driven HR Decisions
        </p>
      </motion.div>

      {/* Empty Spacer */}
      <div className="spacer"></div>
    </header>
  );
}
