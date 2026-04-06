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
                  <Database className="text-blue-400" size={20} /> 1. Isolamento de Dados (Multi-tenant)
                </h3>
                <p className="mb-6 text-sm leading-relaxed">
                  O Frame Pro utiliza o <strong className="text-white">PostgreSQL</strong> hospedado na infraestrutura do <strong className="text-white">Supabase</strong> (AWS). A separação de dados entre diferentes estúdios (tenants) é garantida nativamente pelo banco de dados através de <strong className="text-white">Row Level Security (RLS)</strong>.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span>Políticas RLS estritas garantem que operações de SELECT, INSERT, UPDATE e DELETE só sejam executadas se o <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">auth.uid()</code> corresponder ao proprietário do registro.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span>Vazamento de dados por falha na camada de aplicação (Frontend/Backend) é mitigado, pois o próprio motor do banco de dados rejeita queries não autorizadas.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Tech Card 2 */}
            <FadeIn delay={0.2}>
              <div className="bg-[#1F2937] border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Key className="text-orange-400" size={20} /> 2. Autenticação e Sessões
                </h3>
                <p className="mb-6 text-sm leading-relaxed">
                  O gerenciamento de identidade é provido pelo <strong className="text-white">GoTrue</strong> (Supabase Auth).
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span>Senhas nunca são armazenadas em texto limpo. Utiliza-se algoritmos de hash robustos (bcrypt/Argon2) com salt exclusivo por usuário.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span>Sessões são gerenciadas via <strong className="text-white">JWT (JSON Web Tokens)</strong> assinados criptograficamente, com tempo de expiração curto e rotação automática de refresh tokens.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Tech Card 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-[#1F2937] border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Globe className="text-purple-400" size={20} /> 3. Exposição Segura de Links Públicos
                </h3>
                <p className="mb-6 text-sm leading-relaxed">
                  Documentos compartilhados com clientes finais (Orçamentos, Contratos e Formulários) não expõem as tabelas do banco de dados.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span>O acesso público é feito exclusivamente através de <strong className="text-white">RPCs (Remote Procedure Calls)</strong> com a flag <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-300">SECURITY DEFINER</code>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span>A busca exige um token UUID v4 exato (128-bit). Tentativas de enumeração ou força bruta são matematicamente inviáveis.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span>As políticas RLS das tabelas principais permanecem fechadas para acesso anônimo, prevenindo extração de dados em massa.</span>
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
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Criptografia em Trânsito:</strong> Todo o tráfego utiliza TLS 1.2/1.3 (HTTPS).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Criptografia em Repouso:</strong> Os dados armazenados nos servidores (AWS) são criptografados em repouso utilizando o padrão AES-256.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Conformidade:</strong> A infraestrutura base (Supabase) é auditada e possui certificação SOC2 Type II e conformidade com a HIPAA.</span>
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