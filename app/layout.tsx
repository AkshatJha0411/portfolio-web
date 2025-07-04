import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akshat Jha - Software Engineer & AI/ML Enthusiast',
  description: 'Professional portfolio of Akshat Jha, Software Engineer and AI/ML Enthusiast at IIT Mandi. Specializing in full-stack development, machine learning, and automation.',
  keywords: ['Akshat Jha', 'Software Engineer', 'AI/ML', 'Full Stack Developer', 'IIT Mandi', 'Machine Learning', 'React', 'Python'],
  authors: [{ name: 'Akshat Jha' }],
  openGraph: {
    title: 'Akshat Jha - Software Engineer & AI/ML Enthusiast',
    description: 'Professional portfolio showcasing innovative software solutions and AI/ML projects',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshat Jha - Software Engineer & AI/ML Enthusiast',
    description: 'Professional portfolio showcasing innovative software solutions and AI/ML projects',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}