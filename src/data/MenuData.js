
import React from "react";
import { MdKeyboardArrowLeft, MdOutlineSdStorage, MdSettingsSuggest, MdHome, MdKeyboardArrowDown } from "react-icons/md"
import { BsServer, BsCpu, BsSpeedometer2, BsTerminal } from "react-icons/bs"
import { GiNotebook, GiServerRack,} from "react-icons/gi"
import { FaServer, FaUsers, FaTasks, FaMoneyBillAlt, FaMemory, FaFire } from "react-icons/fa"
import { VscServerProcess, VscTasklist } from "react-icons/vsc"
import { FiHardDrive } from "react-icons/fi"
import { AiOutlineAreaChart, } from "react-icons/ai"
import {RiListSettingsLine} from "react-icons/ri"
export const menuData = [
  {
    icon: <MdHome className="nav-icon"/>,
    title: "داشبورد",
    items: [],
    to: "/dashboard",
  },
  {
    icon: <FaServer className="nav-icon"/>,
    title: "ماشین های مجازی",
    open: <MdKeyboardArrowDown className="nav-icon"  />,
    close:<MdKeyboardArrowLeft className="nav-icon"/>,
    items: [
      {
        title:"لیست همه ماشین ها",
        to:"/vps"
      },
      {
        title:"ایجاد ماشین",
        to:"/create-vps"
      },
      {
        title:"انتقال ماشین",
        to:"/migrate-vps"
      },
      {
        title:"ایجاد کپی از ماشین",
        to:"/clone-vps"
      },
      {
        title:"نصب مجدد ماشین",
        to:"/rebuild-vps"
      },
      {
        title:"Port Forwarding",
        to:"/port-forwarding"
      },
      
    ],
  },
  {
    icon: <BsServer className="nav-icon"/>,
    title: "سرور ها",
    open: <MdKeyboardArrowDown className="nav-icon"  />,
    close:<MdKeyboardArrowLeft className="nav-icon"/>,
    items: [
      {
        title:"لیست سرور ها",
        to:"/Server",
      },
      {
        title:"سرور جدید",
        to:"/create-server",
      },
      {
        title:"لیست سرور های پشتیبان",
        to:"/backup-server",
      },
      {
        title:"اضافی کردن سرور پشتیبان",
        to:"/create-backup-server",
      },
    ],
  },
  {
    icon: <MdOutlineSdStorage className="nav-icon"/>,
    title: "ذخیره ساز ها",
    open: <MdKeyboardArrowDown className="nav-icon"  />,
    close:<MdKeyboardArrowLeft className="nav-icon"/>,
    items: [
      {
        title:"لیست ذخیره ساز ها",
        to:"/storage"
      },
      {
        title:"اضافه کردن ذخیره ساز",
        to:"/create-storage"
      },
    ],
  },
  {
    icon: <MdSettingsSuggest className="nav-icon"/>,
    title: "سیستم عامل",
    items: [],
    to: "/os",
  },
  {
    icon: <GiServerRack className="nav-icon"/>,
    title: "استخر IP",
    open: <MdKeyboardArrowDown className="nav-icon"  />,
    close:<MdKeyboardArrowLeft className="nav-icon"/>,
    items: [
      {
        title:"ایجاد استخر IP",
        to: "/create-ippool"
      },
      {
        title:"لیست استخر IP",
        to: "/ippool"
      }

    ],
  },
  // {
  //   icon: <GiNotebook className="nav-icon"/>,
  //   title: "پلن ها",
  //   open: <MdKeyboardArrowDown className="nav-icon"  />,
  //   close:<MdKeyboardArrowLeft className="nav-icon"/>,
  //   items: [
  //     {
  //       title:"لیست پلن ها",
  //       to:"/plans"
  //     },
  //     {
  //       title:"اضافه کردن پلن",
  //       to:""
  //     },
  //   ],
  // },
  {
    icon: <FaUsers className="nav-icon"/>,
    title: "کاربران",
    open: <MdKeyboardArrowDown className="nav-icon"  />,
    close:<MdKeyboardArrowLeft className="nav-icon"/>,
    items: [
      {
        title:"لیست کاربران",
        to:"/users"
      },
      {
        title:"اضافه کردن کاربر",
        to:"/create-user"
      },
    ],
  },
  {
    icon: <FaTasks className="nav-icon"/>,
    title: "وظایف",
    to: "/task",
  },
  {
    icon: <FaMoneyBillAlt className="nav-icon"/>,
    open: <MdKeyboardArrowDown className="nav-icon"  />,
    close:<MdKeyboardArrowLeft className="nav-icon"/>,
    title: "صورت حساب ها",
    items: [
      {
        title:"تنظیمات صورت حساب",
        to:"/rulesprice",
      },
      {
        title:"فاکتور ها",
        to:"/invoices",
      },
      {
        title:"صدور فاکتور",
        to:"/create-invoice",
      },
      // {
      //   title:"تراکنش ها",
      //   to:"/transaction",
      // },
      // {
      //   title:"صدور تراکنش",
      //   to:"/create-transaction",
      // },
    ],
  },

  {
    icon: <AiOutlineAreaChart className="nav-icon"/>,
    title: "آمار VPS",
    items: [],
    to: "/vpsstatistics",
  },
  {
    icon: <BsCpu className="nav-icon"/>,
    title: "CPU",
    items: [],
    to: "/cpu",
  },
  {
    icon: <FaMemory className="nav-icon"/>,
    title: "RAM",
    to: "/ram",
  },
  {
    icon: <FiHardDrive className="nav-icon"/>,
    title: "Disk",
    to: "/disk",
  },
  {
    icon: <BsSpeedometer2 className="nav-icon"/>,
    title: "BandWidth",
    items: [],
    to: "/bandwidth",
  },
  {
    icon: <FaFire className="nav-icon"/>,
    title: "FireWall",
    items: [],
    to: "/firewall",
  },
  {
    icon: <VscServerProcess className="nav-icon"/>,
    title: "فرآیند ها",
    items: [],
    to: "/processes",
  },
  // {
  //   icon: <BsTerminal className="nav-icon"/>,
  //   title: "SSH",
  //   items: [],
  //   to: "http://192.168.1.50:2222/ssh/host/127.0.0.1",
  // },
  {
    icon: <VscTasklist className="nav-icon"/>,
    title: "Logs",
    items: [],
    to: "/logs",
  },
  {
    icon: <RiListSettingsLine className="nav-icon"/>,
    title: "تنظیمات",
    items: [],
    to: "/setting",
  },
 
];
