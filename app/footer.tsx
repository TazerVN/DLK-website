import React from "react";
import Image from "next/image";
import hoasen from "../public/asset/logo/hoasen.png";
import studio from "../public/asset/white.png";
import fada from "../public/asset/logo/fada.png";

// Helper component for social media icons
const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-sm cursor-pointer hover:bg-gray-700 transition-colors">
    {children}
  </div>
);

// The main App component that represents the entire page
export default function Footer() {
  return (
    <div className="bg-[#1a1a1a] font-sans">
      {/* Main Content Area */}

      {/* Footer Section */}
      <footer className="bg-[#212121] text-gray-400 py-12">
        <div className="container mx-auto px-4">
          {/* Section 1: Connect with Atlus & Socials */}
          <div className="flex justify-center items-center h-10 mb-10">
            <div className="flex items-center h-full">
              <div className="bg-white text-black h-full flex items-center px-6">
                <span className="font-sans font-bold tracking-widest text-sm">
                  FIND US HERE
                </span>
              </div>
              {/* This div creates the arrow shape pointing to the right */}
              <div className="w-0 h-0 border-y-[20px] border-y-transparent border-l-[15px] border-l-white"></div>
              <div className="flex items-center space-x-2 bg-white h-full px-3">
                <SocialIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </SocialIcon>
                <SocialIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 2.8 5.4 0 3.9-3.1 7.2-7 7.2-3.9 0-7-3.2-7-7.2 0-1.7.6-3.2 1.5-4.4C6.8 10.3 6 12.5 6 14.5c0 3.9 3.1 7.2 7 7.2s7-3.2 7-7.2c0-1.5-.5-2.9-1.3-4.1z"></path>
                  </svg>
                </SocialIcon>
                <SocialIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </SocialIcon>
                <SocialIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>

          {/* Section 2: Platform Logos */}
          <div className="flex justify-center items-center flex-wrap gap-x-8 md:gap-x-12 gap-y-4 mb-8">
            <Image
              src={hoasen}
              alt="hoasen logo"
              width={140}
              height={40}
              placeholder="blur"
              quality={50}
              className="object-contain"
            />
            <Image
              src={studio}
              alt="studio Logo"
              width={50}
              height={35}
              placeholder="blur"
              quality={50}
              className="object-contain"
            />
            <Image
              src={fada}
              alt="fada Logo"
              width={120}
              height={25}
              placeholder="blur"
              quality={50}
              className="object-contain"
            />
          </div>

          {/* Section 3: ESRB Rating */}
          <div className="flex justify-center mb-8">
            <a
              title="Entertainment Software Rating Board, Public domain, via Wikimedia Commons"
              href="https://commons.wikimedia.org/wiki/File:ESRB_Teen.svg"
            >
              <Image
                width={100}
                height={100}
                quality={50}
                alt="ESRB Teen"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/ESRB_Teen.svg/128px-ESRB_Teen.svg.png?20110324232512"
              ></Image>
            </a>
          </div>

          {/* Section 4: Legal Text */}
          <div className="text-center text-xs text-gray-500 max-w-5xl mx-auto space-y-4 mb-10">
            <p>Copyright © 2025 by Lac Studio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
