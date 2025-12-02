import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Eye,
  Lock,
  LogOut,
  MapPin,
  Edit,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useUser, useClerk } from "@clerk/clerk-react";

interface UserProfileProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const UserProfile = ({ isMobile = false, isOpen = true, onToggle }: UserProfileProps) => {
  const [isExpanded, setIsExpanded] = useState(!isMobile);
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) return null;
  if (isMobile && !isOpen) return null;

  const userData = {
    id: user.id,
    name: user.fullName || user.username || "Intern",
    age: "N/A",
    location: user.primaryEmailAddress?.emailAddress || "N/A",
    profileCompletion: 100,
    avatar: user.imageUrl
  };

  const handleToggle = () => {
    if (isMobile && onToggle) onToggle();
    else setIsExpanded(!isExpanded);
  };

  return (
    <Card className={`${isMobile ? "absolute top-16 right-4 w-80 z-50 shadow-xl" : "w-full"} bg-card border-border`}>
      <CardContent className="p-4">
        {/* ID section */}
        <div className="flex items-center justify-between mb-4">
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2">
            User ID: {userData.id.slice(0, 8)}
            <Edit className="w-4 h-4 cursor-pointer" />
          </div>

          {!isMobile && (
            <Button variant="ghost" size="sm" onClick={handleToggle} className="p-1">
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          )}
        </div>

        {(isExpanded || isMobile) && (
          <>
            {/* User info */}
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={userData.avatar} />
                <AvatarFallback>{userData.name.slice(0,2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-foreground">{userData.name}</h3>
                <p className="text-sm text-muted-foreground">{userData.location}</p>
              </div>
            </div>

            {/* Profile completion */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Profile Completed:</span>
                <span className="text-sm font-semibold text-success">{userData.profileCompletion}%</span>
              </div>
              <Progress value={userData.profileCompletion} className="h-2" />
            </div>

            {/* Action buttons */}
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Eye className="w-4 h-4 mr-2" />
                View Profile / CV
              </Button>

              <Button variant="ghost" className="w-full justify-start">
                <Lock className="w-4 h-4 mr-2" />
                Change Password
              </Button>

              {/* REAL SIGN OUT */}
              <Button
                variant="ghost"
                className="w-full justify-start text-destructive"
                onClick={() => signOut({ redirectUrl: "/sign-in" })}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
