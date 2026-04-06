import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Voltar para a página inicial
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-slate-900">Termos de Uso</h1>
        
        <div className="prose prose-slate prose-orange max-w-none">
          <p className="text-slate-600 font-medium mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">1. Aceitação dos Termos</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Ao acessar e usar o FramePro ("Plataforma", "nós", "nosso"), você concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">2. Descrição do Serviço</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              O FramePro é um software de Gestão de Relacionamento com o Cliente (CRM) desenvolvido especificamente para fotógrafos e videomakers. A plataforma oferece ferramentas para gestão de leads, criação de propostas, assinatura de contratos digitais e automação de processos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">3. Contas de Usuário</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Você deve fornecer informações precisas e completas ao criar uma conta.</li>
              <li>Você é responsável por manter a confidencialidade de sua senha e conta.</li>
              <li>Você deve nos notificar imediatamente sobre qualquer uso não autorizado de sua conta.</li>
              <li>Contas registradas por "bots" ou outros métodos automatizados não são permitidas.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">4. Pagamentos e Assinaturas</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              O FramePro é um serviço pago, oferecido através de assinaturas mensais ou anuais. Os pagamentos são processados de forma segura. Você pode cancelar sua assinatura a qualquer momento, mas não oferecemos reembolsos para períodos de faturamento já iniciados, exceto quando exigido por lei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">5. Uso Aceitável</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Você concorda em não usar a plataforma para:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Qualquer finalidade ilegal ou não autorizada;</li>
              <li>Transmitir qualquer código de natureza destrutiva (vírus, worms, etc.);</li>
              <li>Violar leis em sua jurisdição (incluindo, mas não se limitando a, leis de direitos autorais e privacidade);</li>
              <li>Enviar spam ou mensagens não solicitadas através de nossas integrações (como WhatsApp).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">6. Propriedade Intelectual</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              O serviço e seu conteúdo original, recursos e funcionalidades são e continuarão sendo propriedade exclusiva do FramePro e de seus licenciadores. Nossos direitos autorais e marcas registradas não podem ser usados em conexão com qualquer produto ou serviço sem o consentimento prévio por escrito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">7. Limitação de Responsabilidade</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Em nenhuma circunstância o FramePro será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes do seu acesso ou uso ou incapacidade de acessar ou usar o serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-800">8. Modificações dos Termos</h2>
            <p className="text-slate-600 leading-relaxed">
              Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;