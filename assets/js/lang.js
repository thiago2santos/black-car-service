/**
 * i18n – troca de idioma (pt-BR / en / es) na landing C-Level Mobility.
 * Depende de elementos com data-i18n e botões com data-lang.
 */
(function () {
  "use strict";

  const translations = {
    pt: {
      "brand.name": "C-Level Mobility",
      "brand.tagline": "Mobilidade executiva com disponibilidade programada",
      "nav.services": "Serviços",
      "nav.fleet": "Frota",
      "nav.business": "Para empresas",
      "nav.contact": "Contato",
      "nav.cta": "WhatsApp",
      "hero.kicker": "Disponibilidade • discrição • previsibilidade",
      "hero.title":
        "Mobilidade executiva com disponibilidade programada para empresas e executivos",
      "hero.subtitle":
        "Atendimento sob agenda em Jundiaí, Campinas e São Paulo para aeroportos, reuniões, eventos e rotinas corporativas recorrentes.",
      "hero.ctaPrimary": "Solicitar cotação",
      "hero.ctaSecondary": "Falar por WhatsApp",
      "hero.note":
        "Contato direto, comunicação objetiva e uma operação pensada para quem precisa de previsibilidade, boa apresentação e confiança no dia a dia.",
      "hero.badge1Label": "Modelo",
      "hero.badge1Title": "Sob agenda",
      "hero.badge1Body":
        "Reservas e alinhamentos feitos com antecedência, com menos ruído operacional.",
      "hero.badge2Label": "Rotina",
      "hero.badge2Title": "Recurso organizado",
      "hero.badge2Body":
        "Atendimento desenhado para compromissos estratégicos e demandas recorrentes.",
      "hero.badge3Label": "Relação",
      "hero.badge3Title": "Mais continuidade",
      "hero.badge3Body":
        "Planejamento melhor a cada atendimento, com mais contexto sobre a sua rotina.",
      "hero.cardLabel": "Atendimento sob agenda",
      "hero.cardTitle": "Disponibilidade que acompanha a sua agenda",
      "hero.cardBody":
        "Operação enxuta, atendimento direto e padrão executivo para transfers estratégicos, compromissos corporativos e demandas recorrentes.",
      "hero.point1": "Veículo e motorista organizados conforme a sua agenda.",
      "hero.point2":
        "Mais previsibilidade para aeroportos, reuniões e janelas recorrentes.",
      "hero.point3": "Contato rápido por WhatsApp e e-mail, sem intermediações.",
      "hero.cardFootnote":
        "Jundiaí, Campinas e São Paulo com foco em rotina corporativa, convidados e agendas recorrentes.",
      "services.title": "Como atendemos",
      "services.subtitle":
        "Do transfer pontual à rotina recorrente, com atendimento organizado e padrão profissional.",
      "services.airports.title": "Transfers para aeroportos (GRU, CGH, VCP)",
      "services.airports.body":
        "Atendimento programado para embarques e desembarques com alinhamento prévio de voo, horário e janela.",
      "services.airports.item1": "Atendimento dedicado para até 3 passageiros.",
      "services.airports.item2": "Planejamento conforme voo, janela e rota.",
      "services.airports.item3":
        "Confirmação rápida dos detalhes antes da operação.",
      "services.airports.note":
        "Ideal para executivos, hóspedes e convidados em deslocamentos estratégicos.",
      "services.events.title": "Eventos e compromissos corporativos na região",
      "services.events.body":
        "Atendimento para reuniões, visitas, jantares e eventos com roteiro alinhado à agenda do cliente.",
      "services.events.item1": "Roteiro alinhado à agenda do cliente.",
      "services.events.item2": "Embarque em empresas, hotéis e centros de eventos.",
      "services.events.item3":
        "Flexibilidade para paradas estratégicas sob planejamento.",
      "services.events.note":
        "Mais organização para agendas executivas e deslocamentos estratégicos.",
      "services.recurring.title": "Rotinas corporativas recorrentes",
      "services.recurring.body":
        "Atendimento programado para agendas frequentes, com janela, franquia e prioridade definidas conforme a necessidade.",
      "services.recurring.item1":
        "Ideal para diretoria, hóspedes recorrentes e visitas técnicas.",
      "services.recurring.item2":
        "Planejamento com locais frequentes e horários recorrentes.",
      "services.recurring.item3":
        "Mais previsibilidade operacional e financeira para a empresa.",
      "services.recurring.note":
        "Mais alinhado para quem precisa de continuidade, não apenas de deslocamentos isolados.",
      "fleet.title": "Padrão executivo",
      "fleet.subtitle":
        "Veículo sedan moderno, limpo e preparado para aeroportos, agendas corporativas e jornadas recorrentes.",
      "fleet.vehicleTitle": "Toyota Yaris 2023 XS",
      "fleet.vehicleBody":
        "Sedan executivo para compromissos estratégicos e rotinas corporativas com conforto, discrição e boa apresentação.",
      "fleet.detailPassengersLabel": "Capacidade de passageiros",
      "fleet.detailPassengersValue": "Até 3 passageiros com conforto.",
      "fleet.detailUsageLabel": "Uso principal",
      "fleet.detailUsageValue":
        "Aeroportos, hotéis, reuniões, eventos e rotinas recorrentes.",
      "fleet.detailComfortLabel": "Conforto",
      "fleet.detailComfortValue":
        "Climatização e ambiente discreto para trabalho ou descanso.",
      "fleet.detailLuggageLabel": "Bagagens",
      "fleet.detailLuggageValue":
        "Espaço adequado para bagagens de viagens executivas.",
      "fleet.note": "Imagem profissional e conforto em cada atendimento.",
      "driver.title": "Atendimento que transmite confiança",
      "driver.body":
        "Contato direto com quem conduz a operação, garantindo agilidade, discrição e alinhamento em cada atendimento.",
      "driver.item1": "Atendimento regional com conhecimento das principais rotas.",
      "driver.item2":
        "Comunicação em português, com suporte em inglês e espanhol básico.",
      "driver.item3":
        "Confirmações e atualizações com resposta rápida.",
      "business.title":
        "Por que empresas e hotéis escolhem a C-Level Mobility",
      "business.subtitle":
        "Uma operação pensada para unir boa apresentação, previsibilidade de agenda e facilidade de coordenação.",
      "business.benefit1Title": "Previsibilidade operacional",
      "business.benefit1Body":
        "Agenda organizada com antecedência para reduzir ruído, atraso e improviso.",
      "business.benefit2Title": "Boa apresentação",
      "business.benefit2Body":
        "Atendimento compatível com executivos, hóspedes, fornecedores e convidados.",
      "business.benefit3Title": "Mais continuidade",
      "business.benefit3Body":
        "Ajustes de rotina, locais frequentes e preferências operacionais ao longo do relacionamento.",
      "business.panelLabel": "Rotina corporativa",
      "business.panelTitle":
        "Quando a agenda é importante, previsibilidade vira parte do serviço",
      "business.panelBody":
        "Ideal para empresas e hotéis que precisam de atendimento recorrente, bem apresentado e fácil de coordenar.",
      "business.panelCta": "Solicitar proposta",
      "contact.title": "Solicite uma proposta",
      "contact.subtitle":
        "Envie sua necessidade pontual ou recorrente e receba um retorno rápido com proposta alinhada à sua agenda.",
      "contact.legendClient": "Dados do contato",
      "contact.nameLabel": "Nome completo",
      "contact.companyLabel": "Empresa / hotel (opcional)",
      "contact.emailLabel": "E-mail",
      "contact.phoneLabel": "Telefone / WhatsApp",
      "contact.legendTrip": "Detalhes da viagem",
      "contact.originLabel": "Origem",
      "contact.destinationLabel": "Destino",
      "contact.dateLabel": "Data",
      "contact.timeLabel": "Horário desejado",
      "contact.passengersLabel": "Número de passageiros (até 3)",
      "contact.serviceTypeLabel": "Tipo de serviço",
      "contact.serviceTypeAirport": "Transfer aeroporto (GRU, CGH, VCP)",
      "contact.serviceTypeEvent": "Evento / compromisso corporativo na região",
      "contact.serviceTypeRecurring": "Contrato mensal / rotina recorrente",
      "contact.notesLabel": "Observações adicionais (opcional)",
      "contact.submit": "Enviar solicitação",
      "contact.disclaimer":
        "Após o envio, retornamos rapidamente para confirmar os detalhes da viagem.",
      "contact.sidebarTitle": "Atendimento sob agenda",
      "contact.sidebarStep1":
        "Você envia os dados da demanda pontual ou da rotina recorrente.",
      "contact.sidebarStep2":
        "Retornamos com proposta alinhada ao roteiro, à janela e à frequência.",
      "contact.sidebarStep3":
        "Com a confirmação, organizamos o atendimento e validamos os detalhes.",
      "contact.sidebarNote":
        "Processo objetivo para quem precisa de resposta rápida e coordenação confiável.",
      "footer.copy":
        "© C-Level Mobility. Mobilidade executiva com disponibilidade programada.",
      "footer.languages":
        "Atendimento em português, inglês e espanhol básico.",
    },
    en: {
      "brand.name": "C-Level Mobility",
      "brand.tagline": "Executive mobility with scheduled availability",
      "nav.services": "Services",
      "nav.fleet": "Fleet",
      "nav.business": "For companies",
      "nav.contact": "Contact",
      "nav.cta": "WhatsApp",
      "hero.kicker": "Availability • discretion • predictability",
      "hero.title":
        "Executive mobility with scheduled availability for companies and executives",
      "hero.subtitle":
        "Schedule-based service in Jundiaí, Campinas and São Paulo for airports, meetings, events and recurring corporate routines.",
      "hero.ctaPrimary": "Request a quote",
      "hero.ctaSecondary": "Chat on WhatsApp",
      "hero.note":
        "Direct contact, clear communication and an operation designed for teams that need predictability, professional presentation and confidence day after day.",
      "hero.badge1Label": "Model",
      "hero.badge1Title": "Schedule-based",
      "hero.badge1Body":
        "Bookings and alignments handled in advance, with less operational noise.",
      "hero.badge2Label": "Routine",
      "hero.badge2Title": "Organized resource",
      "hero.badge2Body":
        "Service designed for strategic trips and recurring demands.",
      "hero.badge3Label": "Relationship",
      "hero.badge3Title": "More continuity",
      "hero.badge3Body":
        "Better planning over time, with more context about your routine.",
      "hero.cardLabel": "Schedule-based service",
      "hero.cardTitle": "Availability that follows your agenda",
      "hero.cardBody":
        "Lean operation, direct communication and executive standard for strategic transfers, corporate appointments and recurring demands.",
      "hero.point1": "Vehicle and driver organized around your agenda.",
      "hero.point2":
        "More predictability for airports, meetings and recurring time windows.",
      "hero.point3":
        "Fast WhatsApp and email contact, without intermediaries.",
      "hero.cardFootnote":
        "Jundiaí, Campinas and São Paulo with a focus on corporate routines, guests and recurring agendas.",
      "services.title": "How we support you",
      "services.subtitle":
        "From one-off transfers to recurring routines, with organized service and professional standards.",
      "services.airports.title": "Airport transfers (GRU, CGH, VCP)",
      "services.airports.body":
        "Scheduled service for arrivals and departures, aligned in advance with flight, timing and window.",
      "services.airports.item1":
        "Up to 3 passengers with luggage, in an executive sedan.",
      "services.airports.item2":
        "Planning based on flight, time window and route.",
      "services.airports.item3":
        "Fast confirmation of the key details before the operation.",
      "services.airports.note":
        "Ideal for executives, guests and visitors in strategic trips.",
      "services.events.title": "Events and corporate appointments in the region",
      "services.events.body":
        "Service for meetings, technical visits, dinners and events with the route aligned to the client's agenda.",
      "services.events.item1":
        "Route agreed in advance according to your schedule.",
      "services.events.item2":
        "Pick-up and drop-off at industries, hotels and event venues.",
      "services.events.item3":
        "Flexibility for strategic stops under prior planning.",
      "services.events.note":
        "More organization for executive agendas and strategic trips.",
      "services.recurring.title": "Recurring corporate routines",
      "services.recurring.body":
        "Planned service for frequent agendas, with window, allowance and priority defined around the client's needs.",
      "services.recurring.item1":
        "A strong fit for directors, recurring guests and technical visits.",
      "services.recurring.item2":
        "Planning around frequent places and recurring schedules.",
      "services.recurring.item3":
        "More operational and financial predictability for the company.",
      "services.recurring.note":
        "Best suited for teams that need continuity, not only isolated trips.",
      "fleet.title": "Executive standard",
      "fleet.subtitle":
        "Modern, clean executive sedan prepared for airports, corporate agendas and recurring routines.",
      "fleet.vehicleTitle": "Toyota Yaris 2023 XS silver/gray – up to 3 passengers",
      "fleet.vehicleBody":
        "Executive sedan for strategic appointments and recurring corporate routines, with comfort, discretion and professional presentation.",
      "fleet.detailPassengersLabel": "Passenger capacity",
      "fleet.detailPassengersValue": "Up to 3 passengers on planned trips.",
      "fleet.detailUsageLabel": "Main use",
      "fleet.detailUsageValue":
        "Airports, hotels, meetings, events and recurring routines.",
      "fleet.detailComfortLabel": "Comfort",
      "fleet.detailComfortValue":
        "Air conditioning, clean and discreet environment, suitable for work conversations or rest.",
      "fleet.detailLuggageLabel": "Luggage",
      "fleet.detailLuggageValue":
        "Suitable for typical luggage on short and medium business trips.",
      "fleet.note":
        "Professional image and comfort in every service.",
      "driver.title": "Service that builds confidence",
      "driver.body":
        "Direct contact with the person running the operation, ensuring agility, discretion and alignment in every service.",
      "driver.item1": "Brazilian driver living in the Jundiaí area.",
      "driver.item2":
        "Fluent Portuguese, English and basic Spanish for simple interactions with international guests.",
      "driver.item3":
        "Preferred communication via WhatsApp for confirmations and updates.",
      "business.title": "Why companies and hotels choose C-Level Mobility",
      "business.subtitle":
        "An operation designed to combine professional presentation, schedule predictability and easy coordination.",
      "business.benefit1Title": "Predictable routine",
      "business.benefit1Body":
        "Agenda organized in advance to reduce noise, delays and improvisation.",
      "business.benefit2Title": "Professional presentation",
      "business.benefit2Body":
        "Service suited to executives, guests, suppliers and invited visitors.",
      "business.benefit3Title": "More continuity",
      "business.benefit3Body":
        "Routine adjustments, frequent places and operational preferences improve over time.",
      "business.panelLabel": "Corporate routine",
      "business.panelTitle":
        "When the agenda matters, predictability becomes part of the service",
      "business.panelBody":
        "Ideal for companies and hotels that need recurring service, good presentation and easy coordination.",
      "business.panelCta": "Request proposal",
      "contact.title": "Request a quote",
      "contact.subtitle":
        "Send your one-off or recurring need and receive a fast response with a proposal aligned to your agenda.",
      "contact.legendClient": "Contact details",
      "contact.nameLabel": "Full name",
      "contact.companyLabel": "Company / hotel (optional)",
      "contact.emailLabel": "Email",
      "contact.phoneLabel": "Phone / WhatsApp",
      "contact.legendTrip": "Trip details",
      "contact.originLabel": "Origin",
      "contact.destinationLabel": "Destination",
      "contact.dateLabel": "Date",
      "contact.timeLabel": "Desired time",
      "contact.passengersLabel": "Number of passengers (up to 3)",
      "contact.serviceTypeLabel": "Service type",
      "contact.serviceTypeAirport": "Airport transfer (GRU, CGH, VCP)",
      "contact.serviceTypeEvent":
        "Event / corporate appointment in the region",
      "contact.serviceTypeRecurring": "Monthly contract / recurring routine",
      "contact.notesLabel": "Additional notes (optional)",
      "contact.submit": "Send request",
      "contact.disclaimer":
        "After you send, we will contact you shortly to align the details of your trip.",
      "contact.sidebarTitle": "Schedule-based service",
      "contact.sidebarStep1":
        "You send the details of a one-off demand or a recurring routine.",
      "contact.sidebarStep2":
        "We reply with a proposal aligned to route, time window and frequency.",
      "contact.sidebarStep3":
        "Once confirmed, we organize the service and validate the key details.",
      "contact.sidebarNote":
        "An objective process for teams that need quick replies and reliable coordination.",
      "footer.copy":
        "© C-Level Mobility. Executive mobility with scheduled availability.",
      "footer.languages":
        "Content available in Portuguese, English and basic Spanish.",
    },
    es: {
      "brand.name": "C-Level Mobility",
      "brand.tagline": "Movilidad ejecutiva con disponibilidad programada",
      "nav.services": "Servicios",
      "nav.fleet": "Flota",
      "nav.business": "Para empresas",
      "nav.contact": "Contacto",
      "nav.cta": "WhatsApp",
      "hero.kicker": "Disponibilidad • discreción • previsibilidad",
      "hero.title":
        "Movilidad ejecutiva con disponibilidad programada para empresas y ejecutivos",
      "hero.subtitle":
        "Servicio bajo agenda en Jundiaí, Campinas y São Paulo para aeropuertos, reuniones, eventos y rutinas corporativas recurrentes.",
      "hero.ctaPrimary": "Solicitar cotización",
      "hero.ctaSecondary": "Hablar por WhatsApp",
      "hero.note":
        "Contacto directo, comunicación clara y una operación pensada para quienes necesitan previsibilidad, buena presentación y confianza en el día a día.",
      "hero.badge1Label": "Modelo",
      "hero.badge1Title": "Bajo agenda",
      "hero.badge1Body":
        "Reservas y alineaciones hechas con antelación, con menos ruido operativo.",
      "hero.badge2Label": "Rutina",
      "hero.badge2Title": "Recurso organizado",
      "hero.badge2Body":
        "Atención diseñada para compromisos estratégicos y demandas recurrentes.",
      "hero.badge3Label": "Relación",
      "hero.badge3Title": "Más continuidad",
      "hero.badge3Body":
        "Mejor planificación con el tiempo, con más contexto sobre su rutina.",
      "hero.cardLabel": "Atención bajo agenda",
      "hero.cardTitle":
        "Disponibilidad que acompaña su agenda",
      "hero.cardBody":
        "Operación ágil, contacto directo y estándar ejecutivo para traslados estratégicos, compromisos corporativos y demandas recurrentes.",
      "hero.point1": "Vehículo y conductor organizados según su agenda.",
      "hero.point2":
        "Más previsibilidad para aeropuertos, reuniones y franjas recurrentes.",
      "hero.point3":
        "Contacto rápido por WhatsApp y correo, sin intermediarios.",
      "hero.cardFootnote":
        "Jundiaí, Campinas y São Paulo con foco en rutina corporativa, invitados y agendas recurrentes.",
      "services.title": "Cómo atendemos",
      "services.subtitle":
        "Desde el traslado puntual hasta la rutina recurrente, con atención organizada y estándar profesional.",
      "services.airports.title": "Traslados a aeropuertos (GRU, CGH, VCP)",
      "services.airports.body":
        "Atención programada para llegadas y salidas con alineación previa de vuelo, horario y franja.",
      "services.airports.item1":
        "Hasta 3 pasajeros con equipaje, en vehículo sedán ejecutivo.",
      "services.airports.item2":
        "Planificación según vuelo, franja horaria y ruta.",
      "services.airports.item3":
        "Confirmación rápida de los detalles antes de la operación.",
      "services.airports.note":
        "Ideal para ejecutivos, huéspedes e invitados en desplazamientos estratégicos.",
      "services.events.title":
        "Eventos y compromisos corporativos en la región",
      "services.events.body":
        "Atención para reuniones, visitas técnicas, cenas y eventos con ruta alineada a la agenda del cliente.",
      "services.events.item1":
        "Recorrido acordado con antelación, de acuerdo con su agenda.",
      "services.events.item2":
        "Embarque y desembarque en industrias, hoteles y centros de eventos.",
      "services.events.item3":
        "Flexibilidad para paradas estratégicas bajo planificación.",
      "services.events.note":
        "Más organización para agendas ejecutivas y desplazamientos estratégicos.",
      "services.recurring.title": "Rutinas corporativas recurrentes",
      "services.recurring.body":
        "Atención programada para agendas frecuentes, con franja, franquicia y prioridad definidas según la necesidad.",
      "services.recurring.item1":
        "Adecuado para directorio, huéspedes recurrentes y visitas técnicas.",
      "services.recurring.item2":
        "Planificación con lugares frecuentes y horarios recurrentes.",
      "services.recurring.item3":
        "Más previsibilidad operativa y financiera para la empresa.",
      "services.recurring.note":
        "Más adecuado para quien necesita continuidad, no solo desplazamientos aislados.",
      "fleet.title": "Estándar ejecutivo",
      "fleet.subtitle":
        "Sedán ejecutivo moderno, limpio y preparado para aeropuertos, agendas corporativas y jornadas recurrentes.",
      "fleet.vehicleTitle":
        "Toyota Yaris 2023 XS plateado/gris – hasta 3 pasajeros",
      "fleet.vehicleBody":
        "Sedán ejecutivo para compromisos estratégicos y rutinas corporativas, con comodidad, discreción y buena presentación.",
      "fleet.detailPassengersLabel": "Capacidad de pasajeros",
      "fleet.detailPassengersValue": "Hasta 3 pasajeros en viajes planificados.",
      "fleet.detailUsageLabel": "Uso principal",
      "fleet.detailUsageValue":
        "Aeropuertos, hoteles, reuniones, eventos y rutinas recurrentes.",
      "fleet.detailComfortLabel": "Comodidad",
      "fleet.detailComfortValue":
        "Climatización, ambiente limpio y discreto, pensado para conversaciones de trabajo o descanso.",
      "fleet.detailLuggageLabel": "Equipaje",
      "fleet.detailLuggageValue":
        "Adecuado para equipaje típico de viajes de negocios de corta y media duración.",
      "fleet.note":
        "Imagen profesional y comodidad en cada atención.",
      "driver.title": "Atención que transmite confianza",
      "driver.body":
        "Contacto directo con quien conduce la operación, garantizando agilidad, discreción y alineación en cada atención.",
      "driver.item1":
        "Conductor brasileño residente en la región de Jundiaí.",
      "driver.item2":
        "Portugués fluido, inglés y español en nivel suficiente para interacciones básicas con huéspedes internacionales.",
      "driver.item3":
        "Comunicación preferente por WhatsApp para confirmaciones y actualizaciones.",
      "business.title":
        "Por qué empresas y hoteles eligen C-Level Mobility",
      "business.subtitle":
        "Una operación pensada para unir buena presentación, previsibilidad de agenda y facilidad de coordinación.",
      "business.benefit1Title": "Rutina previsible",
      "business.benefit1Body":
        "Agenda organizada con antelación para reducir ruido, retrasos e improvisación.",
      "business.benefit2Title": "Buena presentación",
      "business.benefit2Body":
        "Atención compatible con ejecutivos, huéspedes, proveedores e invitados.",
      "business.benefit3Title": "Más continuidad",
      "business.benefit3Body":
        "Ajustes de rutina, lugares frecuentes y preferencias operativas a lo largo de la relación.",
      "business.panelLabel": "Rutina corporativa",
      "business.panelTitle":
        "Cuando la agenda importa, la previsibilidad pasa a ser parte del servicio",
      "business.panelBody":
        "Ideal para empresas y hoteles que necesitan atención recurrente, buena presentación y coordinación sencilla.",
      "business.panelCta": "Solicitar propuesta",
      "contact.title": "Solicite una propuesta",
      "contact.subtitle":
        "Envíe su necesidad puntual o recurrente y reciba una respuesta rápida con una propuesta alineada a su agenda.",
      "contact.legendClient": "Datos de contacto",
      "contact.nameLabel": "Nombre completo",
      "contact.companyLabel": "Empresa / hotel (opcional)",
      "contact.emailLabel": "Correo electrónico",
      "contact.phoneLabel": "Teléfono / WhatsApp",
      "contact.legendTrip": "Detalles del viaje",
      "contact.originLabel": "Origen",
      "contact.destinationLabel": "Destino",
      "contact.dateLabel": "Fecha",
      "contact.timeLabel": "Horario deseado",
      "contact.passengersLabel": "Número de pasajeros (hasta 3)",
      "contact.serviceTypeLabel": "Tipo de servicio",
      "contact.serviceTypeAirport": "Traslado a aeropuerto (GRU, CGH, VCP)",
      "contact.serviceTypeEvent":
        "Evento / compromiso corporativo en la región",
      "contact.serviceTypeRecurring": "Contrato mensual / rutina recurrente",
      "contact.notesLabel": "Observaciones adicionales (opcional)",
      "contact.submit": "Enviar solicitud",
      "contact.disclaimer":
        "Al enviar, será contactado en breve para alinear los detalles de su viaje.",
      "contact.sidebarTitle": "Atención bajo agenda",
      "contact.sidebarStep1":
        "Usted envía los datos de la demanda puntual o de la rutina recurrente.",
      "contact.sidebarStep2":
        "Respondemos con una propuesta alineada a la ruta, la franja y la frecuencia.",
      "contact.sidebarStep3":
        "Con su confirmación, organizamos la atención y validamos los detalles.",
      "contact.sidebarNote":
        "Proceso objetivo para quien necesita respuesta rápida y coordinación confiable.",
      "footer.copy":
        "© C-Level Mobility. Movilidad ejecutiva con disponibilidad programada.",
      "footer.languages":
        "Contenido disponible en portugués, inglés y español básico.",
    },
  };

  function setLanguage(lang) {
    var dict = translations[lang] || translations.pt;
    var elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : lang === "en" ? "en" : "es";
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLanguage("pt");
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-lang"));
      });
    });
  });
})();
