"use client";

import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import NotificationCard from "../../components/NotificationCard";

import { getNotifications } from "../../services/notificationService";

export default function PriorityPage() {
  const [notifications, setNotifications] =
    useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const data = await getNotifications();

      const weights: any = {
        Placement: 3,
        Result: 2,
        Event: 1,
      };

      const sorted = [...data].sort(
        (a: any, b: any) => {
          if (
            weights[b.Type] !==
            weights[a.Type]
          ) {
            return (
              weights[b.Type] -
              weights[a.Type]
            );
          }

          return (
            new Date(
              b.Timestamp
            ).getTime() -
            new Date(
              a.Timestamp
            ).getTime()
          );
        }
      );

      setNotifications(sorted);
    }

    loadData();
  }, []);

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Priority Notifications</h1>

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