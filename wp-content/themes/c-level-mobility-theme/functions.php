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
		$theme = wp_get_theme();

		// Enable support for document title tag.
		add_theme_support( 'title-tag' );

		// Load theme textdomain for translations.
		load_theme_textdomain(
			'c-level-mobility-theme',
			get_template_directory() . '/languages'
		);

		// Make theme version available for cache busting.
		if ( ! defined( 'CLM_THEME_VERSION' ) ) {
			define( 'CLM_THEME_VERSION', $theme->get( 'Version' ) ?: '0.1.0' );
		}
	}
}
add_action( 'after_setup_theme', 'clm_theme_setup' );

if ( ! function_exists( 'clm_theme_scripts' ) ) {
	/**
	 * Enqueue theme styles and scripts.
	 */
	function clm_theme_scripts() {
		$theme_uri = get_template_directory_uri();
		$version   = defined( 'CLM_THEME_VERSION' ) ? CLM_THEME_VERSION : null;

		// Tailwind CSS compilado do tema.
		wp_enqueue_style(
			'c-level-mobility-style',
			$theme_uri . '/assets/build/style.css',
			array(),
			$version
		);

		// Scripts de comportamento da landing.
		wp_enqueue_script(
			'c-level-mobility-lang',
			$theme_uri . '/assets/js/lang.js',
			array(),
			$version,
			true
		);

		wp_localize_script(
			'c-level-mobility-lang',
			'clmTheme',
			array( 'localesUrl' => $theme_uri . '/locales/' )
		);

		wp_enqueue_script(
			'c-level-mobility-form-phone',
			$theme_uri . '/assets/js/form-phone.js',
			array(),
			$version,
			true
		);

		wp_enqueue_script(
			'c-level-mobility-destination-autocomplete',
			$theme_uri . '/assets/js/destination-autocomplete.js',
			array(),
			$version,
			true
		);

		wp_enqueue_script(
			'c-level-mobility-form-validation',
			$theme_uri . '/assets/js/form-validation.js',
			array(),
			$version,
			true
		);

		wp_enqueue_script(
			'c-level-mobility-feedback-banner',
			$theme_uri . '/assets/js/feedback-banner.js',
			array(),
			$version,
			true
		);
	}
}
add_action( 'wp_enqueue_scripts', 'clm_theme_scripts' );

