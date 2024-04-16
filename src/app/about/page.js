
import Image from "next/image";
import { MyAppBar } from "@/components/nav/appbar";
import {ResponsiveGrid} from "@/components/grid/page";

import styles from "../page.module.css";

export default function About() {
  //APP BAR causing remix reference error
  return (
    <main>
        <MyAppBar/>
        <ResponsiveGrid/>
    </main>
  );
}