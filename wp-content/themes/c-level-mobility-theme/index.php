<?php
/**
 * Fallback template for the C-Level Mobility theme.
 */

get_header();
?>
<main class="mx-auto max-w-5xl px-4 py-12">
	<h1 class="text-2xl font-semibold mb-4">
		<?php esc_html_e( 'C-Level Mobility Theme', 'c-level-mobility-theme' ); ?>
	</h1>
	<p class="text-sm text-slate-300">
		<?php esc_html_e( 'Esta é a saída padrão do tema. A landing principal é renderizada em front-page.php.', 'c-level-mobility-theme' ); ?>
	</p>
</main>
<?php
get_footer();

