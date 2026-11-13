import React from 'react';
import { 
  Building2, 
  Factory, 
  Home, 
  Users, 
  ShieldAlert, 
  Award, 
  UserCheck, 
  Activity, 
  GraduationCap, 
  Sparkles, 
  ShoppingBag, 
  Video,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Lock,
  Truck,
  Flame,
  DoorClosed
} from 'lucide-react';

export const DynamicIcon = ({ name, size = 22, className = '' }) => {
  const iconMap = {
    Building2,
    Factory,
    Home,
    Users,
    ShieldAlert,
    Award,
    UserCheck,
    Activity,
    GraduationCap,
    Sparkles,
    ShoppingBag,
    Video,
    ShieldCheck,
    CheckCircle,
    HelpCircle,
    Lock,
    Truck,
    Flame,
    DoorClosed
  };

  const Component = iconMap[name] || ShieldCheck;
  return <Component size={size} className={className} />;
};

export default DynamicIcon;
