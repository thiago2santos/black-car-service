<?php
/**
 * The header for the C-Level Mobility theme.
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<?php wp_head(); ?>
	</head>
	<body <?php body_class( 'min-h-screen bg-slate-950 text-slate-50 antialiased' ); ?>>
		<header class="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
			<div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
				<div class="flex items-center gap-2">
					<span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-950 text-sm font-semibold">
						BC
					</span>
					<div class="leading-tight">
						<span class="block text-sm font-semibold" data-i18n="brand.name">
							C-Level Mobility
						</span>
						<span class="block text-xs text-slate-400" data-i18n="brand.tagline">
							Transporte executivo em Jundiaí
						</span>
					</div>
				</div>

				<nav aria-label="Navegação principal" class="hidden items-center gap-6 text-sm md:flex">
					<a href="#services" class="text-slate-300 hover:text-slate-50" data-i18n="nav.services">Serviços</a>
					<a href="#fleet" class="text-slate-300 hover:text-slate-50" data-i18n="nav.fleet">Frota</a>
					<a href="#business" class="text-slate-300 hover:text-slate-50" data-i18n="nav.business">Para empresas</a>
					<a href="#contact" class="text-slate-300 hover:text-slate-50" data-i18n="nav.contact">Contato</a>
				</nav>

				<div class="flex items-center gap-2 text-xs font-medium" aria-label="Seleção de idioma">
					<button type="button" class="rounded-full border border-slate-500 px-2 py-1 text-slate-50 hover:bg-slate-800" data-lang="pt">
						PT
					</button>
					<button type="button" class="rounded-full border border-slate-800 px-2 py-1 text-slate-400 hover:border-slate-500 hover:text-slate-50" data-lang="en">
						EN
					</button>
					<button type="button" class="rounded-full border border-slate-800 px-2 py-1 text-slate-400 hover:border-slate-500 hover:text-slate-50" data-lang="es">
						ES
					</button>
				</div>
			</div>
		</header>

