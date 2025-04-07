"use server";

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import WelcomeEmail from '../../../emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function GET(request: Request) {

    const name = 'sam';
    const {email} = await request.json();
    await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Welcome',
    react: WelcomeEmail({name})
    });

    return NextResponse.json({
        status : "Ok"
    })

}
