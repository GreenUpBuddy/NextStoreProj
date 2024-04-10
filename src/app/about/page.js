"use client"

import Image from "next/image";
import { MyAppBar } from "@/components/nav/appbar";
import {ResponsiveGrid} from "@/components/grid/page"
import { Paging } from "@/components/nav/paging";

import styles from "../page.module.css";

export default function About() {
  return (
    <main>
        <MyAppBar/>
        <ResponsiveGrid/>
        <Paging/>
    </main>
  );
}