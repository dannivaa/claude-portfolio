import { Component } from "@/components/ui/etheral-shadow";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Component
        color="rgba(128, 128, 128, 1)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
      />
    </div>
  );
}
