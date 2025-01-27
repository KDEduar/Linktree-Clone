"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast()
  return (
    <div>
      <Button>Helloooo</Button>
      <p>Gola mundo</p>
      <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
    </div>
  );
}
