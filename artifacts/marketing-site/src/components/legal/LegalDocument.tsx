import type { ReactNode } from 'react';
import { Link } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { policyLinks } from '@/lib/internal-links';

export const POLICY_VERSION = 'Version 1.0 · Effective 21 October 2026';

export function PolicyLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-primary underline-offset-2 hover:underline">
      {children}
    </Link>
  );
}

export function LegalTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200">
            {headers.map((header) => (
              <th key={header} className="py-2 pr-4 font-semibold text-secondary">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-slate-100">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-3 pr-4 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LegalDocument({
  title,
  description,
  path,
  children,
}: {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <Layout>
      <SEOHead title={`${title} | KlaraLearn`} description={description} path={path} />
      <div className="bg-slate-50 py-16 sm:py-24">
        <article className="container mx-auto max-w-3xl px-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">KlaraLearn legal</p>
            <h1 className="mb-3 text-4xl font-bold text-secondary">{title}</h1>
            <p className="mb-10 text-sm text-slate-500">{POLICY_VERSION}</p>
            <div className="space-y-8 text-slate-700 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-secondary [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-secondary [&_p]:leading-7 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6">
              {children}
              <section>
                <h2>Other KlaraLearn policies</h2>
                <ul>
                  {policyLinks.filter((link) => link.href !== path).map((link) => (
                    <li key={link.href}>
                      <PolicyLink href={link.href}>{link.label}</PolicyLink>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
