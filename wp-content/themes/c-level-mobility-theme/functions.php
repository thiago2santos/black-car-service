<?php

/**
 * C-Level Mobility Theme functions and definitions
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'clm_theme_setup' ) ) {
	/**
	 * Theme setup.
	 */
	function clm_theme_setup() {
		// Enable support for document title tag.
		add_theme_support( 'title-tag' );

		// Load theme textdomain for translations.
		load_theme_textdomain(
			'c-level-mobility-theme',
			get_template_directory() . '/languages'
		);
	}
}
add_action( 'after_setup_theme', 'clm_theme_setup' );

if ( ! function_exists( 'clm_theme_scripts' ) ) {
	/**
	 * Enqueue theme styles and scripts.
	 *
	 * CSS/JS específicos serão registrados nas próximas etapas da migração.
	 */
	function clm_theme_scripts() {
		// Placeholder para enfileirar CSS/JS do tema nas próximas etapas.
	}
}
add_action( 'wp_enqueue_scripts', 'clm_theme_scripts' );

