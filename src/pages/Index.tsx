import React from 'react';
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
  Linkedin
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex<think>**Constructing the Code**

I'm now fully immersed in coding. The fundamental React and Tailwind structure are set up, including essential components: navigation, hero, and bento grid sections. I'm focusing on text and exact styling, aiming for pixel-perfect reproduction. I'll utilize Lucide React icons. I will directly translate and implement the Portuguese text.


</think> items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">F</span>
          </div>
          <span className="font-bold text-xl tracking-tight">FramePro</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#como-funciona" className="hover:text-orange-500 transition-colors">Como Funciona</a>
          <a href="#propostas" className="hover:text-orange-500 transition-colors">Propostas</a>
          <a href="#planos" className="hover:text-orange-500 transition-colors">Planos</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block">Entrar</a>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
            Teste Grátis
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold mb-8 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          O CRM Nº1 PARA FOTÓGRAFOS DE CASAMENTO E EVENTOS
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Fotógrafo que cresce não<br className="hidden md:block" /> conta com a sorte. Conta com o<br className="hidden md:block" />
          <span className="text-orange-500"> FramePro.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Enquanto você tenta vender no WhatsApp bagunçado, o FramePro organiza, automatiza e faz você fechar mais contratos todo dia. A organização é o que separa o amador do profissional.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5">
            COMEÇAR 14 DIAS GRÁTIS <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors">
            Ver recursos
          </button>
        </div>
        
        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-16">
          SEM NECESSIDADE DE CARTÃO DE CRÉDITO
        </p>

        {/* Hero Image Mockup */}
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full bottom-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
            alt="Dashboard FramePro" 
            className="rounded-2xl shadow-2xl border border-slate-200 object-cover h-[400px] md:h-[600px] w-full"
          />
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="como-funciona" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Não é só um CRM. É o seu estúdio no piloto automático.</h2>
          <p className="text-slate-600 text-lg">Todas as conversas, tarefas e oportunidades em um só lugar, sem perder prazos, leads ou dinheiro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden group">
            <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mb-6">
              <Workflow size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Leads Organizados</h3>
            <p className="text-slate-600 max-w-md relative z-10">Saiba exatamente em que etapa cada cliente está no seu Pipeline Visual. Nunca mais perca dinheiro por esquecer de fazer um follow-up.</p>
            
            {/* Decorative element */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-yellow-100 rounded-tl-full opacity-50 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-6">
              <DollarSign size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Mais Resultados Todo Mês</h3>
            <p className="text-slate-400 text-sm">Chega de contar com a sorte. Controle parcelamentos, envie cobranças via PIX e tenha previsibilidade exata do seu caixa.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <PenTool size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Contratos Profissionais</h3>
            <p className="text-slate-600 text-sm">Profissionalize seu fechamento. O cliente assina com o dedo na tela do celular e você recebe o PDF com validade jurídica na hora.</p>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Processos Automatizados</h3>
              <p className="text-slate-600">Crie "Fluxos de Cadência" para enviar mensagens de follow-up, lembretes e cobranças automaticamente para o WhatsApp do cliente.</p>
            </div>
            <div className="flex-1 flex justify-center items-center gap-2 text-orange-400">
              {/* Abstract workflow graphic */}
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center"><Play size={20} className="text-orange-500"/></div>
              <div className="w-8 h-0.5 bg-orange-200"></div>
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center"><FileText size={20} className="text-orange-500"/></div>
              <div className="w-8 h-0.5 bg-orange-200"></div>
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center"><Check size={20} className="text-orange-500"/></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Feature Section */}
      <section id="propostas" className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-orange-400 text-xs font-semibold mb-6">
              <FileText size={14} /> Landing Pages de Vendas
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Apresentações que separam o amador do profissional.
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Abandone os PDFs frios e sem graça. Crie propostas ricas com galerias, vídeos e tabelas de preço interativas que fazem o cliente dizer "UAU!" antes mesmo de ver o preço.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-1">
                  <Eye size={20} className="text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Avisos de Leitura</h4>
                  <p className="text-slate-400 text-sm">Receba uma notificação no exato momento que o cliente abrir seu orçamento.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                  <Map size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Mapa de Calor (Heatmap)</h4>
                  <p className="text-slate-400 text-sm">Veja as gravações de tela do cliente para descobrir qual pacote chamou mais atenção.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-3xl blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Propostas Interativas" 
              className="rounded-3xl shadow-2xl border border-slate-700 relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Light Feature Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-slate-50 rounded-3xl p-12 border border-slate-100 flex flex-col items-center justify-center text-center shadow-inner">
            <div className="font-[Signature] text-6xl text-slate-800 mb-4 opacity-80" style={{ fontFamily: "'Dancing Script', cursive" }}>
              João da Silva
            </div>
            <div className="w-full h-px bg-slate-300 mb-4"></div>
            <p className="font-bold text-slate-900">João da Silva</p>
            <p className="text-xs text-slate-500 mb-6">CONTRATANTE / NOIVO</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              <CheckCircle2 size={16} /> Assinado Digitalmente
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6">
              <CheckCircle2 size={14} /> FECHAMENTO IMEDIATO
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Mais resultados todo mês com fechamento sem atrito.
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Ao invés de mandar um documento no WhatsApp bagunçado, você envia nosso "Link de Fechamento". O cliente preenche os dados, escolhe como vai parcelar, assina o contrato e recebe o PIX da entrada direto no WhatsApp. Tudo automático.
            </p>
            
            <ul className="space-y-4">
              {[
                "Variáveis mágicas preenchem o modelo do contrato",
                "Você define em até quantas vezes o casal pode parcelar",
                "O cliente assina com o dedo e um PDF é gerado e salvo",
                "O primeiro PIX é gerado e mandado via WhatsApp na hora"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-blue-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O CRM do fotógrafo exigente.</h2>
            <p className="text-slate-600 text-lg">Um investimento que se paga com um único contrato fechado. Comece hoje com 14 dias grátis.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Starter Plan */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-2">STARTER</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">O essencial para organizar suas vendas e crescer.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">R$ 97</span>
                <span className="text-slate-500">/mês</span>
              </div>
              
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> 14 dias de teste GRÁTIS</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> Gestão Ilimitada de Clientes (CRM)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> Propostas e Orçamentos</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> Contratos com assinatura digital</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> Gestão Financeira Básica</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500" /> Suporte por e-mail</li>
                <li className="flex items-center gap-3 text-slate-400"><XCircle size={18} /> Integração WhatsApp</li>
                <li className="flex items-center gap-3 text-slate-400"><XCircle size={18} /> Sincronização com Google</li>
                <li className="flex items-center gap-3 text-slate-400"><XCircle size={18} /> Emissão de Boletos e Pix</li>
                <li className="flex items-center gap-3 text-slate-400"><XCircle size={18} /> Fluxo de Cadência</li>
              </ul>
              
              <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                ASSINAR STARTER
              </button>
            </div>

            {/* Plus Plan (Highlighted) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-orange-500 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                Mais Escolhido
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-500 flex items-center gap-2">PLUS <span className="text-orange-500">★</span></h3>
              <p className="text-slate-500 text-sm mb-6 h-10">Tudo do Starter + Automação total de comunicação e pagamentos.</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold">R$ 147</span>
                <span className="text-slate-500">/mês</span>
              </div>
              
              <ul className="space-y-4 mb-8 text-sm font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Tudo que está no plano Starter, mais:</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Integração WhatsApp (Extensão API)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Sincronização Google Calendar</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Emissão de Boletos e Pix (Pagar.me)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Fluxo de Cadência Automático</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Mapa de Calor nos Orçamentos</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Suporte prioritário via WhatsApp</li>
              </ul>
              
              <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25">
                TESTAR PLUS GRÁTIS
              </button>
            </div>

            {/* Founder Plan */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-lg relative">
              <div className="absolute top-4 right-4 bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                VIP ANUAL
              </div>
              <h3 className="text-xl font-bold mb-2">FOUNDER</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">Desconto agressivo e benefícios vitalícios para os primeiros membros.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">R$ 67</span>
                <span className="text-slate-400">/mês</span>
                <p className="text-xs text-orange-400 mt-1 font-medium">PAGAMENTO ÚNICO DE R$ 804 / ANO</p>
              </div>
              
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-400" /> Tudo que está no plano Plus, mais:</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-400" /> Mais de 50% de desconto no ano</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-400" /> Desconto vitalício garantido na renovação</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-400" /> Selo "Founder" no seu perfil</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-400" /> Grupo exclusivo de networking</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-400" /> Treinamento de onboarding VIP (1h)</li>
              </ul>
              
              <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                ASSINAR FOUNDER
              </button>
            </div>
          </div>
          
          <p className="text-center text-xs text-slate-400 mt-12 uppercase tracking-widest font-medium">
            PAGAMENTO SEGURO VIA STRIPE - CANCELE A QUALQUER MOMENTO
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="bg-orange-500 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              A organização é o que separa<br className="hidden md:block" /> o amador do profissional.
            </h2>
            <p className="text-orange-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Leva exatamente 2 minutos para criar sua conta e transformar a gestão do seu negócio. Pare de vender no WhatsApp bagunçado hoje mesmo.
            </p>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 mx-auto shadow-xl hover:-translate-y-1">
              CRIAR MINHA CONTA AGORA <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-slate-800 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">F</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">FramePro</span>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              O CRM definitivo para fotógrafos e filmmakers. Organize sua agenda, crie propostas irresistíveis e feche contratos digitalmente sem dor de cabeça.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors"><Instagram size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors"><Linkedin size={16} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Produto</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Propostas Interativas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Assinatura Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Planos e Preços</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Plataforma</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Fazer Login</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Criar Conta Grátis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutoriais em Vídeo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2024 FramePro CRM. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-full">
            Feito com <span className="text-red-500">♥</span> para criativos
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;