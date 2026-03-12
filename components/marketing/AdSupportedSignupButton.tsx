"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { APP_SIGNUP_URL } from "@/lib/marketing/config";

/**
 * "Start free" button that reminds users about ads before navigating to signup.
 * Links to the app at bidblender.io.
 */
export function AdSupportedSignupButton() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    dialogRef.current?.showModal();
  };

  const handleContinue = () => {
    dialogRef.current?.close();
    window.location.href = APP_SIGNUP_URL;
  };

  const handleCancel = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <Button variant="secondary" className="w-full" onClick={handleClick}>
        Start free
      </Button>
      <dialog
        ref={dialogRef}
        className="rounded-2xl border border-gray-700 bg-bb-dark-elevated p-6 shadow-xl backdrop:bg-black/50"
        onCancel={handleCancel}
      >
        <p className="text-sm text-gray-300">
          BidBlender runs on ads on the free tier, so we can serve you while you evaluate. Upgrade to
          a paid plan and ads disappear.
        </p>
        <div className="mt-6 flex gap-3">
          <Button variant="primary" onClick={handleContinue}>
            Continue to sign up
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </dialog>
    </>
  );
}
