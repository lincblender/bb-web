"use client";

import Image from "next/image";
import { Code, Webhook, FileSearch, GraduationCap, Plug } from "lucide-react";
import { cn } from "@/lib/utils";

/** HubSpot logo from Simple Icons (#FF7A59) */
function HubSpotIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/icons/hubspot.svg"
      alt="HubSpot"
      width={48}
      height={48}
      className={cn("size-full object-contain", className)}
    />
  );
}

/** MCP (Model Context Protocol) logo from Simple Icons */
function MCPIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/icons/modelcontextprotocol.svg"
      alt="MCP"
      width={48}
      height={48}
      className={cn("size-full object-contain", className)}
    />
  );
}

/** Zapier logo from SVGRepo */
function ZapierIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/icons/zapier.svg"
      alt="Zapier"
      width={48}
      height={48}
      className={cn("size-full object-contain", className)}
    />
  );
}

/** NotebookLM logo from Simple Icons */
function NotebookLMIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/icons/notebooklm.svg"
      alt="NotebookLM"
      width={48}
      height={48}
      className={cn("size-full object-contain", className)}
    />
  );
}

/** LinkedIn logo - filled, brand blue #0A66C2, from SVGRepo */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/icons/linkedin.svg"
      alt="LinkedIn"
      width={48}
      height={48}
      className={cn("size-full object-contain", className)}
    />
  );
}

/** Salesforce logo from SVGRepo */
function SalesforceIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/icons/salesforce.svg"
      alt="Salesforce"
      width={48}
      height={48}
      className={cn("size-full object-contain", className)}
    />
  );
}

export type IntegrationIconType =
  | "hubspot"
  | "linkedin"
  | "salesforce"
  | "workday"
  | "cornerstone"
  | "tenderlink"
  | "austender"
  | "api"
  | "mcp"
  | "webhook"
  | "zapier"
  | "notebooklm";

const ICON_MAP: Record<
  IntegrationIconType,
  React.ComponentType<{ className?: string }>
> = {
  hubspot: HubSpotIcon,
  linkedin: LinkedInIcon,
  salesforce: SalesforceIcon,
  workday: GraduationCap,
  cornerstone: GraduationCap,
  tenderlink: FileSearch,
  austender: FileSearch,
  api: Code,
  mcp: MCPIcon,
  webhook: Webhook,
  zapier: ZapierIcon,
  notebooklm: NotebookLMIcon,
};

interface IntegrationIconProps {
  type: IntegrationIconType;
  className?: string;
}

export function IntegrationIcon({ type, className }: IntegrationIconProps) {
  const Icon = ICON_MAP[type] ?? Plug;
  return <Icon className={className} />;
}
