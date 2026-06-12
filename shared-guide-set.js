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
    en: { guideSet: "Navigate the guide set" },
    es: { guideSet: "Navegar las guías" },
    pt: { guideSet: "Navegar pelos guias" }
  };

  const seriesBrand = {
    title: "Oracle Exadata Exascale 26ai",
    subtitle: "Series"
  };

  const guideRegistry = [
    {
      key: "overview",
      label: "Exascale Overview",
      paths: {
        root: "index.html",
        nested: "../index.html"
      },
      descriptions: {
        en: "Architecture context, continuity concepts, and shared glossary.",
        es: "Contexto de arquitectura, conceptos de continuidad y glosario compartido.",
        pt: "Contexto de arquitetura, conceitos de continuidade e glossário compartilhado."
      }
    },
    {
      key: "healthcheck",
      label: "RAC Health Check",
      paths: {
        root: "Healthcheck/index.html",
        nested: "../Healthcheck/index.html"
      },
      descriptions: {
        en: "Operational RAC validation checks, sections 1 through 8.",
        es: "Validaciones operativas RAC, secciones 1 a 8.",
        pt: "Validações operacionais RAC, seções 1 a 8."
      }
    },
    {
      key: "connection",
      label: "Connection Services",
      paths: {
        root: "ConnectionServices/index.html",
        nested: "../ConnectionServices/index.html"
      },
      descriptions: {
        en: "TNS aliases, service configuration, load balancing, and failover simulation.",
        es: "Alias TNS, configuración de servicios, load balancing y simulación de failover.",
        pt: "Aliases TNS, configuração de serviços, load balancing e simulação de failover."
      }
    },
    {
      key: "resourceManager",
      label: "Resource Manager",
      paths: {
        root: "ResourceManager/index.html",
        nested: "../ResourceManager/index.html"
      },
      descriptions: {
        en: "Service-based consumer groups, CPU shares, DOP limits, activation, and validation.",
        es: "Consumer groups por servicio, cuotas de CPU, límites DOP, activación y validación.",
        pt: "Consumer groups por serviço, cotas de CPU, limites DOP, ativação e validação."
      }
    },
    {
      key: "cluster",
      label: "Cluster Scaling",
      paths: {
        root: "Cluster/index.html",
        nested: "../Cluster/index.html"
      },
      descriptions: {
        en: "Single-node to two-node RAC scaling, SCAN, HA components, validation, AC, and TAC.",
        es: "Escalado RAC de un nodo a dos nodos, SCAN, componentes HA, validación, AC y TAC.",
        pt: "Escala RAC de um nó para dois nós, SCAN, componentes HA, validação, AC e TAC."
      }
    }
  ];

  const highlightItems = {
    overview: {
      en: [
        ["Start here", "Review the overview, architecture map, and continuity concepts."],
        ["Open Healthcheck", "Run RAC operational checks, sections 1 through 8."],
        ["Open Connection Services", "Review service and client connection behavior, sections 9 through 17."],
        ["Open Resource Manager", "Map workload services to consumer groups and CPU shares."]
      ],
      es: [
        ["Empieza aquí", "Revisa el overview, el mapa de arquitectura y los conceptos de continuidad."],
        ["Abre Healthcheck", "Ejecuta revisiones operativas RAC, secciones 1 a 8."],
        ["Abre Connection Services", "Revisa servicios y conexiones cliente, secciones 9 a 17."],
        ["Abre Resource Manager", "Mapea servicios de carga a consumer groups y cuotas de CPU."]
      ],
      pt: [
        ["Comece aqui", "Revise o overview, o mapa de arquitetura e os conceitos de continuidade."],
        ["Abra Healthcheck", "Execute verificações operacionais RAC, seções 1 a 8."],
        ["Abra Connection Services", "Revise serviços e conexões de cliente, seções 9 a 17."],
        ["Abra Resource Manager", "Mapeie serviços de carga para consumer groups e cotas de CPU."]
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
        ["Use this page", "Review connection service sections 9 through 17."],
        ["Use Exascale Overview", "Get architecture context before applying service changes."],
        ["Use Healthcheck", "Run prerequisite RAC health checks."],
        ["Use Resource Manager", "Apply workload governance after service isolation is in place."]
      ],
      es: [
        ["Usa esta página", "Revisa las secciones 9 a 17 de servicios de conexión."],
        ["Usa Exascale Overview", "Consulta contexto de arquitectura antes de aplicar cambios de servicio."],
        ["Usa Healthcheck", "Ejecuta las revisiones RAC previas."],
        ["Usa Resource Manager", "Aplica gobierno de carga después del aislamiento por servicio."]
      ],
      pt: [
        ["Use esta página", "Revise as seções 9 a 17 de serviços de conexão."],
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
      label: guide.label,
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
      translations[lang].controls.highlights = labels[lang].guideSet;
    });

    Object.keys(pageConfigs).forEach((variant) => {
      const scope = variant === "overview" ? "root" : "nested";
      pageConfigs[variant].relativeLinks = cardList(variant, scope, "en");
      pageConfigs[variant].relativeLinksByLanguage = supportedLanguages.reduce((links, lang) => {
        links[lang] = cardList(variant, scope, lang);
        return links;
      }, {});
      pageConfigs[variant].seriesBrand = seriesBrand;
      Object.keys(pageConfigs[variant].copy).forEach((lang) => {
        pageConfigs[variant].copy[lang].highlights = highlightText(variant, lang);
      });
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
    heading.textContent = title;
    if (box.tagName === "DETAILS") {
      const action = document.createElement("span");
      action.className = "disclaimer-action";
      action.textContent = "click here";
      heading.append(document.createTextNode(" "), action);
    }
  }

  function applyStaticPage(variant, scope) {
    staticPanels().forEach((panel) => {
      const lang = panelLanguage(panel);
      const localizedNotice = notice[lang] || notice.en;
      panel.querySelectorAll(".disclaimer").forEach((box) => {
        const heading = box.querySelector("h2, h3");
        const paragraph = box.querySelector("p");
        box.setAttribute("aria-label", localizedNotice.title);
        if (heading) setDisclaimerHeading(box, heading, localizedNotice.title);
        if (paragraph) paragraph.textContent = localizedNotice.text;
      });

      const links = panel.querySelector(".related-links");
      if (links) {
        links.setAttribute("aria-label", labels[lang].guideSet);
        const anchorTemplate = links.querySelector("a");
        const strongTemplate = anchorTemplate && anchorTemplate.querySelector("strong");
        const spanTemplate = anchorTemplate && anchorTemplate.querySelector("span");
        replaceChildren(links, cardList(variant, scope, lang).map((link) => {
          const anchor = document.createElement("a");
          anchor.className = anchorTemplate ? anchorTemplate.className : "related-link";
          anchor.href = link.href;
          const strong = document.createElement("strong");
          strong.className = strongTemplate ? strongTemplate.className : "";
          strong.textContent = link.label;
          const span = document.createElement("span");
          span.className = spanTemplate ? spanTemplate.className : "";
          span.textContent = link.description;
          anchor.append(strong, span);
          return anchor;
        }));
      }

      const visual = panel.querySelector(".hero-visual");
      if (visual) {
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
    });

    const footer = document.querySelector(".site-footer .disclaimer");
    if (footer) {
      const heading = footer.querySelector("h2, h3");
      const paragraph = footer.querySelector("p");
      footer.setAttribute("aria-label", notice.en.title);
      if (heading) setDisclaimerHeading(footer, heading, notice.en.title);
      if (paragraph) paragraph.textContent = notice.en.text;
    }

    document.querySelectorAll("[data-series-brand-title]").forEach((node) => {
      node.textContent = seriesBrand.title;
    });
    document.querySelectorAll("[data-series-brand-subtitle]").forEach((node) => {
      node.textContent = seriesBrand.subtitle;
    });
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
    applyStaticPage
  };
}());
