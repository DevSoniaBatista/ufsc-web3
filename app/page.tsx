'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Key,
  Layers,
  Layout,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import FadeUp from '@/components/FadeUp';

interface Slide {
  section?: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

function WalletSimulator() {
  const [wallet, setWallet] = useState<{
    address: string;
    seed: string;
    publicKey: string;
    privateKey: string;
  } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setTimeout(() => {
      const privateKey =
        '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      const publicKey =
        '0x04' + Array.from({ length: 128 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      setWallet({
        address:
          '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
        seed: 'apple banana cherry dragon eagle forest grape honey island jungle kite lemon',
        publicKey,
        privateKey,
      });
      setIsGenerating(false);
    }, 900);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-800/25 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <Key className="w-14 h-14" />
      </div>

      {!wallet ? (
        <div className="text-center py-2">
          <h4 className="text-lg font-black tracking-tight text-white mb-2">
            Simulador de Carteira Digital
          </h4>
          <p className="text-xs text-gray-400 font-medium max-w-xl mx-auto mb-6 leading-relaxed">
            Clique para gerar um endereço público e uma seed phrase de exemplo. Use isso para explicar o que
            é “chave/backup” e o que é público na blockchain.
          </p>

          <button
            onClick={generate}
            disabled={isGenerating}
            className={`px-6 py-3 rounded-2xl font-black transition-all shadow-xl flex items-center gap-2 mx-auto text-xs uppercase tracking-widest ${
              isGenerating
                ? 'bg-blue-500/40 text-white/70 cursor-not-allowed'
                : 'bg-blue-500/80 hover:bg-blue-600 text-white'
            }`}
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Gerando...
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                Gerar Nova Carteira
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="space-y-6 text-left">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-blue-300 font-black mb-2">
              Seed Phrase (backup)
            </p>
            <div className="bg-black/30 border border-white/10 rounded-2xl p-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {wallet.seed.split(' ').map((word, i) => (
                <div
                  key={`${word}-${i}`}
                  className="bg-gray-900/40 border border-white/5 rounded-xl px-3 py-2 font-mono text-[11px] text-gray-200"
                >
                  <span className="text-blue-300/70 font-black mr-2">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-semibold">{word}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-yellow-300/90 mt-2 flex items-center gap-2 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Não compartilhe estas palavras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-500/5 border border-blue-500/15 rounded-[2rem] p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-blue-300 font-black mb-2">
                Chave pública (exemplo)
              </p>
              <p className="font-mono text-[11px] text-blue-100 break-all leading-relaxed">
                {wallet.publicKey}
              </p>
              <p className="text-[10px] text-gray-400 mt-2 font-medium">
                Pode ser compartilhada. É usada para validar assinaturas e derivar o endereço.
              </p>
            </div>
            <div className="bg-purple-500/5 border border-purple-500/15 rounded-[2rem] p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-purple-300 font-black mb-2">
                Chave privada (exemplo)
              </p>
              <p className="font-mono text-[11px] text-purple-100 break-all leading-relaxed">
                {wallet.privateKey}
              </p>
              <p className="text-[10px] text-gray-400 mt-2 font-medium">
                Nunca compartilhe. Quem tem a chave privada consegue assinar e movimentar ativos.
              </p>
            </div>
          </div>

          <div className="bg-green-500/5 border border-green-500/15 rounded-[1.5rem] p-4">
            <p className="text-[9px] uppercase tracking-[0.25em] text-green-300 font-black mb-2">
              Endereço público (exemplo)
            </p>
            <p className="font-mono text-[10px] text-green-100 break-all leading-relaxed">
              {wallet.address}
            </p>
            <p className="text-[9px] text-gray-400 mt-2 font-medium">
              É o identificador curto que você compartilha para receber. É derivado da chave pública.
            </p>
          </div>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-black mb-2">
              Endereço público ≠ chave pública
            </p>
            <ul className="text-xs text-gray-300 leading-relaxed font-medium space-y-2">
              <li>
                <span className="text-white font-black">Chave pública</span>: usada para verificar assinaturas.
              </li>
              <li>
                <span className="text-white font-black">Endereço</span>: identificador curto derivado da chave pública (é o que você compartilha para receber).
              </li>
              <li>
                <span className="text-white font-black">Chave privada</span>: segredo que assina transações.
              </li>
            </ul>
          </div>

          <button
            onClick={() => setWallet(null)}
            className="text-[10px] text-gray-400 hover:text-white transition-colors font-black uppercase tracking-[0.25em]"
          >
            Resetar simulação
          </button>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      section: 'WEB3',
      title: 'Explorando a Web3 do Zero',
      content: (
        <FadeUp>
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-10 max-w-5xl mx-auto py-6">
            <div className="w-full">
              <div className="bg-white/95 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                <img
                  src="/images/realizacao-web3.png"
                  alt="Realização: Meninas Digitais, Mulheres na Web3, LabTeC e UFSC"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
              {[
                { title: 'Palestra', url: 'https://ufsc-web3.vercel.app/' },
                { title: 'Mulheres na Web3', url: 'https://www.mulheresnaweb3.com/' },
              ].map((item) => (
                <div
                  key={item.url}
                  className="bg-black/30 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-3"
                >
                  <p className="text-sm font-black text-white">{item.title}</p>
                  <div className="bg-white p-3 rounded-2xl shadow-2xl">
                    <QRCodeSVG value={item.url} size={140} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      ),
    },
    {
      section: 'EVOLUÇÃO',
      title: 'Web1, Web2 e Web3',
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-6">
            {[
              {
                title: 'Web1',
                period: '1990–2005',
                icon: '📄',
                desc: 'Consumo de informação (leitura).',
                titleClass: 'text-blue-400',
                borderClass: 'border-blue-500/10 hover:border-blue-500/30',
              },
              {
                title: 'Web2',
                period: '2005–hoje',
                icon: '👥',
                desc: 'Interação e criação de conteúdo (plataformas).',
                titleClass: 'text-purple-400',
                borderClass: 'border-purple-500/10 hover:border-purple-500/30',
              },
              {
                title: 'Web3',
                period: '2020+',
                icon: '🔗',
                desc: 'Propriedade digital: você usa e também possui.',
                titleClass: 'text-green-400',
                borderClass: 'border-green-500/10 hover:border-green-500/30',
              },
            ].map((web) => (
              <div
                key={web.title}
                className={`bg-gray-800/20 backdrop-blur-md p-8 rounded-[2.5rem] border ${web.borderClass} transition-all shadow-xl`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl">{web.icon}</div>
                  <h3 className={`text-2xl font-black tracking-tighter ${web.titleClass}`}>
                    {web.title}
                  </h3>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">
                  {web.period}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">{web.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto pb-6">
            <div className="bg-gray-800/20 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 shadow-xl">
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">
                Limitações da Web2
              </h3>
              <ul className="text-sm text-gray-300 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Controle das plataformas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Falta de propriedade
                  sobre dados
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-8 rounded-[2.5rem] border border-blue-500/20 shadow-xl">
              <h3 className="text-sm font-black text-blue-200 uppercase tracking-widest mb-4">
                Usar vs Possuir
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-medium">
                Na Web2, você cria e publica dentro de uma plataforma. Na Web3, você pode ter ativos e
                identidade digital sob seu controle (ex.: carteira e itens digitais).
              </p>
            </div>
          </div>
        </FadeUp>
      ),
    },
    {
      section: 'BLOCKCHAIN',
      title: 'O que é Blockchain',
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto py-6">
            <div className="bg-gray-800/20 backdrop-blur-md p-10 rounded-[3rem] border border-blue-500/10 shadow-2xl">
              <h3 className="text-2xl font-black text-blue-400 mb-6 tracking-tight">
                Definição simples
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed font-light italic">
                Um registro digital compartilhado, seguro e transparente, mantido por uma rede
                descentralizada.
              </p>

              <div className="mt-8 bg-black/30 border border-white/10 rounded-2xl p-6">
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] mb-2">
                  Como funciona
                </p>
                <ul className="text-sm text-gray-300 space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Blocos de informação
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Conexão em cadeia
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Validação coletiva
                    (rede)
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: '🔒', title: 'Segurança', desc: 'Criptografia + validação em rede.' },
                { icon: '🌐', title: 'Transparência', desc: 'Regras e histórico verificáveis.' },
                { icon: '✓', title: 'Imutabilidade', desc: 'Registros não podem ser alterados.' },
              ].map((pilar) => (
                <div
                  key={pilar.title}
                  className="flex items-center gap-6 bg-gray-800/30 p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-all shadow-lg"
                >
                  <div className="text-3xl">{pilar.icon}</div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-wider text-sm">
                      {pilar.title}
                    </h4>
                    <p className="text-gray-500 text-xs font-medium">{pilar.desc}</p>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-8 rounded-[2.5rem] border border-purple-500/20 shadow-xl">
                <h3 className="text-sm font-black text-purple-200 uppercase tracking-widest mb-4">
                  O que ela sustenta
                </h3>
                <ul className="text-sm text-gray-300 space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Criptomoedas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> NFTs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Contratos inteligentes
                    (regras em código)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeUp>
      ),
    },
    {
      section: 'CONCEITO',
      title: 'Blockchain ≠ Bitcoin',
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto py-6 items-start">
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-10 rounded-[3rem] shadow-2xl">
              <div className="text-4xl mb-4">🪙</div>
              <h3 className="text-2xl font-black text-yellow-200 mb-4 tracking-tight">Bitcoin</h3>
              <ul className="text-sm text-gray-200/90 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> Uma aplicação
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> Foco: transferência de valor
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> Um caso de uso entre vários
                </li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 p-10 rounded-[3rem] shadow-2xl">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-black text-blue-200 mb-4 tracking-tight">Blockchain</h3>
              <ul className="text-sm text-gray-200/90 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Infraestrutura
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Foco: registros confiáveis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Suporta moedas, NFTs e contratos
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-white/10 p-5 rounded-2xl text-center">
              <p className="text-sm font-black text-white tracking-tight">
                Analogia: Blockchain é como a Internet. Bitcoin é como o Email.
              </p>
            </div>
          </div>
        </FadeUp>
      ),
    },
    {
      section: 'MUNDO REAL',
      title: 'Onde a Web3 aparece',
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto py-6">
            {[
              {
                title: 'Criptomoedas',
                desc: 'Dinheiro digital e transferências sem bancos.',
                icon: '💸',
              },
              {
                title: 'NFTs',
                desc: 'Propriedade de itens digitais: arte, colecionáveis, identidade.',
                icon: '🧩',
              },
              {
                title: 'Jogos',
                desc: 'Itens que pertencem ao jogador (skins e coleções).',
                icon: '🎮',
              },
              {
                title: 'Comunidades',
                desc: 'Participação, pertencimento e acesso a benefícios.',
                icon: '🤝',
              },
            ].map((uso) => (
              <div
                key={uso.title}
                className="bg-gray-800/20 backdrop-blur-sm p-6 rounded-3xl border border-white/5 hover:bg-gray-800/40 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">{uso.icon}</div>
                  <h4 className="font-black text-white text-sm uppercase tracking-wider">
                    {uso.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{uso.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto pb-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-8 rounded-[2.5rem] border border-blue-500/20 shadow-xl">
              <h3 className="text-sm font-black text-blue-200 uppercase tracking-widest mb-4">
                Exemplos do dia a dia
              </h3>
              <ul className="text-sm text-gray-300 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Skins em jogos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Perfis digitais / identidade
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Criação de conteúdo
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/20 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 shadow-xl">
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">
                Por que isso importa
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-medium">
                A ideia central é confiança sem intermediários: regras e propriedade podem ser
                verificadas pela rede.
              </p>
            </div>
          </div>
        </FadeUp>
      ),
    },
    {
      section: 'CASOS DE USO',
      title: 'Aplicações reais (perto da vida)',
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto py-6">
            {[
              { title: 'Imobiliário', desc: 'Tokenização e frações digitais.', icon: '🏢' },
              { title: 'Supply Chain', desc: 'Rastreamento ponta a ponta.', icon: '⛓️' },
              { title: 'Saúde', desc: 'Registros e medicamentos verificáveis.', icon: '🏥' },
              { title: 'Educação', desc: 'Certificados e diplomas verificáveis.', icon: '🎓' },
              { title: 'DeFi', desc: 'Finanças sem banco no meio.', icon: '💳' },
              { title: 'Games', desc: 'Itens e skins que você possui.', icon: '🎮' },
            ].map((uso) => (
              <div
                key={uso.title}
                className="bg-gray-800/20 backdrop-blur-sm p-6 rounded-3xl border border-white/5 hover:bg-gray-800/40 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">{uso.icon}</div>
                  <h4 className="font-black text-white text-sm uppercase tracking-wider">
                    {uso.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{uso.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-black/30 border border-white/10 p-6 rounded-3xl">
              <p className="text-xs text-gray-500 font-black uppercase tracking-[0.3em] mb-2">
                Ponto-chave
              </p>
              <p className="text-sm text-gray-200 font-medium leading-relaxed">
                A mesma lógica se repete: quando a prova é digital e verificável, você reduz fraude e
                aumenta confiança.
              </p>
            </div>
          </div>
        </FadeUp>
      ),
    },
    {
      section: 'PROPRIEDADE',
      title: 'Tokens: o formato da propriedade',
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-6">
            <div className="bg-blue-500/5 p-8 rounded-[3rem] border border-blue-500/10 shadow-xl">
              <h3 className="text-xl font-black text-blue-300 mb-4 tracking-tighter uppercase">ERC-20</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Fungíveis
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Unidades intercambiáveis: moedas e tokens de utilidade.
              </p>
              <div className="mt-6 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                <p className="text-xs text-blue-200 font-bold">Ex: stablecoins, pontos, créditos</p>
              </div>
            </div>
            <div className="bg-purple-500/5 p-8 rounded-[3rem] border border-purple-500/10 shadow-xl">
              <h3 className="text-xl font-black text-purple-300 mb-4 tracking-tighter uppercase">ERC-721</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                NFTs (únicos)
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Itens únicos: arte, colecionáveis, identidade e certificados.
              </p>
              <div className="mt-6 p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                <p className="text-xs text-purple-200 font-bold">Ex: diploma, item raro, badge</p>
              </div>
            </div>
            <div className="bg-green-500/5 p-8 rounded-[3rem] border border-green-500/10 shadow-xl">
              <h3 className="text-xl font-black text-green-300 mb-4 tracking-tighter uppercase">ERC-1155</h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Multi-token
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Combina fungíveis e únicos no mesmo contrato. Muito usado em games.
              </p>
              <div className="mt-6 p-4 bg-green-500/10 rounded-2xl border border-green-500/20">
                <p className="text-xs text-green-200 font-bold">Ex: packs, itens de RPG</p>
              </div>
            </div>
          </div>
        </FadeUp>
      ),
    },
    {
      section: 'CARTEIRA',
      title: 'Carteira digital (interativo)',
      subtitle: 'Seed phrase e endereço público e privado',
      content: (
        <FadeUp>
          <div className="max-w-6xl mx-auto py-6 space-y-6">
            <WalletSimulator />
          </div>
        </FadeUp>
      ),
    },
    {
      section: 'CARREIRA',
      title: 'Oportunidades na Web3',
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto py-6 items-start">
            <div className="bg-gray-800/20 backdrop-blur-md p-10 rounded-[3rem] border border-blue-500/10 shadow-2xl">
              <h3 className="text-2xl font-black text-blue-300 mb-6 tracking-tight">
                Mercado em crescimento
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  {
                    label: 'Base global de devs',
                    value: '50M+',
                    valueClass: 'text-blue-300',
                  },
                  {
                    label: 'Projeção Web3 (2030)',
                    value: '500k devs',
                    valueClass: 'text-purple-300',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5"
                  >
                    <p className={`text-2xl font-black leading-none ${stat.valueClass}`}>
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <ul className="text-sm text-gray-300 space-y-3 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> A Web3 ainda está
                  construindo infraestrutura e produtos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Diversidade ainda é baixa
                  em várias áreas = oportunidade
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Trabalho remoto e atuação
                  global
                </li>
              </ul>

              <div className="mt-8 bg-black/30 border border-white/10 rounded-2xl p-6">
                <p className="text-sm text-gray-200 font-semibold">
                  Não precisa saber programar para começar.
                </p>
                <p className="text-xs text-gray-500 font-medium mt-1">
                  Existem papéis em produto, marketing, design, comunidade e conteúdo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Marketing',
                  desc: 'Estratégia, growth e campanhas.',
                  icon: '📣',
                },
                {
                  title: 'Design',
                  desc: 'Branding, UI/UX e produto.',
                  icon: '🎨',
                },
                {
                  title: 'Conteúdo',
                  desc: 'Educação, social e storytelling.',
                  icon: '✍️',
                },
                {
                  title: 'Comunidade',
                  desc: 'Gestão, eventos e suporte.',
                  icon: '🫶',
                },
                {
                  title: 'Tecnologia',
                  desc: 'Introdução: smart contracts e dApps.',
                  icon: '🧠',
                },
                {
                  title: 'Projetos próprios',
                  desc: 'Construir e lançar iniciativas.',
                  icon: '🚀',
                },
                {
                  title: 'Dados on-chain',
                  desc: 'Análise e inteligência a partir de dados públicos.',
                  icon: '📊',
                },
                {
                  title: 'Segurança',
                  desc: 'Auditoria e pesquisa de vulnerabilidades.',
                  icon: '🛡️',
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className="bg-gray-800/20 backdrop-blur-md p-6 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-xl">{cat.icon}</div>
                    <h4 className="font-black text-white text-sm uppercase tracking-wider">
                      {cat.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      ),
    },
    {
      section: 'COMEÇO',
      title: 'Caminhos iniciais',
      content: (
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto py-6">
            <div className="bg-gray-800/20 backdrop-blur-md p-10 rounded-[3rem] border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-6 tracking-tight">Por onde começar</h3>
              <ul className="text-sm text-gray-300 space-y-3 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Entrar em comunidades
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Consumir conteúdos
                  introdutórios
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Dar passos pequenos e
                  consistentes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Construir um projeto simples
                  (portfólio)
                </li>
              </ul>

              <div className="mt-8 bg-gradient-to-br from-blue-500/10 to-transparent p-6 rounded-2xl border border-blue-500/20">
                <p className="text-sm text-gray-200 font-semibold">Primeiro passo prático</p>
                <p className="text-xs text-gray-500 font-medium mt-1">
                  Segurança básica, noções de wallet e como identificar projetos confiáveis.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/20 backdrop-blur-md p-8 rounded-[3rem] border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Comunidades</h3>
              <p className="text-xs text-gray-400 font-medium mb-6 leading-relaxed">
                Use como ponto de partida para aprender, fazer networking e encontrar oportunidades.
                O conteúdo aqui é para qualquer pessoa que queira entrar em Web3.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Mulheres na Web3', url: 'https://www.mulheresnaweb3.com/' },
                  { title: 'SheFi', url: 'https://www.shefi.org/' },
                  {
                    title: 'Instituto Web3Edu Brasil',
                    url: 'https://www.linkedin.com/company/web3edubrasil',
                  },
                ].map((link) => (
                  <div
                    key={link.url}
                    className="bg-black/30 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-black text-white">{link.title}</p>
                    </div>
                    <div className="bg-white p-1.5 rounded-xl shadow-2xl shrink-0">
                      <QRCodeSVG value={link.url} size={64} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      ),
    },
    {
      section: 'RESUMO',
      title: 'O que fica',
      content: (
        <FadeUp>
          <div className="max-w-6xl mx-auto py-6 space-y-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-10 rounded-[3rem] border border-purple-500/20 shadow-2xl">
              <h3 className="text-2xl font-black text-purple-200 mb-6 tracking-tight">
                Recado final
              </h3>
              <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
                Web3 não é só tecnologia: é uma nova forma de organizar propriedade e participação no
                digital. Comece com curiosidade, segurança básica e comunidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Entenda', desc: 'Web1, Web2 e Web3 (usar vs possuir).', icon: <Layout /> },
                { title: 'Conecte', desc: 'Comunidades e pessoas mudam trajetórias.', icon: <Globe /> },
                { title: 'Explore', desc: 'Escolha uma área e avance aos poucos.', icon: <Layers /> },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-gray-800/20 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 shadow-xl"
                >
                  <div className="p-3 bg-white/5 rounded-2xl w-fit mb-4 text-blue-300">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-black text-white tracking-tight">{card.title}</h4>
                  <p className="text-sm text-gray-400 font-medium mt-1">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      ),
    },
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
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[160px] animate-pulse" />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[160px] animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="fixed top-0 left-0 w-full h-1 z-50 flex gap-0.5 p-0 bg-black/40">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-full transition-all duration-500 ${
              i <= currentSlide
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 flex-1'
                : 'bg-white/5 w-4'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 flex-1 flex flex-col min-h-0 w-full max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-6">
        <header className="flex-none flex items-center justify-between mb-4 md:mb-6 gap-3">
          <div className="flex flex-col gap-1 md:gap-2 min-w-0">
            {slides[currentSlide].section && (
              <div className="inline-block self-start px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/20">
                <span className="text-blue-400 font-black tracking-[0.35em] text-[7px] md:text-[8px] uppercase">
                  {slides[currentSlide].section}
                </span>
              </div>
            )}
            <h1 className="text-xl md:text-3xl lg:text-5xl font-black leading-none tracking-tighter text-white break-words">
              {slides[currentSlide].title}
            </h1>
            {slides[currentSlide].subtitle && (
              <p className="text-[10px] md:text-xs text-gray-400 font-medium">
                {slides[currentSlide].subtitle}
              </p>
            )}
          </div>
        </header>

        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2 lg:pr-6">
          <div className="pb-10">{slides[currentSlide].content}</div>
        </div>

        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
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
