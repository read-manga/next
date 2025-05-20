"use client";
import Script from "next/script";
import { JSX, useEffect, useRef } from "react";
import { UseFormSetValue } from "react-hook-form";


export default function HCaptcha(): JSX.Element {
  const captchaRef = useRef<HTMLDivElement>(null);
  const sitekey = process.env.NEXT_PUBLIC_CAPTCHA_SITEKEY;
  useEffect(() => {
    const renderCaptcha = () => {
      if ((window as any).hcaptcha && captchaRef.current) {
        (window as any).hcaptcha.render(captchaRef.current, {
          sitekey: sitekey,
          callback: (token: string) => {
            if(window.document !== null) {
              const cptch = document.getElementById('captchaToken') as HTMLInputElement;
              if (cptch) {
                cptch.value = token;
              }
            }
          },
        });
      }
    };

    if ((window as any).hcaptcha) {
      renderCaptcha();
    } else {
      (window as any).onloadHcaptcha = renderCaptcha;
    }
  }, []);

  return (
    <>
      <Script
        src="https://js.hcaptcha.com/1/api.js?onload=onloadHcaptcha&render=explicit"
        strategy="lazyOnload"
      />
      <div className="w-full flex items-center justify-center mt-10">
        <div ref={captchaRef} />
      </div>
    </>
  );
}
