// TRONIC i18n translations
window.TRANSLATIONS = {
  sk: {
    // Meta
    title: "TRONIC — Kubernetes & GitOps experti",
    description: "TRONIC: Experti na Kubernetes (RKE2), Argo CD, Argo Workflows a GitLab. Dizajn, implementácia, prevádzka a automatizácia pomocou GitOps.",
    ogDescription: "Experti na Kubernetes (RKE2), Argo CD, Argo Workflows a GitLab.",

    // Navigation
    navServices: "Služby",
    navTechnologies: "Technológie",
    navContact: "Kontakt",

    // Hero
    heroTitle: "Experti na Kubernetes a GitOps",
    heroText: "Navrhujeme, implementujeme a prevádzkujeme moderné IT platformy na Kubernetes (RKE2) s GitOps prístupom pomocou Argo CD, Argo Workflows a GitLab.",
    heroCta: "Kontaktujte nás",
    heroLearnMore: "Zistiť viac",

    // Services
    servicesTitle: "Čo pre vás urobíme",
    service1Title: "Návrh a architektúra",
    service1Text: "Spoločne navrhneme bezpečnú, škálovateľnú a nákladovo efektívnu platformu s dôrazom na jednoduchosť prevádzky a observabilitu.",
    service2Title: "Implementácia a automatizácia",
    service2Text: "Zavedíme GitOps, CI/CD a automatizované workflowy pre spoľahlivé a opakovateľné nasadzovanie aplikácií.",
    service3Title: "Prevádzka a bezpečnosť",
    service3Text: "Monitoring, alerting, hardening klastrov a zálohovanie — držíme SLA a minimalizujeme riziká.",

    // Technologies
    techTitle: "Technológie, v ktorých sme doma",

    // RKE2
    tech1Badge: "Kubernetes RKE2",
    tech1Title: "Enterprise Kubernetes, jednoducho a bezpečne",
    tech1Text: "RKE2 prináša stabilitu a bezpečnosť pre produkčné klastre. Pomôžeme s návrhom, inštaláciou, networkingom, HA kontrol-plane, storage (Rook/Ceph, Longhorn) aj upgrade procesom.",
    tech1Li1: "Hardening a CIS benchmarky",
    tech1Li2: "Observabilita: Prometheus/Grafana/Loki/Tempo",
    tech1Li3: "Bezpečnosť: RBAC, OPA/Gatekeeper, Secrets management",

    // Argo CD
    tech2Badge: "Argo CD",
    tech2Title: "GitOps pre konzistentné nasadzovanie",
    tech2Text: "Argo CD udržiava stav klastrov v súlade s repozitármi. Dizajn repozitárov, multi-tenant politiky, templating (Helm/Kustomize) a promotion stratégie sú naša denná rutina.",
    tech2Li1: "Multi-cluster a multi-env stratégie",
    tech2Li2: "Policy-as-code, approval gates",
    tech2Li3: "Rollbacks a progressive delivery",

    // Argo Workflows
    tech3Badge: "Argo Workflows",
    tech3Title: "Dátové a batch pipeline na Kubernetes",
    tech3Text: "Modelujeme spoľahlivé workflowy s paralelizáciou, závislosťami a opakovateľnými krokmami. Škálujeme s využitím spot/preemptible uzlov a cache.",
    tech3Li1: "Artifact/parameter passing, pod templates",
    tech3Li2: "Event-driven pipeline, sensors a triggers",
    tech3Li3: "Observabilita a retry/backoff stratégie",

    // GitLab
    tech4Badge: "GitLab",
    tech4Title: "End-to-end CI/CD a DevSecOps",
    tech4Text: "Od návrhu pipeline po bezpečnostné skeny a deployment do Kubernetes. Nastavíme runners, cache, artefakty aj release procesy.",
    tech4Li1: "Monorepo aj polyrepo stratégie",
    tech4Li2: "Security/Compliance integrácie",
    tech4Li3: "Infrastructure-as-code a release manažment",

    // Contact
    contactTitle: "Kontakt",
    labelAddress: "Adresa",
    labelPhone: "Telefón",
    labelEmail: "E-mail",
    labelIco: "IČO",
    labelDic: "DIČ",
    labelVat: "IČ DPH",
    labelCompany: "Spoločnosť",
    labelWeb: "Web",

    // Contact API
    contactError: "Skúste prosím neskôr alebo navštívte",

    // Footer
    footerCopyright: "TRONIC"
  },

  en: {
    // Meta
    title: "TRONIC — Kubernetes & GitOps Experts",
    description: "TRONIC: Experts in Kubernetes (RKE2), Argo CD, Argo Workflows, and GitLab. Design, implementation, operations, and automation with GitOps.",
    ogDescription: "Experts in Kubernetes (RKE2), Argo CD, Argo Workflows, and GitLab.",

    // Navigation
    navServices: "Services",
    navTechnologies: "Technologies",
    navContact: "Contact",

    // Hero
    heroTitle: "Kubernetes & GitOps Experts",
    heroText: "We design, implement, and operate modern IT platforms on Kubernetes (RKE2) with a GitOps approach using Argo CD, Argo Workflows, and GitLab.",
    heroCta: "Contact Us",
    heroLearnMore: "Learn More",

    // Services
    servicesTitle: "What We Do for You",
    service1Title: "Design & Architecture",
    service1Text: "We collaboratively design secure, scalable, and cost-effective platforms with a focus on operational simplicity and observability.",
    service2Title: "Implementation & Automation",
    service2Text: "We implement GitOps, CI/CD, and automated workflows for reliable and repeatable application deployments.",
    service3Title: "Operations & Security",
    service3Text: "Monitoring, alerting, cluster hardening, and backups — we maintain SLAs and minimize risks.",

    // Technologies
    techTitle: "Technologies We Master",

    // RKE2
    tech1Badge: "Kubernetes RKE2",
    tech1Title: "Enterprise Kubernetes, Simple and Secure",
    tech1Text: "RKE2 delivers stability and security for production clusters. We help with design, installation, networking, HA control-plane, storage (Rook/Ceph, Longhorn), and upgrade processes.",
    tech1Li1: "Hardening and CIS benchmarks",
    tech1Li2: "Observability: Prometheus/Grafana/Loki/Tempo",
    tech1Li3: "Security: RBAC, OPA/Gatekeeper, Secrets management",

    // Argo CD
    tech2Badge: "Argo CD",
    tech2Title: "GitOps for Consistent Deployments",
    tech2Text: "Argo CD keeps cluster state in sync with repositories. Repository design, multi-tenant policies, templating (Helm/Kustomize), and promotion strategies are our daily routine.",
    tech2Li1: "Multi-cluster and multi-env strategies",
    tech2Li2: "Policy-as-code, approval gates",
    tech2Li3: "Rollbacks and progressive delivery",

    // Argo Workflows
    tech3Badge: "Argo Workflows",
    tech3Title: "Data & Batch Pipelines on Kubernetes",
    tech3Text: "We model reliable workflows with parallelization, dependencies, and repeatable steps. We scale using spot/preemptible nodes and caching.",
    tech3Li1: "Artifact/parameter passing, pod templates",
    tech3Li2: "Event-driven pipelines, sensors and triggers",
    tech3Li3: "Observability and retry/backoff strategies",

    // GitLab
    tech4Badge: "GitLab",
    tech4Title: "End-to-End CI/CD & DevSecOps",
    tech4Text: "From pipeline design to security scans and Kubernetes deployment. We set up runners, cache, artifacts, and release processes.",
    tech4Li1: "Monorepo and polyrepo strategies",
    tech4Li2: "Security/Compliance integrations",
    tech4Li3: "Infrastructure-as-code and release management",

    // Contact
    contactTitle: "Contact",
    labelAddress: "Address",
    labelPhone: "Phone",
    labelEmail: "Email",
    labelIco: "Company ID",
    labelDic: "Tax ID",
    labelVat: "VAT ID",
    labelCompany: "Company",
    labelWeb: "Web",

    // Contact API
    contactError: "Please try again later or visit",

    // Footer
    footerCopyright: "TRONIC"
  },

  es: {
    // Meta
    title: "TRONIC — Expertos en Kubernetes y GitOps",
    description: "TRONIC: Expertos en Kubernetes (RKE2), Argo CD, Argo Workflows y GitLab. Diseño, implementación, operaciones y automatización con GitOps.",
    ogDescription: "Expertos en Kubernetes (RKE2), Argo CD, Argo Workflows y GitLab.",

    // Navigation
    navServices: "Servicios",
    navTechnologies: "Tecnologías",
    navContact: "Contacto",

    // Hero
    heroTitle: "Expertos en Kubernetes y GitOps",
    heroText: "Diseñamos, implementamos y operamos plataformas IT modernas en Kubernetes (RKE2) con un enfoque GitOps utilizando Argo CD, Argo Workflows y GitLab.",
    heroCta: "Contáctenos",
    heroLearnMore: "Más información",

    // Services
    servicesTitle: "Lo que hacemos por ti",
    service1Title: "Diseño y Arquitectura",
    service1Text: "Diseñamos conjuntamente plataformas seguras, escalables y rentables con énfasis en la simplicidad operativa y la observabilidad.",
    service2Title: "Implementación y Automatización",
    service2Text: "Implementamos GitOps, CI/CD y flujos de trabajo automatizados para despliegues de aplicaciones confiables y repetibles.",
    service3Title: "Operaciones y Seguridad",
    service3Text: "Monitoreo, alertas, hardening de clústeres y copias de seguridad — mantenemos SLAs y minimizamos riesgos.",

    // Technologies
    techTitle: "Tecnologías que dominamos",

    // RKE2
    tech1Badge: "Kubernetes RKE2",
    tech1Title: "Kubernetes Empresarial, Simple y Seguro",
    tech1Text: "RKE2 ofrece estabilidad y seguridad para clústeres de producción. Ayudamos con diseño, instalación, networking, control-plane HA, almacenamiento (Rook/Ceph, Longhorn) y procesos de actualización.",
    tech1Li1: "Hardening y benchmarks CIS",
    tech1Li2: "Observabilidad: Prometheus/Grafana/Loki/Tempo",
    tech1Li3: "Seguridad: RBAC, OPA/Gatekeeper, gestión de Secrets",

    // Argo CD
    tech2Badge: "Argo CD",
    tech2Title: "GitOps para Despliegues Consistentes",
    tech2Text: "Argo CD mantiene el estado de los clústeres sincronizado con los repositorios. Diseño de repositorios, políticas multi-tenant, templating (Helm/Kustomize) y estrategias de promoción son nuestra rutina diaria.",
    tech2Li1: "Estrategias multi-cluster y multi-env",
    tech2Li2: "Policy-as-code, puertas de aprobación",
    tech2Li3: "Rollbacks y entrega progresiva",

    // Argo Workflows
    tech3Badge: "Argo Workflows",
    tech3Title: "Pipelines de Datos y Batch en Kubernetes",
    tech3Text: "Modelamos flujos de trabajo confiables con paralelización, dependencias y pasos repetibles. Escalamos usando nodos spot/preemptibles y caché.",
    tech3Li1: "Paso de artefactos/parámetros, plantillas de pod",
    tech3Li2: "Pipelines orientados a eventos, sensores y triggers",
    tech3Li3: "Observabilidad y estrategias de retry/backoff",

    // GitLab
    tech4Badge: "GitLab",
    tech4Title: "CI/CD End-to-End y DevSecOps",
    tech4Text: "Desde el diseño de pipelines hasta escaneos de seguridad y despliegue en Kubernetes. Configuramos runners, caché, artefactos y procesos de release.",
    tech4Li1: "Estrategias monorepo y polyrepo",
    tech4Li2: "Integraciones de seguridad/compliance",
    tech4Li3: "Infrastructure-as-code y gestión de releases",

    // Contact
    contactTitle: "Contacto",
    labelAddress: "Dirección",
    labelPhone: "Teléfono",
    labelEmail: "Correo",
    labelIco: "ID Empresa",
    labelDic: "ID Fiscal",
    labelVat: "NIF/IVA",
    labelCompany: "Empresa",
    labelWeb: "Web",

    // Contact API
    contactError: "Por favor, inténtelo más tarde o visite",

    // Footer
    footerCopyright: "TRONIC"
  }
};
