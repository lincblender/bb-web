interface AdSupportedNoticeProps {
  /** Optional className for the wrapper */
  className?: string;
}

/**
 * Explains that the free tier is ad-supported so users can evaluate without paying.
 * Paid plans remove ads entirely.
 */
export function AdSupportedNotice({ className }: AdSupportedNoticeProps) {
  return (
    <p className={`text-sm bb-text-muted ${className ?? ""}`}>
      Free tier is supported by ads, so we can serve you while you evaluate. 
    </p>
  );
}
