import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Voltar para a página inicial
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-slate-900">Política de Privacidade</h1>
        
        <div className="prose prose-slate prose-orange max-w-none">
          <p className="text-slate-600 font-medium mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">1. Introdução</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Bem-vindo ao FramePro. Nós respeitamos a sua privacidade e estamos comprometidos em proteger os seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você visita nosso site e utiliza nosso software CRM.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">2. Coleta de Dados</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Coletamos informações que você nos fornece diretamente ao se registrar, como nome, e-mail, telefone e dados de pagamento. Também coletamos dados gerados pelo uso da plataforma, como informações de clientes que você insere no CRM, contratos gerados e histórico de interações.
            </p>
          </section>

          <section className="mb-8 p-6 bg-orange-50 border border-orange-100 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">3. Uso de Dados do Google Agenda (Google Calendar API)</h2>
            <p className="text-slate-700 mb-4 leading-relaxed font-medium">
              O FramePro oferece integração com o Google Agenda para facilitar a gestão dos seus compromissos e evitar conflitos de horários. O uso e a transferência de informações recebidas das APIs do Google para qualquer outro aplicativo seguirão a <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Política de Dados do Usuário dos Serviços de API do Google</a>, incluindo os requisitos de Uso Limitado (Limited Use).
            </p>
            <ul className="list-disc pl-5 space-y-3 text-slate-700">
              <li><strong>Quais dados acessamos:</strong> Solicitamos acesso apenas para ler e gravar eventos na sua agenda conectada. Acessamos títulos de eventos, datas, horários e participantes estritamente necessários para o funcionamento da integração.</li>
              <li><strong>Como usamos os dados:</strong> Utilizamos esses dados exclusivamente para exibir seus compromissos dentro do calendário do FramePro, permitir a criação de novos eventos a partir do CRM e verificar disponibilidade de horários para novos contratos.</li>
              <li><strong>Armazenamento:</strong> Armazenamos os tokens de acesso de forma criptografada e segura. Sincronizamos apenas os dados de eventos necessários para a exibição no CRM.</li>
              <li><strong>Compartilhamento:</strong> <strong>NUNCA</strong> compartilhamos, vendemos ou transferimos seus dados do Google Agenda para terceiros (incluindo anunciantes ou corretores de dados). Os dados não são utilizados para treinar modelos de inteligência artificial.</li>
              <li><strong>Revogação de Acesso:</strong> Você pode desconectar sua conta do Google a qualquer momento nas configurações do FramePro ou diretamente no painel de segurança da sua conta Google. Ao desconectar, excluiremos imediatamente seus tokens de acesso dos nossos servidores.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">4. Uso das Informações</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Fornecer, operar e manter nossa plataforma;</li>
              <li>Processar suas transações e enviar avisos relacionados;</li>
              <li>Enviar suporte técnico e atualizações administrativas;</li>
              <li>Responder a comentários, perguntas e fornecer atendimento ao cliente.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">5. Segurança dos Dados</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">6. Seus Direitos</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco através dos canais de suporte disponíveis na plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-800">7. Contato</h2>
            <p className="text-slate-600 leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: suporte@framepro.click
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;