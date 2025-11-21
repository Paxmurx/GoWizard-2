import { useState, useEffect } from "react";

export function StickyBottomCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[999] bg-white border-t border-zinc-200 shadow-lg md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="p-4">
        <button className="w-full bg-[#db0064] hover:bg-[#b90055] active:bg-[#9a0047] text-white py-4 px-6 rounded-lg transition-colors duration-200 font-semibold text-[16px] min-h-[44px]">
          Get Your Free Quote
        </button>
      </div>
    </div>
  );
}
