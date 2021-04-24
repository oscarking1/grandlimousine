import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
export default function Custom404() {
	let meta = {
		title: "Page not found - Grand Limousine",
		description: "Page not found - Grand Limousine",
		keywords: "Page not found - Grand Limousine"
	}
	return (
		
		<main className="page-wraper">
			 <Head>
				<title>{meta && meta.title}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta name="description" content={meta && meta.description} />
				<meta name="keywords" content={meta && meta.keywords} />
			</Head>
			<section className="error-404 not-found">
				<div className="not_found_inner">

					<div className="cont">
						<div className="logo">
							<Link href={"/"} rel="noopener noreferrer">
								<img src="/images/logo-grand-black.png" alt="Logo Grand Limousine" />
							</Link>
						</div>
						<header className="page-header">
							<h1 className="page-title">4<span>0</span>4</h1>
							<h3>Oops!</h3>
							<p>The Page you are looking for does not exist</p>
						</header>
						<div className=" b-trans">
							<Link href={"/"} rel="noopener noreferrer"> Return to Home </Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}