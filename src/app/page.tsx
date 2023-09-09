"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";




import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>This is my awesome button counter</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{counter}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setCounter(counter + 1)} >Click me</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
