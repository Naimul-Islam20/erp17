import { slugifyTitle } from "@/lib/newsletters-core";

const newsletters = [
  {
    id: 1,
    title:
      "[Completed] .SG DOMAINS UPSTREAM PLATFORM SCHEDULED MAINTENANCE – May 23rd, 2026",
    status: "Completed",
    categories: ["General"],
    month: "May",
    day: 16,
    year: 2026,
    time: "12:00 pm",
    timezone: "America/New_York",
    author: "Ranjini Ramachandran",
    excerpt:
      "Dear Customers, This is to let you know that .SG domain Registry will be performing a scheduled maintenance on May 23rd, 2026. Domain availability checks, registrations, renewals, updates, and WHOIS availability checks may not be possible for the following TLDs: .COM.SG and .SG. We recommend not to trigger these service requests as they may result in …",
    content: `Dear Customers,

This is to let you know that .SG domain Registry will be performing a scheduled maintenance on May 23rd, 2026.

Domain availability checks, registrations, renewals, updates, and WHOIS availability checks may not be possible for the following TLDs: .COM.SG and .SG.

We recommend not to trigger these service requests as they may result in failures until maintenance is complete.`,
  },
  {
    id: 2,
    title: "(Planned) Upstream Platform Scheduled Maintenance on May 27th, 2026",
    status: "Planned",
    categories: ["Domains"],
    month: "May",
    day: 23,
    year: 2026,
    time: "04:06 pm",
    timezone: "America/New_York",
    author: "Josejith Lawrance",
    excerpt:
      "Dear Customers, This is to let you know that on May 27th, 2026, we will have a scheduled service maintenance on the upstream registration platform. Domain availability checks, registrations, renewals, updates, and WHOIS availability checks may not be possible for the following TLDs: .CH, .ES, .COM.ES, .NOM.ES, .ORG.ES, .FR, .LI, .PE, .SG, .COM.SG, .COM.PE, .NET.PE, ORG.PE, .COM.AU, .NET.AU, …",
    content: `Dear Customers,

This is to let you know that on May 27th, 2026, we will have a scheduled service maintenance on the upstream registration platform.

Domain availability checks, registrations, renewals, updates, and WHOIS availability checks may not be possible for the following TLDs: .CH, .ES, .COM.ES, .NOM.ES, .ORG.ES, .FR, .LI, .PE, .SG, .COM.SG, .COM.PE, .NET.PE, ORG.PE, .COM.AU, .NET.AU, and related extensions.

Please plan domain operations outside the maintenance window where possible.`,
  },
  {
    id: 3,
    title:
      "[PLANNED] SCHEDULED SOFTWARE MAINTENANCE ON NAMECHEAP SERVICES | JUNE 3, 2026",
    status: "Planned",
    categories: [
      "Domains",
      "EasyWP",
      "General",
      "Hosting",
      "Private email",
      "Shared Servers",
      "VPS",
    ],
    month: "May",
    day: 22,
    year: 2026,
    time: "07:30 am",
    timezone: "America/New_York",
    author: "Oleksandr H",
    excerpt:
      "Dear Customers, Please be informed that the software maintenance on Shared and VPS servers will take place on Wednesday, June 3, 2026, at 3:00 AM EDT | 07:00 UTC. This maintenance will ensure long-term support, stability, security updates, and compatibility with our infrastructure. Maintenance window: 8 hours. Affected services: Shared, VPS, Managed WordPress, Private Email, URL Forwarding services may experience …",
    content: `Dear Customers,

Please be informed that the software maintenance on Shared and VPS servers will take place on Wednesday, June 3, 2026, at 3:00 AM EDT | 07:00 UTC.

This maintenance will ensure long-term support, stability, security updates, and compatibility with our infrastructure.

Maintenance window: 8 hours

Affected services: Shared, VPS, Managed WordPress, Private Email, and URL Forwarding services may experience intermittent impact during the window.`,
  },
  {
    id: 4,
    title: "[Planned] Sectigo CA Scheduled Maintenance – May 30-31, 2026",
    status: "Planned",
    categories: ["SSL"],
    month: "May",
    day: 21,
    year: 2026,
    time: "06:04 pm",
    timezone: "America/New_York",
    author: "Liliia Vovk",
    excerpt:
      "Dear customers, This announcement is to inform you about a forthcoming scheduled maintenance, which will take place at Sectigo Certificate Authority on May 30-31, 2026. The timeframe for maintenance is as follows: May 30, 23:00 – May 31, 01:00 UTC. May 30, 07:00 PM – 9:00 PM EDT. The maintenance will not affect existing, new, pending, …",
    content: `Dear customers,

This announcement is to inform you about a forthcoming scheduled maintenance at Sectigo Certificate Authority on May 30-31, 2026.

The timeframe for maintenance is as follows:
- May 30, 23:00 – May 31, 01:00 UTC
- May 30, 07:00 PM – 9:00 PM EDT

The maintenance will not affect existing, new, or pending certificate workflows beyond brief validation delays.`,
  },
  {
    id: 5,
    title:
      "[Completed] NOMINET REGISTRY EMERGENCY MAINTENANCE (.UK systems) – May 21, 2026",
    status: "Completed",
    categories: ["Domains"],
    month: "May",
    day: 19,
    year: 2026,
    time: "04:52 pm",
    timezone: "America/New_York",
    author: "Gokula Vikraman",
    excerpt:
      "Dear Customers, This is to let you know that Nominet, the registry of .UK, .ORG.UK, .CO.UK, .ME.UK domains will be processing scheduled maintenance on May 21, 2026. The time frame for the maintenance is as follows: May 21, 08:00 AM – 10:00 AM EDT | 12:00 – 14:00 UTC. Domain availability checks, registrations, renewals, and updates may not be possible during …",
    content: `Dear Customers,

This is to let you know that Nominet, the registry of .UK, .ORG.UK, .CO.UK, and .ME.UK domains will be processing scheduled maintenance on May 21, 2026.

The time frame for the maintenance is as follows:
May 21, 08:00 AM – 10:00 AM EDT | 12:00 – 14:00 UTC

Domain availability checks, registrations, renewals, and updates may not be possible during the maintenance period.`,
  },
  {
    id: 6,
    title: "[STARTED] SCHEDULED HARDWARE MAINTENANCE ON VPS HOSTING | MAY 20, 2026",
    status: "Started",
    categories: ["Hosting", "VPS"],
    month: "May",
    day: 20,
    year: 2026,
    time: "09:15 am",
    timezone: "America/New_York",
    author: "Mykyta Artiunian",
    excerpt:
      "Dear Customers, Please be informed that the maintenance will take place on Wednesday, May 20, at 1:00 PM EDT | 17:00 UTC. The main purpose of the maintenance is to ensure that the server continues to deliver optimum performance. Maintenance window: 4 days. Expected network downtime: up to 15 min per VM. Affected services: kvmnode164, kvmnode110, kvmnode91. Impact: During the downtime period, VPS hosting …",
    content: `Dear Customers,

Please be informed that the maintenance will take place on Wednesday, May 20, at 1:00 PM EDT | 17:00 UTC.

The main purpose of the maintenance is to ensure that the server continues to deliver optimum performance.

Maintenance window: 4 days
Expected network downtime: up to 15 min per VM
Affected services: kvmnode164, kvmnode110, kvmnode91

Impact: During downtime periods, VPS hosting on affected nodes may experience brief connectivity interruptions.`,
  },
  {
    id: 7,
    title: "[STARTED] SCHEDULED HARDWARE MAINTENANCE ON VPS HOSTING | MAY 20, 2026",
    status: "Started",
    categories: ["Hosting", "VPS"],
    month: "May",
    day: 20,
    year: 2026,
    time: "09:13 am",
    timezone: "America/New_York",
    author: "Mykyta Artiunian",
    excerpt:
      "Dear Customers, Please be informed that the maintenance will take place on Wednesday, May 20, at 11:00 AM EDT | 15:00 UTC. The main purpose of the maintenance is to ensure that the server continues to deliver optimum performance. Maintenance window: 4 days. Expected network downtime: up to 15 min per VM. Affected services: kvmnode220, kvmnode165, kvmnode102, kvmnode67, kvmnode29. Impact: During the downtime period, …",
    content: `Dear Customers,

Please be informed that the maintenance will take place on Wednesday, May 20, at 11:00 AM EDT | 15:00 UTC.

The main purpose of the maintenance is to ensure that the server continues to deliver optimum performance.

Maintenance window: 4 days
Expected network downtime: up to 15 min per VM
Affected services: kvmnode220, kvmnode165, kvmnode102, kvmnode67, kvmnode29

Impact: During downtime periods, VPS hosting on affected nodes may experience brief connectivity interruptions.`,
    slugSuffix: "kvm-batch-2",
  },
  {
    id: 8,
    title: "[Planned] The Scheduled Private Email Maintenance | May 30, 2026",
    status: "Planned",
    categories: ["General"],
    month: "May",
    day: 20,
    year: 2026,
    time: "10:02 am",
    timezone: "America/New_York",
    author: "Olga M.",
    excerpt:
      "Dear Customers, This is to inform you about a forthcoming software upgrade on our Private Email server. The upgrade will take place on May 30, 2026, at 3:00 AM EDT | 07:00 UTC. This upgrade is necessary in order to increase the service performance of our servers. Maintenance window: 2 hours 15 minutes. Expected downtime: …",
    content: `Dear Customers,

This is to inform you about a forthcoming software upgrade on our Private Email server.

The upgrade will take place on May 30, 2026, at 3:00 AM EDT | 07:00 UTC.

This upgrade is necessary in order to increase the service performance of our servers.

Maintenance window: 2 hours 15 minutes
Expected downtime: brief interruptions to mailbox access and delivery.`,
  },
  {
    id: 9,
    title: "[RESOLVED] Temporary unavailability of Dedicated Servers",
    status: "Resolved",
    categories: ["Dedicated Servers", "Hosting"],
    month: "May",
    day: 17,
    year: 2026,
    time: "10:07 am",
    timezone: "America/New_York",
    author: "Ernest S.",
    excerpt:
      "Dear clients, Our infrastructure is currently mitigating a DDoS attack. Thus, certain network segments have been temporarily withdrawn from announcements, causing temporary server downtime. Our network engineers are working to restore full connectivity as soon as possible. This post will be updated immediately when we have any new details to share. We apologize for any …",
    content: `Dear clients,

Our infrastructure is currently mitigating a DDoS attack. Thus, certain network segments have been temporarily withdrawn from announcements, causing temporary server downtime.

Our network engineers are working to restore full connectivity as soon as possible.

This post will be updated immediately when we have any new details to share. We apologize for any inconvenience caused.`,
  },
];

const monthNumber = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

export default newsletters.map((item) => ({
  ...item,
  slug: item.slugSuffix
    ? `${slugifyTitle(item.title)}-${item.slugSuffix}`
    : slugifyTitle(item.title),
  date: `${item.year}-${monthNumber[item.month] || "01"}-${String(item.day).padStart(2, "0")}`,
}));
