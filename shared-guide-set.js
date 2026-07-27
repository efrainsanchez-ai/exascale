(function () {
  const notice = {
    en: {
      title: "Educational use and validation required",
      text: "This content is for educational and planning purposes only. Apply every command and configuration first in a non-production test environment that mirrors your RAC, service, client driver, workload, and failover requirements. The recommended values shown here may not work in your specific environment, may require change-control approval, and can affect availability, connection routing, transaction behavior, memory use, and batch workload placement. Validate with application owners, DBAs, network teams, and Oracle Support guidance before using any setting in production."
    },
    es: {
      title: "Uso educativo y validación requerida",
      text: "Este contenido es solo para fines educativos y de planificación. Aplica cada comando y configuración primero en un entorno de prueba no productivo que refleje tus requisitos de RAC, servicio, controlador cliente, carga de trabajo y failover. Los valores recomendados aquí pueden no funcionar en tu entorno específico, pueden requerir aprobación de control de cambios y pueden afectar disponibilidad, enrutamiento de conexiones, comportamiento transaccional, uso de memoria y ubicación de cargas batch. Valida con dueños de aplicaciones, DBAs, equipos de red y la guía de Oracle Support antes de usar cualquier configuración en producción."
    },
    pt: {
      title: "Uso educacional e validação obrigatória",
      text: "Este conteúdo é apenas para fins educacionais e de planejamento. Aplique cada comando e configuração primeiro em um ambiente de teste não produtivo que reflita seus requisitos de RAC, serviço, driver cliente, carga de trabalho e failover. Os valores recomendados aqui podem não funcionar no seu ambiente específico, podem exigir aprovação de controle de mudanças e podem afetar disponibilidade, roteamento de conexões, comportamento transacional, uso de memória e posicionamento de cargas batch. Valide com responsáveis por aplicações, DBAs, equipes de rede e a orientação do Oracle Support antes de usar qualquer configuração em produção."
    }
  };

  const labels = {
    en: { guideSet: "Guide links" },
    es: { guideSet: "Enlaces de guías" },
    pt: { guideSet: "Links dos guias" }
  };

  const seriesBrand = {
    title: "Oracle Exadata Exascale 26ai",
    subtitle: "Series"
  };

  const guideRegistry = [
    {
      key: "overview",
      labels: {
        en: "Exascale Overview",
        es: "Overview",
        pt: "Overview"
      },
      paths: {
        root: "index.html",
        nested: "../index.html"
      },
      descriptions: {
        en: "Exascale benefits, architecture map, continuity concepts, and shared glossary.",
        es: "Beneficios Exascale, mapa de arquitectura, conceptos de continuidad y glosario compartido.",
        pt: "Benefícios Exascale, mapa de arquitetura, conceitos de continuidade e glossário compartilhado."
      }
    },
    {
      key: "cluster",
      labels: {
        en: "Cluster Scaling",
        es: "Escalado de Cluster",
        pt: "Escala de Cluster"
      },
      paths: {
        root: "Cluster/index.html",
        nested: "../Cluster/index.html"
      },
      descriptions: {
        en: "Single-node to two-node RAC scaling with SCAN, services, load balancing, AC, TAC, and validation.",
        es: "Escalado RAC de un nodo a dos nodos con SCAN, servicios, load balancing, AC, TAC y validación.",
        pt: "Escala RAC de um nó para dois nós com SCAN, serviços, load balancing, AC, TAC e validação."
      }
    },
    {
      key: "healthcheck",
      labels: {
        en: "RAC Health Check",
        es: "Health Check RAC",
        pt: "Health Check RAC"
      },
      paths: {
        root: "Healthcheck/index.html",
        nested: "../Healthcheck/index.html"
      },
      descriptions: {
        en: "Baseline cluster, listener, database, service, SQL view, and connectivity checks before changes.",
        es: "Línea base de clúster, listener, base de datos, servicios, vistas SQL y conectividad antes de cambios.",
        pt: "Linha de base de cluster, listener, banco, serviços, views SQL e conectividade antes de mudanças."
      }
    },
    {
      key: "connection",
      labels: {
        en: "Connection Services",
        es: "Servicios de Conexión",
        pt: "Serviços de Conexão"
      },
      paths: {
        root: "ConnectionServices/index.html",
        nested: "../ConnectionServices/index.html"
      },
      descriptions: {
        en: "Default service review, OLTP failover, reporting and batch isolation, session distribution, RLB, and forced PDB failover simulation.",
        es: "Revisión del servicio default, failover OLTP, aislamiento de reportes y batch, distribución de sesiones, RLB y simulación forzada de failover PDB.",
        pt: "Revisão do serviço padrão, failover OLTP, isolamento de relatórios e batch, distribuição de sessões, RLB e simulação forçada de failover PDB."
      }
    },
    {
      key: "resourceManager",
      labels: {
        en: "PDB Resource Manager",
        es: "Resource Manager PDB",
        pt: "Resource Manager PDB"
      },
      paths: {
        root: "ResourceManager/index.html",
        nested: "../ResourceManager/index.html"
      },
      descriptions: {
        en: "PDB-level service-to-consumer-group mapping, plans, DOP caps, activation, and validation.",
        es: "Mapeo a nivel PDB de servicios a consumer groups, planes, límites DOP, activación y validación.",
        pt: "Mapeamento no nível PDB de serviços para consumer groups, planos, limites DOP, ativação e validação."
      }
    },
    {
      key: "cdbResourceManager",
      labels: {
        en: "CDB Resource Manager",
        es: "Resource Manager CDB",
        pt: "Resource Manager CDB"
      },
      paths: {
        root: "CDBResourceManager/index.html",
        nested: "../CDBResourceManager/index.html"
      },
      descriptions: {
        en: "Tiered PDB protection with CDB-level shares, CPU caps, and parallel-server caps.",
        es: "Protección de PDBs por nivel con shares, límites de CPU y límites de servidores paralelos a nivel CDB.",
        pt: "Proteção de PDBs por nível com shares, limites de CPU e limites de servidores paralelos no nível CDB."
      }
    },
    {
      key: "memoryManagement",
      labels: {
        en: "Database Memory",
        es: "Memoria de Base de Datos",
        pt: "Memória do Banco de Dados"
      },
      paths: {
        root: "MemoryManagement/index.html",
        nested: "../MemoryManagement/index.html"
      },
      descriptions: {
        en: "Linux, root CDB, and PDB memory review with 12-PDB SGA and PGA planning.",
        es: "Revisión de memoria Linux, CDB root y PDB con planificación SGA y PGA para 12 PDBs.",
        pt: "Revisão de memória Linux, CDB root e PDB com planejamento SGA e PGA para 12 PDBs."
      }
    }
  ];

  const highlightItems = {
    overview: {
      en: [
        ["Start here", "Connect Exascale benefits to the architecture map, glossary, and operating model."],
        ["Run Healthcheck", "Capture baseline cluster, listener, service, SQL, and connectivity evidence before changing services."],
        ["Shape Connection Services", "Review OLTP failover, reporting and batch isolation, session distribution, RLB, and forced PDB failure testing."],
        ["Govern workloads", "Use Resource Manager for service-based consumer groups, business-hours and after-hours plans, DOP caps, and validation."],
        ["Scale with continuity", "Use Cluster Scaling for the single-node to two-node path, service load balancing, AC, and TAC."]
      ],
      es: [
        ["Empieza aquí", "Conecta beneficios Exascale con el mapa de arquitectura, el glosario y el modelo operativo."],
        ["Ejecuta Healthcheck", "Captura evidencia base de cluster, listener, servicios, SQL y conectividad antes de cambiar servicios."],
        ["Diseña Connection Services", "Revisa failover OLTP, aislamiento de reportes y batch, distribución de sesiones, RLB y pruebas forzadas de falla PDB."],
        ["Gobierna cargas", "Usa Resource Manager para consumer groups por servicio, planes de horario comercial y fuera de horario, límites DOP y validación."],
        ["Escala con continuidad", "Usa Cluster Scaling para la ruta de uno a dos nodos, load balancing de servicios, AC y TAC."]
      ],
      pt: [
        ["Comece aqui", "Conecte benefícios Exascale ao mapa de arquitetura, glossário e modelo operacional."],
        ["Execute Healthcheck", "Capture evidência base de cluster, listener, serviços, SQL e conectividade antes de mudar serviços."],
        ["Modele Connection Services", "Revise failover OLTP, isolamento de relatórios e batch, distribuição de sessões, RLB e testes forçados de falha PDB."],
        ["Governe cargas", "Use Resource Manager para consumer groups por serviço, planos de horário comercial e fora do horário, limites DOP e validação."],
        ["Escale com continuidade", "Use Cluster Scaling para o caminho de um para dois nós, load balancing de serviços, AC e TAC."]
      ]
    },
    healthcheck: {
      en: [
        ["Use this page", "Run the operational RAC health-check workflow, sections 1 through 8."],
        ["Use Connection Services", "Review TNS aliases, services, load balancing, and failover simulation."],
        ["Use Resource Manager", "Review service-to-consumer-group workload governance."],
        ["Use Cluster Scaling", "Review the single-node to two-node RAC scale-out guide."]
      ],
      es: [
        ["Usa esta página", "Ejecuta el flujo operativo de health check RAC, secciones 1 a 8."],
        ["Usa Connection Services", "Revisa alias TNS, servicios, load balancing y simulación de failover."],
        ["Usa Resource Manager", "Revisa gobierno de carga por servicio y consumer group."],
        ["Usa Cluster Scaling", "Revisa la guía de escalado RAC de un nodo a dos nodos."]
      ],
      pt: [
        ["Use esta página", "Execute o fluxo operacional de health check RAC, seções 1 a 8."],
        ["Use Connection Services", "Revise aliases TNS, serviços, load balancing e simulação de failover."],
        ["Use Resource Manager", "Revise governança de carga por serviço e consumer group."],
        ["Use Cluster Scaling", "Revise o guia de escala RAC de um nó para dois nós."]
      ]
    },
    connection: {
      en: [
        ["Use this page", "Review service design, workload isolation, session distribution, RLB, and controlled failover testing."],
        ["Use Exascale Overview", "Get architecture context before applying service changes."],
        ["Use Healthcheck", "Run prerequisite RAC health checks."],
        ["Use Resource Manager", "Apply workload governance after service isolation is in place."]
      ],
      es: [
        ["Usa esta página", "Revisa diseño de servicios, aislamiento de cargas, distribución de sesiones, RLB y pruebas controladas de failover."],
        ["Usa Exascale Overview", "Consulta contexto de arquitectura antes de aplicar cambios de servicio."],
        ["Usa Healthcheck", "Ejecuta las revisiones RAC previas."],
        ["Usa Resource Manager", "Aplica gobierno de carga después del aislamiento por servicio."]
      ],
      pt: [
        ["Use esta página", "Revise desenho de serviços, isolamento de cargas, distribuição de sessões, RLB e testes controlados de failover."],
        ["Use Exascale Overview", "Consulte contexto de arquitetura antes de aplicar mudanças de serviço."],
        ["Use Healthcheck", "Execute as verificações RAC prévias."],
        ["Use Resource Manager", "Aplique governança de carga após o isolamento por serviço."]
      ]
    },
    cluster: {
      en: [
        ["Use this page", "Review the scale path from single-node RAC to two-node RAC."],
        ["Use Healthcheck", "Run operational RAC validation checks before and after scaling."],
        ["Use Connection Services", "Review service routing, load balancing, and failover behavior."],
        ["Use Resource Manager", "Review service-based CPU governance across workload classes."]
      ],
      es: [
        ["Usa esta página", "Revisa la ruta de escalado de RAC de un nodo a RAC de dos nodos."],
        ["Usa Healthcheck", "Ejecuta validaciones operativas RAC antes y después del escalado."],
        ["Usa Connection Services", "Revisa enrutamiento de servicios, load balancing y comportamiento de failover."],
        ["Usa Resource Manager", "Revisa gobierno de CPU por servicio entre clases de carga."]
      ],
      pt: [
        ["Use esta página", "Revise o caminho de escala de RAC de um nó para RAC de dois nós."],
        ["Use Healthcheck", "Execute validações operacionais RAC antes e depois da escala."],
        ["Use Connection Services", "Revise roteamento de serviços, load balancing e comportamento de failover."],
        ["Use Resource Manager", "Revise governança de CPU por serviço entre classes de carga."]
      ]
    },
    resourceManager: {
      en: [
        ["Use this page", "Create consumer groups and an application resource plan."],
        ["Use Connection Services", "Confirm dedicated OLTP, reporting, and batch services first."],
        ["Use Exascale Overview", "Return to shared glossary and documentation references."],
        ["Use Healthcheck", "Validate RAC state before applying workload governance."]
      ],
      es: [
        ["Usa esta página", "Crea consumer groups y un plan de recursos de aplicación."],
        ["Usa Connection Services", "Confirma primero servicios dedicados OLTP, reportes y batch."],
        ["Usa Exascale Overview", "Vuelve al glosario y referencias compartidas."],
        ["Usa Healthcheck", "Valida el estado RAC antes de aplicar gobierno de carga."]
      ],
      pt: [
        ["Use esta página", "Crie consumer groups e um plano de recursos da aplicação."],
        ["Use Connection Services", "Confirme primeiro serviços dedicados OLTP, relatórios e batch."],
        ["Use Exascale Overview", "Volte ao glossário e às referências compartilhadas."],
        ["Use Healthcheck", "Valide o estado RAC antes de aplicar governança de carga."]
      ]
    }
  };

  const supportedLanguages = ["en", "es", "pt"];

  function normalizeLanguage(lang) {
    return supportedLanguages.includes(lang) ? lang : "en";
  }

  function languageFromLocation() {
    try {
      const params = new URLSearchParams(window.location.search);
      return normalizeLanguage(params.get("lang") || document.documentElement.lang || "en");
    } catch (error) {
      return normalizeLanguage(document.documentElement.lang || "en");
    }
  }

  function withLanguage(href, lang) {
    const normalized = normalizeLanguage(lang);
    if (!href || href.startsWith("#") || /^(https?:|mailto:|tel:)/i.test(href)) return href;
    const hashIndex = href.indexOf("#");
    const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
    const base = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
    const separator = base.includes("?") ? "&" : "?";
    return `${base}${separator}lang=${encodeURIComponent(normalized)}${hash}`;
  }

  function cardList(variant, scope, lang) {
    const activeLang = normalizeLanguage(lang || languageFromLocation());
    return guideRegistry.filter((guide) => guide.key !== variant).map((guide) => ({
      href: withLanguage(guide.paths[scope], activeLang),
      label: guide.labels ? guide.labels[activeLang] || guide.labels.en : guide.label,
      description: lang ? guide.descriptions[activeLang] || guide.descriptions.en : guide.descriptions
    }));
  }

  function highlightText(variant, lang) {
    return highlightItems[variant][lang].map(([title, text]) => `${title}: ${text}`);
  }

  function applyReactShell(translations, pageConfigs) {
    Object.keys(translations).forEach((lang) => {
      if (!notice[lang]) return;
      translations[lang].disclaimerTitle = notice[lang].title;
      translations[lang].disclaimer = notice[lang].text;
    });

    Object.keys(pageConfigs).forEach((variant) => {
      const scope = variant === "overview" ? "root" : "nested";
      const isRoot = variant === "overview";
      pageConfigs[variant].relativeLinks = cardList(variant, scope, "en");
      pageConfigs[variant].relativeLinksByLanguage = supportedLanguages.reduce((links, lang) => {
        links[lang] = cardList(variant, scope, lang);
        return links;
      }, {});
      pageConfigs[variant].seriesBrand = seriesBrand;
      if (isRoot) {
        Object.keys(pageConfigs[variant].copy).forEach((lang) => {
          pageConfigs[variant].copy[lang].highlights = highlightText(variant, lang);
        });
      }
    });
  }

  function replaceChildren(parent, children) {
    while (parent.firstChild) parent.removeChild(parent.firstChild);
    children.forEach((child) => parent.appendChild(child));
  }

  function staticPanels() {
    const panels = Array.from(document.querySelectorAll("[data-language-panel]"));
    return panels.length ? panels : [document.body];
  }

  function panelLanguage(panel) {
    return panel.getAttribute("data-language-panel") || document.documentElement.lang || "en";
  }

  function setDisclaimerHeading(box, heading, title) {
    const target = heading || box.querySelector("summary");
    if (!target) return;
    target.textContent = title;
    if (box.tagName === "DETAILS") {
      box.removeAttribute("open");
      const action = document.createElement("span");
      action.className = "disclaimer-action";
      action.textContent = "click here";
      target.append(document.createTextNode(" "), action);
    }
  }

  function createCard(link, templates) {
    const anchor = document.createElement("a");
    anchor.className = "related-link";
    anchor.href = link.href;

    const strong = document.createElement("strong");
    strong.textContent = link.label;

    const span = document.createElement("span");
    span.textContent = link.description;

    anchor.append(strong, span);
    return anchor;
  }

  function applyStaticPage(variant, scope) {
    const isRoot = variant === "overview";
    staticPanels().forEach((panel) => {
      const lang = panelLanguage(panel);
      const localizedNotice = notice[lang] || notice.en;
      panel.querySelectorAll(".disclaimer").forEach((box) => {
        const heading = box.querySelector("h2, h3");
        const paragraph = box.querySelector("p");
        box.setAttribute("aria-label", localizedNotice.title);
        setDisclaimerHeading(box, heading, localizedNotice.title);
        if (paragraph) paragraph.textContent = localizedNotice.text;
      });

      const linkContainers = Array.from(panel.querySelectorAll("[data-guide-cards]"));
      if (!linkContainers.length) {
        const legacyLinks = panel.querySelector(".related-links");
        if (legacyLinks) linkContainers.push(legacyLinks);
      }
      linkContainers.forEach((links) => {
        links.setAttribute("aria-label", labels[lang].guideSet);
        replaceChildren(links, cardList(variant, scope, lang).map((link) => createCard(link)));
      });

      const visual = panel.querySelector(".hero-visual");
      if (visual) {
        if (!isRoot) {
          visual.remove();
        } else {
        visual.setAttribute("aria-label", labels[lang].guideSet);
        const caption = visual.querySelector(".visual-caption span");
        if (caption) caption.textContent = labels[lang].guideSet;
        const list = visual.querySelector(".hero-highlights");
        if (list) {
          const itemTemplate = list.querySelector("li");
          const bulletTemplate = itemTemplate && itemTemplate.querySelector("[aria-hidden='true']");
          const textSpanTemplate = itemTemplate && Array.from(itemTemplate.querySelectorAll("span")).find((span) => !span.hasAttribute("aria-hidden") && span.querySelector("b"));
          replaceChildren(list, highlightItems[variant][lang].map(([title, text]) => {
            const item = document.createElement("li");
            item.className = itemTemplate ? itemTemplate.className : "highlight";
            if (bulletTemplate) {
              item.appendChild(bulletTemplate.cloneNode(true));
            }
            const span = document.createElement("span");
            span.className = textSpanTemplate ? textSpanTemplate.className : "";
            const bold = document.createElement("b");
            bold.textContent = title;
            span.append(bold, document.createTextNode(`: ${text}`));
            item.appendChild(span);
            return item;
          }));
        }
        }
      }
    });

    const footer = document.querySelector(".site-footer .disclaimer");
    if (footer) {
      const heading = footer.querySelector("h2, h3");
      const paragraph = footer.querySelector("p");
      footer.setAttribute("aria-label", notice.en.title);
      setDisclaimerHeading(footer, heading, notice.en.title);
      if (paragraph) paragraph.textContent = notice.en.text;
    }

    document.querySelectorAll("[data-series-brand-title]").forEach((node) => {
      node.textContent = seriesBrand.title;
    });
    document.querySelectorAll("[data-series-brand-subtitle]").forEach((node) => {
      node.textContent = seriesBrand.subtitle;
    });
  }

  function hydrateGuideCards() {
    document.querySelectorAll("[data-guide-cards]").forEach((container) => {
      const variant = container.getAttribute("data-guide-variant");
      if (!variant) return;

      const scope = container.getAttribute("data-guide-scope") || (variant === "overview" ? "root" : "nested");
      const panel = container.closest("[data-language-panel]");
      const lang = normalizeLanguage(container.getAttribute("data-guide-language") || container.getAttribute("data-guide-lang") || (panel && panelLanguage(panel)) || document.documentElement.lang || "en");
      const localizedLabels = labels[lang] || labels.en;
      container.setAttribute("aria-label", localizedLabels.guideSet);

      replaceChildren(container, cardList(variant, scope, lang).map((link) => createCard(link)));
    });
  }

  function relocateGuideNavigation() {
    document.querySelectorAll("[data-guide-cards]").forEach((container) => {
      if (!container.closest("header, .hero")) return;
      const panel = container.closest("[data-language-panel]");
      const scope = panel || document;
      const destination = scope.querySelector('[id$="chapter-navigation"]');
      if (!destination) return;
      if (destination.querySelector("[data-guide-cards]")) {
        container.remove();
        return;
      }
      destination.appendChild(container);
    });
  }

  function installChapterNavigationStyles() {
    if (document.getElementById("exascale-chapter-navigation-styles")) return;
    const style = document.createElement("style");
    style.id = "exascale-chapter-navigation-styles";
    style.textContent = `
      .exascale-chapter-top { display: block !important; width: min(1180px, calc(100% - 2rem)) !important; margin: 1rem auto 0 !important; padding: 0 !important; }
      .exascale-chapter-top-section { width: 100% !important; border: 0 !important; padding: 0 !important; margin: 0 !important; }
      .exascale-chapter-top-section .exascale-chapter-top { margin: 1.25rem auto !important; }
      .exascale-chapter-row { display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: .75rem !important; }
      .exascale-chapter-card,
      .chapter-card,
      .chapter-link,
      .nav-card,
      .link-card,
      .two-up a,
      .related-link,
      .related-links a,
      [data-guide-cards] a {
        display: grid !important;
        gap: .35rem !important;
        min-width: 0 !important;
        padding: 1rem !important;
        border: 1px solid #d6cfcb !important;
        border-radius: 8px !important;
        background: #fff !important;
        color: #1f1b1a !important;
        font: 1rem/1.7 ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
        text-decoration: none !important;
        box-shadow: 0 1px 2px rgba(31, 27, 26, .06) !important;
        transition: border-color 160ms ease, transform 160ms ease !important;
      }
      .exascale-chapter-card,
      .chapter-card,
      .chapter-link,
      .nav-card { min-height: 92px !important; }
      .exascale-chapter-card:hover,
      .exascale-chapter-card:focus-visible,
      .chapter-card:hover,
      .chapter-card:focus-visible,
      .chapter-link:hover,
      .chapter-link:focus-visible,
      .nav-card:hover,
      .nav-card:focus-visible,
      .link-card:hover,
      .link-card:focus-visible,
      .two-up a:hover,
      .two-up a:focus-visible,
      .related-link:hover,
      .related-link:focus-visible,
      .related-links a:hover,
      .related-links a:focus-visible,
      [data-guide-cards] a:hover,
      [data-guide-cards] a:focus-visible { border-color: rgba(199, 70, 52, .5) !important; color: #1f1b1a !important; outline: none !important; transform: translateY(-1px) !important; }
      .exascale-chapter-card span,
      .chapter-card span,
      .chapter-link span,
      .link-card span,
      .nav-card-label,
      .two-up a span {
        display: block !important;
        color: #5f2b24 !important;
        font-size: .72rem !important;
        font-weight: 800 !important;
        letter-spacing: .08em !important;
        line-height: 1.2 !important;
        text-transform: uppercase !important;
      }
      .exascale-chapter-card strong,
      .chapter-card strong,
      .chapter-link strong,
      .nav-card strong,
      .link-card strong,
      .two-up a strong,
      .related-link strong,
      .related-links a strong,
      [data-guide-cards] a strong {
        display: block !important;
        color: inherit !important;
        font-size: 1rem !important;
        font-weight: 700 !important;
        line-height: 1.35 !important;
        margin: 0 !important;
      }
      .related-link span,
      .related-links a span,
      [data-guide-cards] a span {
        display: block !important;
        color: #57534e !important;
        font-size: .92rem !important;
        font-weight: 400 !important;
        letter-spacing: 0 !important;
        line-height: 1.55 !important;
        margin: 0 !important;
        text-transform: none !important;
      }
      .exascale-chapter-card.exascale-chapter-disabled,
      .chapter-link.is-disabled,
      .nav-card.is-disabled { background: #f5f5f4 !important; color: #78716c !important; opacity: .82 !important; }
      .dark .exascale-chapter-card,
      .dark .chapter-card,
      .dark .chapter-link,
      .dark .nav-card,
      .dark .link-card,
      .dark .two-up a,
      .dark .related-link,
      .dark .related-links a,
      .dark [data-guide-cards] a,
      body[data-theme="dark"] .exascale-chapter-card,
      body[data-theme="dark"] .chapter-card,
      body[data-theme="dark"] .chapter-link,
      body[data-theme="dark"] .nav-card,
      body[data-theme="dark"] .link-card,
      body[data-theme="dark"] .two-up a,
      body[data-theme="dark"] .related-link,
      body[data-theme="dark"] .related-links a,
      body[data-theme="dark"] [data-guide-cards] a { border-color: #57534e !important; background: #211d1b !important; color: #f5f5f4 !important; }
      .dark .exascale-chapter-card span,
      .dark .chapter-card span,
      .dark .chapter-link span,
      .dark .nav-card-label,
      .dark .two-up a span,
      body[data-theme="dark"] .exascale-chapter-card span,
      body[data-theme="dark"] .chapter-card span,
      body[data-theme="dark"] .chapter-link span,
      body[data-theme="dark"] .nav-card-label,
      body[data-theme="dark"] .two-up a span,
      .dark .link-card span,
      body[data-theme="dark"] .link-card span { color: #f4b8ad !important; }
      .dark .related-link span,
      .dark .related-links a span,
      .dark [data-guide-cards] a span,
      body[data-theme="dark"] .related-link span,
      body[data-theme="dark"] .related-links a span,
      body[data-theme="dark"] [data-guide-cards] a span { color: #d6d3d1 !important; }
      @media (max-width: 700px) { .exascale-chapter-row { grid-template-columns: 1fr !important; } }
    `;
    document.head.appendChild(style);
  }

  function chapterCardText(card, selector, fallback) {
    const node = card && card.querySelector(selector);
    const text = node && node.textContent ? node.textContent.trim() : "";
    return text || fallback;
  }

  function normalizeChapterNavigation(chapterNav) {
    const candidateRow = chapterNav.firstElementChild && chapterNav.firstElementChild.tagName === "DIV" ? chapterNav.firstElementChild : chapterNav;
    const sourceCards = Array.from(candidateRow.children).filter((node) => node.nodeType === 1).slice(0, 3);
    const normalizedRow = document.createElement("div");
    normalizedRow.className = "chapter-nav-row exascale-chapter-row";

    sourceCards.forEach((sourceCard) => {
      const isLink = sourceCard.matches("a[href]");
      const card = document.createElement(isLink ? "a" : "div");
      if (isLink) card.href = sourceCard.getAttribute("href");
      card.className = "chapter-link nav-card";
      if (!isLink) {
        card.classList.add("is-disabled");
        card.setAttribute("aria-disabled", "true");
      }

      const label = document.createElement("span");
      label.textContent = chapterCardText(sourceCard, "span", "");
      const title = document.createElement("strong");
      title.textContent = chapterCardText(sourceCard, "strong", sourceCard.textContent.trim());
      card.append(label, title);
      normalizedRow.appendChild(card);
    });

    chapterNav.replaceChildren(normalizedRow);
    chapterNav.className = "chapter-nav chapter-card-nav exascale-chapter-top";
  }

  function insertChapterNavigationAtTop(scope, section, chapterNav) {
    const topSection = document.createElement("section");
    topSection.className = "exascale-chapter-top-section";
    if (section.id) {
      topSection.id = `${section.id}-top`;
    }
    topSection.appendChild(chapterNav);

    const contentStart = scope.querySelector(".page-grid, main#article, main.layout, main.article, main, .layout");
    if (contentStart) {
      contentStart.parentNode.insertBefore(topSection, contentStart);
      return true;
    }

    const header = scope.querySelector("header");
    if (header && header.parentNode) {
      header.insertAdjacentElement("afterend", topSection);
      return true;
    }

    if (section.parentNode) {
      section.parentNode.insertBefore(topSection, section);
      return true;
    }
    return false;
  }

  function relocateChapterNavigation() {
    installChapterNavigationStyles();
    document.querySelectorAll('[id$="chapter-navigation"]').forEach((section) => {
      const panel = section.closest("[data-language-panel]");
      const scope = panel || document;
      const chapterNav = section.querySelector(".chapter-nav");
      if (!chapterNav || chapterNav.dataset.positioned === "top") return;

      normalizeChapterNavigation(chapterNav);
      chapterNav.dataset.positioned = "top";
      insertChapterNavigationAtTop(scope, section, chapterNav);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      hydrateGuideCards();
      relocateGuideNavigation();
      relocateChapterNavigation();
    });
  } else {
    hydrateGuideCards();
    relocateGuideNavigation();
    relocateChapterNavigation();
  }

  window.ExascaleGuideSet = {
    notice,
    labels,
    seriesBrand,
    guideRegistry,
    highlightItems,
    supportedLanguages,
    normalizeLanguage,
    languageFromLocation,
    withLanguage,
    cardList,
    highlightText,
    applyReactShell,
    applyStaticPage,
    hydrateGuideCards,
    relocateGuideNavigation,
    relocateChapterNavigation
  };
}());
