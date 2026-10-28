export interface Role {
  dates: string;
  title: string;
  org: string;
  note?: string;
  desc: string;
}

export const roles: Role[] = [
  {
    dates: '2021–present',
    title: 'Independent Technical Project Lead — AI Workflows & Trading Technology',
    org: 'Independent technical projects · Bogotá / remote',
    desc: 'Requirements, workflow design, AI-agent coordination, research tools, validation, documentation, and release checks.',
  },
  {
    dates: 'Current contract',
    title: 'Technical Market Analyst',
    org: 'Ongoing remote contract',
    desc: 'Recurring technical-market research and commentary for a paid subscriber audience; makes complex scenarios and risk considerations understandable.',
  },
  {
    dates: '2018–2021',
    title: 'Risk Engineer — Loss Prevention & Process Improvement',
    org: 'SBS Seguros Colombia · Bogotá',
    desc: 'Designed a SharePoint-based tracking workflow for engineering activities and corrective actions; coordinated clients and specialized providers.',
  },
  {
    dates: '2015–2017',
    title: 'Agricultural Maintenance Supervisor / Technical Support',
    org: 'Grupo São Martinho (Usina Santa Cruz) · Brazil',
    desc: 'Led 48 people serving approximately 400 agricultural vehicles and machines; maintenance priorities, suppliers, and operational KPIs.',
  },
  {
    dates: '2013',
    title: 'Automotive R&D Engineering Intern',
    org: 'Amtek Tekfor · Germany',
    desc: 'Designed specialized machinery for repeatable materials testing.',
  },
];

export const education = [
  {
    school: 'University of São Paulo (USP/ESALQ)',
    what: 'MBA in Project Management (University Extension Specialization, 400 hours)',
    dates: '2019',
  },
  {
    school: 'Federal University of São Carlos (UFSCar)',
    what: 'B.Eng., Mechanical Engineering',
    dates: '2014',
  },
  {
    school: 'Hochschule Offenburg, Germany',
    what: 'Academic Exchange, Mechanical Engineering (non-degree)',
    dates: '2012–2013',
  },
];

export const languages = [
  { lang: 'Portuguese', lvl: 'Native' },
  { lang: 'English', lvl: 'Fluent' },
  { lang: 'Spanish', lvl: 'Fluent' },
];
