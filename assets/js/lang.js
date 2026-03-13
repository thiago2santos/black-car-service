/**
 * i18n – troca de idioma (pt-BR / en / es) na landing C-Level Mobility.
 * Depende de elementos com data-i18n e botões com data-lang.
 */
(function () {
  "use strict";

  const translations = {
    pt: {
      "brand.name": "C-Level Mobility",
      "brand.tagline": "Transporte executivo em Jundiaí",
      "nav.services": "Serviços",
      "nav.fleet": "Frota",
      "nav.business": "Para empresas",
      "nav.contact": "Contato",
      "hero.kicker": "Transporte executivo • Jundiaí • Campinas • São Paulo",
      "hero.title":
        "C-Level Mobility: transporte executivo em Jundiaí com foco em transfers para aeroportos",
      "hero.subtitle":
        "Serviço sob medida para indústrias, hotéis e executivos de Jundiaí e região, em viagens de até 3 passageiros para aeroportos e eventos em Campinas e São Paulo.",
      "hero.ctaPrimary": "Solicitar cotação",
      "hero.ctaSecondary": "Falar por WhatsApp",
      "hero.note":
        "Motorista brasileiro com experiência em atendimento executivo, fluente em português, com inglês e espanhol básico para receber hóspedes e executivos internacionais.",
      "hero.cardTitle": "Foco em conforto, segurança e pontualidade",
      "hero.cardBody":
        "Viagens dedicadas para até 3 passageiros em sedan executivo Toyota Yaris 2023 XS prata/cinza, saindo de Jundiaí para aeroportos (GRU, CGH, VCP) e eventos corporativos na região.",
      "hero.point1": "Traslados dedicados, sem paradas desnecessárias.",
      "hero.point2": "Horário combinado com antecedência, pensado para rotinas corporativas.",
      "hero.point3": "Comunicação clara por WhatsApp antes e depois de cada viagem.",
      "hero.cardFootnote":
        "Atendemos Jundiaí, Campinas e São Paulo com o mesmo padrão de conforto, segurança e pontualidade.",
      "services.title": "O que oferecemos para você",
      "services.subtitle":
        "Transfers para aeroportos e deslocamentos corporativos em Jundiaí, Campinas e São Paulo — sempre com horário combinado e comunicação clara.",
      "services.airports.title": "Transfers para aeroportos (GRU, CGH, VCP)",
      "services.airports.body":
        "Viagens dedicadas entre Jundiaí e os principais aeroportos de São Paulo e Campinas, com planejamento de horário para chegadas e partidas de voos.",
      "services.airports.item1": "Até 3 passageiros com bagagens, em veículo sedan executivo.",
      "services.airports.item2": "Horário sugerido em função do aeroporto e do horário do voo.",
      "services.airports.item3": "Comunicação prévia por WhatsApp para confirmação de detalhes.",
      "services.airports.note":
        "Ideal para executivos, convidados de empresas, hóspedes de hotéis e visitantes internacionais hospedados em Jundiaí.",
      "services.events.title": "Eventos e compromissos corporativos na região",
      "services.events.body":
        "Deslocamentos para reuniões, visitas técnicas, jantares e eventos corporativos em Jundiaí, Campinas e São Paulo, mantendo a rotina do executivo organizada.",
      "services.events.item1": "Roteiro combinado com antecedência, de acordo com sua agenda.",
      "services.events.item2": "Embarque e desembarque em indústrias, hotéis e centros de eventos.",
      "services.events.item3": "Possibilidade de múltiplas paradas dentro da mesma região.",
      "services.events.note":
        "Você conta com acompanhamento próximo e comunicação clara durante todo o deslocamento.",
      "fleet.title": "Conforto e qualidade em cada viagem",
      "fleet.subtitle":
        "Sedan executivo Toyota Yaris 2023 XS prata/cinza, com espaço para até 3 passageiros em todas as rotas para aeroportos e eventos na região.",
      "fleet.vehicleTitle": "Toyota Yaris 2023 XS prata/cinza – até 3 passageiros",
      "fleet.vehicleBody":
        "Sedan moderno, confortável e adequado ao uso executivo diário, ideal para transfers entre Jundiaí e os principais aeroportos e polos empresariais da região.",
      "fleet.detailPassengersLabel": "Capacidade de passageiros",
      "fleet.detailPassengersValue": "Até 3 passageiros em viagens planejadas.",
      "fleet.detailUsageLabel": "Uso principal",
      "fleet.detailUsageValue":
        "Transfers para aeroportos e eventos corporativos na região.",
      "fleet.detailComfortLabel": "Conforto",
      "fleet.detailComfortValue":
        "Climatização, ambiente limpo e discreto, pensado para conversas de trabalho ou descanso.",
      "fleet.detailLuggageLabel": "Bagagens",
      "fleet.detailLuggageValue":
        "Adequado para bagagem típica de viagens de negócios de curto e médio prazo.",
      "fleet.note": "Veículo sempre limpo e preparado para viagens executivas.",
      "driver.title": "Motorista e atendimento",
      "driver.body":
        "Atendimento direto pelo motorista: comunicação clara, pontualidade e acompanhamento próximo em cada viagem.",
      "driver.item1": "Motorista brasileiro residente na região de Jundiaí.",
      "driver.item2":
        "Português fluente, inglês e espanhol em nível suficiente para interações básicas com hóspedes internacionais.",
      "driver.item3":
        "Comunicação preferencial por WhatsApp para confirmações e atualizações.",
      "business.title": "Para empresas, indústrias e hotéis da região",
      "business.subtitle":
        "Um padrão consistente de transporte executivo para sua empresa, seus convidados e hóspedes em Jundiaí e região.",
      "business.benefit1Title": "Rotina previsível",
      "business.benefit1Body":
        "Horários combinados com antecedência, pensados para início e fim de turnos, reuniões e conexões em aeroportos.",
      "business.benefit2Title": "Experiência do passageiro",
      "business.benefit2Body":
        "Ambiente discreto e confortável para hóspedes, fornecedores e executivos convidados, com comunicação em inglês quando necessário.",
      "business.benefit3Title": "Relacionamento contínuo",
      "business.benefit3Body":
        "Ajustes de rota e horário conforme sua necessidade, com um único ponto de contato para todas as viagens.",
      "contact.title": "Solicite uma cotação",
      "contact.subtitle":
        "Envie os detalhes da sua próxima viagem para receber uma resposta personalizada para sua empresa, hotel ou necessidade executiva em Jundiaí e região.",
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
      "contact.notesLabel": "Observações adicionais (opcional)",
      "contact.submit": "Enviar solicitação",
      "contact.disclaimer":
        "Ao enviar, você será contatado em breve para alinharmos os detalhes da sua viagem.",
      "contact.sidebarTitle": "Como funciona",
      "contact.sidebarStep1":
        "Você envia os detalhes da viagem pelo formulário ou WhatsApp.",
      "contact.sidebarStep2":
        "Retornamos com uma proposta alinhada ao seu horário e à sua necessidade.",
      "contact.sidebarStep3":
        "Após sua confirmação, o horário é reservado e os detalhes são confirmados antes do embarque.",
      "contact.sidebarNote":
        "Resposta rápida e comunicação objetiva por WhatsApp ou e-mail.",
      "footer.copy": "© C-Level Mobility. Transporte executivo em Jundiaí e região.",
      "footer.languages":
        "Conteúdo disponível em português, inglês e espanhol básico.",
    },
    en: {
      "brand.name": "C-Level Mobility",
      "brand.tagline": "Executive transport in Jundiaí",
      "nav.services": "Services",
      "nav.fleet": "Fleet",
      "nav.business": "For companies",
      "nav.contact": "Contact",
      "hero.kicker": "Executive transport • Jundiaí • Campinas • São Paulo",
      "hero.title":
        "C-Level Mobility: executive transport from Jundiaí with a focus on airport transfers",
      "hero.subtitle":
        "Tailored service for industries, hotels and executives in Jundiaí and surroundings, on trips of up to 3 passengers to airports and events in Campinas and São Paulo.",
      "hero.ctaPrimary": "Request a quote",
      "hero.ctaSecondary": "Chat on WhatsApp",
      "hero.note":
        "Brazilian driver with experience in executive service, fluent in Portuguese, speaking English and basic Spanish to welcome international guests and executives.",
      "hero.cardTitle": "Focus on comfort, safety and punctuality",
      "hero.cardBody":
        "Dedicated trips for up to 3 passengers in a Toyota Yaris 2023 XS silver/gray executive sedan, departing from Jundiaí to airports (GRU, CGH, VCP) and corporate events in the region.",
      "hero.point1": "Dedicated transfers with no unnecessary stops.",
      "hero.point2":
        "Schedule agreed in advance, designed around corporate routines.",
      "hero.point3":
        "Clear WhatsApp communication before and after each trip.",
      "hero.cardFootnote":
        "We serve Jundiaí, Campinas and São Paulo with the same standard of comfort, safety and punctuality.",
      "services.title": "What we offer you",
      "services.subtitle":
        "Airport transfers and corporate trips in Jundiaí, Campinas and São Paulo — always with a set schedule and clear communication.",
      "services.airports.title": "Airport transfers (GRU, CGH, VCP)",
      "services.airports.body":
        "Dedicated trips between Jundiaí and the main airports of São Paulo and Campinas, with timing planned for flight arrivals and departures.",
      "services.airports.item1":
        "Up to 3 passengers with luggage, in an executive sedan.",
      "services.airports.item2":
        "Suggested pickup time based on airport and flight schedule.",
      "services.airports.item3":
        "Prior WhatsApp confirmation for key trip details.",
      "services.airports.note":
        "Ideal for executives, corporate guests, hotel guests and international visitors staying in Jundiaí.",
      "services.events.title": "Events and corporate appointments in the region",
      "services.events.body":
        "Trips for meetings, technical visits, dinners and corporate events in Jundiaí, Campinas and São Paulo, keeping the executive's day organized.",
      "services.events.item1":
        "Route agreed in advance according to your schedule.",
      "services.events.item2":
        "Pick-up and drop-off at industries, hotels and event venues.",
      "services.events.item3":
        "Possibility of multiple stops within the same region.",
      "services.events.note":
        "You get close follow-up and clear communication throughout your trip.",
      "fleet.title": "Comfort and quality on every trip",
      "fleet.subtitle":
        "Toyota Yaris 2023 XS silver/gray executive sedan, with room for up to 3 passengers on all routes to airports and events in the region.",
      "fleet.vehicleTitle": "Toyota Yaris 2023 XS silver/gray – up to 3 passengers",
      "fleet.vehicleBody":
        "Modern, comfortable sedan suited to everyday executive use, ideal for transfers between Jundiaí and the main airports and business hubs in the region.",
      "fleet.detailPassengersLabel": "Passenger capacity",
      "fleet.detailPassengersValue": "Up to 3 passengers on planned trips.",
      "fleet.detailUsageLabel": "Main use",
      "fleet.detailUsageValue":
        "Airport transfers and corporate events in the region.",
      "fleet.detailComfortLabel": "Comfort",
      "fleet.detailComfortValue":
        "Air conditioning, clean and discreet environment, suitable for work conversations or rest.",
      "fleet.detailLuggageLabel": "Luggage",
      "fleet.detailLuggageValue":
        "Suitable for typical luggage on short and medium business trips.",
      "fleet.note":
        "Vehicle always clean and ready for executive travel.",
      "driver.title": "Driver and service",
      "driver.body":
        "Direct contact with your driver: clear communication, punctuality and close follow-up on every trip.",
      "driver.item1": "Brazilian driver living in the Jundiaí area.",
      "driver.item2":
        "Fluent Portuguese, English and basic Spanish for simple interactions with international guests.",
      "driver.item3":
        "Preferred communication via WhatsApp for confirmations and updates.",
      "business.title": "For companies, industries and hotels in the region",
      "business.subtitle":
        "A consistent executive transport standard for your company, your guests and visitors in Jundiaí and the region.",
      "business.benefit1Title": "Predictable routine",
      "business.benefit1Body":
        "Times agreed in advance, aligned with shifts, meetings and airport connections.",
      "business.benefit2Title": "Passenger experience",
      "business.benefit2Body":
        "Discreet, comfortable environment for guests, suppliers and invited executives, with English communication when needed.",
      "business.benefit3Title": "Ongoing relationship",
      "business.benefit3Body":
        "Route and schedule adjustments to fit your needs, with a single point of contact for all trips.",
      "contact.title": "Request a quote",
      "contact.subtitle":
        "Send the details of your next trip to receive a tailored response for your company, hotel or executive need in Jundiaí and surroundings.",
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
      "contact.notesLabel": "Additional notes (optional)",
      "contact.submit": "Send request",
      "contact.disclaimer":
        "After you send, we will contact you shortly to align the details of your trip.",
      "contact.sidebarTitle": "How it works",
      "contact.sidebarStep1":
        "You send trip details through the form or WhatsApp.",
      "contact.sidebarStep2":
        "We reply with a proposal that fits your schedule and needs.",
      "contact.sidebarStep3":
        "Once you confirm, the time is reserved and we confirm details before pickup.",
      "contact.sidebarNote":
        "Quick response and clear communication by WhatsApp or email.",
      "footer.copy":
        "© C-Level Mobility. Executive transport in Jundiaí and region.",
      "footer.languages":
        "Content available in Portuguese, English and basic Spanish.",
    },
    es: {
      "brand.name": "C-Level Mobility",
      "brand.tagline": "Transporte ejecutivo en Jundiaí",
      "nav.services": "Servicios",
      "nav.fleet": "Flota",
      "nav.business": "Para empresas",
      "nav.contact": "Contacto",
      "hero.kicker": "Transporte ejecutivo • Jundiaí • Campinas • São Paulo",
      "hero.title":
        "C-Level Mobility: transporte ejecutivo desde Jundiaí con foco en traslados a aeropuertos",
      "hero.subtitle":
        "Servicio a medida para industrias, hoteles y ejecutivos de Jundiaí y región, en viajes de hasta 3 pasajeros hacia aeropuertos y eventos en Campinas y São Paulo.",
      "hero.ctaPrimary": "Solicitar cotización",
      "hero.ctaSecondary": "Hablar por WhatsApp",
      "hero.note":
        "Conductor brasileño con experiencia en atención ejecutiva, fluente en portugués, con inglés y español básico para recibir huéspedes y ejecutivos internacionales.",
      "hero.cardTitle":
        "Enfoque en comodidad, seguridad y puntualidad",
      "hero.cardBody":
        "Viajes dedicados para hasta 3 pasajeros en sedán ejecutivo Toyota Yaris 2023 XS plateado/gris, saliendo de Jundiaí hacia aeropuertos (GRU, CGH, VCP) y eventos corporativos en la región.",
      "hero.point1": "Traslados dedicados, sin paradas innecesarias.",
      "hero.point2":
        "Horario acordado con antelación, pensado para rutinas corporativas.",
      "hero.point3":
        "Comunicación clara por WhatsApp antes y después de cada viaje.",
      "hero.cardFootnote":
        "Atendemos Jundiaí, Campinas y São Paulo con el mismo estándar de comodidad, seguridad y puntualidad.",
      "services.title": "Lo que ofrecemos para usted",
      "services.subtitle":
        "Traslados a aeropuertos y desplazamientos corporativos en Jundiaí, Campinas y São Paulo — siempre con horario acordado y comunicación clara.",
      "services.airports.title": "Traslados a aeropuertos (GRU, CGH, VCP)",
      "services.airports.body":
        "Viajes dedicados entre Jundiaí y los principales aeropuertos de São Paulo y Campinas, con horarios planificados para llegadas y salidas de vuelos.",
      "services.airports.item1":
        "Hasta 3 pasajeros con equipaje, en vehículo sedán ejecutivo.",
      "services.airports.item2":
        "Horario sugerido según el aeropuerto y el horario del vuelo.",
      "services.airports.item3":
        "Confirmación previa por WhatsApp para los detalles del viaje.",
      "services.airports.note":
        "Ideal para ejecutivos, invitados de empresas, huéspedes de hoteles y visitantes internacionales hospedados en Jundiaí.",
      "services.events.title":
        "Eventos y compromisos corporativos en la región",
      "services.events.body":
        "Desplazamientos para reuniones, visitas técnicas, cenas y eventos corporativos en Jundiaí, Campinas y São Paulo, manteniendo organizada la rutina del ejecutivo.",
      "services.events.item1":
        "Recorrido acordado con antelación, de acuerdo con su agenda.",
      "services.events.item2":
        "Embarque y desembarque en industrias, hoteles y centros de eventos.",
      "services.events.item3":
        "Posibilidad de múltiples paradas dentro de la misma región.",
      "services.events.note":
        "Usted cuenta con acompañamiento cercano y comunicación clara durante todo el desplazamiento.",
      "fleet.title": "Comodidad y calidad en cada viaje",
      "fleet.subtitle":
        "Sedán ejecutivo Toyota Yaris 2023 XS plateado/gris, con espacio para hasta 3 pasajeros en todas las rutas hacia aeropuertos y eventos en la región.",
      "fleet.vehicleTitle":
        "Toyota Yaris 2023 XS plateado/gris – hasta 3 pasajeros",
      "fleet.vehicleBody":
        "Sedán moderno, cómodo y adecuado para el uso ejecutivo diario, ideal para traslados entre Jundiaí y los principales aeropuertos y polos empresariales de la región.",
      "fleet.detailPassengersLabel": "Capacidad de pasajeros",
      "fleet.detailPassengersValue": "Hasta 3 pasajeros en viajes planificados.",
      "fleet.detailUsageLabel": "Uso principal",
      "fleet.detailUsageValue":
        "Traslados a aeropuertos y eventos corporativos en la región.",
      "fleet.detailComfortLabel": "Comodidad",
      "fleet.detailComfortValue":
        "Climatización, ambiente limpio y discreto, pensado para conversaciones de trabajo o descanso.",
      "fleet.detailLuggageLabel": "Equipaje",
      "fleet.detailLuggageValue":
        "Adecuado para equipaje típico de viajes de negocios de corta y media duración.",
      "fleet.note":
        "Vehículo siempre limpio y preparado para viajes ejecutivos.",
      "driver.title": "Conductor y atención",
      "driver.body":
        "Atención directa del conductor: comunicación clara, puntualidad y acompañamiento cercano en cada viaje.",
      "driver.item1":
        "Conductor brasileño residente en la región de Jundiaí.",
      "driver.item2":
        "Portugués fluido, inglés y español en nivel suficiente para interacciones básicas con huéspedes internacionales.",
      "driver.item3":
        "Comunicación preferente por WhatsApp para confirmaciones y actualizaciones.",
      "business.title":
        "Para empresas, industrias y hoteles de la región",
      "business.subtitle":
        "Un estándar consistente de transporte ejecutivo para su empresa, sus invitados y huéspedes en Jundiaí y región.",
      "business.benefit1Title": "Rutina previsible",
      "business.benefit1Body":
        "Horarios acordados con antelación, pensados para turnos, reuniones y conexiones en aeropuertos.",
      "business.benefit2Title": "Experiencia del pasajero",
      "business.benefit2Body":
        "Ambiente discreto y cómodo para huéspedes, proveedores y ejecutivos invitados, con comunicación en inglés cuando sea necesario.",
      "business.benefit3Title": "Relación continua",
      "business.benefit3Body":
        "Ajustes de ruta y horario según su necesidad, con un único punto de contacto para todos los viajes.",
      "contact.title": "Solicite una cotización",
      "contact.subtitle":
        "Envíe los detalles de su próximo viaje para recibir una respuesta personalizada para su empresa, hotel o necesidad ejecutiva en Jundiaí y región.",
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
      "contact.notesLabel": "Observaciones adicionales (opcional)",
      "contact.submit": "Enviar solicitud",
      "contact.disclaimer":
        "Al enviar, será contactado en breve para alinear los detalles de su viaje.",
      "contact.sidebarTitle": "Cómo funciona",
      "contact.sidebarStep1":
        "Usted envía los detalles del viaje por el formulario o por WhatsApp.",
      "contact.sidebarStep2":
        "Respondemos con una propuesta alineada a su horario y a su necesidad.",
      "contact.sidebarStep3":
        "Tras su confirmación, el horario se reserva y confirmamos los detalles antes del embarque.",
      "contact.sidebarNote":
        "Respuesta rápida y comunicación objetiva por WhatsApp o correo electrónico.",
      "footer.copy":
        "© C-Level Mobility. Transporte ejecutivo en Jundiaí y región.",
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
