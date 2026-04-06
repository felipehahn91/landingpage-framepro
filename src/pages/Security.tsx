import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Shield, 
  Lock, 
  Link as LinkIcon, 
  CreditCard, 
  FileText, 
  Zap, 
  Database, 
  Code, 
  Key, 
  Globe, 
  Server,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

// Componente auxiliar para animações
const FadeIn = ({ children, delay = 0, direction = 'up', className = "" }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right' | 'none', className?: string }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Security = () => {
  const signupUrl = "https://app.framepro.click/signup";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-200 selection:text-orange-900">
      
      {/* Header Simples */}
      <header className="w-full border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logoImg} alt="FramePro Logo" className="h-8 w-auto hover:opacity-80 transition-opacity" />
          </Link>
          <Link to="/" className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-24 px-4 text-center max-w-4xl mx-auto">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold mb-8 uppercase tracking-widest">
            <Shield size={14} /> SEGURANÇA EM PRIMEIRO LUGAR
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900">
            Seus dados protegidos com<br className="hidden md:block" /> tecnologia de <span className="text-orange-500">nível empresarial.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Entendemos que a confiança é a base do seu negócio. Por isso, construímos o Frame Pro com a mesma arquitetura de segurança utilizada por grandes bancos e empresas de tecnologia.
          </p>
        </FadeIn>
      </section>

      {/* Features Grid (Light) */}
      <section className="py-20 px-4 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Como protegemos você e seus clientes</h2>
              <p className="text-slate-600 text-lg font-medium">Uma explicação simples de como nossa segurança funciona na prática.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Lock size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Cofre Digital Isolado</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  Seus clientes, contratos e orçamentos ficam em um ambiente isolado. É fisicamente impossível que outro fotógrafo ou estúdio acesse as suas informações.
                </p>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <LinkIcon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Links Blindados</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  Quando você envia um orçamento, o link gerado é único e criptografado. O cliente só consegue ver aquele documento específico, sem risco de vazamentos.
                </p>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <CreditCard size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Pagamentos Seguros</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  Nós não armazenamos dados de cartão de crédito. Todo o processamento financeiro é feito diretamente pela Stripe e PagHiper, líderes globais em segurança.
                </p>
              </div>
            </FadeIn>

            {/* Card 4 */}
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Contratos com Validade</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  As assinaturas digitais coletadas na plataforma registram metadados de segurança, garantindo a integridade e a validade jurídica do acordo.
                </p>
              </div>
            </FadeIn>

            {/* Card 5 */}
            <FadeIn delay={0.5}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
                <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Privacidade no Google</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  Nossa integração com o Google Calendar pede apenas a permissão mínima necessária. Não lemos seus e-mails nem acessamos seus arquivos pessoais.
                </p>
              </div>
            </FadeIn>

            {/* Card 6 */}
            <FadeIn delay={0.6}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm h-full">
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-6">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Backups Automáticos</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  Seus dados são salvos continuamente em servidores redundantes. Você nunca perderá o histórico de um cliente ou um contrato assinado.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Technical Section (Dark) */}
      <section className="py-24 px-4 bg-[#111827] text-slate-300">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 tracking-tight text-white flex items-center gap-3">
              <Code className="text-blue-500" size={32} /> Laudo Técnico de Arquitetura
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {/* Tech Card 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-[#1F2937] border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Database className="text-blue-400" size={20} /> 1. Isolamento de Dados (Arquitetura Multi-tenant)
                </h3>
                <p className="mb-6 text-sm leading-relaxed">
                  Nossa infraestrutura garante a separação estrita de informações entre diferentes estúdios no nível mais profundo do sistema.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Barreiras Intransponíveis:</strong> Regras de segurança nativas do banco de dados validam cada requisição. É estruturalmente impossível que as credenciais de um estúdio acessem, leiam ou modifiquem informações de terceiros.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Proteção na Raiz:</strong> As permissões de acesso não dependem da camada visual da aplicação. Elas são blindadas diretamente no motor do banco de dados, mitigando riscos de vazamentos por falhas de interface.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Tech Card 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-[#1F2937] border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Key className="text-orange-400" size={20} /> 2. Autenticação e Gestão de Acessos
                </h3>
                <p className="mb-6 text-sm leading-relaxed">
                  O gerenciamento de identidades utiliza os padrões de segurança exigidos por instituições financeiras.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Senhas Blindadas:</strong> Nenhuma senha é armazenada em texto limpo. Utilizamos algoritmos avançados de hash criptográfico com chaves exclusivas (salting), tornando-as indecifráveis até mesmo para nossos engenheiros.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Sessões Criptografadas:</strong> A navegação na plataforma ocorre através de tokens de sessão assinados digitalmente. Eles possuem tempo de expiração curto e validação contínua, prevenindo sequestro de contas.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Tech Card 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-[#1F2937] border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Globe className="text-purple-400" size={20} /> 3. Compartilhamento Seguro com Clientes Finais
                </h3>
                <p className="mb-6 text-sm leading-relaxed">
                  Os orçamentos e contratos que você envia aos clientes não abrem portas para o seu banco de dados principal.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Acesso Controlado:</strong> Links públicos funcionam através de interfaces restritas no servidor. O visitante visualiza apenas o documento autorizado, com bloqueio total de navegação para outras áreas do sistema.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Proteção contra Varredura (Força Bruta):</strong> Os links são gerados com identificadores únicos universais de alta entropia. É matematicamente impossível que um robô automatizado consiga adivinhar URLs para acessar documentos de terceiros.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Privilégios Mínimos:</strong> O acesso via link externo opera em um ambiente isolado apenas para leitura, eliminando vetores de injeção de código ou extração de dados em massa.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Tech Card 4 */}
            <FadeIn delay={0.4}>
              <div className="bg-[#1F2937] border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Server className="text-green-400" size={20} /> 4. Infraestrutura e Conformidade
                </h3>
                <p className="mb-6 text-sm leading-relaxed">
                  A base tecnológica da nossa plataforma é hospedada em servidores globais redundantes e auditados.
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Criptografia em Trânsito:</strong> Toda a comunicação entre o seu navegador e nossos servidores ocorre sob protocolos de segurança de ponta a ponta (HTTPS/TLS moderno).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Criptografia em Repouso:</strong> No servidor físico, todos os dados são armazenados utilizando criptografia de nível militar (padrão AES-256).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Conformidade Internacional:</strong> Nossa infraestrutura base passa por auditorias rigorosas e atende a certificações de segurança globais, como SOC2 Type II, alinhando-se a padrões rígidos de privacidade.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center bg-white">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-slate-900">
            Pronto para profissionalizar seu estúdio?
          </h2>
          <a 
            href={signupUrl} 
            className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 active:translate-y-0"
          >
            Criar Conta Segura
          </a>
        </FadeIn>
      </section>

    </div>
  );
};

export default Security;