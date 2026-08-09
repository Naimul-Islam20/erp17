import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata = {
  title: "Privacy Policy | ERP17",
  description:
    "ERP17 privacy policy covering data collection, usage, security, and user rights.",
};

const Em = ({ children }) => <em className="italic">{children}</em>;
const Strong = ({ children }) => (
  <strong className="font-semibold text-[#212529]">{children}</strong>
);

const sections = [
  {
    id: "how-we-protect",
    title: "How we protect your privacy",
    content: (
      <>
        <p>
          Our business has changed to make privacy a bigger priority than it
          used to be. We understand that privacy is an important issue for
          visitors to the ERP17 websites, applications and domains
          (&quot;Websites&quot;) and the ERP17 Cloud Platform (&quot;Cloud
          Platform&quot;).
        </p>
        <p>
          Please take a moment to familiarize yourself with our privacy
          practices and{" "}
          <a
            href="mailto:support@erp17.com"
            className="text-[#714B67] underline underline-offset-2"
          >
            let us know
          </a>{" "}
          if you have any questions.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <p>
          <Strong>Account &amp; Contact Data:</Strong> We collect personal
          information like your{" "}
          <Em>
            name, company name, email address, phone number, postal address
          </Em>
          , and similar details whenever you request a quote, create an ERP17
          account, subscribe to a newsletter, apply for a role, fill a form, or
          contact support.
        </p>
        <p>
          <Strong>Job Application Data:</Strong> When you apply for a job
          through our careers process, we collect data necessary to process your
          application:{" "}
          <Em>
            name, email, phone, resume, and other information you choose to
            share
          </Em>
          . This information is used only for recruitment and related
          communication.
        </p>
        <p>
          <Strong>Browser Data:</Strong> We collect information that web
          browsers and servers typically make available, such as{" "}
          <Em>
            browser type, language preference, referring site, and the date and
            time of each visit
          </Em>
          . We also collect visitors&apos;{" "}
          <Em>Internet Protocol (IP) addresses</Em>. See also our cookie and
          third-party sections below.
        </p>
        <p>
          <Strong>Customer Database:</Strong> This data belongs to you and stays
          under your control. Content stored as part of your ERP17 subscription
          is processed by ERP17{" "}
          <span className="font-semibold underline underline-offset-2">
            on your behalf
          </span>
          .{" "}
          <span className="font-semibold underline underline-offset-2">
            You always retain ownership and full control of this data
          </span>
          .
        </p>
        <p>
          We <Strong>will not</Strong> ask you to provide information that is
          not necessary. We <Strong>will never</Strong> collect information from
          your database for advertising purposes.
        </p>
        <p className="underline decoration-[#adb5bd] underline-offset-4">
          We never record or store credit card information on our own systems.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use this information",
    content: (
      <>
        <p>
          We use the information we collect to operate, maintain, and improve
          ERP17 products and websites, to provide customer support, to send
          service and product updates, and to keep accounts secure.
        </p>
        <p>
          We do not sell your personal or organizational data to third-party
          advertisers.
        </p>
      </>
    ),
  },
  {
    id: "accessing-data",
    title: "Accessing Your Data",
    content: (
      <p>
        Authorized customers may request access, correction, export, or deletion
        of eligible personal data. To process such requests, contact our support
        team from your registered business account or email{" "}
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
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        ERP17 applies encryption in transit and at rest, role-based access
        controls (RBAC), regular backups, and monitoring procedures to protect
        data from unauthorized access, alteration, or loss.
      </p>
    ),
  },
  {
    id: "third-parties",
    title: "Third Party Service Providers / Subprocessors",
    content: (
      <p>
        We share limited data only with trusted infrastructure or integration
        partners necessary to operate ERP17 services (for example hosting,
        communication, payment, or API integrations). These partners are
        contractually required to maintain confidentiality and security
        standards.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <p>
        Data is retained based on business and legal requirements, and can be
        archived or deleted upon verified customer request where applicable.
      </p>
    ),
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    content: (
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last
        update&quot; date at the top of this page will reflect the latest
        revision. Continued use of ERP17 after changes means you accept the
        updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contacting Us",
    content: (
      <p>
        For privacy concerns or data protection requests, contact us at{" "}
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

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="ERP17 Privacy Policy"
      effectiveDate="April 26, 2026"
      sections={sections}
      relatedHref="/terms-condition"
      relatedLabel="Terms and Conditions"
    />
  );
}
