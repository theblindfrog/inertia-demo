import React from 'react'
import { Link, Head } from '@inertiajs/inertia-react'

export default function Layout({ children }) {
    return (
        <main className="max-w-lg mx-auto bg-gray-50 mt-8">
            <Head>
                <title>Inertia Demo</title>
            </Head>
            <header className="space-x-4 mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Home
                </Link>
                <Link
                    href="/contact-us"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Contact
                </Link>
            </header>
            <article className="bg-white shadow-lg border border-gray-100 p-8 rounded-lg">{children}</article>
        </main>
    );
}