'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Layout, Globe, Instagram, Linkedin, Cpu, Users, Shield, BookOpen, Layers, Zap, Code2, Briefcase, Rocket, TrendingUp, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import FadeUp from '@/components/FadeUp';

interface Slide {
  section?: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    // 1. CAPA
    {
      title: "Horizontes Tech: O Futuro da Carreira",
      subtitle: "IA, Web3 e a Nova Era da Tecnologia",
      content: (
        <FadeUp>
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-10 max-w-5xl mx-auto py-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-[40px] opacity-20 animate-pulse group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl p-6 md:p-8 rounded-full border border-blue-500/20 shadow-2xl">
                <Cpu className="w-12 h-12 md:w-16 md:h-16 text-blue-400" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl text-blue-200 font-light tracking-tight">Por <span className="font-bold text-white">Sonia Batista</span></h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">Web3/Blockchain Developer | 25+ Anos Transformando Ideias em Código</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mt-4">
              {[
                { label: "Base Global de Devs", value: "50 Milhões+", color: "blue" },
                { label: "Projeção Web3 (2030)", value: "500 Mil Devs", color: "purple" }
              ].map((stat, i) => (
                <div key={i} className="group bg-gray-800/30 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 shadow-xl">
                  <p className={`text-3xl md:text-4xl font-black text-${stat.color}-400 mb-1 group-hover:scale-105 transition-transform`}>{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      )
    },
    // 2. CONCEITO: WEB1, WEB2, WEB3
    {
      section: "CONCEITO",
      title: "Web1, Web2 e Web3: A Evolução",
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-4">
            {[
              { title: "Web1", period: "1990-2005", icon: "📄", desc: "Somente leitura. Páginas estáticas. Usuário = Consumidor.", example: "Yahoo, Altavista", color: "blue" },
              { title: "Web2", period: "2005-Atual", icon: "👥", desc: "Leitura + Escrita. Redes sociais, apps. Centralizado (Big Tech).", example: "Facebook, Google", color: "purple" },
              { title: "Web3", period: "2020+", icon: "🔗", desc: "Leitura + Escrita + Propriedade. Descentralizado. Você é o dono.", example: "DApps, DeFi, DAOs", color: "green" }
            ].map((web, i) => (
              <div key={i} className={`bg-gray-800/20 backdrop-blur-md p-8 rounded-[2.5rem] border border-${web.color}-500/10 hover:border-${web.color}-500/30 transition-all group shadow-xl`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{web.icon}</div>
                <h3 className={`text-2xl font-black text-${web.color}-400 mb-1 tracking-tighter`}>{web.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4">{web.period}</p>
                <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">{web.desc}</p>
                <div className={`p-3 bg-${web.color}-500/5 rounded-xl border border-${web.color}-500/10`}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Exemplos:</p>
                  <p className="text-xs text-gray-300 font-medium">{web.example}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      )
    },
    // 3. TECNOLOGIA: O QUE É BLOCKCHAIN
    {
      section: "TECNOLOGIA",
      title: "O que é Blockchain?",
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto py-4">
            <div className="bg-gray-800/20 backdrop-blur-md p-10 rounded-[3rem] border border-blue-500/10 shadow-2xl">
              <h3 className="text-2xl font-black text-blue-400 mb-6 tracking-tight">Definição Técnica</h3>
              <p className="text-xl text-gray-300 leading-relaxed font-light italic">
                "Um livro-razão digital compartilhado, imutável e descentralizado que registra transações de forma transparente e segura."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-1 w-12 bg-blue-500/50 rounded-full"></div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em]">Protocolo de Confiança</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "🔒", title: "Segurança", desc: "Criptografia avançada em cada bloco." },
                { icon: "🌐", title: "Descentralização", desc: "Sem intermediários ou ponto único de falha." },
                { icon: "✓", title: "Imutabilidade", desc: "Registros permanentes e inalteráveis." }
              ].map((pilar, i) => (
                <div key={i} className="flex items-center gap-6 bg-gray-800/30 p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-all shadow-lg group">
                  <div className="text-3xl group-hover:scale-110 transition-transform">{pilar.icon}</div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-wider text-sm">{pilar.title}</h4>
                    <p className="text-gray-500 text-xs font-medium">{pilar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      )
    },
    // 4. CASOS DE USO
    {
      section: "CASOS DE USO",
      title: "Blockchain no Mundo Real",
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto py-4">
            {[
              { title: "Imobiliário", desc: "Tokenização de imóveis e frações digitais.", icon: "🏢", color: "blue" },
              { title: "Supply Chain", desc: "Rastreamento de ponta a ponta (Walmart/IBM).", icon: "⛓️", color: "green" },
              { title: "Saúde", desc: "Registros médicos seguros e imutáveis.", icon: "🏥", color: "red" },
              { title: "DeFi", icon: "💳", desc: "Empréstimos e trocas sem bancos tradicionais.", color: "purple" },
              { title: "Games", icon: "🎮", desc: "NFTs de itens e economia play-to-earn.", color: "cyan" },
              { title: "Governo", icon: "🏛️", desc: "Identidade digital e votação eletrônica.", color: "indigo" }
            ].map((uso, i) => (
              <div key={i} className="bg-gray-800/20 backdrop-blur-sm p-6 rounded-3xl border border-white/5 hover:bg-gray-800/40 transition-all shadow-lg group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{uso.icon}</div>
                <h4 className="font-black text-white text-sm uppercase tracking-wider mb-1">{uso.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{uso.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      )
    },
    // 5. PADRÕES DE TOKENS
    {
      section: "PADRÕES",
      title: "Tokens: ERC-20, 721 e 1155",
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-4">
            <div className="bg-blue-500/5 p-8 rounded-[3rem] border border-blue-500/10 shadow-xl">
              <h3 className="text-xl font-black text-blue-400 mb-4 tracking-tighter uppercase">ERC-20</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Tokens Fungíveis</p>
              <p className="text-sm text-gray-400 leading-relaxed">Intercambiáveis entre si. Moedas digitais e tokens de utilidade.</p>
              <div className="mt-6 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                <p className="text-xs text-blue-300 font-bold">Ex: USDT, LINK, UNI</p>
              </div>
            </div>
            <div className="bg-purple-500/5 p-8 rounded-[3rem] border border-purple-500/10 shadow-xl">
              <h3 className="text-xl font-black text-purple-400 mb-4 tracking-tighter uppercase">ERC-721</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Tokens Não-Fungíveis (NFT)</p>
              <p className="text-sm text-gray-400 leading-relaxed">Únicos e indivisíveis. Arte digital, imóveis e certificados.</p>
              <div className="mt-6 p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                <p className="text-xs text-purple-300 font-bold">Ex: BAYC, ENS, Diplomas</p>
              </div>
            </div>
            <div className="bg-green-500/5 p-8 rounded-[3rem] border border-green-500/10 shadow-xl">
              <h3 className="text-xl font-black text-green-400 mb-4 tracking-tighter uppercase">ERC-1155</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Multi-Token Standard</p>
              <p className="text-sm text-gray-400 leading-relaxed">Combina fungíveis e únicos em um só contrato. Ideal para games.</p>
              <div className="mt-6 p-4 bg-green-500/10 rounded-2xl border border-green-500/20">
                <p className="text-xs text-green-300 font-bold">Ex: Itens de RPG, Packs</p>
              </div>
            </div>
          </div>
        </FadeUp>
      )
    },
    // 6. STACK: SMART CONTRACTS
    {
      section: "TECNOLOGIA",
      title: "Stack: Smart Contracts",
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-4">
            <div className="bg-gray-800/30 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 shadow-xl">
              <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 w-fit mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="font-black text-white uppercase tracking-wider text-sm mb-4">Desenvolvimento</h4>
              <ul className="text-xs space-y-3 text-gray-400 font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> <strong>Solidity:</strong> Linguagem principal</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> <strong>Foundry:</strong> Framework moderno</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> <strong>Hardhat:</strong> Tradicional & Robusto</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> <strong>Remix:</strong> IDE Online rápida</li>
              </ul>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 shadow-xl">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 w-fit mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="font-black text-white uppercase tracking-wider text-sm mb-4">Infraestrutura</h4>
              <ul className="text-xs space-y-3 text-gray-400 font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> <strong>OpenZeppelin:</strong> Padrões seguros</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> <strong>Chainlink:</strong> Oráculos (dados reais)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> <strong>The Graph:</strong> Indexação de dados</li>
              </ul>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 shadow-xl">
              <div className="p-3 bg-green-500/10 rounded-2xl text-green-400 w-fit mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-black text-white uppercase tracking-wider text-sm mb-4">Redes (Networks)</h4>
              <ul className="text-xs space-y-3 text-gray-400 font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> <strong>Ethereum:</strong> A rede principal</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> <strong>Polygon/L2s:</strong> Escalabilidade</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> <strong>Sepolia:</strong> Rede de testes</li>
              </ul>
            </div>
          </div>
        </FadeUp>
      )
    },
    // 7. STACK: FRONTEND
    {
      section: "TECNOLOGIA",
      title: "Stack: Frontend & DApps",
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto py-4">
            <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-10 rounded-[3rem] border border-blue-500/20 shadow-2xl">
              <h4 className="text-2xl font-black text-blue-400 mb-6 tracking-tight flex items-center gap-3">
                <Layout className="w-8 h-8" /> Interface
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-2xl">⚛️</span>
                  <div>
                    <p className="font-black text-white uppercase tracking-widest text-xs">React & Next.js</p>
                    <p className="text-xs text-gray-500 font-medium">Frameworks para interfaces rápidas</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <p className="font-black text-white uppercase tracking-widest text-xs">Tailwind CSS</p>
                    <p className="text-xs text-gray-500 font-medium">Estilização moderna e responsiva</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-10 rounded-[3rem] border border-purple-500/20 shadow-2xl">
              <h4 className="text-2xl font-black text-purple-400 mb-6 tracking-tight flex items-center gap-3">
                <Globe className="w-8 h-8" /> Web3 Provider
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-2xl">🔗</span>
                  <div>
                    <p className="font-black text-white uppercase tracking-widest text-xs">Ethers.js / Viem</p>
                    <p className="text-xs text-gray-500 font-medium">Comunicação com a Blockchain</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-2xl">🦊</span>
                  <div>
                    <p className="font-black text-white uppercase tracking-widest text-xs">Wagmi / RainbowKit</p>
                    <p className="text-xs text-gray-500 font-medium">Conexão de carteiras facilitada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      )
    },
    // 8. MERCADO: JAVA VS WEB3
    {
      section: "MERCADO",
      title: "Comparativo: Java (Web2) vs Blockchain (Web3)",
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto py-4">
            {/* Java Side */}
            <div className="space-y-4">
              <div className="bg-gray-800/20 backdrop-blur-md p-6 rounded-3xl border border-orange-500/10 shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-black text-orange-400 tracking-tighter uppercase">Java (Web2)</h3>
                    <p className="text-2xl font-black text-white">~17 Milhões</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">~33% da Base Global de Devs</p>
                  </div>
                  <Code2 className="w-8 h-8 text-orange-500/20" />
                </div>
                <ul className="text-xs space-y-2 text-gray-400 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-orange-500"></div> Mercado maduro e previsível</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-orange-500"></div> Demanda forte: Bancos, Fintechs, SaaS</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-orange-500"></div> Concorrência moderada (alta base)</li>
                </ul>
              </div>
              <div className="bg-gray-800/10 backdrop-blur-md p-6 rounded-3xl border border-white/5">
                <h4 className="text-sm font-black text-white uppercase tracking-widest mb-3">Projeção até 2030</h4>
                <p className="text-lg font-bold text-orange-200 mb-1">~20 Milhões de Devs</p>
                <p className="text-[10px] text-gray-500 leading-relaxed italic">
                  Crescimento estável focado em manutenção e migração para cloud.
                </p>
              </div>
            </div>

            {/* Web3 Side */}
            <div className="space-y-4">
              <div className="bg-blue-500/5 backdrop-blur-md p-6 rounded-3xl border border-blue-500/20 shadow-xl border-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-black text-blue-400 tracking-tighter uppercase">Blockchain (Web3)</h3>
                    <p className="text-2xl font-black text-white">~200k - 300k</p>
                    <p className="text-[10px] font-bold text-blue-500/60 uppercase tracking-widest">~1,5% da Comunidade Global</p>
                  </div>
                  <Zap className="w-8 h-8 text-blue-400/20" />
                </div>
                <ul className="text-xs space-y-2 text-blue-100/60 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400"></div> Déficit de profissionais qualificados</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400"></div> Alta remuneração e baixa oferta</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-400"></div> <strong>Match:</strong> Solidity + Java é o mais valorizado</li>
                </ul>
              </div>
              <div className="bg-blue-500/10 backdrop-blur-md p-6 rounded-3xl border border-blue-500/20">
                <h4 className="text-sm font-black text-blue-300 uppercase tracking-widest mb-3">Projeção até 2030</h4>
                <p className="text-lg font-bold text-blue-100 mb-1">~500k Devs</p>
                <p className="text-[10px] text-blue-400/80 leading-relaxed italic">
                  Crescimento acelerado com forte demanda por especialistas em DeFi e Auditoria.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-4">
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-2xl text-center">
              <p className="text-xs font-black text-yellow-500 uppercase tracking-[0.2em]">
                🌟 Mercado aquecido: Escassez de profissionais qualificados!
              </p>
            </div>
          </div>
        </FadeUp>
      )
    },
    // 9. OPORTUNIDADES EM WEB3
    {
      section: "CARREIRAS",
      title: "Oportunidades em Web3",
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto py-2">
            {[
              { 
                group: "Desenvolvimento", 
                roles: ["Smart Contract Developer", "DApp / Fullstack Developer", "Protocol & Infrastructure"], 
                salary: "R$ 12k - 35k+", 
                icon: <Code2 className="w-6 h-6" />, 
                color: "blue" 
              },
              { 
                group: "Segurança & Auditoria", 
                roles: ["Smart Contract Auditor", "Security Researcher", "Pentester / Ethical Hacker"], 
                salary: "R$ 15k - 45k+", 
                icon: <Shield className="w-6 h-6" />, 
                color: "red" 
              },
              { 
                group: "Dados & Tokenomics", 
                roles: ["Blockchain Data Analyst", "Tokenomics Designer", "Data Scientist (On-chain)"], 
                salary: "R$ 10k - 28k+", 
                icon: <TrendingUp className="w-6 h-6" />, 
                color: "green" 
              },
              { 
                group: "Produto & Gestão", 
                roles: ["Product Manager Web3", "Operations Manager", "DAO Coordinator"], 
                salary: "R$ 12k - 30k+", 
                icon: <Briefcase className="w-6 h-6" />, 
                color: "orange" 
              },
              { 
                group: "Jurídico & Compliance", 
                roles: ["Web3 Legal Counsel", "Regulatory Specialist", "Compliance Officer"], 
                salary: "R$ 15k - 40k+", 
                icon: <BookOpen className="w-6 h-6" />, 
                color: "purple" 
              },
              { 
                group: "Marketing & Growth", 
                roles: ["Community Manager", "Growth Lead Web3", "Content Strategist"], 
                salary: "R$ 8k - 22k+", 
                icon: <Users className="w-6 h-6" />, 
                color: "pink" 
              }
            ].map((cat, i) => (
              <div key={i} className={`bg-gray-800/20 backdrop-blur-md p-6 rounded-[2rem] border border-${cat.color}-500/10 hover:border-${cat.color}-500/30 transition-all group shadow-xl flex flex-col h-full`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 bg-${cat.color}-500/10 rounded-2xl text-${cat.color}-400 group-hover:scale-110 transition-transform shadow-lg shadow-${cat.color}-500/5`}>
                    {cat.icon}
                  </div>
                  <h4 className="font-black text-white text-sm md:text-base uppercase tracking-tighter leading-tight">{cat.group}</h4>
                </div>
                <ul className="flex-1 space-y-2 mb-6">
                  {cat.roles.map((role, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-start gap-2 leading-tight">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${cat.color}-500/40 mt-1 shrink-0`}></div>
                      {role}
                    </li>
                  ))}
                </ul>
                <div className={`mt-auto pt-4 border-t border-${cat.color}-500/10`}>
                  <p className={`text-sm md:text-base font-black text-${cat.color}-400 flex items-center gap-2`}>
                    <span className="text-lg">💰</span> {cat.salary}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-6xl mx-auto mt-6 text-center">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">
              * Valores baseados em contratações remotas e projetos globais
            </p>
          </div>
        </FadeUp>
      )
    },
    // 10. SCAMS
    {
      section: "SEGURANÇA",
      title: "⚠️ Cuidado com Scams de Recrutadores",
      content: (
        <FadeUp>
          <div className="max-w-4xl mx-auto py-4">
            <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <AlertTriangle className="w-32 h-32 text-red-500" />
              </div>
              
              <h3 className="text-2xl font-black text-red-400 mb-6 tracking-tight">
                Golpistas se passam por recrutadores para roubar carteiras!
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/40 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-red-300 font-bold mb-3 flex items-center gap-2">🚫 Nunca compartilhe</h4>
                    <p className="text-sm text-gray-400">Seed phrase, chave privada ou senha da carteira.</p>
                  </div>
                  <div className="bg-gray-900/40 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-orange-300 font-bold mb-3 flex items-center gap-2">🧐 Desconfie de</h4>
                    <p className="text-sm text-gray-400">Links suspeitos e pedidos de "conectar carteira" para entrevistas.</p>
                  </div>
                </div>
                
                <div className="bg-gray-900/40 p-6 rounded-2xl border border-white/5 space-y-3">
                  <div className="text-sm text-gray-300 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span><strong>Verifique:</strong> Empresa real, LinkedIn do recrutador e site oficial.</span>
                  </div>
                  <div className="text-sm text-gray-300 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span><strong>Recrutadores legítimos:</strong> NÃO pedem acesso à sua carteira.</span>
                  </div>
                  <div className="text-sm text-gray-300 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <span><strong>Red flags:</strong> Urgência, ofertas "muito boas", pedidos de depósito.</span>
                  </div>
                </div>

                <div className="pt-6 text-center">
                  <div className="inline-block bg-red-500 text-white font-black px-8 py-4 rounded-2xl shadow-xl animate-pulse">
                    🔒 Sua carteira = Seu dinheiro. Proteja-a!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      )
    },
    // 11. BARREIRAS
    {
      section: "AS BARREIRAS",
      title: "O Que Ainda nos Trava?",
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto py-4">
            {[
              { icon: <AlertTriangle className="text-red-400" />, title: "Síndrome do Impostor", desc: "A sensação constante de não pertencer ou não ser capaz. Desafio mental que afeta 70% dos profissionais de tech.", color: "red" },
              { icon: <Zap className="text-orange-400" />, title: "Burnout & FOMO", desc: "A pressão por atualização contínua. O medo de ficar para trás em um mercado que não dorme.", color: "orange" },
              { icon: <Briefcase className="text-yellow-400" />, title: "Negociação Salarial", desc: "A falta de transparência e técnica na hora de valorizar o próprio passe no mercado.", color: "yellow" },
              { icon: <Users className="text-blue-400" />, title: "Acesso a Networks", desc: "As melhores oportunidades muitas vezes circulam em redes fechadas. Networking é sobrevivência.", color: "blue" }
            ].map((barreira, i) => (
              <div key={i} className="bg-gray-800/20 backdrop-blur-md p-6 lg:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group shadow-xl">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{barreira.icon}</div>
                <h4 className={`text-lg md:text-xl font-black mb-2 text-${barreira.color}-300 tracking-tight`}>{barreira.title}</h4>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                  {barreira.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      )
    },
    // 12. PLANO 90 DIAS
    {
      section: "AÇÃO PRÁTICA",
      title: "Plano de 90 Dias",
      content: (
        <FadeUp>
          <div className="flex flex-col gap-6 lg:gap-8 max-w-4xl mx-auto py-4">
            {[
              { step: "01", title: "Fundação", desc: "Foco total em Web3: Inicie sua jornada aprendendo os fundamentos de Blockchain e Smart Contracts.", color: "blue" },
              { step: "02", title: "Construção", desc: "Desenvolva seu primeiro DApp e publique o código no GitHub. Inicie networking estratégico no ecossistema Web3.", color: "purple" },
              { step: "03", title: "Visibilidade", desc: "Escreva sobre seus aprendizados em Web3 + Aplique para 5 vagas ou Hackathons estratégicos.", color: "cyan" }
            ].map((fase, i) => (
              <div key={i} className="flex gap-6 lg:gap-10 items-center group">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[2rem] bg-${fase.color}-500/10 flex items-center justify-center font-black text-2xl md:text-3xl text-${fase.color}-400 border border-${fase.color}-500/20 shrink-0 group-hover:scale-105 transition-all shadow-lg`}>
                  {fase.step}
                </div>
                <div className="bg-gray-800/30 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] flex-1 border border-white/5 hover:border-white/10 transition-all shadow-xl">
                  <h4 className={`font-black text-${fase.color}-300 mb-1 text-lg md:text-xl tracking-tight uppercase`}>{fase.title}</h4>
                  <p className="text-sm md:text-lg text-gray-400 leading-relaxed font-light">{fase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      )
    },
    // 13. CONEXÃO
    {
      section: "CONEXÃO",
      title: "Vamos nos Conectar?",

      content: (
        <FadeUp delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto py-2">
            {/* Sonia Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 lg:p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
              
              <div className="flex flex-col gap-4 lg:gap-6 h-full relative z-10">
                <div className="flex items-center gap-4 lg:gap-6">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] overflow-hidden border-2 border-blue-500/30 shadow-2xl bg-gray-800 shrink-0">
                    <Image src="/images/sonia-profile.jpg" alt="Sonia Batista" fill className="object-cover" 
                           onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    <div className="w-full h-full flex items-center justify-center bg-blue-500/10">
                      <Users className="w-8 h-8 text-blue-400/50" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500/60 mb-1 block">Palestrante</span>
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight truncate">Sonia Batista</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light italic truncate">Web3 Developer & Mentora</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-3 bg-white/5 rounded-[2rem] p-4 lg:p-6 border border-white/5 shadow-inner">
                  <div className="bg-white p-2 rounded-xl shadow-2xl group-hover:scale-105 transition-transform">
                    <QRCodeSVG value="https://www.linkedin.com/in/soniamarabatista/" size={100} />
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 font-black tracking-widest uppercase text-[10px]">
                    <Linkedin size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* MNW3 Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 lg:p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
              
              <div className="flex flex-col gap-4 lg:gap-6 h-full relative z-10">
                <div className="flex items-center gap-4 lg:gap-6">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] overflow-hidden border-2 border-purple-500/30 shadow-2xl bg-white p-2 shrink-0">
                    <Image src="/images/mnw3-logo.jpg" alt="Mulheres na Web3" fill className="object-contain p-2"
                           onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    <div className="w-full h-full flex items-center justify-center bg-purple-500/10">
                      <Globe className="w-8 h-8 text-purple-400/50" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-500/60 mb-1 block">Comunidade</span>
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight truncate">Mulheres na Web3</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light italic truncate">Pertencer, Crescer, Construir</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-3 bg-white/5 rounded-[2rem] p-4 lg:p-6 border border-white/5 shadow-inner">
                  <div className="bg-white p-2 rounded-xl shadow-2xl group-hover:scale-105 transition-transform">
                    <QRCodeSVG value="https://www.linkedin.com/company/mulheresnaweb3/" size={100} />
                  </div>
                  <div className="flex items-center gap-2 text-purple-400 font-black tracking-widest uppercase text-[10px]">
                    <Linkedin size={20} />
                  </div>
                </div>

                <div className="flex gap-2">
                  <a href="https://www.mulheresnaweb3.com/" target="_blank" rel="noopener noreferrer" 
                     className="flex-1 flex items-center justify-center gap-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-200 py-3 rounded-xl border border-purple-500/20 transition-all text-[10px] font-black uppercase tracking-widest">
                    <Globe size={14} /> Website
                  </a>
                  <a href="https://www.instagram.com/mulheresnaweb3" target="_blank" rel="noopener noreferrer"
                     className="flex-1 flex items-center justify-center gap-2 bg-pink-500/10 hover:bg-pink-500/20 text-pink-200 py-3 rounded-xl border border-pink-500/20 transition-all text-[10px] font-black uppercase tracking-widest">
                    <Instagram size={14} /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      )
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <main className="h-screen bg-[#050507] text-white selection:bg-blue-500/30 overflow-hidden relative font-sans flex flex-col">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Modern Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 flex gap-0.5 p-0 bg-black/40">
        {slides.map((_, i) => (
          <div 
            key={i}
            className={`h-full transition-all duration-500 ${
              i <= currentSlide ? 'bg-gradient-to-r from-blue-500 to-purple-500 flex-1' : 'bg-white/5 w-4'
            }`}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col min-h-0 w-full max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-10">
        
        {/* Header - Fixed height */}
        <header className="flex-none flex items-center justify-between mb-6 md:mb-10">
          <div className="flex flex-col gap-1 md:gap-2">
            {slides[currentSlide].section && (
              <div className="inline-block self-start px-3 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/20">
                <span className="text-blue-400 font-black tracking-[0.4em] text-[8px] md:text-[10px] uppercase">
                  {slides[currentSlide].section}
                </span>
              </div>
            )}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter text-white">
              {slides[currentSlide].title}
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-4 bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10 shadow-xl">
            <Layout size={14} className="text-blue-400" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">Web3SP Carreira</span>
          </div>
        </header>

        {/* Scrollable Content - flex-1 with min-h-0 and overflow-y-auto */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2 lg:pr-6">
          <div className="pb-10"> {/* Extra padding at bottom for content */}
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Floating Controls - No fixed footer for max space */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all disabled:opacity-10 group"
              disabled={currentSlide === 0}
              title="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-xl bg-blue-500/80 backdrop-blur-md hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 group"
              title="Próximo"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="bg-black/40 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/5 flex items-center gap-3">
            <span className="text-lg font-black text-white/40 tabular-nums leading-none">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </main>
  );
}
