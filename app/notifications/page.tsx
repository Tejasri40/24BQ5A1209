"use client";

import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import NotificationCard from "../../components/NotificationCard";

import { getNotifications } from "../../services/notificationService";

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const data = await getNotifications();
      setNotifications(data);
    }

    loadData();
  }, []);

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>All Notifications</h1>

        {notifications.map((notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
          />
        ))}
      </div>
    </>
  );
}