import React from "react";

export default function Section({
  title,
  children,
  subdued = false,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  subdued?: boolean;
  className?: string;
}) {
  return (
    <section className={`${subdued ? "bg-gray-50" : "bg-white"} py-10 lg:py-14 ${className}`}>
      <div className="container mx-auto px-4">
        {title ? (
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-8 text-center text-secondary" >{title}</h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}