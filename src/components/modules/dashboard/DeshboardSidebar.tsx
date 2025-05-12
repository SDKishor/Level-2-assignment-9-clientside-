"use client";
import Logo from "@/app/assets/svgs/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { logoutUser } from "@/services/AuthService";
import { CheckCircle, Grid, Home, LogOut, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DeshboardSidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Posts Approval",
      path: "/dashboard/postApproval",
      icon: <CheckCircle className="h-5 w-5" />,
    },

    {
      title: "Categories",
      path: "/dashboard/categories",
      icon: <Grid className="h-5 w-5" />,
    },
    {
      title: "Users",
      path: "/dashboard/users",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const handelLogout = () => {
    logoutUser();
  };

  return (
    <Sidebar>
      <Link href={"/"}>
        <div className="flex items-center ">
          <div className="size-12 ">
            <Logo />
          </div>
          <span className="text-2xl font-bold text-primary">StreetEats</span>
        </div>
      </Link>
      {/* dividor */}
      <div className="h-px my-2 bg-primary/50" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    className={isActive(item.path) ? "bg-primary/30" : ""}
                    asChild
                  >
                    <Link href={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto p-4 border-t">
        <button onClick={() => handelLogout()}>
          <div className="flex items-center gap-3 cursor-pointer">
            <LogOut />
            <p className="text-sm font-medium">Logout</p>
          </div>
        </button>
      </div>
    </Sidebar>
  );
};

export default DeshboardSidebar;
