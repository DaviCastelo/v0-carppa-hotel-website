import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { to, subject, name, email, phone, message, acceptNewsletter } = await request.json()

    // Validar dados obrigatórios
    if (!to || !subject || !name || !email || !message) {
      return NextResponse.json(
        { error: 'Dados obrigatórios não fornecidos' },
        { status: 400 }
      )
    }

    // Formatar a mensagem
    const emailBody = `
Nova mensagem de contato recebida através do site do Carppa Hotel:

Nome: ${name}
Email: ${email}
Telefone: ${phone || 'Não informado'}
Aceita newsletter: ${acceptNewsletter ? 'Sim' : 'Não'}

Mensagem:
${message}

---
Enviado em: ${new Date().toLocaleString('pt-BR')}
IP: ${request.ip || 'Não disponível'}
    `.trim()

    // Aqui você pode integrar com um serviço de email como:
    // - SendGrid
    // - Nodemailer com SMTP
    // - Resend
    // - EmailJS
    
    // Por enquanto, vamos simular o envio
    console.log('Email que seria enviado:', {
      to,
      subject,
      body: emailBody
    })

    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Em produção, substitua por uma integração real de email
    // Exemplo com Nodemailer:
    /*
    const nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: to,
      subject: subject,
      text: emailBody
    })
    */

    return NextResponse.json(
      { message: 'Email enviado com sucesso' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
