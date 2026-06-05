"use client";

import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

export default function NotificationCard({
  notification,
}: any) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Chip
          label={notification.Type}
          sx={{ mt: 1 }}
        />

        <Typography sx={{ mt: 1 }}>
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}