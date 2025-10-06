import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { nome, email, telefone, mensagem, aceitoNewsletter } = await request.json();

    // Validação básica dos campos obrigatórios
    if (!nome || !email || !telefone || !mensagem) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Obter IP do cliente
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'IP não disponível';

    // Data e hora atual
    const agora = new Date();
    const dataHora = agora.toLocaleString('pt-BR', {
      timeZone: 'America/Fortaleza',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Inicializar Resend
    const resend = new Resend(process.env.RESEND_API_KEY || 're_TkYNGbax_86kuKzpWxkvcWrWeCCEEUhxZ');

    // Envio do email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Carppa Hotel <onboarding@resend.dev>',
      to: ['comercial@carppahotel.com.br'],
      subject: `Nova mensagem de contato - ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #8B4513; border-bottom: 3px solid #8B4513; padding-bottom: 15px; margin-bottom: 25px;">
              Nova Mensagem de Contato - Carppa Hotel
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #8B4513;">
              <h3 style="color: #333; margin-top: 0; margin-bottom: 15px;">Informações do Cliente:</h3>
              <p style="margin: 8px 0; color: #555;"><strong>Nome:</strong> ${nome}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Telefone:</strong> ${telefone}</p>
              <p style="margin: 8px 0; color: #555;"><strong>Aceita newsletter:</strong> ${aceitoNewsletter ? 'Sim' : 'Não'}</p>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #333; margin-top: 0; margin-bottom: 15px;">Mensagem:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; white-space: pre-wrap; line-height: 1.6; color: #555;">
${mensagem}
              </div>
            </div>
            
            <div style="margin-top: 25px; padding: 15px; background-color: #e8f4f8; border-radius: 8px; border-left: 4px solid #17a2b8;">
              <p style="margin: 5px 0; color: #666; font-size: 14px;">
                <strong>Enviado em:</strong> ${dataHora}
              </p>
              <p style="margin: 5px 0; color: #666; font-size: 14px;">
                <strong>IP:</strong> ${clientIP}
              </p>
            </div>
            
            <div style="margin-top: 20px; text-align: center; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="margin: 0; color: #999; font-size: 12px;">
                Esta mensagem foi enviada através do formulário de contato do site Carppa Hotel.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Erro do Resend:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar email: ' + error.message },
        { status: 500 }
      );
    }

    console.log('Email enviado com sucesso:', data);
    return NextResponse.json(
      { message: 'Email enviado com sucesso!', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
