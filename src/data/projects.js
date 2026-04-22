export const PROJECTS = [
  {
    icon: 'fa-eye',
    title: 'SISDF',
    category: 'destaque',
    description:
      'Sistema de detecção de fadiga e sono em condutores usando Computação Visual e Machine Learning.',
    tags: ['Python', 'OpenCV', 'NumPy', 'MediaPipe', 'TensorFlow', 'scikit-learn'],
    links: [
      { icon: 'fab fa-github', label: 'Código', href: 'https://github.com/Rquilamiquiza/detector_fadiga' }
    ]
  },
  {
    icon: 'fa-clipboard-list',
    title: 'Fab Lab Gest',
    category: 'destaque',
    description:
      'Aplicação para gestão integrada das atividades internas do Fab Lab Kubanga Angola: controlo de visitas, inventário e estoque, estado e manutenção das máquinas, e relatórios analíticos para apoio à decisão.',
    tags: ['Django', 'PostgreSQL', 'Tailwind', 'JavaScript'],
    links: [{ icon: 'fab fa-github', label: 'Código', href: '#' }]
  },
  {
    icon: 'fa-globe',
    title: 'Website Fab Lab Kubanga',
    category: 'fablab',
    description:
      'Website dinâmico do FabLab, integrado ao sistema de gestão interna com sincronização em tempo real, divulgação de atividades e gestão de conteúdos.',
    tags: ['Django', 'Tailwind', 'JavaScript', 'HTML', 'CSS'],
    links: [{ icon: 'fas fa-images', label: 'Demo', href: '#' }]
  },
  {
    icon: 'fa-ghost',
    title: 'so_long',
    category: '42 Luanda',
    description:
      'Pequeno jogo 2D top-down em C com MiniLibX, onde o jogador coleta itens pelo mapa e escapa pela saída.',
    tags: ['C', 'MiniLibX', '2D Game'],
    links: [{ icon: 'fab fa-github', label: 'Código', href: 'https://github.com/Rquilamiquiza/so_long' }]
  },
  {
    icon: 'fa-utensils',
    title: 'Philosopher',
    category: '42 Luanda',
    description:
      'Implementação do problema clássico do jantar dos filósofos em C, usando threads e mutexes para sincronização e evitar deadlock e starvation.',
    tags: ['C', 'Threads', 'Mutex', 'Concorrência'],
    links: [{ icon: 'fab fa-github', label: 'Código', href: 'https://github.com/Rquilamiquiza/philosopher' }]
  },
  {
    icon: 'fa-terminal',
    title: 'Minishell',
    category: '42 Luanda',
    description:
      'Réplica do terminal Bash em C, implementando as principais funcionalidades: parsing, pipes, redirecionamentos, variáveis de ambiente e builtins.',
    tags: ['C', 'Shell', 'Systems'],
    links: [{ icon: 'fab fa-github', label: 'Código', href: 'https://github.com/Rquilamiquiza/minishell' }]
  },
  {
    icon: 'fa-cube',
    title: 'Cub3D',
    category: '42 Luanda',
    description:
      'Jogo 3D com raycasting inspirado em Wolfenstein 3D, desenvolvido em C com MiniLibX — renderização de paredes texturizadas, exploração de mapa e controlo em primeira pessoa.',
    tags: ['C', 'MiniLibX', 'Raycasting', '3D'],
    links: [{ icon: 'fab fa-github', label: 'Código', href: 'https://github.com/Rquilamiquiza/Cub3D.' }]
  },
  {
    icon: 'fa-server',
    title: 'Webserver',
    category: '42 Luanda',
    description:
      'Servidor web HTTP/1.1 desenvolvido em C++, com suporte a CGI em Python para execução de scripts dinâmicos.',
    tags: ['C++', 'HTTP', 'CGI'],
    links: [{ icon: 'fab fa-github', label: 'Código', href: 'https://github.com/Rquilamiquiza/webserver' }]
  },
  {
    icon: 'fa-gamepad',
    title: 'Transcendence',
    category: '42 Luanda',
    description:
      'Projeto final do currículo da 42 Luanda: jogo de ping pong multiplayer em tempo real com chat, usando comunicação por sockets. Atuei como DevOps — automação de deploy, organização de repositórios e workflows, CI/CD, monitoramento com Prometheus, divisão do backend em microsserviços e containerização.',
    tags: ['DevOps', 'Docker', 'CI/CD', 'Prometheus', 'Microsserviços'],
    links: [{ icon: 'fab fa-github', label: 'Código', href: 'https://github.com/Rquilamiquiza/transcendence' }]
  },
  {
    icon: 'fab fa-docker',
    title: 'Inception',
    category: 'devops',
    description:
      'Automação de deploy com Docker Compose orquestrando três containers (NGINX, PostgreSQL e PHP) para executar um site em WordPress.',
    tags: ['Docker', 'Docker Compose', 'NGINX', 'PostgreSQL', 'WordPress'],
    links: [{ icon: 'fab fa-github', label: 'Código', href: 'https://github.com/Rquilamiquiza/inception' }]
  },
  {
    icon: 'fa-network-wired',
    title: 'Network Simulator',
    category: 'pessoal',
    description:
      'Simulador de redes que compara o funcionamento de equipamentos Cisco vs Ubiquiti.',
    tags: ['Python', 'Networking', 'Simulação'],
    links: [{ icon: 'fab fa-github', label: 'Código', href: 'https://github.com/Rquilamiquiza/network_simulator' }]
  }
]
