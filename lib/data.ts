export interface BilingualText {
  en: string
  pt: string
}

export interface Experience {
  id: string
  role: BilingualText
  company: string
  companyUrl?: string
  period: BilingualText
  location: BilingualText
  type: BilingualText
  current: boolean
  stack: string[]
  bullets: BilingualText[]
}

export interface Skill {
  name: string
  icon?: string
}

export interface SkillCategory {
  id: string
  skills: Skill[]
}

export interface Project {
  id: string
  title: string
  type: BilingualText
  description: BilingualText
  stack: string[]
  demonstrates: BilingualText[]
  status: 'live' | 'in-progress' | 'planned' | 'professional'
  githubUrl?: string
  liveUrl?: string
  detailsUrl?: string
}

export interface Education {
  id: string
  degree: BilingualText
  institution: string
  period: string
  status: 'completed' | 'in-progress'
  expectedYear?: string
}

export interface Certification {
  id: string
  title: BilingualText
  provider: BilingualText
  status: 'completed' | 'in-progress' | 'planned'
  description: BilingualText
}

export const experiences: Experience[] = [
  {
    id: 'osf-digital',
    role: {
      en: 'Java Developer | SRE | DevOps',
      pt: 'Desenvolvedor Java | SRE | DevOps',
    },
    company: 'OSF Digital',
    companyUrl: 'https://www.osf.digital',
    period: {
      en: 'October 2024 – Present',
      pt: 'Outubro de 2024 – Presente',
    },
    location: { en: 'Brazil, Remote', pt: 'Brasil, Remoto' },
    type: { en: 'Full-time', pt: 'CLT' },
    current: true,
    stack: [
      'Java', 'Spring Boot', 'REST APIs', 'Microservices',
      'AWS', 'EKS', 'EC2', 'Load Balancers', 'CI/CD',
      'Observability', 'Docker', 'Kubernetes',
    ],
    bullets: [
      {
        en: 'Develop and maintain REST APIs and microservices using Java and Spring Boot, applying clean code and good backend development practices.',
        pt: 'Desenvolvo e mantenho APIs REST e microsserviços com Java e Spring Boot, aplicando boas práticas de código limpo e desenvolvimento backend.',
      },
      {
        en: 'Monitor production applications and AWS infrastructure across cloud-based environments, ensuring service health and availability.',
        pt: 'Monitoro aplicações em produção e infraestrutura AWS em ambientes cloud, garantindo a saúde e disponibilidade dos serviços.',
      },
      {
        en: 'Investigate production incidents using logs, metrics, and observability tools, performing root cause analysis and documenting findings.',
        pt: 'Investigo incidentes em produção usando logs, métricas e ferramentas de observabilidade, realizando análise de causa raiz e documentando os resultados.',
      },
      {
        en: 'Document root causes, remediation actions, and post-incident improvements to prevent recurrence and build operational knowledge.',
        pt: 'Documento causas raiz, ações de remediação e melhorias pós-incidente para prevenir recorrências e construir conhecimento operacional.',
      },
      {
        en: 'Collaborate with development and DevOps teams to improve alerts, dashboards, deployments, and operational visibility across systems.',
        pt: 'Colaboro com times de desenvolvimento e DevOps para melhorar alertas, dashboards, deploys e visibilidade operacional dos sistemas.',
      },
      {
        en: 'Support AWS workloads and infrastructure components including EKS clusters, EC2, Load Balancers, and CI/CD pipelines.',
        pt: 'Suporte a cargas AWS e componentes de infraestrutura incluindo clusters EKS, EC2, Load Balancers e pipelines CI/CD.',
      },
    ],
  },
  {
    id: 'gk-digital',
    role: {
      en: 'Founder & Full Stack Developer',
      pt: 'Fundador e Desenvolvedor Full Stack',
    },
    company: 'GK Digital Solutions',
    period: {
      en: '2024 – Present',
      pt: '2024 – Presente',
    },
    location: { en: 'Uberlândia, MG, Brazil – Remote / Freelance', pt: 'Uberlândia, MG, Brasil – Remoto / Freelance' },
    type: { en: 'Freelance', pt: 'Freelance' },
    current: true,
    stack: [
      'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
      'Java', 'Spring Boot', 'SQL', 'PostgreSQL',
      'Google Analytics', 'Meta Pixel', 'WhatsApp API',
    ],
    bullets: [
      {
        en: 'Build websites, landing pages, e-commerce projects, and small web systems for small businesses, schools, clinics, and service providers.',
        pt: 'Construo sites, landing pages, projetos de e-commerce e pequenos sistemas web para pequenas empresas, escolas, clínicas e prestadores de serviços.',
      },
      {
        en: 'Create responsive, business-oriented interfaces using React, TypeScript, HTML, CSS, and modern web development practices.',
        pt: 'Crio interfaces responsivas e orientadas ao negócio com React, TypeScript, HTML, CSS e práticas modernas de desenvolvimento web.',
      },
      {
        en: 'Lead end-to-end delivery: requirements gathering, planning, interface structure, development, publishing, support, and maintenance.',
        pt: 'Lidero a entrega de ponta a ponta: levantamento de requisitos, planejamento, estrutura de interface, desenvolvimento, publicação, suporte e manutenção.',
      },
      {
        en: 'Integrate websites with WhatsApp, forms, Google Analytics, Meta Pixel, payment systems, domains, and hosting services.',
        pt: 'Integro sites com WhatsApp, formulários, Google Analytics, Meta Pixel, sistemas de pagamento, domínios e serviços de hospedagem.',
      },
      {
        en: 'Develop custom backend features using Java, Spring Boot, SQL databases, and external API integrations when required.',
        pt: 'Desenvolvo funcionalidades backend personalizadas com Java, Spring Boot, bancos SQL e integrações com APIs externas quando necessário.',
      },
    ],
  },
  {
    id: 'sankhya',
    role: {
      en: 'Support Analyst',
      pt: 'Analista de Suporte',
    },
    company: 'Sankhya Gestão de Negócios',
    period: {
      en: 'January 2023 – October 2024',
      pt: 'Janeiro de 2023 – Outubro de 2024',
    },
    location: { en: 'Uberlândia, MG, Brazil – On-site', pt: 'Uberlândia, MG, Brasil – Presencial' },
    type: { en: 'Full-time', pt: 'CLT' },
    current: false,
    stack: ['SQL', 'Oracle', 'ERP Systems', 'DBMS', 'Documentation', 'Technical Support'],
    bullets: [
      {
        en: 'Provided technical and business support to clients and implementation consultants across ERP system environments.',
        pt: 'Ofereci suporte técnico e de negócios a clientes e consultores de implantação em ambientes de sistemas ERP.',
      },
      {
        en: 'Handled simple, critical, and complex service requests, analyzing system behavior and coordinating resolutions.',
        pt: 'Tratei chamados simples, críticos e complexos, analisando o comportamento do sistema e coordenando resoluções.',
      },
      {
        en: 'Queried and manipulated data in DBMS environments — SQL and Oracle — to analyze issues and support ticket resolution.',
        pt: 'Consultei e manipulei dados em ambientes SGBD — SQL e Oracle — para analisar problemas e suportar a resolução de chamados.',
      },
      {
        en: 'Created and improved knowledge base documentation with test scenarios, error simulations, and step-by-step troubleshooting guides.',
        pt: 'Criei e melhorei documentação da base de conhecimento com cenários de teste, simulações de erros e guias de resolução passo a passo.',
      },
      {
        en: 'Collaborated with teammates to understand client processes, analyze system behavior, and improve overall support quality.',
        pt: 'Colaborei com colegas para entender processos dos clientes, analisar o comportamento do sistema e melhorar a qualidade do suporte.',
      },
    ],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    skills: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'REST APIs' },
      { name: 'Microservices' },
      { name: 'Maven' },
      { name: 'JPA / Hibernate' },
      { name: 'JUnit' },
      { name: 'SOLID' },
      { name: 'Clean Code' },
      { name: 'API Design' },
      { name: 'Production Support' },
    ],
  },
  {
    id: 'sre',
    skills: [
      { name: 'Observability' },
      { name: 'Incident Response' },
      { name: 'Root Cause Analysis' },
      { name: 'Postmortems' },
      { name: 'Log Analysis' },
      { name: 'Metrics & Alerts' },
      { name: 'Dashboards' },
      { name: 'CI/CD' },
      { name: 'Reliability Engineering' },
      { name: 'Production Monitoring' },
      { name: 'Troubleshooting' },
    ],
  },
  {
    id: 'cloud',
    skills: [
      { name: 'AWS' },
      { name: 'Amazon EKS' },
      { name: 'Amazon EC2' },
      { name: 'Load Balancers' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Terraform' },
      { name: 'Cloud Infrastructure' },
    ],
  },
  {
    id: 'databases',
    skills: [
      { name: 'SQL' },
      { name: 'Oracle' },
      { name: 'PostgreSQL' },
      { name: 'JDBC' },
      { name: 'Query Analysis' },
      { name: 'Data Manipulation' },
      { name: 'DB Troubleshooting' },
    ],
  },
  {
    id: 'frontend',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Next.js' },
      { name: 'Responsive Design' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Jira' },
      { name: 'Postman' },
      { name: 'IntelliJ IDEA' },
      { name: 'VS Code' },
      { name: 'Google Analytics' },
      { name: 'Meta Pixel' },
      { name: 'Linux' },
    ],
  },
  {
    id: 'languages',
    skills: [
      { name: 'Portuguese (Native)' },
      { name: 'English (Upper-Intermediate)' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'gkfitsystem',
    title: 'GKFitSystem',
    type: { en: 'SaaS / Management Platform', pt: 'SaaS / Plataforma de Gestão' },
    description: {
      en: 'A multi-tenant management system for swimming schools and fitness businesses, designed to handle students, guardians, classes, attendance, payments, evaluations, and administrative operations.',
      pt: 'Sistema de gestão multi-tenant para escolas de natação e academias, projetado para gerenciar alunos, responsáveis, turmas, presenças, pagamentos, avaliações e operações administrativas.',
    },
    stack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'REST API'],
    demonstrates: [
      { en: 'SaaS architecture and multi-tenancy', pt: 'Arquitetura SaaS e multi-tenancy' },
      { en: 'Complex business rules and domain modeling', pt: 'Regras de negócio complexas e modelagem de domínio' },
      { en: 'Full stack delivery with backend APIs', pt: 'Entrega full stack com APIs backend' },
      { en: 'Responsive dashboard design', pt: 'Design de dashboard responsivo' },
    ],
    status: 'in-progress',
    githubUrl: 'https://github.com/zKaminise',
  },
  {
    id: 'business-websites',
    title: 'Professional Websites & Landing Pages',
    type: { en: 'Freelance / Business Web', pt: 'Freelance / Web para Negócios' },
    description: {
      en: 'Responsive websites and landing pages built for small businesses, schools, clinics, and service providers, focused on online presence, lead generation, and business credibility.',
      pt: 'Sites e landing pages responsivos construídos para pequenas empresas, escolas, clínicas e prestadores de serviços, com foco em presença online, geração de leads e credibilidade.',
    },
    stack: ['React', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Google Analytics', 'Meta Pixel', 'WhatsApp API'],
    demonstrates: [
      { en: 'UI/UX and responsive design', pt: 'UI/UX e design responsivo' },
      { en: 'Performance and SEO basics', pt: 'Performance e SEO básico' },
      { en: 'Analytics and tracking integrations', pt: 'Integrações de analytics e rastreamento' },
      { en: 'Client communication and delivery ownership', pt: 'Comunicação com clientes e ownership da entrega' },
    ],
    status: 'professional',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Projects',
    type: { en: 'Full Stack / Integrations', pt: 'Full Stack / Integrações' },
    description: {
      en: 'Online store projects with product pages, checkout flows, payment integration planning, tracking tools, and business-oriented structure built for real client needs.',
      pt: 'Projetos de lojas online com páginas de produto, fluxos de checkout, planejamento de integração de pagamentos, ferramentas de rastreamento e estrutura orientada ao negócio.',
    },
    stack: ['React', 'TypeScript', 'JavaScript', 'CSS3', 'Google Tag Manager', 'Meta Pixel', 'Payment APIs'],
    demonstrates: [
      { en: 'Conversion-focused UI structure', pt: 'Estrutura de UI focada em conversão' },
      { en: 'Checkout flows and UX thinking', pt: 'Fluxos de checkout e raciocínio UX' },
      { en: 'Third-party integrations', pt: 'Integrações com sistemas de terceiros' },
      { en: 'Business requirements translation to code', pt: 'Tradução de requisitos de negócio em código' },
    ],
    status: 'professional',
  },
  {
    id: 'java-apis',
    title: 'Java Backend APIs',
    type: { en: 'Backend / Practice & Professional', pt: 'Backend / Prática e Profissional' },
    description: {
      en: 'REST API projects using Java, Spring Boot, SQL databases, and clean backend architecture, focused on CRUD operations, business rules, validations, and database integration.',
      pt: 'Projetos de API REST com Java, Spring Boot, bancos SQL e arquitetura backend limpa, focados em operações CRUD, regras de negócio, validações e integração com banco de dados.',
    },
    stack: ['Java', 'Spring Boot', 'Maven', 'JPA / Hibernate', 'PostgreSQL', 'SQL', 'Postman', 'Docker'],
    demonstrates: [
      { en: 'RESTful API design and implementation', pt: 'Design e implementação de APIs RESTful' },
      { en: 'Clean backend architecture', pt: 'Arquitetura backend limpa' },
      { en: 'Database integration with JPA/Hibernate', pt: 'Integração com banco de dados via JPA/Hibernate' },
      { en: 'Code quality and maintainability', pt: 'Qualidade e manutenibilidade do código' },
    ],
    status: 'in-progress',
    githubUrl: 'https://github.com/zKaminise',
  },
  {
    id: 'sre-observability',
    title: 'SRE & Observability Practice',
    type: { en: 'SRE / DevOps / Professional', pt: 'SRE / DevOps / Profissional' },
    description: {
      en: 'Professional experience and documented case studies involving monitoring, log analysis, metrics, incident response, root cause analysis, and operational visibility improvements in production environments.',
      pt: 'Experiência profissional e estudos de caso documentados envolvendo monitoramento, análise de logs, métricas, resposta a incidentes, análise de causa raiz e melhorias na visibilidade operacional.',
    },
    stack: ['Observability Tools', 'AWS', 'Logs', 'Metrics', 'Dashboards', 'CI/CD', 'Incident Response'],
    demonstrates: [
      { en: 'Production monitoring and alerting', pt: 'Monitoramento em produção e alertas' },
      { en: 'Incident investigation and RCA', pt: 'Investigação de incidentes e RCA' },
      { en: 'Operational documentation', pt: 'Documentação operacional' },
      { en: 'Cross-team collaboration in reliability', pt: 'Colaboração entre times em confiabilidade' },
    ],
    status: 'professional',
  },
]

export const educationItems: Education[] = [
  {
    id: 'ufu',
    degree: {
      en: 'Information Systems',
      pt: 'Sistemas de Informação',
    },
    institution: 'Federal University of Uberlândia – UFU',
    period: '2023 – 2027',
    status: 'in-progress',
    expectedYear: '2027',
  },
  {
    id: 'pitagoras',
    degree: {
      en: 'Systems Analysis and Development',
      pt: 'Análise e Desenvolvimento de Sistemas',
    },
    institution: 'Pitagoras University – Uberlândia',
    period: '2022 – 2024',
    status: 'completed',
  },
]

export const certifications: Certification[] = [
  {
    id: 'aws-dev',
    title: { en: 'AWS Certified Developer – Associate', pt: 'AWS Certified Developer – Associate' },
    provider: { en: 'Amazon Web Services', pt: 'Amazon Web Services' },
    status: 'in-progress',
    description: {
      en: 'Studying core AWS services, cloud architecture, deployment, security, and developer tools for the associate-level certification.',
      pt: 'Estudando serviços principais da AWS, arquitetura cloud, deploy, segurança e ferramentas de desenvolvimento para a certificação associate.',
    },
  },
  {
    id: 'java-advanced',
    title: { en: 'Java & Spring Boot – Advanced Studies', pt: 'Java & Spring Boot – Estudos Avançados' },
    provider: { en: 'Self-directed / Udemy / Alura', pt: 'Autodidata / Udemy / Alura' },
    status: 'in-progress',
    description: {
      en: 'Deep diving into advanced Java topics: design patterns, concurrency, performance optimization, and Spring ecosystem.',
      pt: 'Aprofundamento em Java avançado: design patterns, concorrência, otimização de performance e ecossistema Spring.',
    },
  },
  {
    id: 'sre-practices',
    title: { en: 'SRE and DevOps Practices', pt: 'Práticas SRE e DevOps' },
    provider: { en: 'Google SRE Books / Professional Practice', pt: 'Google SRE Books / Prática Profissional' },
    status: 'in-progress',
    description: {
      en: 'Studying SRE principles, error budgets, SLOs/SLAs/SLIs, and DevOps practices through professional experience and reference materials.',
      pt: 'Estudando princípios SRE, error budgets, SLOs/SLAs/SLIs e práticas DevOps por meio de experiência profissional e materiais de referência.',
    },
  },
  {
    id: 'kubernetes',
    title: { en: 'Kubernetes & Terraform Fundamentals', pt: 'Kubernetes & Terraform Fundamentos' },
    provider: { en: 'CNCF / HashiCorp / Udemy', pt: 'CNCF / HashiCorp / Udemy' },
    status: 'planned',
    description: {
      en: 'Planning to deepen knowledge of Kubernetes administration and Terraform infrastructure-as-code for cloud environments.',
      pt: 'Planejando aprofundar conhecimentos em administração de Kubernetes e infraestrutura como código com Terraform.',
    },
  },
  {
    id: 'english-professional',
    title: { en: 'English for Professional Communication', pt: 'Inglês para Comunicação Profissional' },
    provider: { en: 'Ongoing / Daily Practice', pt: 'Contínuo / Prática Diária' },
    status: 'in-progress',
    description: {
      en: 'Actively improving professional speaking, writing, and comprehension fluency for international work environments.',
      pt: 'Aprimorando ativamente a fluência em fala, escrita e compreensão profissional para ambientes de trabalho internacionais.',
    },
  },
]
