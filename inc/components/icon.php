<?php

function tlh_get_icon( $name, $class = null, $title = null ) {
	$icon_file = get_stylesheet_directory() . '/public/images/icons/' . $name . '.svg';

	if ( ! file_exists( $icon_file ) ) {
		$icon_file = get_stylesheet_directory() . '/public/images/icons/unknown.svg';
	}

	$output  = '<span class="icon' . ( $class ? ' ' . $class : '' ) . '"' . ( $title ? ' title="' . $title . '"' : ' aria-hidden="true"' ) . '>';
	$output .= file_get_contents( $icon_file );
	$output .= '</span>';

	return $output;
}

function tlh_icon( $name, $class = null, $title = null ) {
	echo tlh_get_icon( $name, $class, $title );
}


