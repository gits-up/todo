import { useState } from "react";
import { Menu, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserButton } from "@clerk/clerk-react"; // Clerk import
import { UserProfile as MobileUserProfile } from "./UserProfile";

interface HeaderProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export const Header = ({ onMenuToggle, isMobileMenuOpen }: HeaderProps) => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between relative z-40">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile menu */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="p-2"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Government logo */}
        <div className="flex items-center gap-2">
          <div className="w-22 h-12 rounded flex items-center justify-center overflow-hidden">
            <img src="/mca-logo.png" className="w-full h-full object-contain" />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-foreground">MINISTRY OF</div>
            <div className="text-xs text-muted-foreground">CORPORATE AFFAIRS</div>
            <div className="text-xs text-muted-foreground">GOVERNMENT OF INDIA</div>
          </div>
        </div>

        {/* PM Internship logo */}
        <div className="flex items-center gap-2 ml-4">
          <div className="w-30 h-12 rounded flex items-center justify-center overflow-hidden">
            <img src="/pmint-logo.png" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Button variant="ghost" size="sm">FAQs</Button>
        <Button variant="ghost" size="sm">Guidelines</Button>
        <Button variant="ghost" size="sm">Partner Companies</Button>
        <Button variant="ghost" size="sm">Manuals</Button>
        <Button variant="ghost" size="sm">Tutorials/Guidance Videos</Button>

        {/* Desktop Clerk User Button */}
        <UserButton afterSignOutUrl="/sign-in" />
      </nav>

      {/* Mobile Right Section */}
      <div className="md:hidden flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2"
        >
          <Bell className="w-5 h-5" />
          <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-destructive" />
        </Button>

        {/* Mobile Clerk User Button */}
        <UserButton afterSignOutUrl="/sign-in" />
      </div>

      {/* Legacy Mobile Profile (hide or keep for now) */}
      <MobileUserProfile
        isMobile={true}
        isOpen={showUserProfile}
        onToggle={() => setShowUserProfile(!showUserProfile)}
      />
    </header>
  );
};
