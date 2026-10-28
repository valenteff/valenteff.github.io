export interface Project {
  slug: string;
  number: string;
  tag: string;
  title: string;
  teaser: string;
  evidenceTag: string;
}

export const projects: Project[] = [
  {
    slug: 'ai-agent-operations',
    number: '01',
    tag: 'AI operations · Private / operational',
    title: 'Making multi-agent work accountable',
    teaser:
      'A governed Paperclip + Hermes environment with scoped agent responsibilities, independent review, documented decisions, and approval gates for consequential actions.',
    evidenceTag: '21 roles / 3 operations',
  },
  {
    slug: 'research-automation',
    number: '02',
    tag: 'Workflow automation · Private / operational',
    title: 'Turning recurring research into a verifiable workflow',
    teaser:
      'Scheduled discovery, profile-based filters, source checking, structured history, and a weekly Discord report—maintained over 12 consecutive cycles.',
    evidenceTag: '12 cycles / 127 history records',
  },
  {
    slug: 'research-validation',
    number: '03',
    tag: 'Research QA · Audited / no advance',
    title: 'Designing research to reject weak conclusions',
    teaser:
      'A preregistered, independently reviewed validation workflow that favored an auditable "do not advance" decision over an attractive-looking result.',
    evidenceTag: 'Inconclusive / no advance',
  },
  {
    slug: 'engineering-operations',
    number: '04',
    tag: 'Engineering leadership · Corporate experience',
    title: 'Coordinating high-stakes operational work',
    teaser:
      'Leading a 48-person maintenance operation and improving engineering follow-up practices through a SharePoint-based tracking workflow.',
    evidenceTag: '48-person team / ~400 machines',
  },
];
