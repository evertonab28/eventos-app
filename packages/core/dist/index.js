"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Alias: () => Alias,
  Data: () => Data,
  Id: () => Id,
  Senha: () => Senha,
  complementarConvidado: () => complementarConvidado,
  complementarEvento: () => complementarEvento,
  criarConvidadoVazio: () => criarConvidadoVazio,
  criarEventoVazio: () => criarEventoVazio,
  eventos: () => eventos_default
});
module.exports = __toCommonJS(src_exports);

// src/evento/functions/validarConvidado.ts
function validarConvidado(convidado) {
  const erros = [];
  if (!convidado.nome) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!convidado.email) {
    erros.push("Email \xE9 obrigat\xF3rio");
  }
  return erros;
}

// src/evento/functions/complementarConvidado.ts
function complementarConvidado(convidado) {
  const erros = validarConvidado(convidado);
  if (erros.length) {
    throw new Error(erros.join("\n"));
  }
  const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0;
  const temAcompanhantes = convidado.possuiAcompanhantes && convidado.confirmado && qtdeAcompanhantes > 0;
  const convidadoAtualizado = {
    ...convidado,
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhantes: temAcompanhantes
  };
  return convidadoAtualizado;
}

// src/shared/Alias.ts
var Alias = class {
  static formatar(valor) {
    return valor.replace(/ /g, "-").toLowerCase();
  }
};

// src/shared/Id.ts
var import_uuid = require("uuid");
var Id = class {
  static novo() {
    return (0, import_uuid.v4)();
  }
  static valido(id) {
    return (0, import_uuid.validate)(id);
  }
};
console.log(Id.novo());

// src/shared/Senha.ts
var Senha = class {
  static nova(tamanho = 15) {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = minusculas.toUpperCase();
    const numeros = "0123456789";
    const especiais = "!@#$%&*";
    const grupos = [minusculas, maiusculas, numeros, especiais];
    const senha = [];
    for (let i = 0; i < tamanho; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)];
      senha.push(grupo[Math.floor(Math.random() * grupo.length)]);
    }
    return senha.join("");
  }
};

// src/shared/Data.ts
var Data = class {
  static formatar(data) {
    const pad = (n) => n.toString().padStart(2, "0");
    const d = data ?? /* @__PURE__ */ new Date();
    const ano = d.getFullYear();
    const mes = pad(d.getMonth() + 1);
    const dia = pad(d.getDate());
    const hora = pad(d.getHours());
    const minuto = pad(d.getMinutes());
    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
  }
  static desformatar(data) {
    const [ano, mes, dia] = data.split("T")[0].split("-");
    const [hora, minuto] = data.split("T")[1].split(":");
    return new Date(
      parseInt(ano),
      parseInt(mes) - 1,
      parseInt(dia),
      parseInt(hora),
      parseInt(minuto)
    );
  }
};

// src/evento/functions/validarEvento.ts
function validarEvento(evento) {
  const erros = [];
  if (!evento.alias) {
    erros.push("Alias \xE9 obrigat\xF3rio");
  }
  if (!evento.nome) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!evento.descricao) {
    erros.push("Descri\xE7\xE3o \xE9 obrigat\xF3ria");
  }
  if (!evento.data) {
    erros.push("Data \xE9 obrigat\xF3ria");
  }
  if (!evento.local) {
    erros.push("Local \xE9 obrigat\xF3rio");
  }
  if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
    erros.push("P\xFAblico esperado \xE9 obrigat\xF3rio");
  }
  if (!evento.imagem) {
    erros.push("Imagem \xE9 obrigat\xF3ria");
  }
  if (!evento.imagemBackground) {
    erros.push("Imagem de fundo \xE9 obrigat\xF3ria");
  }
  return erros;
}

// src/evento/functions/complementarEvento.ts
function complementarEvento(eventoParcial) {
  const erros = validarEvento(eventoParcial);
  if (erros.length) {
    throw new Error(erros.join("\n"));
  }
  const evento = {
    ...eventoParcial,
    id: eventoParcial.id ?? Id.novo(),
    senha: eventoParcial.senha ?? Senha.nova(20),
    publicoEsperado: +(eventoParcial.publicoEsperado ?? 1)
  };
  return evento;
}

// src/evento/functions/criarConvidadoVazio.ts
function criarConvidadoVazio() {
  return {
    id: Id.novo(),
    nome: "",
    email: "",
    confirmado: true,
    possuiAcompanhantes: false,
    qtdeAcompanhantes: 0
  };
}

// src/evento/functions/criarEventoVazio.ts
function criarEventoVazio() {
  return {
    id: Id.novo(),
    nome: "",
    descricao: "",
    data: /* @__PURE__ */ new Date(),
    local: "",
    publicoEsperado: 1,
    imagem: "",
    imagemBackground: ""
  };
}

// src/constants/eventos.ts
var eventos = [
  {
    id: "21ff36d7-8fa7-495e-9339-d1687458b660",
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: /* @__PURE__ */ new Date("2024-12-01T10:00:00Z"),
    local: "S\xE3o Paulo, SP",
    descricao: "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imagem: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    imagemBackground: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: "9db594ba-2015-4126-923b-9453d7edd552",
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "7f76598d-5025-45d7-950a-45dbc52307ab",
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "be33b1e3-6d44-45d3-80dc-c9a4b61e389a",
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      }
    ]
  },
  {
    id: "f4b18eb7-13c6-4bde-aa26-a9551a5c31f2",
    alias: "evento-js-avancado",
    senha: "js2024",
    nome: "Workshop Avan\xE7ado de JavaScript",
    data: /* @__PURE__ */ new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avan\xE7ado para programadores JavaScript.",
    imagem: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imagemBackground: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: "ce7781f9-ce90-480b-b33f-79551b436b30",
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "89fe8fda-bdd2-4a0c-aa4c-efed7a4da7a7",
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      }
    ]
  },
  {
    id: "3a588693-650e-4c6d-868e-9090ff5c07b3",
    alias: "evento-dev-frontend",
    senha: "front123",
    nome: "Bootcamp de Desenvolvimento Frontend",
    data: /* @__PURE__ */ new Date("2024-11-15T09:00:00Z"),
    local: "Belo Horizonte, MG",
    descricao: "Aprenda a criar interfaces incr\xEDveis e responsivas.",
    imagem: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imagemBackground: "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "961e8ef3-8492-4bb6-8e99-4e07d175a18c",
        nome: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "c9807f9f-d3c8-4dee-b49c-ae09cf3329e8",
        nome: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: "d4f25df3-bd22-4b1d-a6ba-c8fd625ef117",
        nome: "Isabela Martins",
        email: "isabela@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "7a0a5640-8e46-404d-bd90-dcba6589d57c",
    alias: "casamento-alberto-marina",
    senha: "casamento2024",
    nome: "Casamento do Alberto e Marina",
    data: /* @__PURE__ */ new Date("2024-11-25T16:00:00Z"),
    local: "Florian\xF3polis, SC",
    descricao: "Celebra\xE7\xE3o do casamento de Alberto e Marina com amigos e familiares.",
    imagem: "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imagemBackground: "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "c7f15188-0f9a-454e-8d05-694308106b21",
        nome: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: "384493ec-f538-4af0-95bb-eff54a17d7eb",
        nome: "Carla Mendes",
        email: "carla@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "5e25282b-cde5-45ff-9436-c4320d7c2f6f",
    alias: "aniversario-joao",
    senha: "joao2024",
    nome: "Anivers\xE1rio do Jo\xE3o - 30 Anos",
    data: /* @__PURE__ */ new Date("2024-12-05T18:00:00Z"),
    local: "Curitiba, PR",
    descricao: "Comemora\xE7\xE3o dos 30 anos de Jo\xE3o com amigos pr\xF3ximos e familiares.",
    imagem: "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imagemBackground: "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    publicoEsperado: 80,
    convidados: [
      {
        id: "62f27c65-d52e-4e4b-aeb1-e6c861539806",
        nome: "Maria Souza",
        email: "maria@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      },
      {
        id: "eb5d60e7-ee91-4d6f-8365-33a2ef65ffd7",
        nome: "Jos\xE9 Almeida",
        email: "jose@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "53ae44ec-30fb-4e5a-9b0b-a9fbedd8e3c1",
    alias: "inauguracao-loja-estrela",
    senha: "estrela2024",
    nome: "Inaugura\xE7\xE3o da Loja Estrela",
    data: /* @__PURE__ */ new Date("2024-12-10T09:00:00Z"),
    local: "Porto Alegre, RS",
    descricao: "Evento de inaugura\xE7\xE3o da nova loja Estrela com brindes e promo\xE7\xF5es.",
    imagem: "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imagemBackground: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    publicoEsperado: 300,
    convidados: [
      {
        id: "56d33644-21e0-45d6-8374-b63492542957",
        nome: "Cl\xE1udia Lima",
        email: "claudia@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3
      },
      {
        id: "08ce7902-a86f-4991-97bc-8cf5661fa328",
        nome: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: "65965e1c-8055-4795-b4a3-da93bbe97e31",
    alias: "reuniao-familia-oliveira",
    senha: "familia2024",
    nome: "Reuni\xE3o da Fam\xEDlia Oliveira",
    data: /* @__PURE__ */ new Date("2024-12-15T12:00:00Z"),
    local: "Salvador, BA",
    descricao: "Reuni\xE3o de fim de ano da fam\xEDlia Oliveira.",
    imagem: "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imagemBackground: "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    publicoEsperado: 50,
    convidados: [
      {
        id: "70aad3a8-3307-4b4b-a8c6-a3796b7aef66",
        nome: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4
      },
      {
        id: "5cf2c395-a931-4234-889f-7a8701c8e5fc",
        nome: "Let\xEDcia Oliveira",
        email: "leticia@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  }
];
var eventos_default = eventos;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alias,
  Data,
  Id,
  Senha,
  complementarConvidado,
  complementarEvento,
  criarConvidadoVazio,
  criarEventoVazio,
  eventos
});
