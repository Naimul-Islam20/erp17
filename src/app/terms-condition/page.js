import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Terms & Conditions | ERP17",
  description:
    "ERP17 terms and conditions for platform access, billing, responsibilities, and service usage.",
};

const Strong = ({ children }) => (
  <strong className="font-semibold text-[#212529]">{children}</strong>
);

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <p>
        By using ERP17 services, websites, and applications, you agree to comply
        with these Terms &amp; Conditions, related policies, and applicable
        laws. If you do not agree, you should not access or use the platform.
      </p>
    ),
  },
  {
    id: "account",
    title: "Account Responsibilities",
    content: (
      <p>
        Customers are responsible for maintaining account confidentiality,
        managing user permissions, and ensuring that their teams use ERP17
        lawfully. Any activity under your account is considered authorized by
        your organization.
      </p>
    ),
  },
  {
    id: "billing",
    title: "Subscription, Billing, and Renewal",
    content: (
      <>
        <p>
          ERP17 services may include one-time implementation charges and
          recurring subscription fees based on selected modules, users, and
          usage scope.
        </p>
        <p>
          Delayed payments may lead to service limitation or temporary
          suspension according to agreed commercial terms.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    title: "Service Availability and Changes",
    content: (
      <p>
        We continuously improve ERP17 and may update features, UI, integrations,
        or system behavior. Planned maintenance and emergency fixes may
        occasionally impact availability. We aim to provide prior notice for
        major changes when possible.
      </p>
    ),
  },
  {
    id: "data-ownership",
    title: "Data Ownership and Compliance",
    content: (
      <p>
        Business data uploaded by customers remains <Strong>customer-owned</Strong>.
        ERP17 processes data to deliver services and support. Customers remain
        responsible for ensuring the legality and accuracy of submitted data and
        for complying with sector-specific regulatory obligations.
      </p>
    ),
  },
  {
    id: "support",
    title: "Limitation and Support Scope",
    content: (
      <p>
        ERP17 is provided on a best-effort and professionally managed basis
        under active support plans. Dedicated support, bug fixes, and updates
        are included according to subscribed service scope and response
        commitments.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contacting Us",
    content: (
      <p>
        For contract, billing, or legal clarifications, contact{" "}
        <a
          href="mailto:support@erp17.com"
          className="text-[#714B67] underline underline-offset-2"
        >
          support@erp17.com
        </a>
        .
      </p>
    ),
  },
];

export default function TermsConditionPage() {
  return (
    <LegalPageLayout
      title="ERP17 Terms & Conditions"
      effectiveDate="April 26, 2026"
      sections={sections}
      relatedHref="/privacy-policy"
      relatedLabel="Privacy Policy"
    />
  );
}
