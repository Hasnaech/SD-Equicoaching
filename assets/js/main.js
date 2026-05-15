/* =============================================================
   SD-Equicoaching — Script principal
   Vanilla JS, sans dépendances externes
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Header sticky avec shadow au scroll ----------------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- Menu burger mobile ---------------------------------- */
  const toggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  if (toggle && navMobile) {
    toggle.addEventListener('click', () => {
      const isOpen = navMobile.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });
    // Fermer le menu si clic en dehors
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        navMobile.classList.remove('open');
        toggle.classList.remove('open');
      }
    });
  }

  /* --- Marquer lien actif dans la navigation --------------- */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Correspondance exacte ou chemin identique
    const linkPath = href.replace(/\/$/, '');
    if (currentPath.endsWith(linkPath) && linkPath !== '') {
      link.classList.add('active');
    } else if ((currentPath === '/' || currentPath === '/index.html') && linkPath === '/index.html') {
      link.classList.add('active');
    }
  });

  /* --- Accordion FAQ --------------------------------------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');

      // Fermer tous les autres
      document.querySelectorAll('.faq-question.open').forEach(openBtn => {
        openBtn.classList.remove('open');
        openBtn.nextElementSibling.classList.remove('open');
      });

      if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
      }
    });
  });

  /* --- Animation d'entrée au scroll (Intersection Observer) */
  const animatables = document.querySelectorAll('.offer-card, .feature-item, .blog-card, .step, .testimonial-card');
  if ('IntersectionObserver' in window && animatables.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    animatables.forEach(el => observer.observe(el));
  }

  /* --- Validation formulaire de contact -------------------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const required = contactForm.querySelectorAll('[required]');
      let valid = true;

      required.forEach(field => {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = '#E53E3E';
          valid = false;
        }
      });

      if (valid) {
        // TODO : brancher un backend / service e-mail (Formspree, Netlify Forms, etc.)
        // Exemple Formspree : remplacer action="" par https://formspree.io/f/VOTRE_ID
        const btn = contactForm.querySelector('[type="submit"]');
        btn.textContent = 'Message envoyé ✓';
        btn.disabled = true;
        btn.style.background = '#2E7D32';
        contactForm.reset();
      } else {
        alert('Merci de remplir tous les champs obligatoires.');
      }
    });
  }

});

/* =============================================================
   CHATBOT AGENT IA — Moteur de qualification multi-étapes
   Intégration future possible avec BotPress, Voiceflow ou API Claude
   ============================================================= */

const SDChatbot = {
  /* Séquence de qualification en 6 étapes */
  steps: [
    {
      id: 'welcome',
      message: "Bonjour 👋 Je suis l'assistant SD-Equicoaching. En quelques questions, je vais identifier la solution la plus adaptée à votre situation. Quel est votre profil ?",
      choices: ['Manager / Cadre', 'Dirigeant(e)', 'RH / DRH', 'Équipe / Groupe', 'Particulier']
    },
    {
      id: 'need',
      message: "Merci ! Quel est votre besoin principal ?",
      choices: [
        'Gérer des comportements difficiles au travail',
        'Développer mes compétences de manager',
        'Renforcer la cohésion de mon équipe',
        'Réduire mon stress / mieux vivre mes émotions',
        'Organiser un séminaire / team building'
      ]
    },
    {
      id: 'format',
      message: "Quelle modalité vous convient le mieux ?",
      choices: ['En ligne (distanciel)', 'Présentiel (Paris / Île-de-France)', 'Mixte (hybride)', 'Je ne sais pas encore']
    },
    {
      id: 'team_size',
      message: "Combien de personnes sont concernées ?",
      choices: ['Juste moi (individuel)', '2 à 5 personnes', '6 à 15 personnes', '+ de 15 personnes']
    },
    {
      id: 'urgency',
      message: "Dans quel délai souhaitez-vous commencer ?",
      choices: ['Le plus vite possible (< 1 mois)', 'Dans 1 à 3 mois', 'Dans 3 à 6 mois', "Je suis en exploration"]
    },
    {
      id: 'contact_ok',
      message: "Parfait ! Sur la base de vos réponses, je peux vous proposer une offre personnalisée. Souhaitez-vous être recontacté(e) par Sabrina pour un échange découverte gratuit de 30 min ?",
      choices: ['Oui, je veux être rappelé(e)', 'Je préfère envoyer un email', 'Je veux consulter les offres en ligne']
    }
  ],

  answers: {},
  currentStep: 0,

  init() {
    this.container = document.getElementById('chat-messages');
    this.inputEl   = document.getElementById('chat-input');
    this.sendBtn   = document.getElementById('chat-send');
    if (!this.container) return;

    // Délai d'apparition du premier message
    setTimeout(() => this.showStep(0), 600);

    if (this.sendBtn) {
      this.sendBtn.addEventListener('click', () => this.handleTextInput());
    }
    if (this.inputEl) {
      this.inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.handleTextInput();
      });
    }
  },

  showStep(idx) {
    if (idx >= this.steps.length) { this.showEnd(); return; }
    const step = this.steps[idx];
    this.addBotMessage(step.message, step.choices);
  },

  addBotMessage(text, choices = []) {
    const msgEl = document.createElement('div');
    msgEl.className = 'msg msg-bot';
    msgEl.textContent = text;
    this.container.appendChild(msgEl);

    if (choices.length) {
      const choicesEl = document.createElement('div');
      choicesEl.className = 'chat-choices';
      choices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'chat-choice';
        btn.textContent = c;
        btn.addEventListener('click', () => {
          this.handleChoice(c);
          choicesEl.querySelectorAll('.chat-choice').forEach(b => b.disabled = true);
        });
        choicesEl.appendChild(btn);
      });
      this.container.appendChild(choicesEl);
    }

    this.scrollToBottom();
  },

  addUserMessage(text) {
    const msgEl = document.createElement('div');
    msgEl.className = 'msg msg-user';
    msgEl.textContent = text;
    this.container.appendChild(msgEl);
    this.scrollToBottom();
  },

  handleChoice(choice) {
    const step = this.steps[this.currentStep];
    this.answers[step.id] = choice;
    this.addUserMessage(choice);

    // Logique de redirection finale
    if (this.currentStep === this.steps.length - 1) {
      setTimeout(() => this.showEnd(choice), 500);
    } else {
      this.currentStep++;
      setTimeout(() => this.showStep(this.currentStep), 700);
    }
  },

  handleTextInput() {
    if (!this.inputEl) return;
    const val = this.inputEl.value.trim();
    if (!val) return;
    this.addUserMessage(val);
    this.inputEl.value = '';
    setTimeout(() => {
      this.addBotMessage("Merci pour votre message. Sabrina vous répondra dans les plus brefs délais. En attendant, n'hésitez pas à consulter nos offres ou à prendre rendez-vous directement.");
    }, 800);
  },

  showEnd(lastChoice = '') {
    let msg = "Merci pour ces informations ! ";
    let link = '';

    if (lastChoice.includes('rappelé')) {
      msg += "Nous vous contacterons très rapidement pour un échange découverte gratuit. Vous pouvez aussi nous joindre directement sur la page Contact.";
      link = '<a href="contact.html" style="color:var(--secondary);font-weight:600;">→ Aller à la page Contact</a>';
    } else if (lastChoice.includes('email')) {
      msg += "Écrivez-nous à : contact@sd-equicoaching.fr";
      link = '<a href="contact.html" style="color:var(--secondary);font-weight:600;">→ Formulaire de contact</a>';
    } else {
      msg += "Découvrez toutes nos offres adaptées à votre profil.";
      link = '<a href="index.html#offres" style="color:var(--secondary);font-weight:600;">→ Voir nos offres</a>';
    }

    const msgEl = document.createElement('div');
    msgEl.className = 'msg msg-bot';
    msgEl.innerHTML = msg + (link ? '<br><br>' + link : '');
    this.container.appendChild(msgEl);
    this.scrollToBottom();

    /* TODO — INTÉGRATION FUTURE :
       1. BotPress : remplacer ce moteur JS par le widget BotPress
          <script src="https://cdn.botpress.cloud/webchat/v2/inject.js"></script>
          puis configurer avec votre bot ID.

       2. Voiceflow : ajouter le snippet Voiceflow standard.

       3. API Claude (Anthropic) : envoyer this.answers via fetch() à un endpoint
          backend qui appelle l'API Claude avec un system prompt de qualification.
          Exemple endpoint : POST /api/qualify { answers: this.answers }

       4. Manychat / Tidio : intégrer le script de widget en remplacement de ce bloc.
    */
  },

  scrollToBottom() {
    setTimeout(() => {
      this.container.scrollTop = this.container.scrollHeight;
    }, 50);
  }
};

// Initialisation du chatbot uniquement sur la page agent-ia
if (document.getElementById('chat-messages')) {
  SDChatbot.init();
}
