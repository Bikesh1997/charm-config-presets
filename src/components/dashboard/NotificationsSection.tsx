import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

interface Notification {
  date: string;
  message: string;
}

interface NotificationsSectionProps {
  notifications: Notification[];
}

export const NotificationsSection = ({
  notifications,
}: NotificationsSectionProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notifications.map((notification, index) => (
            <div key={index} className="p-3 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground">
                {formatDate(notification.date)}
              </p>
              <p className="text-sm mt-1">{notification.message}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
