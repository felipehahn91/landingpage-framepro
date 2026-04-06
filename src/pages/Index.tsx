import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Play, 
  FileText, 
  DollarSign, 
  PenTool, 
  Workflow, 
  Eye, 
  Map, 
  Check,
  Instagram,
  Twitter,
  Linkedin,
  Sparkles
} from 'lucide-react';

// Importando as imagens
import logoImg from '../assets/logo.png';
import heroMockupImg from '../assets/hero-mockup.png';

// Componente auxiliar para animações de fade-in
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

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-900 selection:bg-orange-200 selection:text-orange-900 overflow-hidden">
      {/* Background Gradient Sutil */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/40 via-white to-transparent -z-10 pointer-events-none"></div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img src={logoImg} alt="FramePro Logo" className="h-10 w-auto hover:opacity-80 transition-opacity cursor-pointer" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600"
          >
            <a href="#como-funciona" className="hover:text-orange-500 transition-colors">Como Funciona</a>
            <a href="#propostas" className="hover:text-orange-500 transition-colors">Propostas</a>
            <a href="#planos" className="hover:text-orange-500 transition-colors">Planos</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-5"
          >
            <a href="#" className="text-sm font-semibold text-slate-600 hover:text-slate-900 hidden sm:block transition-colors">Entrar</a>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all active:scale-95">
              Teste Grátis
            </button>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 text-center max-w-5xl mx-auto relative">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200 shadow-sm text-orange-600 text-xs font-bold mb-8 uppercase tracking-widest hover:border-orange-300 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            O CRM Nº1 PARA FOTÓGRAFOS DE CASAMENTO
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900">
            Fotógrafo que cresce não conta com a sorte. Conta com o
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400"> FramePro.</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Enquanto você tenta vender no WhatsApp bagunçado, o FramePro organiza, automatiza e faz você fechar mais contratos todo dia.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 active:translate-y-0">
              COMEÇAR 14 DIAS GRÁTIS <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md">
              Ver recursos
            </button>
          </div>
        </FadeIn>

        {/* Hero Image Mockup */}
        <FadeIn delay={0.5} direction="up" className="relative mx-auto max-w-5xl group">
          {/* Glow effect behind image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-300/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 via-transparent to-transparent z-10 h-full w-full bottom-0 rounded-2xl pointer-events-none"></div>
          
          <img 
            src={heroMockupImg} 
            alt="Dashboard FramePro" 
            className="rounded-2xl shadow-2xl border border-slate-200/60 object-cover w-full transform transition-transform duration-700 hover:scale-[1.01]"
          />
        </FadeIn>
      </section>

      {/* Bento Grid Features */}
      <section id="como-funciona" className="py-24 px-4 max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Não é só um CRM. É o seu estúdio no piloto automático.</h2>
            <p className="text-slate-600 text-lg font-medium">Todas as conversas, tarefas e oportunidades em um só lugar, sem perder prazos, leads ou dinheiro.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <FadeIn delay={0.1} className="md:col-span-2">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 relative overflow-hidden group h-full flex flex-col justify-center">
              <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Workflow size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Leads Organizados</h3>
              <p className="text-slate-600 max-w-md relative z-10 font-medium leading-relaxed">Saiba exatamente em que etapa cada cliente está no seu Pipeline Visual. Nunca mais perca dinheiro por esquecer de fazer um follow-up.</p>
              
              {/* Decorative element */}
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-orange-100/60 to-transparent rounded-tl-full opacity-50 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700"></div>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={0.2}>
            <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-300 group h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Mais Resultados</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">Chega de contar com a sorte. Controle parcelamentos, envie cobranças via PIX e tenha previsibilidade exata do seu caixa.</p>
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn delay={0.3}>
            <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-xl hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 group h-full">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <PenTool size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Contratos Pro</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">Profissionalize seu fechamento. O cliente assina com o dedo na tela do celular e você recebe o PDF com validade jurídica na hora.</p>
            </div>
          </FadeIn>

          {/* Card 4 */}
          <FadeIn delay={0.4} className="md:col-span-2">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 flex flex-col md:flex-row items-center gap-8 group h-full">
              <div className="flex-1">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Processos Automatizados</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Crie "Fluxos de Cadência" para enviar mensagens de follow-up, lembretes e cobranças automaticamente para o WhatsApp do cliente.</p>
              </div>
              <div className="flex-1 flex justify-center items-center gap-3 text-orange-400 w-full py-6 md:py-0">
                {/* Abstract workflow graphic */}
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform duration-300"><Play size={24} className="text-orange-500 ml-1"/></div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-200 to-orange-200 relative">
                  <div className="absolute top-1/2 left-0 w-full h-full bg-orange-400 -translate-y-1/2 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform duration-300 delay-100"><FileText size={24} className="text-orange-500"/></div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-200 to-orange-200 relative">
                  <div className="absolute top-1/2 left-0 w-full h-full bg-orange-400 -translate-y-1/2 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300"></div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/30 group-hover:-translate-y-1 transition-transform duration-300 delay-200"><Check size={24} strokeWidth={3}/></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dark Feature Section */}
      <section id="propostas" className="bg-slate-950 text-white py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <FadeIn direction="right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-orange-400 text-xs font-bold mb-8 backdrop-blur-sm">
              <FileText size={14} /> LANDING PAGES DE VENDAS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              Apresentações que separam o amador do profissional.
            </h2>
            <p className="text-slate-400 text-lg mb-12 font-medium leading-relaxed">
              Abandone os PDFs frios e sem graça. Crie propostas ricas com galerias, vídeos e tabelas de preço interativas que fazem o cliente dizer "UAU!" antes mesmo de ver o preço.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-orange-500/20 transition-colors">
                  <Eye size={24} className="text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-100">Avisos de Leitura</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">Receba uma notificação no exato momento que o cliente abrir seu orçamento. Saiba a hora certa de chamar.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-blue-500/20 transition-colors">
                  <Map size={24} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-100">Mapa de Calor (Heatmap)</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">Veja as gravações de tela do cliente para descobrir qual pacote chamou mais atenção e onde ele passou mais tempo.</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-transparent rounded-3xl blur-2xl transform scale-95"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Propostas Interativas" 
              className="rounded-3xl shadow-2xl border border-slate-800 relative z-10 transform transition-transform duration-500 hover:scale-[1.02]"
            />
            
            {/* Floating UI Element */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-slate-800 border border-slate-700 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Eye size={20} className="text-green-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Agora mesmo</p>
                <p className="text-sm font-bold text-white">Aline abriu sua proposta!</p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Light Feature Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="order-2 md:order-1 relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-blue-50 rounded-[3rem] transform -rotate-3 scale-105 -z-10"></div>
            
            <div className="bg-white rounded-[2.5rem] p-12 border border-slate-100 flex flex-col items-center justify-center text-center shadow-xl shadow-slate-200/50 relative z-10">
              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 rounded-full border-4 border-green-100 flex items-center justify-center opacity-50 transform rotate-12">
                  <span className="text-green-600 font-bold text-xs uppercase tracking-widest transform -rotate-12">Válido</span>
                </div>
              </div>
              
              <div className="w-full max-w-xs mx-auto mb-8">
                <div className="h-2 bg-slate-100 rounded-full w-3/4 mb-3 mx-auto"></div>
                <div className="h-2 bg-slate-100 rounded-full w-full mb-3"></div>
                <div className="h-2 bg-slate-100 rounded-full w-5/6 mx-auto"></div>
              </div>

              <div className="font-[Signature] text-6xl text-slate-800 mb-6 opacity-90 transform -rotate-2" style={{ fontFamily: "'Dancing Script', cursive" }}>
                João da Silva
              </div>
              <div className="w-full max-w-xs h-px bg-slate-200 mb-6"></div>
              <p className="font-bold text-slate-900 text-lg">João da Silva</p>
              <p className="text-xs text-slate-500 mb-8 font-bold tracking-widest">CONTRATANTE / NOIVO</p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-bold shadow-sm">
                <CheckCircle2 size={18} /> Assinado Digitalmente
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-8 uppercase tracking-widest">
              <CheckCircle2 size={14} /> FECHAMENTO IMEDIATO
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
              Mais resultados todo mês com fechamento sem atrito.
            </h2>
            <p className="text-slate-600 text-lg mb-10 font-medium leading-relaxed">
              Ao invés de mandar um documento no WhatsApp bagunçado, você envia nosso "Link de Fechamento". O cliente preenche os dados, escolhe como vai parcelar, assina o contrato e recebe o PIX da entrada direto no WhatsApp. Tudo automático.
            </p>
            
            <ul className="space-y-5">
              {[
                "Variáveis mágicas preenchem o modelo do contrato",
                "Você define em até quantas vezes o casal pode parcelar",
                "O cliente assina com o dedo e um PDF é gerado e salvo",
                "O primeiro PIX é gerado e mandado via WhatsApp na hora"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-700 font-semibold">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={16} className="text-blue-600" strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-32 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">O CRM do fotógrafo exigente.</h2>
              <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto">Um investimento que se paga com um único contrato fechado. Comece hoje com 14 dias grátis e cancele quando quiser.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch py-4">
            {/* Starter Plan */}
            <FadeIn delay={0.1} direction="up" className="h-full">
              <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <h3 className="text-xl font-extrabold mb-2 text-slate-900">STARTER</h3>
                <p className="text-slate-500 text-sm mb-8 font-medium min-h-[40px]">O essencial para organizar suas vendas e crescer.</p>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-sm font-bold text-slate-400">R$</span>
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight">97</span>
                  <span className="text-slate-500 font-medium">/mês</span>
                </div>
                
                <ul className="space-y-4 mb-10 text-sm font-medium text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" /> <span>14 dias de teste GRÁTIS</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" /> <span>Gestão Ilimitada de Clientes</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" /> <span>Propostas e Orçamentos</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" /> <span>Contratos com assinatura digital</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" /> <span>Gestão Financeira Básica</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" /> <span>Suporte por e-mail</span></li>
                  <li className="flex items-start gap-3 text-slate-400"><XCircle size={20} className="shrink-0 mt-0.5" /> <span>Integração WhatsApp</span></li>
                  <li className="flex items-start gap-3 text-slate-400"><XCircle size={20} className="shrink-0 mt-0.5" /> <span>Sincronização com Google</span></li>
                  <li className="flex items-start gap-3 text-slate-400"><XCircle size={20} className="shrink-0 mt-0.5" /> <span>Emissão de Boletos e Pix</span></li>
                </ul>
                
                <button className="w-full bg-slate-100 text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors mt-auto">
                  ASSINAR STARTER
                </button>
              </div>
            </FadeIn>

            {/* Plus Plan (Highlighted) */}
            <FadeIn delay={0.2} direction="up" className="h-full relative z-10">
              <div className="bg-white rounded-[2rem] p-8 border-2 border-orange-500 shadow-2xl shadow-orange-500/10 relative transform md:scale-105 flex flex-col h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                  Mais Escolhido
                </div>
                <h3 className="text-xl font-extrabold mb-2 text-orange-500 flex items-center gap-2">PLUS <Sparkles size={18} className="text-orange-400" /></h3>
                <p className="text-slate-500 text-sm mb-8 font-medium min-h-[40px]">Tudo do Starter + Automação total de comunicação e pagamentos.</p>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-sm font-bold text-slate-400">R$</span>
                  <span className="text-6xl font-extrabold text-slate-900 tracking-tight">147</span>
                  <span className="text-slate-500 font-medium">/mês</span>
                </div>
                
                <ul className="space-y-4 mb-10 text-sm font-semibold text-slate-800">
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-500 shrink-0 mt-0.5" /> <span>Tudo que está no plano Starter</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-500 shrink-0 mt-0.5" /> <span>Integração WhatsApp (API)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-500 shrink-0 mt-0.5" /> <span>Sincronização Google Calendar</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-500 shrink-0 mt-0.5" /> <span>Emissão de Boletos e Pix</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-500 shrink-0 mt-0.5" /> <span>Fluxo de Cadência Automático</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-500 shrink-0 mt-0.5" /> <span>Mapa de Calor nos Orçamentos</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-500 shrink-0 mt-0.5" /> <span>Suporte prioritário via WhatsApp</span></li>
                </ul>
                
                <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 mt-auto">
                  TESTAR PLUS GRÁTIS
                </button>
              </div>
            </FadeIn>

            {/* Founder Plan */}
            <FadeIn delay={0.3} direction="up" className="h-full">
              <div className="bg-slate-950 text-white rounded-[2rem] p-8 border border-slate-800 shadow-xl relative overflow-hidden group flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full blur-2xl group-hover:bg-orange-500/20 transition-colors"></div>
                <div className="absolute top-6 right-6 bg-slate-800/80 backdrop-blur-sm text-slate-300 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-slate-700">
                  VIP ANUAL
                </div>
                <h3 className="text-xl font-extrabold mb-2 text-white">FOUNDER</h3>
                <p className="text-slate-400 text-sm mb-8 font-medium min-h-[40px]">Desconto agressivo e benefícios vitalícios para os primeiros membros.</p>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-slate-500">R$</span>
                    <span className="text-5xl font-extrabold text-white tracking-tight">67</span>
                    <span className="text-slate-500 font-medium">/mês</span>
                  </div>
                  <p className="text-xs text-orange-400 mt-2 font-bold tracking-wider">PAGAMENTO ÚNICO DE R$ 804 / ANO</p>
                </div>
                
                <ul className="space-y-4 mb-10 text-sm font-medium text-slate-300">
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" /> <span>Tudo que está no plano Plus</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" /> <span>Mais de 50% de desconto no ano</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" /> <span>Desconto vitalício garantido</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" /> <span>Selo "Founder" no seu perfil</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" /> <span>Grupo exclusivo de networking</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" /> <span>Treinamento de onboarding VIP</span></li>
                </ul>
                
                <button className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors relative z-10 mt-auto">
                  ASSINAR FOUNDER
                </button>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4}>
            <p className="text-center text-xs text-slate-400 mt-16 uppercase tracking-widest font-bold flex items-center justify-center gap-2">
              <Check size={14} /> PAGAMENTO SEGURO VIA STRIPE - CANCELE A QUALQUER MOMENTO
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-4 max-w-5xl mx-auto">
        <FadeIn>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-500/20">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-400 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '5s' }}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
                A organização é o que separa<br className="hidden md:block" /> o amador do profissional.
              </h2>
              <p className="text-orange-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Leva exatamente 2 minutos para criar sua conta e transformar a gestão do seu negócio. Pare de vender no WhatsApp bagunçado hoje mesmo.
              </p>
              <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 mx-auto shadow-xl hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-1 active:translate-y-0">
                CRIAR MINHA CONTA AGORA <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-8">
              <img src={logoImg} alt="FramePro Logo" className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
            <p className="text-sm mb-8 leading-relaxed font-medium">
              O CRM definitivo para fotógrafos e filmmakers. Organize sua agenda, crie propostas irresistíveis e feche contratos digitalmente sem dor de cabeça.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Produto</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Propostas Interativas</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Assinatura Digital</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Planos e Preços</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Plataforma</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Fazer Login</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Criar Conta Grátis</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Tutoriais em Vídeo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium">
          <p>© 2024 FramePro CRM. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">
            Feito com <span className="text-red-500 animate-pulse">♥</span> para criativos
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;