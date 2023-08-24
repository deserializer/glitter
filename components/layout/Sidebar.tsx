import {BsBellFill, BsHouseFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";
import SidebarLogo from "@/components/layout/SidebarLogo";
import SidebarItem from "@/components/layout/SidebarItem";
import {BiLogOut} from "react-icons/bi";
import SidebarTweetButton from "@/components/layout/SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import {signOut} from "next-auth/react";

const Sidebar = () => {
    const {data: currentUser} = useCurrentUser();

    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsBellFill,
            auth: true
        }
        ,
        {
            label: 'Profile',
            href: '/users/123',
            icon: FaUser,
            auth: true
        }
    ];

    return (
        <div className={"col-span-1 h-full pr-4 md:pr-6"}>
            <div className={"flex flex-col items-end"}>
                <div className={"space-y-2 lg:w-[230px]"}>
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                    {currentUser && (
                        <SidebarItem onClick={() => signOut()} label={"Logout"} icon={BiLogOut} />
                    )}
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;