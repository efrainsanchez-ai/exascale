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

  const guideDescriptions = {
    overview: {
      label: "Exascale Overview",
      descriptions: {
        en: "Architecture context, continuity concepts, and shared glossary.",
        es: "Contexto de arquitectura, conceptos de continuidad y glosario compartido.",
        pt: "Contexto de arquitetura, conceitos de continuidade e glossário compartilhado."
      }
    },
    healthcheck: {
      label: "RAC Health Check",
      descriptions: {
        en: "Operational RAC validation checks, sections 1 through 8.",
        es: "Validaciones operativas RAC, secciones 1 a 8.",
        pt: "Validações operacionais RAC, seções 1 a 8."
      }
    },
    connection: {
      label: "Connection Services",
      descriptions: {
        en: "TNS aliases, service configuration, load balancing, and failover simulation.",
        es: "Alias TNS, configuración de servicios, load balancing y simulación de failover.",
        pt: "Aliases TNS, configuração de serviços, load balancing e simulação de failover."
      }
    },
    cluster: {
      label: "Cluster Scaling",
      descriptions: {
        en: "Single-node to two-node RAC scaling, SCAN, HA components, validation, AC, and TAC.",
        es: "Escalado RAC de un nodo a dos nodos, SCAN, componentes HA, validación, AC y TAC.",
        pt: "Escala RAC de um nó para dois nós, SCAN, componentes HA, validação, AC e TAC."
      }
    }
  };

  const guideOrder = {
    overview: ["healthcheck", "connection", "cluster"],
    healthcheck: ["overview", "connection", "cluster"],
    connection: ["overview", "healthcheck", "cluster"],
    cluster: ["overview", "healthcheck", "connection"]
  };

  const paths = {
    root: {
      overview: "index.html",
      healthcheck: "Healthcheck/index.html",
      connection: "ConnectionServices/index.html",
      cluster: "Cluster/index.html"
    },
    nested: {
      overview: "../index.html",
      healthcheck: "../Healthcheck/index.html",
      connection: "../ConnectionServices/index.html",
      cluster: "../Cluster/index.html"
    }
  };

  const highlightItems = {
    overview: {
      en: [
        ["Start here", "Review the overview, architecture map, and continuity concepts."],
        ["Open Healthcheck", "Run RAC operational checks, sections 1 through 8."],
        ["Open Connection Services", "Review service and client connection behavior, sections 9 through 17."],
        ["Open Cluster Scaling", "Review the single-node to two-node RAC scale-out guide."]
      ],
      es: [
        ["Empieza aquí", "Revisa el overview, el mapa de arquitectura y los conceptos de continuidad."],
        ["Abre Healthcheck", "Ejecuta revisiones operativas RAC, secciones 1 a 8."],
        ["Abre Connection Services", "Revisa servicios y conexiones cliente, secciones 9 a 17."],
        ["Abre Cluster Scaling", "Revisa la guía de escalado RAC de un nodo a dos nodos."]
      ],
      pt: [
        ["Comece aqui", "Revise o overview, o mapa de arquitetura e os conceitos de continuidade."],
        ["Abra Healthcheck", "Execute verificações operacionais RAC, seções 1 a 8."],
        ["Abra Connection Services", "Revise serviços e conexões de cliente, seções 9 a 17."],
        ["Abra Cluster Scaling", "Revise o guia de escala RAC de um nó para dois nós."]
      ]
    },
    healthcheck: {
      en: [
        ["Use this page", "Run the operational RAC health-check workflow, sections 1 through 8."],
        ["Use Exascale Overview", "Get overview, architecture, and continuity concepts."],
        ["Use Connection Services", "Review TNS aliases, services, load balancing, and failover simulation."],
        ["Use Cluster Scaling", "Review the single-node to two-node RAC scale-out guide."]
      ],
      es: [
        ["Usa esta página", "Ejecuta el flujo operativo de health check RAC, secciones 1 a 8."],
        ["Usa Exascale Overview", "Consulta overview, arquitectura y conceptos de continuidad."],
        ["Usa Connection Services", "Revisa alias TNS, servicios, load balancing y simulación de failover."],
        ["Usa Cluster Scaling", "Revisa la guía de escalado RAC de un nodo a dos nodos."]
      ],
      pt: [
        ["Use esta página", "Execute o fluxo operacional de health check RAC, seções 1 a 8."],
        ["Use Exascale Overview", "Consulte overview, arquitetura e conceitos de continuidade."],
        ["Use Connection Services", "Revise aliases TNS, serviços, load balancing e simulação de failover."],
        ["Use Cluster Scaling", "Revise o guia de escala RAC de um nó para dois nós."]
      ]
    },
    connection: {
      en: [
        ["Use this page", "Review connection service sections 9 through 17."],
        ["Use Exascale Overview", "Get architecture context before applying service changes."],
        ["Use Healthcheck", "Run prerequisite RAC health checks."],
        ["Use Cluster Scaling", "Review the single-node to two-node RAC scale-out guide."]
      ],
      es: [
        ["Usa esta página", "Revisa las secciones 9 a 17 de servicios de conexión."],
        ["Usa Exascale Overview", "Consulta contexto de arquitectura antes de aplicar cambios de servicio."],
        ["Usa Healthcheck", "Ejecuta las revisiones RAC previas."],
        ["Usa Cluster Scaling", "Revisa la guía de escalado RAC de un nodo a dos nodos."]
      ],
      pt: [
        ["Use esta página", "Revise as seções 9 a 17 de serviços de conexão."],
        ["Use Exascale Overview", "Consulte contexto de arquitetura antes de aplicar mudanças de serviço."],
        ["Use Healthcheck", "Execute as verificações RAC prévias."],
        ["Use Cluster Scaling", "Revise o guia de escala RAC de um nó para dois nós."]
      ]
    },
    cluster: {
      en: [
        ["Use this page", "Review the scale path from single-node RAC to two-node RAC."],
        ["Use Exascale Overview", "Get shared architecture context and glossary references."],
        ["Use Healthcheck", "Run operational RAC validation checks before and after scaling."],
        ["Use Connection Services", "Review service routing, load balancing, and failover behavior."]
      ],
      es: [
        ["Usa esta página", "Revisa la ruta de escalado de RAC de un nodo a RAC de dos nodos."],
        ["Usa Exascale Overview", "Consulta el contexto de arquitectura y las referencias del glosario."],
        ["Usa Healthcheck", "Ejecuta validaciones operativas RAC antes y después del escalado."],
        ["Usa Connection Services", "Revisa enrutamiento de servicios, load balancing y comportamiento de failover."]
      ],
      pt: [
        ["Use esta página", "Revise o caminho de escala de RAC de um nó para RAC de dois nós."],
        ["Use Exascale Overview", "Consulte o contexto de arquitetura e as referências do glossário."],
        ["Use Healthcheck", "Execute validações operacionais RAC antes e depois da escala."],
        ["Use Connection Services", "Revise roteamento de serviços, load balancing e comportamento de failover."]
      ]
    }
  };

  function cardList(variant, scope, lang) {
    return guideOrder[variant].map((key) => ({
      href: paths[scope][key],
      label: guideDescriptions[key].label,
      description: lang ? guideDescriptions[key].descriptions[lang] || guideDescriptions[key].descriptions.en : guideDescriptions[key].descriptions
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
      pageConfigs[variant].relativeLinks = cardList(variant, scope);
      Object.keys(pageConfigs[variant].copy).forEach((lang) => {
        pageConfigs[variant].copy[lang].highlights = highlightText(variant, lang);
      });
    });
  }

  function replaceChildren(parent, children) {
    while (parent.firstChild) parent.removeChild(parent.firstChild);
    children.forEach((child) => parent.appendChild(child));
  }

  function applyStaticPage(variant, scope) {
    document.querySelectorAll("[data-language-panel]").forEach((panel) => {
      const lang = panel.getAttribute("data-language-panel") || "en";
      const localizedNotice = notice[lang] || notice.en;
      panel.querySelectorAll(".disclaimer").forEach((box) => {
        const heading = box.querySelector("h2, h3");
        const paragraph = box.querySelector("p");
        box.setAttribute("aria-label", localizedNotice.title);
        if (heading) heading.textContent = localizedNotice.title;
        if (paragraph) paragraph.textContent = localizedNotice.text;
      });

      const links = panel.querySelector(".related-links");
      if (links) {
        links.setAttribute("aria-label", labels[lang].guideSet);
        replaceChildren(links, cardList(variant, scope, lang).map((link) => {
          const anchor = document.createElement("a");
          anchor.className = "related-link";
          anchor.href = link.href;
          const strong = document.createElement("strong");
          strong.textContent = link.label;
          const span = document.createElement("span");
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
          replaceChildren(list, highlightItems[variant][lang].map(([title, text]) => {
            const item = document.createElement("li");
            item.className = "highlight";
            const span = document.createElement("span");
            const bold = document.createElement("b");
            bold.textContent = title;
            span.append(bold, document.createTextNode(text));
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
      if (heading) heading.textContent = notice.en.title;
      if (paragraph) paragraph.textContent = notice.en.text;
    }
  }

  window.ExascaleGuideSet = {
    notice,
    labels,
    highlightItems,
    cardList,
    highlightText,
    applyReactShell,
    applyStaticPage
  };
}());
