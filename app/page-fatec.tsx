'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';

interface Slide {
  section?: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "Blockchain além das criptomoedas",
      subtitle: "Oportunidades reais de carreira",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl mb-4">🔗</div>
          <p className="text-xl text-gray-600">Por Sonia Batista</p>
          <p className="text-lg text-gray-500">Web3/Blockchain Developer | Startup Experience | SheFi Graduate</p>
          <div className="mt-8 text-sm text-gray-400">
            <p>20+ anos em desenvolvimento de software</p>
            <p>Especialista em Tokenização e Smart Contracts</p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-purple-200">
            <Image src="/linkedin.png" alt="LinkedIn" width={150} height={150} />
            </div>
            <p className="text-sm font-semibold text-purple-700">
              📱 Escaneie para conectar no LinkedIn
            </p>
            <p className="text-xs text-gray-500">
              linkedin.com/in/soniamarabatista
            </p>
          </div>
        </div>
      )
    },
    {
      section: "O QUE É - Conceito",
      title: "Web1, Web2 e Web3: A Evolução da Internet",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg text-center">
            <h3 className="font-bold text-lg mb-2">🌐 As Três Gerações da Web</h3>
            <p className="text-sm">Entendendo a evolução da internet até chegarmos ao Web3</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {/* Web1 */}
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">📄</div>
                <h4 className="font-bold text-lg text-blue-900">Web1</h4>
                <p className="text-xs text-blue-600">1990-2005</p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-gray-800">Características:</p>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>• <strong>Somente leitura</strong></li>
                  <li>• Páginas estáticas (HTML)</li>
                  <li>• Usuário = Consumidor</li>
                  <li>• Sem interação</li>
                </ul>
                <p className="font-semibold text-gray-800 mt-3">Exemplos:</p>
                <p className="text-xs text-gray-600">Yahoo, Altavista, sites informativos</p>
              </div>
            </div>

            {/* Web2 */}
            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">👥</div>
                <h4 className="font-bold text-lg text-purple-900">Web2</h4>
                <p className="text-xs text-purple-600">2005-Atual</p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-gray-800">Características:</p>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>• <strong>Leitura + Escrita</strong></li>
                  <li>• Redes sociais, apps</li>
                  <li>• Usuário = Criador</li>
                  <li>• Centralizado (Big Tech)</li>
                </ul>
                <p className="font-semibold text-gray-800 mt-3">Exemplos:</p>
                <p className="text-xs text-gray-600">Facebook, Google, Instagram, YouTube</p>
                <div className="bg-yellow-100 p-2 rounded mt-2">
                  <p className="text-xs font-semibold text-yellow-800">⚠️ Problema: Dados controlados por empresas</p>
                </div>
              </div>
            </div>

            {/* Web3 */}
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">🔗</div>
                <h4 className="font-bold text-lg text-green-900">Web3</h4>
                <p className="text-xs text-green-600">2020+</p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-gray-800">Características:</p>
                <ul className="text-xs space-y-1 text-gray-700">
                  <li>• <strong>Leitura + Escrita + Propriedade</strong></li>
                  <li>• Descentralizado (Blockchain)</li>
                  <li>• Usuário = Dono dos dados</li>
                  <li>• Sem intermediários</li>
                </ul>
                <p className="font-semibold text-gray-800 mt-3">Exemplos:</p>
                <p className="text-xs text-gray-600">DApps, NFTs, DeFi, DAOs</p>
                <div className="bg-green-100 p-2 rounded mt-2">
                  <p className="text-xs font-semibold text-green-800">✅ Solução: Você controla seus dados e ativos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold mb-2 text-orange-900">💡 Comparação Rápida:</h4>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <p className="font-semibold">Web1:</p>
                <p className="text-gray-600">"Read" - Ler conteúdo</p>
              </div>
              <div>
                <p className="font-semibold">Web2:</p>
                <p className="text-gray-600">"Read + Write" - Ler e criar</p>
              </div>
              <div>
                <p className="font-semibold">Web3:</p>
                <p className="text-gray-600">"Read + Write + Own" - Ler, criar e possuir</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      section: "O QUE É - Conceito",
      title: "O que é Blockchain?",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Definição Simples</h3>
            <p className="text-gray-700">Um livro-razão digital compartilhado, imutável e descentralizado que registra transações de forma transparente e segura.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-semibold mb-1">Segurança</h4>
              <p className="text-sm text-gray-600">Criptografia avançada</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🌐</div>
              <h4 className="font-semibold mb-1">Descentralização</h4>
              <p className="text-sm text-gray-600">Sem intermediários</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="font-semibold mb-1">Imutabilidade</h4>
              <p className="text-sm text-gray-600">Registros permanentes</p>
            </div>
          </div>
        </div>
      )
    },
    {
      section: "O QUE É - Conceito",
      title: "Blockchain vs Bitcoin: Entendendo a diferença",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
              <h3 className="font-bold text-lg mb-3 text-yellow-900">🪙 Bitcoin (Cripto)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Moeda digital</li>
                <li>• UMA aplicação da blockchain</li>
                <li>• Foco: transferência de valor</li>
                <li>• Criado em 2008</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-blue-900">🔗 Blockchain (Tecnologia)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Tecnologia/Infraestrutura</li>
                <li>• MÚLTIPLAS aplicações</li>
                <li>• Foco: registros confiáveis</li>
                <li>• Revoluciona diversos setores</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg mt-4">
            <p className="text-center font-semibold text-gray-800">
              💡 Analogia: Blockchain é como a Internet, Bitcoin é como o Email
            </p>
          </div>
        </div>
      )
    },
    {
      section: "ONDE ESTÁ - Casos de Uso",
      title: "Blockchain no Mundo Real",
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">🏢 Tokenização Imobiliária</h4>
              <ul className="text-xs text-gray-600 space-y-1 ml-2">
                <li>• Fracionamento de imóveis em tokens digitais</li>
                <li>• Investimento acessível (compre parte de um imóvel)</li>
                <li>• Liquidez para ativos tradicionalmente ilíquidos</li>
                <li>• <strong>Votação em condomínios:</strong> Assembleias digitais verificáveis e transparentes</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">⛓️ Supply Chain & Logística</h4>
              <ul className="text-xs text-gray-600 space-y-1 ml-2">
                <li>• <strong>Walmart:</strong> Rastreamento de alimentos (origem ao consumidor)</li>
                <li>• <strong>IBM Food Trust:</strong> Redução de fraudes alimentares</li>
                <li>• <strong>Maersk:</strong> Rastreamento de containers (TradeLens)</li>
                <li>• <strong>Diamantes:</strong> Everledger rastreia diamantes para evitar conflitos</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">🏥 Saúde & Medicina</h4>
              <ul className="text-xs text-gray-600 space-y-1 ml-2">
                <li>• Registros médicos seguros e compartilháveis entre hospitais</li>
                <li>• Rastreamento de medicamentos (combate a falsificações)</li>
                <li>• <strong>Medicalchain:</strong> Histórico médico do paciente</li>
                <li>• Pesquisas clínicas com dados verificáveis</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">🎓 Educação & Certificações</h4>
              <ul className="text-xs text-gray-600 space-y-1 ml-2">
                <li>• Diplomas digitais verificáveis (MIT, Universidade de Malta)</li>
                <li>• <strong>Blockcerts:</strong> Certificados acadêmicos imutáveis</li>
                <li>• Portfólios de habilidades verificáveis</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">💳 DeFi (Finanças Descentralizadas)</h4>
              <ul className="text-xs text-gray-600 space-y-1 ml-2">
                <li>• Empréstimos sem banco (Aave, Compound)</li>
                <li>• <strong>Stablecoins:</strong> USDT, USDC (moedas estáveis)</li>
                <li>• Exchanges descentralizadas (Uniswap, PancakeSwap)</li>
              </ul>
            </div>
            
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">🎮 Games & Entretenimento</h4>
              <ul className="text-xs text-gray-600 space-y-1 ml-2">
                <li>• <strong>Axie Infinity:</strong> Jogadores ganham criptomoedas</li>
                <li>• NFTs de itens de jogo (armas, skins, personagens)</li>
                <li>• <strong>The Sandbox:</strong> Metaverso com propriedade digital</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">🎨 Arte & NFTs</h4>
              <ul className="text-xs text-gray-600 space-y-1 ml-2">
                <li>• <strong>Beeple:</strong> Arte digital vendida por $69 milhões</li>
                <li>• <strong>Bored Ape Yacht Club:</strong> NFTs colecionáveis</li>
                <li>• Royalties automáticos para artistas</li>
                <li>• Proveniência de obras de arte</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">🏛️ Governo & Identidade</h4>
              <ul className="text-xs text-gray-600 space-y-1 ml-2">
                <li>• <strong>Estônia:</strong> Governo 100% digital em blockchain</li>
                <li>• <strong>Dubai:</strong> Estratégia de governo blockchain até 2025</li>
                <li>• Identidade digital auto-soberana (SSI)</li>
                <li>• Votação eletrônica verificável</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">⚡ Energia & Sustentabilidade</h4>
              <ul className="text-xs text-gray-600 space-y-1 ml-2">
                <li>• <strong>Power Ledger:</strong> Compra/venda de energia solar P2P</li>
                <li>• Rastreamento de créditos de carbono</li>
                <li>• Certificados de energia renovável</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">💡 E Muito Mais</h4>
              <ul className="text-xs text-gray-600 space-y-1 ml-2">
                <li>• <strong>Seguros:</strong> Contratos inteligentes automatizados</li>
                <li>• <strong>Propriedade Intelectual:</strong> Proteção e registro de patentes</li>
                <li>• <strong>Música:</strong> Royalties automáticos para artistas</li>
                <li>• <strong>Esportes:</strong> NFTs de momentos históricos, tokens de fãs</li>
                <li>• <strong>Filantropia:</strong> Rastreamento transparente de doações</li>
                <li>• E muitos outros setores adotando blockchain!</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      section: "ONDE ESTÁ - Casos de Uso",
      title: "Padrões de Tokens: ERC-20, ERC-721, ERC-1155",
      content: (
        <div className="space-y-3">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold mb-2">📊 ERC-20 (Tokens Fungíveis)</h3>
            <p className="text-sm text-gray-700 mb-1"><strong>Uso:</strong> Criptomoedas, tokens de utilidade, stablecoins</p>
            <p className="text-xs text-gray-600"><strong>Exemplo:</strong> USDT, LINK - Cada token é idêntico e intercambiável</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  🎨 ERC-721 (NFTs Únicos - Tokens Não-Fungíveis)
                </h3>
                <p className="text-sm text-gray-700 mb-1"><strong>Uso:</strong> Arte digital, imóveis tokenizados, certificados</p>
                <p className="text-xs text-gray-600"><strong>Exemplo:</strong> Bored Ape Yacht Club, cada fração de imóvel é única e rastreável</p>
              </div>
              <div className="flex-shrink-0">
                <Image 
                  src="/nft-neymar.png" 
                  alt="NFT Neymar" 
                  width={400} 
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold mb-2">🎮 ERC-1155 (Multi-Token)</h3>
            <p className="text-sm text-gray-700 mb-1"><strong>Uso:</strong> Games, marketplaces, aplicações complexas</p>
            <p className="text-xs text-gray-600"><strong>Exemplo:</strong> Combina fungíveis e não-fungíveis em um contrato</p>
          </div>
        </div>
      )
    },
    {
      section: "COMO FUNCIONA - Ferramentas",
      title: "Stack Tecnológico: Smart Contracts",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">💻 Solidity</h3>
            <p className="text-sm">Linguagem de programação para desenvolver Smart Contracts </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-sm mb-2">🧪 Desenvolvimento</h4>
              <ul className="text-xs space-y-1">
                <li>• <strong>Remix:</strong> IDE online</li>
                <li>• <strong>Foundry:</strong> Framework moderno. Teste e scripts de deploy são escritos em Solidity.</li>
                <li>• <strong>HardHat:</strong> Framework mais tradicional, com suporte amplo. Testes e scripts de deploy são escritos principalmente em JavaScript ou TypeScript.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-sm mb-2">📚 Bibliotecas</h4>
              <ul className="text-xs space-y-1">
                <li>• <strong>OpenZeppelin:</strong> Contratos seguros</li>
                <li>• <strong>Chainlink:</strong> Oráculos</li>
                <li>• Padrões auditados</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-300">
              <h4 className="font-semibold text-sm mb-2">🌐 Redes</h4>
              <ul className="text-xs space-y-1">
                <li><strong>Ethereum Mainnet</strong> - Rede principal (produção). Necessita dinheiro real para pagar as transações (gas).</li>
                <li><strong>Sepolia (testnet)</strong> - Testes e desenvolvimento. Buscar Faucets (dinheiro gratuito)  para testar a rede.</li>
                <li><strong>Polygon, Avalanche</strong> - Redes de escalabilidade. Mais baratas em termos de gas.</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">🦊 MetaMask</h4>
            <p className="text-xs text-gray-700 mb-2"><strong>Carteira digital essencial para interagir com Smart Contracts</strong></p>
            <ul className="text-xs space-y-1 text-gray-600 ml-2">
              <li>• Extensão de navegador (Chrome, Firefox, Brave)</li>
              <li>• Gerencia chaves privadas e assina transações</li>
              <li>• Conecta DApps à blockchain (Web3 provider)</li>
              <li>• Suporta múltiplas redes (Ethereum, Polygon, etc.)</li>
              <li>• Interface para usuários interagirem com contratos</li>
            </ul>
          </div>

        </div>
      )
    },
    {
      section: "COMO FUNCIONA - Ferramentas",
      title: "Stack Tecnológico: Frontend (DApps)",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎨 Construindo a Interface</h3>
            <p className="text-sm">DApps = Aplicações Descentralizadas que interagem com blockchain</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">⚛️ Frontend Framework</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>React.js:</strong> Componentização</li>
                <li>• <strong>Next.js:</strong> Performance</li>
                <li>• <strong>TailwindCSS:</strong> Estilização</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">🔗 Bibliotecas Web3</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>Ethers.js:</strong> Interação com blockchain</li>
                <li>• <strong>Web3.js:</strong> Alternativa robusta</li>
                <li>• <strong>Wagmi:</strong> React hooks</li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-semibold mb-2">🚀 Deploy e CI/CD</h4>
            <p className="text-sm text-gray-700">Vercel (deploy), GitHub (versionamento), integração contínua</p>
          </div>
        </div>
      )
    },
    {
      section: "COMO FUNCIONA - Ferramentas",
      title: "Arquitetura Completa de uma DApp",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-3 rounded-lg">
            <h3 className="font-bold text-center">🏗️ Sistema Blockchain Completo (Fullstack)</h3>
          </div>
          
          {/* Diagrama Visual */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4">
              
              {/* Layer 1: Frontend */}
              <div className="col-span-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4 rounded-lg">
                <h4 className="font-bold text-center mb-2">🎨 FRONTEND (Cliente)</h4>
                <div className="text-xs space-y-1">
                  <p>• <strong>React.js/Next.js</strong> - Interface do usuário</p>
                  <p>• <strong>Web3.js/Ethers.js</strong> - Conexão com blockchain</p>
                  <p>• <strong>MetaMask</strong> - Carteira do usuário</p>
                </div>
                <div className="flex justify-center mt-2">
                  <div className="text-2xl">↓ ↑</div>
                </div>
              </div>

              {/* Layer 2: Backend + Blockchain */}
              <div className="col-span-1 bg-gradient-to-r from-green-400 to-green-500 text-white p-3 rounded-lg">
                <h4 className="font-bold text-center mb-2 text-sm">🔧 BACKEND</h4>
                <div className="text-xs space-y-1">
                  <p>• <strong>Node.js + Express</strong></p>
                  <p>• RESTful APIs</p>
                  <p>• Indexação de dados</p>
                  <p>• Cache e queries</p>
                </div>
                <div className="flex justify-center mt-2">
                  <div className="text-xl">↓ ↑</div>
                </div>
              </div>

              <div className="col-span-1 bg-gradient-to-r from-purple-400 to-purple-500 text-white p-3 rounded-lg border-4 border-yellow-400">
                <h4 className="font-bold text-center mb-2 text-sm">⛓️ BLOCKCHAIN</h4>
                <div className="text-xs space-y-1">
                  <p>• <strong>Smart Contracts</strong></p>
                  <p>• <strong>Solidity</strong></p>
                  <p>• ERC-20/721/1155</p>
                  <p>• Lógica imutável</p>
                </div>
                <div className="flex justify-center mt-2">
                  <div className="text-xl">↓ ↑</div>
                </div>
              </div>

              <div className="col-span-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white p-3 rounded-lg">
                <h4 className="font-bold text-center mb-2 text-sm">🗄️ DATABASE</h4>
                <div className="text-xs space-y-1">
                  <p>• <strong>MongoDB</strong></p>
                  <p>• Dados off-chain</p>
                  <p>• Metadados</p>
                  <p>• Histórico/Analytics</p>
                </div>
              </div>

            </div>
          </div>

          {/* Explicação do Fluxo */}
          <div className="bg-blue-50 p-3 rounded-lg">
            <h4 className="font-semibold text-sm mb-2">🔄 Fluxo de Dados:</h4>
            <ol className="text-xs space-y-1 ml-4">
              <li><strong>1.</strong> Frontend conecta com <span className="text-purple-600 font-bold">Smart Contract (Solidity)</span> via Web3.js</li>
              <li><strong>2.</strong> Smart Contract processa transações on-chain (imutável)</li>
              <li><strong>3.</strong> Backend indexa eventos da blockchain e salva em MongoDB</li>
              <li><strong>4.</strong> APIs fornecem dados rápidos para o Frontend (queries complexas)</li>
              <li><strong>5.</strong> Usuário interage via MetaMask assinando transações</li>
            </ol>
          </div>

          {/* Tools */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-purple-50 p-2 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-xs mb-1">🛠️ Dev Smart Contracts</h4>
              <p className="text-xs">Foundry, HardHat, Remix, OpenZeppelin</p>
            </div>
            <div className="bg-green-50 p-2 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-xs mb-1">🚀 Deploy & DevOps</h4>
              <p className="text-xs">Vercel, GitHub Actions, Docker, Jenkins</p>
            </div>
          </div>
        </div>
      )
    },
    {
      section: "COMO ENTRAR - Carreira",
      title: "Comparativo entre Java(Web2) e Blockchain(Web3)",
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-sm mb-2">Java(Web2)</h4>
              <ul className="text-xs space-y-1">
                <li> ~17 milhões de desenvolvedores no mundo</li>
                <li> ~33% da base global de devs</li>
                <li>• Alto volume de vagas contínuas</li>
                <li>• Mercado maduro, previsível</li>
                <li>• Demanda forte em bancos, fintechs, SaaS, enterprise</li>
                <li>• Concorrência moderada devido à grande base de devs</li>
              </ul>             
            </div>  
            <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-sm mb-2">Blockchain(Web3)</h4>
              <ul className="text-xs space-y-1">
              <li> ~200k–300k desenvolvedores estimados              </li>
              <li> ~1,5% da comunidade global</li>
              <li>• Déficit de profissionais qualificados</li>     
              <li>• Alta remuneração</li>
              <li>• Pouca oferta de devs + crescimento rápido = oportunidade gigante</li>
              <li>• Vagas que combinam Solidity + backend tradicional (como Java) são as mais valorizadas</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-sm mb-2">Projeção até 2030</h4>
              <ul className="text-xs space-y-1">
                <li>• Deve chegar a ~20 milhões de devs</li>
                <li>• Crescimento estável</li>
                <li>• Demanda constante em corporações e modernização de sistemas</li>
                <li>• Precisa de profissionais para manutenção, migração para cloud e modernização</li>
              </ul>             
            </div>  
            <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-sm mb-2">Projeção até 2030</h4>
              <ul className="text-xs space-y-1">
              <li>• Projeção de 200k → até 500k devs</li>
              <li>• Crescimento acelerado </li>
              <li>• Forte demanda por:
                <ul>
                  <li>- Engenheiros de smart contracts</li>
                  <li>- Auditores de segurança</li>
                  <li>- Devs full-stack Web3</li>
                  <li>- Especialistas em DeFi</li>
                </ul>
              </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-3 rounded-lg">
            <p className="text-sm text-center font-bold">🌟 Mercado aquecido: Escassez de profissionais qualificados!</p>
          </div>
        </div>
      )
    },
    {
      section: "COMO ENTRAR - Carreira",
      title: "Oportunidades de Carreira em Blockchain",
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-sm mb-2">👨‍💻 Desenvolvedor</h4>
              <ul className="text-xs space-y-1">
                <li>• Smart Contract Dev</li>
                <li>• DApp Developer</li>
                <li>• Protocol Engineer</li>
                <li className="font-semibold text-blue-600">💰 R$ 8k - 25k+</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-sm mb-2">🔒 Segurança</h4>
              <ul className="text-xs space-y-1">
                <li>• Security Auditor</li>
                <li>• Penetration Tester</li>
                <li>• Compliance Specialist</li>
                <li className="font-semibold text-purple-600">💰 R$ 10k - 30k+</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-sm mb-2">📊 Análise</h4>
              <ul className="text-xs space-y-1">
                <li>• Blockchain Analyst</li>
                <li>• Data Scientist</li>
                <li>• Tokenomics Designer</li>
                <li className="font-semibold text-green-600">💰 R$ 7k - 20k+</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-sm mb-2">💼 Negócios</h4>
              <ul className="text-xs space-y-1">
                <li>• Product Manager Web3</li>
                <li>• Business Developer</li>
                <li>• Investidor/Análise de Projetos</li>
                <li className="font-semibold text-orange-600">💰 R$ 6k - 18k+</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-semibold text-sm mb-2">⚖️ Legal & Compliance</h4>
              <ul className="text-xs space-y-1">
                <li>• Advogado especializado em Web3</li>
                <li>• Compliance e Regulamentação</li>
                <li>• Due Diligence de projetos</li>
                <li className="font-semibold text-indigo-600">💰 R$ 8k - 25k+</li>
              </ul>
            </div>
            <div className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-500">
              <h4 className="font-semibold text-sm mb-2">📢 Marketing & Comunidade</h4>
              <ul className="text-xs space-y-1">
                <li>• Marketing Web3/Crypto</li>
                <li>• Gestor de Comunidade (CM)</li>
                <li>• Growth Hacker Web3</li>
                <li className="font-semibold text-pink-600">💰 R$ 5k - 15k+</li>
              </ul>
            </div>
            <div className="bg-cyan-50 p-3 rounded-lg border-l-4 border-cyan-500">
              <h4 className="font-semibold text-sm mb-2">🔍 Auditoria & Rastreio</h4>
              <ul className="text-xs space-y-1">
                <li>• Auditor de Smart Contracts</li>
                <li>• Rastreamento de transações</li>
                <li>• Análise forense blockchain</li>
                <li className="font-semibold text-cyan-600">💰 R$ 9k - 28k+</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">⚠️ Cuidado com Scams de Recrutadores</h4>
            <p className="text-xs text-gray-700 mb-2"><strong>Golpistas se passam por recrutadores para roubar carteiras!</strong></p>
            <ul className="text-xs space-y-1 text-gray-600 ml-2">
              <li>• <strong>Nunca compartilhe:</strong> Seed phrase, chave privada ou senha da carteira</li>
              <li>• <strong>Desconfie de:</strong> Links suspeitos, pedidos de "conectar carteira" para entrevista</li>
              <li>• <strong>Verifique:</strong> Empresa real, LinkedIn do recrutador, site oficial</li>
              <li>• <strong>Recrutadores legítimos:</strong> NÃO pedem acesso à sua carteira</li>
              <li>• <strong>Red flags:</strong> Urgência, ofertas "muito boas", pedidos de depósito</li>
            </ul>
            <p className="text-xs font-semibold text-red-700 mt-2">🔒 Sua carteira = Seu dinheiro. Proteja-a!</p>
          </div>

        </div>
      )
    },
    {
      section: "COMO ENTRAR - Carreira",
      title: "Roadmap: Como Começar",
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div className="bg-blue-50 p-3 rounded-lg flex-1">
              <h4 className="font-semibold mb-1">Fundamentos</h4>
              <p className="text-sm text-gray-700">Aprenda: Conceitos de blockchain, criptografia básica</p>
              <p className="text-xs text-gray-500 mt-1">⏱️ 2-3 meses</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div className="bg-purple-50 p-3 rounded-lg flex-1">
              <h4 className="font-semibold mb-1">Solidity e Smart Contracts</h4>
              <p className="text-sm text-gray-700">Domine: Solidity, padrões ERC, OpenZeppelin, testes com HardHat/Foundry</p>
              <p className="text-xs text-gray-500 mt-1">⏱️ 3-4 meses</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div className="bg-green-50 p-3 rounded-lg flex-1">
              <h4 className="font-semibold mb-1">Projetos Práticos</h4>
              <p className="text-sm text-gray-700">Construa: DApp completo, participe de hackathons, contribua em projetos open-source</p>
              <p className="text-xs text-gray-500 mt-1">⏱️ 2-3 meses</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div className="bg-orange-50 p-3 rounded-lg flex-1">
              <h4 className="font-semibold mb-1">Networking e Emprego</h4>
              <p className="text-sm text-gray-700">Conecte-se: Comunidades Web3, eventos (TDC, hackathons), LinkedIn, startups</p>
              <p className="text-xs text-gray-500 mt-1">⏱️ Contínuo</p>
            </div>
          </div>
        </div>
      )
    },
    {
      section: "COMO ENTRAR - Carreira",
      title: "Recursos Gratuitos para Iniciar",
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg">
            <h3 className="font-bold text-center">📚 Comece Hoje - 100% Gratuito</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">🎓 Cursos</h4>
              <ul className="text-xs space-y-1">
                <li>• <strong>CryptoZombies:</strong> <a href="https://cryptozombies.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">cryptozombies.io</a></li>
                <li>• <strong>Alchemy University:</strong> <a href="https://alchemy.com/university" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">alchemy.com/university</a></li>
                <li>• <strong>Speedrun Ethereum:</strong> <a href="https://speedrunethereum.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">speedrunethereum.com</a></li>
                <li>• <strong>Nicosia University:</strong> <a href="https://www.unic.ac.cy/iff/education-and-training/free-courses-moocs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">unic.ac.cy/iff/education-and-training/free-courses-moocs</a></li>
                <li>• <strong>BlockTrends - Programador (Português):</strong> <a href="https://www.blocktrends.app/bundles/programador-blockchain" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">blocktrends.app/bundles/programador-blockchain</a></li>
                <li>• <strong>DIO - Bootcamp</strong> <a href="https://www.dio.me/bootcamp/bootcamp-blockchain-developer-with-solidity-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">dio.me/bootcamp/bootcamp-blockchain-developer-with-solidity-2025</a></li>
              </ul>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">💻 Ferramentas</h4>
              <ul className="text-xs space-y-1">
                <li>• <strong>Remix IDE:</strong> <a href="https://remix.ethereum.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">remix.ethereum.org</a></li>
                <li>• <strong>MetaMask:</strong> <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">metamask.io</a></li>
                <li>• <strong>Etherscan Explorer(mainnet):</strong> <a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">etherscan.io</a></li>
                <li>• <strong>Etherscan Explorer(sepolia-testnet):</strong> <a href="https://sepolia.etherscan.io/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">sepolia.etherscan.io</a></li>
                <li>• <strong>Faucet Google Cloud:</strong> <a href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">cloud.google.com/application/web3/faucet/ethereum/sepolia</a></li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">👥 Comunidades BR</h4>
              <ul className="text-xs space-y-1">
                <li>• <strong>Chainlink Bootcamp:</strong> <a href="https://chain.link/bootcamp" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">chain.link/bootcamp</a></li>
                <li>• <strong>SheFi:</strong> <a href="https://shefi.com.br/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">shefi.org</a></li>
                <li>• <strong>Web3EduBrasil:</strong> <a href="https://web3edubrasil.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">web3edubrasil.org</a></li>
                <li>• <strong>ETHGlobal:</strong> Hackathons mundiais</li>
                <li>• <strong>Discord de projetos</strong></li>
              </ul>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">📺 Canais YouTube</h4>
              <ul className="text-xs space-y-1">
                <li>• <strong>Luiz Tools:</strong> <a href="https://www.youtube.com/c/luiztools" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">youtube.com/c/luiztools</a></li>
                <li>• <strong>Afonso Dalvi:</strong> <a href="https://www.youtube.com/@OmnesTech" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">youtube.com/@OmnesTech</a></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      section: "COMO ENTRAR - Carreira",
      title: "Minha Jornada: Lições Aprendidas",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
            <h3 className="font-bold mb-3 text-center">🚀 De Java a Blockchain: Minha Transição</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white border-l-4 border-green-500 p-3 rounded-lg shadow-sm">
              <h4 className="font-semibold text-sm mb-1 text-green-700">✅ O que funcionou</h4>
              <ul className="text-xs space-y-1 ml-3">
                <li>• <strong>Aproveitar experiência prévia:</strong> 20 anos em Java facilitaram Solidity</li>
                <li>• <strong>Aprender fazendo:</strong> Hackathons aceleraram meu aprendizado</li>
                <li>• <strong>Networking ativo:</strong> SheFi, TDC, comunidades abriram portas</li>
                <li>• <strong>Especialização:</strong> Tokenização RWA me destacou no mercado</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-yellow-500 p-3 rounded-lg shadow-sm">
              <h4 className="font-semibold text-sm mb-1 text-yellow-700">💡 Dicas importantes</h4>
              <ul className="text-xs space-y-1 ml-3">
                <li>• Não precisa saber tudo - comece e aprenda no caminho</li>
                <li>• Segurança é CRÍTICA - aprenda boas práticas desde o início</li>
                <li>• Portfolio público no GitHub vale como um currículo vivo </li>
                <li>• Mercado valoriza fullstack (smart contracts + frontend)</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-blue-500 p-3 rounded-lg shadow-sm">
              <h4 className="font-semibold text-sm mb-1 text-blue-700">🎯 Meu diferencial</h4>
              <p className="text-xs">Combinar experiência enterprise (Java, APIs, DevOps) com Web3 me tornou uma desenvolvedora mais completa e preparada para startups que precisam escalar.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      section: "CONCLUSÃO",
      title: "Próximos Passos",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg text-center">
            <h3 className="font-bold text-2xl mb-2">🚀 O Futuro é Agora!</h3>
            <p className="text-lg">Blockchain não é mais o futuro - é o presente</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold mb-3 text-green-800">✅ Ação Imediata</h4>
              <ul className="text-sm space-y-2">
                <li>1️⃣ Entre em uma comunidade</li>
                <li>2️⃣ Configure MetaMask</li>
                <li>3️⃣ Escolha um curso</li>
                <li>4️⃣ Construa seu primeiro smart contract</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <h4 className="font-bold mb-3 text-blue-800">📱 Mantenha Contato</h4>
              <ul className="text-sm space-y-2">
                <li>📧 soniabatista.blockchain@gmail.com</li>
                <li>💼 LinkedIn: soniamarabatista</li>
                <li className="flex flex-col items-center gap-2">
                  <span>Link da apresentação:</span>
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <QRCodeSVG 
                      value="https://fatec-gilt.vercel.app/" 
                      size={150}
                      level="H"
                      includeMargin={true}
                    />
                  </div>
                  <a 
                    href="https://fatec-gilt.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs break-all"
                  >
                    fatec-gilt.vercel.app
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg text-center">
            <p className="text-lg font-bold text-gray-800 mb-2">💡 Lembre-se:</p>
            <p className="text-md text-gray-700">Toda jornada começa com um primeiro passo. O mercado está esperando por você!</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Adicionar suporte para navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Slide Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 min-h-[600px] flex flex-col">
          {/* Section Label */}
          {slides[currentSlide].section && (
            <div className="text-xs font-bold text-purple-600 mb-2 uppercase tracking-wide">
              {slides[currentSlide].section}
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-purple-500 pb-3">
            {slides[currentSlide].title}
          </h1>
          
          {/* Subtitle (only on first slide) */}
          {slides[currentSlide].subtitle && (
            <h2 className="text-xl text-gray-600 mb-8">
              {slides[currentSlide].subtitle}
            </h2>
          )}
          
          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            <ChevronLeft size={20} />
            Anterior
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-600 mr-2">
              {currentSlide + 1} / {slides.length}
            </span>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-purple-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-lg"
          >
            Próximo
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Quick Tips */}
        <div className="mt-4 text-center text-sm text-gray-500">
          💡 Use as setas do teclado ← → para navegar entre slides
        </div>
      </div>
    </div>
  );
}
