// Dados dos projetos
const projectsData = [
    {
        id: 1,
        title: "Sistema de Preparacao e Dosagem",
        company: "Linha de processo industrial",
        image: "image/sistema de preparação e dosagem.jpg",
        problem: "Necessidade de melhorar a precisao de alimentacao de materia-prima e reduzir variacoes no processo.",
        solution: "Projeto e implementacao de sistema de preparacao e dosagem com ajuste fino operacional e integracao ao fluxo produtivo.",
        results: "Maior estabilidade de processo, melhor repetibilidade na dosagem e reducao de perdas operacionais."
    },
    {
        id: 2,
        title: "Cavalete Alto Alinhador",
        company: "Suporte e alinhamento mecanico",
        image: "image/Cavalete alto alinhador.jpg",
        problem: "Desalinhamentos recorrentes em componentes de movimentacao, gerando desgaste e paradas nao programadas.",
        solution: "Desenvolvimento de cavalete alto alinhador para garantir geometria correta, estabilidade e facil manutencao.",
        results: "Melhoria no alinhamento do conjunto, aumento de confiabilidade e reducao de intervencoes corretivas."
    },
    {
        id: 3,
        title: "Polias Especiais",
        company: "Transmissao e movimentacao industrial",
        image: "image/polias especiais.jpg",
        problem: "Conjunto de transmissao exigia polias fora de padrao para atender carga, velocidade e vida util esperadas.",
        solution: "Fabricacao de polias especiais sob especificacao tecnica, com foco em resistencia e desempenho continuo.",
        results: "Melhor performance mecanica, maior durabilidade dos componentes e operacao mais estavel."
    }
];

// MENU MOBILE
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
}

// FILTROS DE GALERIA
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {
            if (filter === 'todos' || item.dataset.category === filter) {
                item.classList.remove('hidden');
                item.style.animation = 'none';
                setTimeout(() => {
                    item.style.animation = 'fadeIn 0.6s ease-out';
                }, 10);
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// MODAL DE PROJETOS
function openModal(projectId) {
    const project = projectsData.find((item) => item.id === projectId);
    if (!project) {
        return;
    }

    const modal = document.getElementById('projectModal');

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCompany').textContent = project.company;
    document.getElementById('modalProblem').textContent = project.problem;
    document.getElementById('modalSolution').textContent = project.solution;
    document.getElementById('modalResults').textContent = project.results;
    const modalImage = document.querySelector('.modal-image');
    if (modalImage) {
        modalImage.innerHTML = `<img src="${project.image}" alt="${project.title}">`;
    }

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
document.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Tecla Escape para fechar modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// VOLTAR AO TOPO
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// FORMULÁRIO DE CONTATO
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const empresa = document.getElementById('empresa').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const necessidade = document.getElementById('necessidade').value;

        // Validação
        if (!name || !empresa || !email || !telefone || !necessidade) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Validação de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um email válido!');
            return;
        }

        // Preparar mensagem WhatsApp
        const message = `Olá! Meu nome é ${name}, sou de ${empresa}.\n\nNecessidade: ${necessidade}\n\nPoderia entrar em contato comigo em: ${email} ou ${telefone}`;

        // Redirecionar para WhatsApp
        const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        alert('Redirecionando para WhatsApp...');
        contactForm.reset();
    });
}

// SMOOTH SCROLL PARA LINKS INTERNOS
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href === '#' || href === '') {
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const topOffset = target.offsetTop - 80;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    });
});

// MÁSCARA DE TELEFONE
const phoneInput = document.getElementById('telefone');

if (phoneInput) {
    phoneInput.addEventListener('keypress', function(e) {
        let x = e.currentTarget.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.currentTarget.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
}

// ANIMAÇÃO DE NÚMEROS
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Iniciar contadores ao scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('stat-number')) {
            const target = parseInt(entry.target.textContent);
            if (target > 0) {
                animateCounter(entry.target, target);
            }
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.stat-number').forEach(el => {
    observer.observe(el);
});

// INFO DE LOG
console.log('%c⚙️ ECMACH - Equipamentos Industriais', 'color: #0066cc; font-size: 16px; font-weight: bold');
console.log('%cSite carregado com sucesso!', 'color: #00a3ff; font-size: 14px');
console.log('%c📞 Contato: +55 11 99999-9999', 'color: #25d366; font-size: 12px');
